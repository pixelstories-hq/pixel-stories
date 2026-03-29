import type { APIRoute } from "astro";
import { getCached, setCached } from "../../../../../lib/github-cache";

const REPO = "pixelstories-hq/ps-maker-app";

interface GitHubAsset {
  id: number;
  name: string;
  url: string;
}

interface GitHubRelease {
  assets: GitHubAsset[];
}

export const GET: APIRoute = async ({ params }) => {
  try {
    const token = import.meta.env.GITHUB_TOKEN;
    const parts = (params.path ?? "").split("/");
    const tag = parts[0];
    const filename = parts.slice(1).join("/");

    if (!tag || !filename) {
      return new Response(JSON.stringify({ error: "Invalid path" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    const cacheKey = `tag:${tag}`;
    let release = getCached<GitHubRelease>(cacheKey);
    if (!release) {
      const res = await fetch(
        `https://api.github.com/repos/${REPO}/releases/tags/${tag}`,
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
      setCached(cacheKey, release);
    }

    const asset = release.assets.find((a) => a.name === filename);
    if (!asset) {
      return new Response(JSON.stringify({ error: "Asset not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Fetch the asset to capture GitHub's signed CDN redirect — never cache the signed URL
    const assetRes = await fetch(asset.url, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/octet-stream",
      },
      redirect: "manual",
    });

    const signedUrl = assetRes.headers.get("Location");

    if (!signedUrl) {
      return new Response(
        JSON.stringify({ error: "Failed to resolve download URL" }),
        { status: 502, headers: { "Content-Type": "application/json" } },
      );
    }

    return new Response(null, {
      status: 302,
      headers: {
        Location: signedUrl,
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
