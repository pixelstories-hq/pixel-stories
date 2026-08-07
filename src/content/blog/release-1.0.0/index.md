---
title: PS MAKER 1.0 RELEASE!!! UI, Title Screen, Battle System, Many Fixes!
date: 2026-08-07
excerpt: "The official 1.0 release, PS Maker goes on Steam!"
author: Truman
tags:
  - PS Maker Update
  - "1.0.0"
---

Hey everyone!! Today, we have the PS Maker version 1.0 update and PS Maker is officially released on Steam!!

The biggest new feature in this update, which also brings PS Maker to 1.0, is the UI update!

There are new actions for adding UI components, for text, rectangles, images, and buttons. Everything is draggable to resize and position in the game window.

Now with UI, we unlocked the ability to add title screens and add battle systems! To show the features, theres a new example that sets up a title screen and a simple battle system. The system is really flexible now so theres many ways to do your battles. If you need help with anything, just ping me on the Discord server!

The full changelog is below!

## 1.0.0

**August 7, 2026**

UI components

- Added rectangle, button, text, and image UI components with action configuration and draggable map previews.
- Added button click events and actions to add, remove, and set the visibility of UI components.
- Added copy/paste for UI components and the ability to duplicate UI assets.
- Added variable value expressions for UI component instance property values.
- Added size anchors to all UI component instances.
- Overhauled UI sizing and backgrounds, splitting backgrounds into color and image types with different scaling modes.
- Converted UI size values from percentages to pixels, including dialogue, choices, trigger labels, images, videos, and UI components.
- Added pixel art rendering and z-index options for all game UI overlays.
- Improved UI component editing, add UI component inputs, asset previews, and asset picker editing.

Game menus and save/load system

- Added new load game and options menu assets with customization options.
- Added an Exit Game action and a menu close button.
- Updated saves to use the active save ID for a session.
- Added Set Player Visibility and fade in/out for setting player and NPC visibility.
- Added Persistence NPC and player visibility in game saves.
- Removed the PS Maker splash screen.

Editor improvements

- Added single-tile selection and fixed clear selection behavior.
- Added setting the starting map when creating a map.
- Added Persistence the open action route and active tab between maps and projects.
- Added Persistence collapsed if else conditional rows.
- Added the ability to toggle debug mode without restarting the game.
- Improved point-position dragging and added it to Change Map.
- Renamed and reorganized events.
- Replaced tooltips with the floating UI tooltip component.
- Improved asset picker and variable picker search bars, variable dropdowns, comparison dropdowns, and slicing inputs.

Engine

- Added Windows executable export.
- Added title screen and battle example projects.

Misc fixes

- Fixed changing to a deleted map and deleted map variables when deleting a map.
- Fixed map tool selection not resetting when changing projects.
- Fixed dismissed toast undo entries being retained.
- Fixed action copy/paste to paste only into the open button event.
- Fixed UI component input navigation state loss.
- Fixed expressions after changing the target variable in the Change Variable action.
- Fixed dialogue player movement with embedded actions, movement restoration, and extra line breaks for lines containing only a Run Action command.
- Fixed tall movement animation previews overflowing and animation selection in the asset picker.
- Fixed canvas inputs being interrupted by overlays, click focus in playtests, Event Library breadcrumbs, and the select-to-move cursor.
- Fixed user-facing errors to include the backend error.
