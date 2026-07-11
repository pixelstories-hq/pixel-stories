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
    "/tutorials/basic": "/overview/",
    "/features": "/overview/",
    "/tour": "/overview/",
    "/getting-started": "/overview/",
    "/map-editor/autotile": "/map-editor/autotiling/",
    "/docs/plugins": "/plugins/import-plugins/",
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
          href: "https://github.com/pixel-stories-hq/pixel-stories",
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
        baseUrl: "https://github.com/pixel-stories-hq/pixel-stories",
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
            rel: "preconnect",
            href: "https://fonts.googleapis.com",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossorigin: "",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap",
          },
        },
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
          link: "/overview/",
        },
        {
          label: "Editor Overview",
          link: "/introduction/editor-overview",
        },
        {
          label: "Map Editor",
          items: [
            { label: "Tilesets", link: "/map-editor/tilesets" },
            { label: "Autotiling", link: "/map-editor/autotiling" },
            { label: "Objects", link: "/map-editor/objects" },
            { label: "Collisions", link: "/map-editor/collisions" },
            { label: "Multiple Maps", link: "/map-editor/multiple-maps" },
          ],
        },
        {
          label: "Event System",
          items: [
            {
              label: "Events and Actions",
              link: "/event-system/events-actions",
            },
            {
              label: "Triggering Events",
              link: "/event-system/event-triggers",
            },
            {
              label: "Conditional Branching",
              link: "/event-system/conditional-branching",
            },
            // { label: "Choices", link: "/event-system/choices" },
            // { label: "Music and sounds", link: "/event-system/music-and-sounds" },
            // { label: "NPC chase", link: "/event-system/npc-chase" },
            // { label: "Cutscenes", link: "/event-system/cutscenes" },
          ],
        },
        // {
        //   label: "Project assets",
        //   items: [
        //     { label: "Animations", link: "/project-assets/animations" },
        //     { label: "Player and NPCs", link: "/project-assets/player-and-npcs" },
        //   ],
        // },
        {
          label: "Dialogue system",
          items: [
            {
              label: "Dialogue editor",
              link: "/dialogue-system/dialogue-editor",
            },
            // {
            //   label: "Customize Dialogue Box",
            //   link: "/dialogue-system/dialogue-ui-configuration",
            // },
          ],
        },
        {
          label: "Plugins (beta)",
          items: [
            { label: "Import Plugins", link: "/plugins/import-plugins" },
            { label: "Creating Plugins", link: "/plugins/creating-plugins" },
            // { label: "Plugins API", link: "/plugins/api" },
          ],
        },
        {
          label: "Exporting Your Game",
          link: "/exporting-your-game/",
        },
        // {
        //   label: "FAQ",
        //   link: "/faq/",
        // },
        {
          label: "Changelog",
          link: "/changelog/",
        },
        {
          label: "Feature Request",
          link: "/feature-request/",
        },
      ],
    }),
    svelte(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
