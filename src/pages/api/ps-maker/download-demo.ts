import type { APIRoute } from "astro";

const REPO = "pixelstories-hq/ps-maker-app";
const DEMO_TAG = "v0.22.2-demo";

const DEMO_FILENAMES = {
  linux: "PS.Maker.Demo_0.22.2_amd64.deb",
  mac: "PS.Maker.Demo_0.22.2_universal.dmg",
  windows: "PS.Maker.Demo_0.22.2_x64-setup.exe",
} as const;

type Platform = keyof typeof DEMO_FILENAMES;

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const platform = url.searchParams.get("platform") as Platform | null;

    if (!platform || !(platform in DEMO_FILENAMES)) {
      return new Response(
        JSON.stringify({
          error: "Invalid or missing platform. Use: mac, linux, windows",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    const token = import.meta.env.GITHUB_TOKEN;
    const filename = DEMO_FILENAMES[platform];

    const releaseRes = await fetch(
      `https://api.github.com/repos/${REPO}/releases/tags/${DEMO_TAG}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github+json",
        },
      },
    );
    if (!releaseRes.ok) {
      return new Response(JSON.stringify({ error: "Demo release not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    const release = await releaseRes.json();
    const asset = release.assets.find(
      (a: { name: string }) => a.name === filename,
    );
    if (!asset) {
      return new Response(
        JSON.stringify({ error: "Asset not found for platform" }),
        { status: 404, headers: { "Content-Type": "application/json" } },
      );
    }

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
      headers: { Location: signedUrl },
    });
  } catch {
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
