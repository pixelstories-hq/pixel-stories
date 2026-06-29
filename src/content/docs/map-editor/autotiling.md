---
title: Autotile Terrains
description: Use autotiles to paint connected terrain quickly.
---

Autotiles make map building faster and less repetitive. Instead of carefully lining up corner pieces and edges, autotiles figure that out for you. Draw with them like a paintbrush, and the right tiles appear automatically.

## What Is an Autotile

An autotile is a special type of [tileset](../tilesets/) that knows how to connect itself. When you place autotiles, they generate the correct corners, borders, and fills based on the tiles around them.

In other words, autotiles let you focus on shaping terrain instead of worrying about which piece goes where.

## Common Uses

Autotiles are perfect for:

- Patches of terrain like grass, sand, or water.
- Stone paths, dirt roads, and walkways.
- Any chunk of surface where edges matter.

:::note
Avoid using autotiles for the base terrain. If the tile covers most of the map, only the edges of the map will have those borders and corners. They are much better suited for small patches of terrain on top of the base terrain from a tileset.
:::

## Supported Formats

PS Maker supports two autotile formats:

- **Wang format**: `80x48px`
- **RPG Maker format**: `32x48px`

Both formats have dark-grey tiles for edges and corners, and light-grey tiles for the centre. You can use those layouts as a reference when creating your own autotiles.

## RPG Maker Format

RPG Maker format autotiles are `32x48px`.

<pixel-art>

<div style="max-width:300px; display:flex; align-items:end; gap:4px;">

**RPG Maker format**
![](../../../assets/images/rpgmaker-preview.png)

![](../../../assets/images/rpgmaker-example.png)

</div>

<div style="max-width:300px; display:flex; align-items:end; gap:4px;">

**Wang format**
![](../../../assets/images/wang.png)

![](../../../assets/images/wang-example.png)

</div>

</pixel-art>

## Adding Autotiles

You can add autotiles in two ways:

- Upload your own autotile image.
- Use the **Asset Library**, which includes open source autotiles.

Once imported, PS Maker generates every tile variation automatically.

## Drawing With Autotiles

After you add an autotile, you can paint directly onto the map. The editor automatically chooses the right borders and corners as you draw.

- Use the toolbar tools to draw or erase.
- Switch between single tiles and shapes like rectangles or circles.
- Erase autotiles just like regular tiles.
