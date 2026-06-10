import type { APIContext } from "astro";
import { getCached, setCached } from "./github-cache";

const REPO = "pixelstories-hq/ps-maker-app";
const RELEASES_CACHE_KEY = "ps-maker-updater:releases";
const RELEASE_CACHE_KEY = "ps-maker-updater:latest-direct-release";
const RELEASES_TTL = 5 * 60 * 1000;
const RELEASE_TTL = 2 * 60 * 1000;

const METADATA_FILES = new Set([
  "latest.yml",
  "latest-mac.yml",
  "latest-linux.yml",
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

  const assetName = normalizeAssetName(assetPath);
  if (!assetName) return plain("Not found", 404);

  try {
    const release = await getLatestDirectRelease();
    if (!release) return plain("No published full direct release found", 404);

    const asset = findAllowedAsset(release, assetName);
    if (!asset) return plain("Not found", 404);

    const method = context.request.method === "HEAD" ? "HEAD" : "GET";
    return proxyGitHubAsset(asset, context.request, method);
  } catch {
    return plain("Failed to fetch updater asset", 502);
  }
}

function validateUpdateToken(request: Request): Response | undefined {
  const expectedToken = import.meta.env.PS_UPDATE_TOKEN;
  if (!expectedToken) return undefined;

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

  if (
    decoded.includes("/") ||
    decoded.includes("\\") ||
    decoded.includes("..")
  ) {
    return undefined;
  }

  return decoded;
}

async function getLatestDirectRelease(): Promise<GitHubRelease | undefined> {
  const cachedRelease = getCached<GitHubRelease>(RELEASE_CACHE_KEY);
  if (cachedRelease) return cachedRelease;

  const releases = await getPublishedReleases();
  const release = releases
    .filter((r) => !r.draft && !r.prerelease)
    .filter((r) => !isDemoOrSteamName(r.name) && !isDemoOrSteamName(r.tag_name))
    .filter(isFullDirectRelease)
    .sort(comparePublishedDesc)[0];

  if (release) setCached(RELEASE_CACHE_KEY, release, RELEASE_TTL);
  return release;
}

async function getPublishedReleases(): Promise<GitHubRelease[]> {
  const cachedReleases = getCached<GitHubRelease[]>(RELEASES_CACHE_KEY);
  if (cachedReleases) return cachedReleases;

  const res = await fetch(
    `https://api.github.com/repos/${REPO}/releases?per_page=30`,
    {
      headers: githubHeaders("application/vnd.github+json"),
    },
  );

  if (!res.ok) return [];

  const releases = (await res.json()) as GitHubRelease[];
  setCached(RELEASES_CACHE_KEY, releases, RELEASES_TTL);
  return releases;
}

function isFullDirectRelease(release: GitHubRelease): boolean {
  const hasMetadata = release.assets.some((asset) =>
    METADATA_FILES.has(asset.name),
  );
  const hasDirectArtifact = release.assets.some((asset) =>
    isAllowedArtifactName(asset.name),
  );

  return hasMetadata && hasDirectArtifact;
}

function findAllowedAsset(
  release: GitHubRelease,
  assetName: string,
): GitHubAsset | undefined {
  if (METADATA_FILES.has(assetName)) {
    return release.assets.find((asset) => asset.name === assetName);
  }

  if (!isAllowedArtifactName(assetName)) return undefined;

  return release.assets.find((asset) => asset.name === assetName);
}

function isAllowedArtifactName(name: string): boolean {
  if (!name.startsWith("PS.Maker_")) return false;
  if (isDemoOrSteamName(name)) return false;

  return /\.(exe|dmg|zip|blockmap|AppImage)$/i.test(name);
}

function isDemoOrSteamName(name?: string | null): boolean {
  return Boolean(
    name && /(^|[^a-z0-9])(demo|steam)([^a-z0-9]|$)/i.test(name),
  );
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

function githubAssetHeaders(request: Request): Headers {
  const headers = githubHeaders("application/octet-stream");
  const range = request.headers.get("Range");
  const ifNoneMatch = request.headers.get("If-None-Match");
  const ifModifiedSince = request.headers.get("If-Modified-Since");

  if (range) headers.set("Range", range);
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
    "Cache-Control": METADATA_FILES.has(assetName)
      ? "no-cache"
      : "public, max-age=300",
    "CDN-Cache-Control": "public, max-age=300",
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
