import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const DEFAULT_ITEMS = 5;
const MAX_ITEMS = 50;

function parseItemsParam(url: URL): number {
  const rawItems = url.searchParams.get("items") ?? url.searchParams.get("limit");

  if (!rawItems) return DEFAULT_ITEMS;

  const parsed = Number.parseInt(rawItems, 10);
  if (Number.isNaN(parsed) || parsed < 1) return DEFAULT_ITEMS;

  return Math.min(parsed, MAX_ITEMS);
}

export const GET: APIRoute = async ({ url }) => {
  const itemCount = parseItemsParam(url);
  const posts = await getCollection("blog");

  const entries = posts
    .sort(
      (a, b) =>
        new Date(b.data.date ?? "1970-01-01").getTime() -
        new Date(a.data.date ?? "1970-01-01").getTime(),
    )
    .slice(0, itemCount)
    .map((post) => ({
      id: post.id,
      title: post.data.title,
      date: post.data.date ? new Date(post.data.date).toISOString() : null,
      excerpt: post.data.excerpt ?? null,
      tags: post.data.tags ?? [],
      featured: post.data.featured ?? false,
      url: `/blog/${post.id}`,
    }));

  return new Response(
    JSON.stringify({
      requested: itemCount,
      count: entries.length,
      entries,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
        "Access-Control-Allow-Origin": "*",
      },
    },
  );
};
