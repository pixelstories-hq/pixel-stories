import type { APIRoute } from "astro";
import { getCached, setCached } from "../../../lib/github-cache";

const REPO = "pixelstories-hq/ps-maker-app";

interface GitHubAsset {
  id: number;
  name: string;
  url: string;
}

interface GitHubRelease {
  assets: GitHubAsset[];
}

export const GET: APIRoute = async ({ request }) => {
  try {
    const updateToken = request.headers.get("X-PS-Update-Token");
    if (!updateToken || updateToken !== import.meta.env.PS_UPDATE_TOKEN) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    const token = import.meta.env.GITHUB_TOKEN;

    const cachedManifest = getCached<unknown>("manifest:latest");
    if (cachedManifest) {
      return new Response(JSON.stringify(cachedManifest), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
          "CDN-Cache-Control": "public, max-age=300",
        },
      });
    }

    let release = getCached<GitHubRelease>("latest");
    if (!release) {
      const res = await fetch(
        `https://api.github.com/repos/${REPO}/releases/latest`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github+json",
          },
        },
      );
      if (!res.ok) {
        return new Response(JSON.stringify({ error: "Release not found" }), {
          status: 404,
          headers: { "Content-Type": "application/json" },
        });
      }
      release = (await res.json()) as GitHubRelease;
      setCached("latest", release);
    }

    const latestJsonAsset = release.assets.find(
      (a) => a.name === "latest.json",
    );
    if (!latestJsonAsset) {
      return new Response(
        JSON.stringify({ error: "latest.json asset not found" }),
        { status: 404, headers: { "Content-Type": "application/json" } },
      );
    }

    const assetRes = await fetch(latestJsonAsset.url, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/octet-stream",
      },
    });
    if (!assetRes.ok) {
      return new Response(
        JSON.stringify({ error: "Failed to fetch latest.json" }),
        { status: 502, headers: { "Content-Type": "application/json" } },
      );
    }

    const manifest = await assetRes.json();

    if (manifest.platforms && typeof manifest.platforms === "object") {
      for (const platform of Object.values(manifest.platforms) as Array<{
        url?: string;
      }>) {
        if (platform.url) {
          const platformRes = await fetch(platform.url, {
            headers: { Authorization: `Bearer ${token}` },
            redirect: "manual",
          });
          const signedUrl = platformRes.headers.get("Location");
          if (signedUrl) platform.url = signedUrl;
        }
      }
    }

    setCached("manifest:latest", manifest, 2 * 60 * 1000);

    return new Response(JSON.stringify(manifest), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
        "CDN-Cache-Control": "public, max-age=300",
      },
    });
  } catch {
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
