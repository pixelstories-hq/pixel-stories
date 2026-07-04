import type { APIContext } from "astro";
import { getCached, setCached } from "./github-cache";

const REPO = "pixelstories-hq/ps-maker-app";
const RELEASES_CACHE_KEY = "ps-maker-updater:releases";
const RELEASES_TTL = 5 * 60 * 1000;
const DEFAULT_METADATA_FILE = "latest.yml";
const BLOCKMAP_EXTENSION = ".blockmap";
const ALLOWED_ARTIFACT_EXTENSIONS = [
  ".exe",
  ".dmg",
  ".zip",
  ".AppImage",
  ".deb",
];

const FULL_METADATA_FILES = new Set([
  "latest.yml",
  "latest-mac.yml",
  "latest-linux.yml",
]);
const DEMO_METADATA_FILES = new Set([
  "latest-demo.yml",
  "latest-demo-mac.yml",
  "latest-demo-linux.yml",
]);

interface GitHubAsset {
  id: number;
  name: string;
  url: string;
  browser_download_url?: string;
  content_type?: string;
  size?: number;
}

interface GitHubRelease {
  id: number;
  name?: string | null;
  tag_name: string;
  draft: boolean;
  prerelease: boolean;
  published_at?: string | null;
  assets: GitHubAsset[];
}

type UpdaterRequestMethod = "GET" | "HEAD";

export async function handlePsMakerUpdaterRequest(
  context: APIContext,
  assetPath?: string,
): Promise<Response> {
  const authResponse = validateUpdateToken(context.request);
  if (authResponse) return authResponse;

  const assetName =
    assetPath === undefined
      ? DEFAULT_METADATA_FILE
      : normalizeAssetName(assetPath);
  if (!assetName) return plain("Not found", 404);
  if (!isAllowedAssetName(assetName)) return plain("Not found", 404);

  try {
    const release = await getLatestDirectReleaseWithAsset(assetName);
    if (!release) return plain("No published direct release found", 404);

    const asset = release.assets.find((asset) => asset.name === assetName);
    if (!asset) return plain("Not found", 404);

    const method = context.request.method === "HEAD" ? "HEAD" : "GET";
    if (isMetadataFileName(assetName)) {
      return proxyGitHubMetadata(asset, release, context.request, method);
    }

    return proxyGitHubAsset(asset, context.request, method);
  } catch {
    return plain("Failed to fetch updater asset", 502);
  }
}

function validateUpdateToken(request: Request): Response | undefined {
  const expectedToken = import.meta.env.PS_UPDATE_TOKEN;
  if (!expectedToken) {
    if (import.meta.env.PUBLIC_UPDATER === "true") return undefined;
    return plain("Update token is not configured", 500);
  }

  const updateToken = request.headers.get("X-PS-Update-Token");
  if (!updateToken) return plain("Missing update token", 401);
  if (updateToken !== expectedToken) return plain("Invalid update token", 403);

  return undefined;
}

function normalizeAssetName(assetPath?: string): string | undefined {
  if (!assetPath) return undefined;

  let decoded: string;
  try {
    decoded = decodeURIComponent(assetPath);
  } catch {
    return undefined;
  }

  if (decoded.includes("\\") || decoded.startsWith("/")) {
    return undefined;
  }

  const segments = decoded.split("/");
  if (
    segments.some(
      (segment) => !segment || segment === "." || segment === "..",
    )
  ) {
    return undefined;
  }

  return segments.at(-1);
}

async function getLatestDirectReleaseWithAsset(
  assetName: string,
): Promise<GitHubRelease | undefined> {
  const releases = await getPublishedReleases();
  return releases
    .filter((r) => !r.draft && !r.prerelease)
    .filter((r) => !isSteamName(r.name) && !isSteamName(r.tag_name))
    .filter((r) => r.assets.some((asset) => asset.name === assetName))
    .sort(comparePublishedDesc)[0];
}

