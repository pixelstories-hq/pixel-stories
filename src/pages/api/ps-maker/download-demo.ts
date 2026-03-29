import type { APIRoute } from "astro";

const DEMO_LINKS = {
  linux:
    "https://github.com/pixelstories-hq/ps-maker-app/releases/download/v0.21.6-demo/PS.Maker.Demo_0.21.6_amd64.deb",
  mac: "https://github.com/pixelstories-hq/ps-maker-app/releases/download/v0.21.6-demo/PS.Maker.Demo_0.21.6_universal.dmg",
  windows:
    "https://github.com/pixelstories-hq/ps-maker-app/releases/download/v0.21.6-demo/PS.Maker.Demo_0.21.6_x64-setup.exe",
} as const;

type Platform = keyof typeof DEMO_LINKS;

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const platform = url.searchParams.get("platform") as Platform | null;

    if (!platform || !(platform in DEMO_LINKS)) {
      return new Response(
        JSON.stringify({ error: "Invalid or missing platform. Use: mac, linux, windows" }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    const token = import.meta.env.GITHUB_TOKEN;
    const assetUrl = DEMO_LINKS[platform];

    const res = await fetch(assetUrl, {
      headers: { Authorization: `Bearer ${token}` },
      redirect: "manual",
    });

    const signedUrl = res.headers.get("Location");
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
