# Pixel Stories

This repository contains the website for [Pixel Stories](https://pixelstories.io) and documentation for [PS Maker](https://pixelstories.io/overview).

---

## Contributing to the Documentation

We welcome contributions to help improve our docs! This site is built with [Astro](https://astro.build/) and [Starlight](https://starlight.astro.build/).

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or your preferred package manager

### Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/PixelStoriesOrg/pixel-stories.git
   cd pixel-stories
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:4321`

### Project Structure

```
src/
├── content/
│   ├── docs/          # Documentation pages (MDX/MD files)
│   │   ├── event-system/
│   │   ├── game-assets/
│   │   ├── guides/
│   │   └── map-editor/
│   └── blog/          # Blog posts (Markdown files)
├── components/        # Astro & Svelte components
├── assets/            # Images and other static assets
│   └── docs-images/   # Screenshots for documentation
└── overrides/         # Starlight component overrides
```

### Writing Documentation

- Documentation lives in `src/content/docs/`
- Files can be `.md` (Markdown) or `.mdx` (MDX with component support)
- Each doc file needs frontmatter with at least a `title`:
  ```mdx
  ---
  title: "Your Page Title"
  description: "Optional description for SEO"
  ---
  ```
- Images should be placed in `src/assets/docs-images/` and referenced with relative paths

### Writing Blog Posts

- Blog posts live in `src/content/blog/`
- Use Markdown format with appropriate frontmatter
- See existing posts for examples of the expected structure

### Available Commands

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start local dev server               |
| `npm run build`   | Build the production site            |
| `npm run preview` | Preview the production build locally |

### Submitting Changes

1. Fork the repository
2. Create a new branch for your changes
3. Make your edits
4. Test locally with `npm run dev`
5. Submit a pull request

Thank you for helping improve PS Maker! 💜
