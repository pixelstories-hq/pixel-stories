---
title: 0.10.1 UX Improvements and Fixes
date: 2025-05-01
excerpt: This update improves polish and usability across the board. More intuitive defaults, better error handling, and cleaner editing.
author: Truman
tags:
  - PS Maker Update
---

### Smoother Setup, Smarter Defaults, and a Cleaner Editor

This update is all about making your first few minutes with Pixel Stories easier and your editing experience more intuitive.

We’ve updated **new projects** to start with a clean 800x800 game canvas, a "fit to screen" size mode, and a blank map called “Map 1.” This should remove some unnecessary setup when starting with Pixel Stories and allows you to get started faster and easier.

Event groups now also have an **“Add to Map”** button that instantly adds an `Add event group` event to the top of your map’s events. Doing this removes several redundant steps when you want to add your event group to trigger from an interaction in the game map.

We’ve also reworked **Show Choices** so that selecting a choice now directly plays events instead of only being able to set variables, making branching logic cleaner and more flexible.

### Smaller Tweaks That Make a Big Difference

- **Animations** now have default fallback settings (16x16 frames, 4 fps) to help you spot config issues more easily
- The **asset library** now jumps straight to the asset pack, cutting out unnecessary clutter
- Fixed some long-standing editor issues, like stale mouse events outside the canvas, duplicate asset IDs, and navigation quirks
- Removed buggy behavior with dragging nested events, expect a cleaner and more predictable editing flow
- **Choice UI** now inherits the styling from the dialog box for a more unified look

### Changelog

Added

- [Event groups] Event group now has an `Add to map` button which adds an `Add event group` event to the top of initial map events with the event group already selected.

Changed

- [Event] Show Choices event plays user events on choice selection instead of setting variable
- [Editor] New project game config: size mode default to "fit" instead of "fill", Game size to 800 by 800
- [Editor] New project includes an empty default map "Map 1"
- [Animations] Set better fallback values (16x16 size, 4 fps) for missing animation config to help see error

Fixed

- [Editor] Stale mouse events triggered from outside game canvas
- [Editor] Back button navigates to session history, last-visited URL by default, instead of page structure.
- [Assets library] A more focused asset library that does not overwhelm the user by showing everything. Skips asset library to go to asset pack right away instead, since there is only one right now.
- [Assets library] Fix duplicate asset ids
- [Game UI] Remove choices UI config, instead inherit UI style config from dialog box
- [Editor] Remove ability to drag and move nested events in or out of their nested positions due to buggy behaviour
- [Animations] Crash due to undefined frame configuration
