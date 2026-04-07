---
title: "New Events: Show Image and Set Character Animation"
date: 2025-03-04
excerpt: Introduced new events for showing images and setting character animations, along with bug fixes in the NPC walk event.
author: Truman
cover:
  image: ../../assets/images/new-events.png
  alt: Preview of new events for showing images and setting character animations
tags:
  - PS Maker Update
---

# New Events: Show Image and Set Character Animation

This update introduces two exciting new events designed to enhance the storytelling and gameplay experience. The new **`Show Image`** event lets you display images during runtime, while the **`Set Character Animation`** event allows you to change NPC animations on the fly. Additionally, we've fixed a bug in the NPC walk event by changing how characters walk between the defined points.

### Show Image Event

The Show Image event allows you to display images at story game runtime. Use cases for this event include:

- Presenting clues and information within the map.
- Jump scaring the player with a sudden pop-up.
- Displaying signs or other informative visuals.

### Set Character Animation Event

The Set Character Animation event let's you to change an NPC's appearance or behavior during gameplay. This means you can:

- Alter a character's clothes or overall appearance as the story progresses.
- Change the walking animation when the character moves through different terrains, such as transitioning to a muddy ground animation.

### Changelog

**Added**

- [Event] Add show image event
- [Event] Add Set NPC Animation Set event

**Fixed**

- [Event] Fix NPC walk event to use duration parameter to determine when NPC has finished walking.
