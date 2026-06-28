import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import vercel from "@astrojs/vercel/serverless";

import tailwindcss from "@tailwindcss/vite";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://pixelstories.io",
  output: "server",

  adapter: vercel({
    webAnalytics: { enabled: true },
  }),

  redirects: {
    "/tutorials/basic": "/overview",
    "/features": "/overview",
    "/tour": "/overview",
    "/getting-started": "/overview",
  },

  integrations: [
    starlight({
      title: "Pixel Stories",
      logo: {
        light: "./src/assets/logo-light.svg",
        dark: "./src/assets/logo-dark.svg",
        replacesTitle: true,
      },
      social: [
        {
          icon: "youtube",
          label: "YouTube",
          href: "https://www.youtube.com/channel/UC62czApVKmYFH8clyDqKiVQ",
        },
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/PixelStoriesOrg/pixel-stories",
        },
        {
          icon: "discord",
          label: "Discord",
          href: "https://discord.gg/WTxUC4hEnS",
        },
      ],
      components: {
        Head: "./src/overrides/Head.astro",
        SocialIcons: "./src/overrides/SocialIcons.astro",
        Hero: "./src/overrides/Hero.astro",
        ThemeSelect: "./src/overrides/ThemeSelect.astro",
        Search: "./src/overrides/Search.astro",
      },
      editLink: {
        baseUrl: "https://github.com/PixelStoriesOrg/pixel-stories",
      },
      customCss: [
        // Relative path to your custom CSS file
        "./src/styles/tailwind.css",
        "./src/styles/custom.css",
      ],
      favicon: "/favicon.ico",
      head: [
        {
          tag: "link",
          attrs: {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/apple-touch-icon.png",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "/favicon-32x32.png",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: "/favicon-16x16.png",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "manifest",
            href: "/site.webmanifest",
          },
        },
      ],
      sidebar: [
        {
          label: "Introduction",
          items: [
            {
              label: "Editor Overview",
              link: "/overview",
            },
          ],
        },
        {
          label: "Maps & Tilesets",
          items: [
            { label: "Tilesets & Autotiling", link: "/maps/tilesets" },
            { label: "Map Objects & Collisions", link: "/maps/map-objects" },
          ],
        },
        {
          label: "Events",
          items: [
            { label: "Event System Overview", link: "/events/" },
            { label: "Running & Nesting Events", link: "/events/running-events" },
            { label: "Variables & Conditionals", link: "/events/variables" },
          ],
        },
        {
          label: "Characters & Dialogue",
          items: [
            { label: "Dialogue Actions", link: "/dialogue/" },
            { label: "Dialogue UI Configuration", link: "/dialogue/ui-config" },
            { label: "NPC Animations", link: "/dialogue/npc-animations" },
          ],
        },
        {
          label: "Plugins",
          items: [
            { label: "Using Plugins", link: "/plugins/" },
            { label: "Writing Plugins", link: "/plugins/writing-plugins" },
          ],
        },
        {
          label: "FAQ",
          link: "/faq/",
        },
        {
          label: "Changelog",
          link: "/changelog/",
        },
      ],
    }),
    svelte(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
