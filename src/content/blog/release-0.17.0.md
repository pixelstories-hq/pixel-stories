---
title: Streamlined Event Workflow and Map Editor Fixes
date: 2025-09-11
excerpt: This update revamps the event workflow with a new add event modal, separates event groups from map events, and fixes many map editor issues.
author: Truman
tags:
  - PS Maker Update
---

## Streamlined Event Workflow and Map Editor Fixes

Pixel Stories 0.17.0 introduces a redesigned add event modal organized by event category, making it easier to find the event you need. Event groups and map events now live in separate tabs for a clearer workflow, and the show image event has been simplified to reduce clutter. Numerous map editor fixes and a new trigger area size option for event groups provide smoother editing and more flexibility when working with NPC interactions.

### Changelog

- [Editor] Fixed restart game resetting editor mode and map editing mode
- [Map editor] Fixed switch to rectangle/circle for tileset if its a single tile
- [Editor] Fixed discrepancy between character and NPC event names
- [Map editor, tileset] Fixed tiles selection going out of bounds of tileset and breaking tile stamping
- [Map editor] Fixed deleting map layer not actually deleting map layer
- [Map editor] Fixed reordering map layers not reordering
- [Map editor] Fixed broken create new maps
- [Map editor] Fixed deleting map leading to broken state
- [Map editor] Added right click for draw tools to switch to erase tool counterpart
- [Events editor] Separated event groups and map events (On load events) to their own tabs
- [Events editor] Revamped add game event modal
- [Show image] Simplified show image event configuration and removed unnecessary features
- [Game variables] Fixed bug where inventory variables interfering with user variables
- [Events editor] Removed unfinished image, music, and sound management, and music/sound events
- [Events editor] Fixed bug where add event group to map is did not add instance Id
- [Dialog event] Fixed awkward space present after [pb] and [r] tags in dialog rendering. Also adjusted default text size to be smaller.
- [Chase event] Fixed overlapping player touch/collision activated events with chase end touch events and event group following NPC touch event. Priorty is given to chase event touch, event group touch is disabled until NPC is done chasing and finishes on chase end events.
- [Add event group event] Added trigger area size for event group triggers.
- [Game] Fixed collision detection between player, event group triggers, and NPCs to be based on rectangle overlap instead of distance.
- [Characters] Renamed all character related titles to use NPC instead
- [NPCs] Fixed back button loop after deleting an animation
- [NPCs] Moved player out of NPC list, into own asset
- [Game] Fixed game restart not keeping active map after restarting
- [Asset library] Fixed asset library access for guest users
- [Game] Fixed long loading times for projects with a lot of assets during game restart
