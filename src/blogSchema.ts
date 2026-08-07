import { AstroError } from "astro/errors";
import type { ImageMetadata } from "astro";
import {
  z,
  type ZodLiteral,
  type ZodNumber,
  type ZodObject,
  type ZodString,
  type ZodUnion,
} from "astro/zod";
import type { SchemaContext } from "astro:content";
import pfp from "./assets/images/pfp.webp";

export const blogAuthorSchema = z.object({
  /**
   * The name of the author.
   */
  name: z.string().min(1),
  /**
   * The title of the author.
   */
  title: z.string().optional(),
  /**
   * The URL or path to the author's picture.
   */
  picture: z.union([z.string(), z.custom<ImageMetadata>()]),
});

export const blogEntrySchema = ({ image }: SchemaContext) =>
  z.object({
    /**
     * The author(s) of the blog post.
     * The authors will be inferred from the `authors` configuration option if defined.
     */
    author: z.string().optional(),
    /**
     * The publish date of the blog post which must be a valid YAML timestamp.
     * @see https://yaml.org/type/timestamp.html
     */
    date: z.date(),
    /**
     * The excerpt of the blog post used in the blog post list and tags pages.
     * If not provided, the entire blog post content will be rendered.
     */
    excerpt: z.string().optional(),
    /**
     * A list of tags associated with the blog post.
     */
    tags: z.string().array().optional(),
    /**
     * An optional cover image for the blog post.
     */
    cover: z
      .object({
        /**
         * Alternative text describing the cover image for assistive technologies.
         */
        alt: z.string(),
        /**
         * Relative path to an image file in your project, e.g. `../../assets/cover.png`.
         */
        image: image(),
      })
      .optional(),
    /**
     * Defines whether the blog post is featured or not.
     * Featured blog posts are displayed in a dedicated sidebar group above recent blog posts.
     */
    featured: z.boolean().optional(),
  });

export function blogSchema(context: SchemaContext) {
  // Checking for `context` to provide a better migration error message.
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!context) {
    throw new AstroError(
      "Missing blog schema validation context.",
      `You may need to update your content collections configuration in the \`src/content/config.ts\` file and pass the context to the \`blogSchema\` function:

\`docs: defineCollection({ schema: docsSchema({ extend: (context) => blogSchema(context) }) })\`

If you believe this is a bug, please file an issue at https://github.com/HiDeoo/starlight-blog/issues/new/choose`,
    );
  }

  return blogEntrySchema(context).partial();
}

export type StarlightBlogAuthor = z.infer<typeof blogAuthorSchema>;

// interface SchemaContext {
//   image: ImageFunction;
// }

// https://github.com/withastro/astro/blob/7d597506615fa5a34327304e8321be7b9c4b799d/packages/astro/src/assets/types.ts#L34-L42
export type ImageFunction = () => ZodObject<{
  src: ZodString;
  width: ZodNumber;
  height: ZodNumber;
  format: ZodUnion<
    [
      ZodLiteral<"png">,
      ZodLiteral<"jpg">,
      ZodLiteral<"jpeg">,
      ZodLiteral<"tiff">,
      ZodLiteral<"webp">,
      ZodLiteral<"gif">,
      ZodLiteral<"svg">,
      ZodLiteral<"avif">,
    ]
  >;
}>;

export const AUTHORS: Record<string, StarlightBlogAuthor> = {
  Team: {
    name: "Pixel Stories Team",
    picture: "https://avatars.githubusercontent.com/u/175058849?s=200&v=4",
  },
  Truman: {
    name: "Truman",
    picture: pfp,
  },
};