async function getPublishedReleases(): Promise<GitHubRelease[]> {
  const cachedReleases = getCached<GitHubRelease[]>(RELEASES_CACHE_KEY);
  if (cachedReleases) return cachedReleases;

  const res = await fetch(
    `https://api.github.com/repos/${REPO}/releases?per_page=100`,
    {
      headers: githubHeaders("application/vnd.github+json"),
    },
  );

  if (!res.ok) {
    throw new Error(`GitHub releases request failed with status ${res.status}`);
  }

  const releases = (await res.json()) as GitHubRelease[];
  setCached(RELEASES_CACHE_KEY, releases, RELEASES_TTL);
  return releases;
}

function isAllowedAssetName(name: string): boolean {
  return isMetadataFileName(name) || isAllowedArtifactName(name);
}

function isAllowedArtifactName(name: string): boolean {
  if (isSteamName(name)) return false;

  const artifactName = name.toLowerCase().endsWith(BLOCKMAP_EXTENSION)
    ? name.slice(0, -BLOCKMAP_EXTENSION.length)
    : name;

  if (!isPsMakerArtifactName(artifactName)) return false;
  return hasAllowedArtifactExtension(artifactName);
}

function isPsMakerArtifactName(name: string): boolean {
  return /^PS[ ._-]?Maker(?:[ ._-]?Demo)?[ ._-]/i.test(name);
}

function hasAllowedArtifactExtension(name: string): boolean {
  return ALLOWED_ARTIFACT_EXTENSIONS.some((extension) =>
    name.toLowerCase().endsWith(extension.toLowerCase()),
  );
}

function isMetadataFileName(name: string): boolean {
  return FULL_METADATA_FILES.has(name) || isDemoMetadataFileName(name);
}

function isDemoMetadataFileName(name: string): boolean {
  return DEMO_METADATA_FILES.has(name);
}

function isSteamName(name?: string | null): boolean {
  return Boolean(name && /(^|[^a-z0-9])steam([^a-z0-9]|$)/i.test(name));
}

function comparePublishedDesc(a: GitHubRelease, b: GitHubRelease): number {
  const aTime = a.published_at ? Date.parse(a.published_at) : 0;
  const bTime = b.published_at ? Date.parse(b.published_at) : 0;
  return bTime - aTime;
}

async function proxyGitHubAsset(
  asset: GitHubAsset,
  request: Request,
  method: UpdaterRequestMethod,
): Promise<Response> {
  const upstreamMethod =
    method === "HEAD" && request.headers.has("Range") ? "GET" : method;

  const upstream = await fetch(asset.url, {
    method: upstreamMethod,
    headers: githubAssetHeaders(request),
  });

  if (!upstream.ok && upstream.status !== 304) {
    if (upstream.status === 404) return plain("Not found", 404);
    return plain("Failed to fetch upstream asset", 502);
  }

  const headers = proxiedHeaders(upstream.headers, asset.name, asset.size);
  return new Response(method === "HEAD" ? null : upstream.body, {
    status: upstream.status,
    statusText: upstream.statusText,
    headers,
  });
}

async function proxyGitHubMetadata(
  asset: GitHubAsset,
  release: GitHubRelease,
  request: Request,
  method: UpdaterRequestMethod,
): Promise<Response> {
  const upstreamMethod = method === "HEAD" ? "GET" : method;
  const upstream = await fetch(asset.url, {
    method: upstreamMethod,
    headers: githubAssetHeaders(request, { includeRange: false }),
  });

  if (!upstream.ok && upstream.status !== 304) {
    if (upstream.status === 404) return plain("Not found", 404);
    return plain("Failed to fetch upstream asset", 502);
  }

  const headers = proxiedHeaders(upstream.headers, asset.name, asset.size);
  if (upstream.status === 304) {
    return new Response(null, {
      status: upstream.status,
      statusText: upstream.statusText,
      headers,
    });
  }

  const metadata = await upstream.text();
  const rewrittenMetadata = rewriteMetadataAssetUrls(
    metadata,
    release,
    request,
  );
  headers.set(
    "Content-Length",
    String(new TextEncoder().encode(rewrittenMetadata).length),
  );

  return new Response(method === "HEAD" ? null : rewrittenMetadata, {
    status: upstream.status,
    statusText: upstream.statusText,
    headers,
  });
}

