---
title: User Experience Improvements and Fixes
date: 2025-02-26
excerpt: Improvements in routing, side panel usability, project switching, and editor behavior for a more smoother experience.
author: Truman
tags:
  - PS Maker Update
---

# Misc User Experience Improvements

This update focuses on refining various aspects of the user experience within the editor. We’ve enhanced routing, improved side panel usability, project switching, and fine-tuned editor behavior for a smoother development process.

### Adjustable Side Panel

Previously, the side panel where all your game configurations were managed was locked at a fixed width. Now, you can customize and adjust the width of the side panel to perfectly match your screen size and editing style.

### Bug Fixes and General Improvements

Alongside the new adjustable side panel, we've squashed several bugs affecting general project operations. These improvements ensure a more stable experience when navigating routes and switching between projects.

### Changelog

**Added**

- [Side panel] Add slideable side panel to adjust width

**Fixed**

- [Routing] Fix infinite reload when going to an undefined path
- [Projects] Fix double game canvas when switching projects from playtest and settings
- [Editor] Fix not going back to editor mode after visiting playtest
- [Editor, Map objects] Fix different objects can't be placed at the same tile
- [Editor, zoom] Have map editor zoom persist through playtest and reloads
- [Editor] fix when no show grid, zooming map enables grid again
