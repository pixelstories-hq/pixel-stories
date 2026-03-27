<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import type { ImageMetadata } from "astro";
  import image1 from "../assets/docs-images/features/image-1.png";
  import image2 from "../assets/docs-images/features/image-2.png";
  import image3 from "../assets/docs-images/features/image-3.png";
  import image4 from "../assets/docs-images/features/image-4.png";
  import image5 from "../assets/docs-images/features/image-5.png";

  interface ShowcaseItem {
    title: string;
    imgSrc: ImageMetadata; // string path OR Astro ImageMetadata
    alt?: string;
    description: string;
  }

  const items: ShowcaseItem[] = [
    {
      title: "Map editor",
      imgSrc: image1,
      description:
        "Build immersive maps visually with editor tools. The Map Editor gives you everything you need to design your world.",
    },
    {
      title: "Event system",
      imgSrc: image5,
      description: "Create branching interactions and gameplay logic.",
    },
    {
      title: "Asset library",
      imgSrc: image2,
      description: "Organize tiles, sprites, sounds, and more.",
    },
    {
      title: "Dialogue",
      imgSrc: image5,
      description: "Author conversations with portraits and choices.",
    },
    {
      title: "Inventory",
      imgSrc: image4,
      description: "Track items, keys, and quest objects.",
    },
  ];

  let active = $state(0);

  function setActive(i: number) {
    if (i < 0 || i >= items.length) return;
    active = i;
  }
</script>

<div class="flex flex-col items-center gap-2 w-full">
  <div
    role="tablist"
    aria-label="Features"
    class="flex flex-wrap justify-center gap-2 rounded-2xl"
  >
    {#each items as tab, i}
      <button
        role="tab"
        type="button"
        class="btn btn-ghost w-30 px-0"
        class:bg-base-300={i === active}
        class:text-base-content={i === active}
        onclick={() => setActive(i)}
      >
        {tab.title}
      </button>
    {/each}
  </div>

  <div class="w-full flex flex-col items-center justify-center">
    {#each items as current, i}
      <div
        class="flex flex-col items-center gap-2 w-full transition-opacity duration-300"
        class:opacity-0={i !== active}
        class:hidden={i !== active}
      >
        <p class="text-center text-pretty">{current.description}</p>

        <img
          id={"panel-" + i}
          aria-labelledby={"tab-" + i}
          src={current.imgSrc.src}
          alt={current.alt ?? current.title}
          class="not-content w-full rounded-2xl shadow-xl object-contain"
        />
      </div>
    {/each}
  </div>
</div>
