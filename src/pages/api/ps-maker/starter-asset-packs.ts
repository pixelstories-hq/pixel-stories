import type { APIRoute } from "astro";

export interface AssetPack {
  name: string;
  author: string;
  thumbnail: string;
  packFile: string;
}

export interface StarterAssetPacksResponse {
  assetPacks: AssetPack[];
}

const starterAssetPacks: AssetPack[] = [
  {
    name: "Mushroom Village",
    author: "NettySvit",
    thumbnail:
      "https://cdn.pixelstories.io/ps-maker-asset-packs/thumbnails/0_MushroomVillage_cover1.png",
    packFile:
      "https://cdn.pixelstories.io/ps-maker-asset-packs/packs/mushroom-village.pspack",
  },
  {
    name: "16x16 Assets by George_",
    author: "George_",
    thumbnail:
      "https://cdn.pixelstories.io/ps-maker-asset-packs/thumbnails/0_MushroomVillage_cover1.png",
    packFile:
      "https://cdn.pixelstories.io/ps-maker-asset-packs/packs/16x16-game-assets-by-george_.pspack",
  },
  {
    name: "TopDown Zelda Like Pro Version",
    author: "Ritpop",
    thumbnail:
      "https://cdn.pixelstories.io/ps-maker-asset-packs/thumbnails/0_MushroomVillage_cover1.png",
    packFile:
      "https://cdn.pixelstories.io/ps-maker-asset-packs/packs/topdown-zelda-like-pro-version.pspack",
  },
  {
    name: "Calciumtrice Pack",
    author: "Calciumtrice",
    thumbnail:
      "https://cdn.pixelstories.io/ps-maker-asset-packs/thumbnails/0_MushroomVillage_cover1.png",
    packFile:
      "https://cdn.pixelstories.io/ps-maker-asset-packs/packs/calciumtrice.pspack",
  },
];

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "86400",
};

export const OPTIONS: APIRoute = async () =>
  new Response(null, {
    status: 204,
    headers: CORS_HEADERS,
  });

export const GET: APIRoute = async () => {
  const response: StarterAssetPacksResponse = {
    assetPacks: starterAssetPacks,
  };

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=300, s-maxage=3600",
      ...CORS_HEADERS,
    },
  });
};
