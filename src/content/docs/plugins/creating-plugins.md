---
title: Creating Plugins
description: Create custom plugins for PS Maker.
---

Plugins let you define custom actions that run in PS Maker. These actions can take parameters like any other action, then use those values together with the game context to perform your own logic. This gives you a way to extend your game's functionality through code.

```typescript
import { definePlugin, defineAction } from "@pixelstories/plugin-api";

const spawnItem = defineAction({
  name: "Spawn Item",
  description: "Spawns an item at a position",
  parameterDefs: {
    x: { type: "number", description: "X position", defaultValue: 0 },
    y: { type: "number", description: "Y position", defaultValue: 0 },
    itemName: { type: "string", description: "Item name" },
  },
  execute(params, ctx) {
    // params is fully typed: { x: number, y: number, itemName: string }
    ctx.scene.add.sprite(params.x, params.y, params.itemName);
  },
});

export default definePlugin({
  name: "My Plugin",
  description: "A sample plugin",
  version: "1.0.0",
  actions: [spawnItem],
});
```

## What You Can Define

The API is built around a few small helpers:

##### **`definePlugin(config)`**

Defines your plugin metadata and the actions it provides. This is the default export from your plugin entry file.

##### **`defineAction(config)`**

Defines an action users can run from Pixel Stories Maker. Parameter definitions are used to type the `params` object passed into `execute`.

##### **`PluginContext`**

The context object passed to action handlers. It gives your action access to the running game state:

- `game` - The Phaser game instance
- `scene` - The current active scene
- `player` - The player sprite

## Plugin CLI Tool

Use the [Plugin CLI](https://github.com/pixelstories-hq/ps-maker-plugin-cli) to scaffold a plugin project and build it into a bundle Pixel Stories Maker can load.
