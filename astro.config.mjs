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
    "/tutorials/basic": "/getting-started/",
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
          label: "Getting started",
          items: [
            {
              label: "Overview",
              link: "/overview",
            },
            {
              label: "Features",
              link: "/features",
            },
            {
              label: "Interface tour",
              link: "/tour/",
            },
            {
              label: "Beginner tutorial",
              link: "/getting-started/",
            },
          ],
        },
        {
          label: "Map editor",
          items: [
            { label: "Overview", link: "/map-editor/overview" },
            { label: "Tilesets", link: "/map-editor/tilesets" },
            { label: "Autotile terrains", link: "/map-editor/autotile" },
            { label: "Map objects", link: "/map-editor/map-objects" },
            { label: "Collisions", link: "/map-editor/collisions" },
          ],
        },
        {
          label: "Event system",
          items: [
            { label: "Events", link: "/event-system/events" }, // goes through how events play and map initial events play on first load
            {
              label: "Event groups",
              link: "/event-system/event-groups",
            },
            {
              label: "Conditional branches",
              link: "/event-system/conditionals",
            },
            {
              label: "dialogue event",
              link: "/event-system/dialogue-event",
            },
            {
              label: "Player events",
              link: "/event-system/player-events",
            },
            {
              label: "NPC events",
              link: "/event-system/npc-events",
            },
            {
              label: "Control flow events",
              link: "/event-system/control-flow-events",
            },
          ],
        },
        {
          label: "Game assets",
          items: [
            { label: "Asset library", link: "/game-assets/asset-library" },
            { label: "NPCs", link: "/game-assets/npcs" },
            { label: "Inventory items", link: "/game-assets/inventory-items" },
            { label: "dialogue UI", link: "/game-assets/dialogue-ui" },
          ],
        },
        // {
        //   label: "Guides",
        //   autogenerate: { directory: "/guides" },
        // },
        /*
        Build a Door (map transfer + trigger)

        NPC Basics: Spawn, Talk, Despawn

        Choices & Branching Dialogue

        Chase & Patrol (ties together movement + triggers)

        Inventory Pickup & Use

        Switch Maps from a Cutscene

        Customize the Dialogue Box Theme

        Each guide uses the standard page template (What/When/Steps/Tips/Related).
          */
        {
          label: "Resources",
          items: [
            {
              label: "Changelog",
              link: "/changelog/",
            },
            {
              label: "Video tutorials 🔗",
              link: "https://www.youtube.com/@PixelStoriesEngine",
              attrs: { target: "_blank" },
            },
            {
              label: "Official Discord 🔗",
              link: "https://discord.gg/WTxUC4hEnS",
              attrs: { target: "_blank" },
            },
          ],
        },
      ],
    }),
    svelte(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