function rewriteMetadataAssetUrls(
  metadata: string,
  release: GitHubRelease,
  request: Request,
): string {
  const replacements = new Map<string, string>();
  for (const asset of release.assets) {
    if (!isAllowedArtifactName(asset.name)) continue;

    const updaterUrl = new URL(request.url);
    updaterUrl.pathname = `/api/ps-maker/updater/${asset.name
      .split("/")
      .map(encodeURIComponent)
      .join("/")}`;
    updaterUrl.search = "";

    for (const value of metadataAssetUrlVariants(asset)) {
      replacements.set(value, updaterUrl.toString());
    }
  }

  return metadata.replace(
    /^(\s*(?:path|url):\s*)(?:"([^"]+)"|'([^']+)'|([^\r\n#]+?))(\s*(?:#.*)?)$/gm,
    (line, prefix, doubleQuoted, singleQuoted, plainValue, suffix) => {
      const value = (doubleQuoted ?? singleQuoted ?? plainValue).trim();
      const replacement = replacements.get(value);
      if (!replacement) return line;

      if (doubleQuoted !== undefined) {
        return `${prefix}"${replacement}"${suffix}`;
      }
      if (singleQuoted !== undefined) {
        return `${prefix}'${replacement}'${suffix}`;
      }
      return `${prefix}${replacement}${suffix}`;
    },
  );
}

function metadataAssetUrlVariants(asset: GitHubAsset): string[] {
  const encodedName = asset.name
    .split("/")
    .map(encodeURIComponent)
    .join("/");
  const values = new Set([
    asset.name,
    encodedName,
    `./${asset.name}`,
    `./${encodedName}`,
  ]);

  if (asset.browser_download_url) values.add(asset.browser_download_url);

  return [...values];
}

function githubAssetHeaders(
  request: Request,
  { includeRange = true }: { includeRange?: boolean } = {},
): Headers {
  const headers = githubHeaders("application/octet-stream");
  const range = request.headers.get("Range");
  const ifNoneMatch = request.headers.get("If-None-Match");
  const ifModifiedSince = request.headers.get("If-Modified-Since");

  if (includeRange && range) headers.set("Range", range);
  if (ifNoneMatch) headers.set("If-None-Match", ifNoneMatch);
  if (ifModifiedSince) headers.set("If-Modified-Since", ifModifiedSince);

  return headers;
}

function githubHeaders(accept: string): Headers {
  const headers = new Headers({
    Accept: accept,
    "X-GitHub-Api-Version": "2022-11-28",
  });

  const token = import.meta.env.GITHUB_TOKEN;
  if (token) headers.set("Authorization", `Bearer ${token}`);

  return headers;
}

function proxiedHeaders(
  upstreamHeaders: Headers,
  assetName: string,
  assetSize?: number,
): Headers {
  const headers = new Headers({
    "Content-Type": contentTypeFor(assetName),
    "Cache-Control": "private, no-store",
    "CDN-Cache-Control": "no-store",
    "Vary": "X-PS-Update-Token",
  });

  for (const name of [
    "Accept-Ranges",
    "Content-Length",
    "Content-Range",
    "ETag",
    "Last-Modified",
  ]) {
    const value = upstreamHeaders.get(name);
    if (value) headers.set(name, value);
  }

  if (!headers.has("Accept-Ranges")) headers.set("Accept-Ranges", "bytes");
  if (assetSize && !headers.has("Content-Length")) {
    headers.set("Content-Length", String(assetSize));
  }

  return headers;
}

function contentTypeFor(assetName: string): string {
  if (assetName.endsWith(".yml")) return "text/yaml; charset=utf-8";
  if (assetName.endsWith(".zip")) return "application/zip";
  return "application/octet-stream";
}

function plain(message: string, status: number): Response {
  return new Response(message, {
    status,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
