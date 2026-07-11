import { defineCollection, z, type SchemaContext } from "astro:content";
import { docsLoader, i18nLoader } from "@astrojs/starlight/loaders";
import { docsSchema, i18nSchema } from "@astrojs/starlight/schema";
import { blogSchema } from "./blogSchema";
import { glob } from "astro/loaders";

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema(),
  }),
  i18n: defineCollection({
    loader: i18nLoader(),
    schema: i18nSchema(),
  }),
  blog: defineCollection({
    loader: glob({
      pattern: ["**/*.md", "**/*.mdx"],
      base: "./src/content/blog",
    }),
    schema: docsSchema({
      extend: (context) => blogSchema(context),
    }),
  }),
};
