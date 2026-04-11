import type { APIRoute } from "astro";

export interface AssetPack {
  name: string;
  author: string;
  thumbnail: string;
  packFile: string;
}

export interface StarterAssetPacksResponse {
  starterAssets: AssetPack[];
}

const starterAssetsPacks: AssetPack[] = [
  {
    name: "Mushroom Village",
    author: "NettySvit",
    thumbnail:
      "https://cdn.pixelstories.io/ps-maker-asset-packs/thumbnails/0_MushroomVillage_cover1.png",
    packFile:
      "https://cdn.pixelstories.io/ps-maker-asset-packs/packs/mushroom-village.pspack",
  },
];

export const GET: APIRoute = async () => {
  const response: StarterAssetPacksResponse = {
    starterAssets: starterAssetsPacks,
  };

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
