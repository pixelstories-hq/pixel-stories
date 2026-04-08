---
title: New Character Animation Events, Camera Effects, and Onboarding for New Users
date: 2025-10-18
excerpt: Pixel Stories 0.20.0 introduces an onboarding tour, refreshed animation events, and new camera effects to help you build richer scenes faster.
author: truman
tags:
  - PS Maker Update
---

Pixel Stories 0.20.0 focuses on smoothing out the first moments in the editor and giving storytellers richer tools for motion and atmosphere.

## Learn the editor faster

New projects now open with an onboarding tour that walks through the Pixel Stories Maker interface. The tour highlights the most important panels so first-time builders can find maps, events, and assets without bouncing between menus.

We also tidied up terminology across the editor, dialog boxes now consistently use the "dialogue" spelling to better match narrative content.

## Animate characters with confidence

Animation events received a round of updates. The returning Fade Transition event helps stage map changes or cutscenes, while the Play Character Animation event fires one-off sequences for dramatic moments. Movement animation sets are now easier to manage too: the renamed **Set Character Movement Animations** event lets you define walk cycles for both NPCs and the player in one place.

## Stage moodier scenes with camera effects

You can now apply camera-wide effects directly from the event system. The new Set Camera Effect event supports filters like the horror vignette, letting you quickly change the look and feel of a scene while keeping UI elements crisp.

## Full changelog

- [Editor] Added onboarding interface tour for new users.
- [Editor] Replaced all instances of "dialog" with "dialogue" for correct spelling given story content.
- [Game, Editor] Consolidated editor and game state for modes with clear editor, play, and playtest modes.
- [Game settings] Updated game settings to new config UI.
- [NPC] Fixed NPC animations playing the correct walk cycles.
- [Sound] Fixed play sound to end event after sound finishes playing.
- [Events] Added back the Fade Transition event.
- [Events] Added Play Character Animation event which plays a one-shot animation for characters.
- [Events] Renamed "Set NPC Animation Set" to "Set Character Movement Animations."
- [Events] Added option to set movement animations on the player.
- [Events] Added Set Camera Effect event, allowing for horror camera filters and other effects.
- [UI] Moved UI elements to a separate scene, allowing for higher text resolution and avoiding camera effects.
