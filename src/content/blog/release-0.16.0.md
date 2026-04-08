---
title: New NPC Chase Player and Patrol Events
date: 2025-07-17
excerpt: This release introduces new NPC chase and patrol mechanics along with a way to tie event triggers to an NPC's position.
author: Truman
tags:
  - PS Maker Update
---

## New NPC Chase Player and Patrol Events

Pixel Stories 0.16.0 focuses on making NPCs far more interactive. You can now set characters to actively pursue the player or patrol along a path. Event groups can also follow an NPC so any events you attach will trigger when that character is touched or interacted with.

These additions open the door to exciting stealth sequences, chases, and dynamic encounters that react to the player's movements. Combined with various fixes across the editor and events system, this update should make your stories feel more alive and immersive.

### Changelog

- [Event groups] Added option for event group position to follow an NPC
- [Events] Added NPC chase player event - NPC chases the player until stopped, with options to trigger follow-up events.
- [Events] Added Stop NPC Chase event – Stops a specific NPC from chasing.
- [Events] Added NPC Patrol Path event – NPC walks a looped path until stopped.
- [Events] Added Stop Patrol Path event – Stops an NPC's patrol and leaves it at its current position.
- [Editor] Fixed issue where player movement was not disabled during dialog or in editor mode.
- [Events] Fixed incorrect "Event does not exist" message when the game map is not loaded.
- [Editor] Fixed issue where starting a project from scratch still added Zelda-like assets.
- [Editor] Fixed switching map editing section not updating to the associated tool.
- [Map Editor] Improved active tool state handling by remembering the last tool used in each editor mode, including selection previews.
