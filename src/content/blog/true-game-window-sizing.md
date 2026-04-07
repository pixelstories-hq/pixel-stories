---
title: True Game Window Sizing!
date: 2024-12-18
excerpt: An updated game size configuration ensures game size is the "real" size with scaling.
author: Truman
cover:
  image: ../../assets/images/true-game-window-sizing-1.png
  alt: Game scaling and responsiveness update preview
tags:
  - PS Maker Update
---

# True Game Window Sizing!

Our latest update brings a better approach to game scaling that makes more sense. We’ve removing redundant game size settings and introduced “true game size,” where every game pixel directly corresponds to a screen pixel. In addition, a new zoom setting is added for pixel art since pixel sizes are super small. You can now also choose between fitting or filling the game window for improved responsiveness.

<div style="max-width:500px;">

![Responsive Options](../../assets/images/true-game-window-sizing-2.png)

</div>

### Changelog

Added

- [Game settings] Add game size fit or fill window option
- [Game settings] Add game zoom option

Changed

- [Game] Set game scale to envelope
- [Game] Replace game size config with true game width and height
