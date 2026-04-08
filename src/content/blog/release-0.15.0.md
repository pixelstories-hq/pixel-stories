---
title: Introducing Inventory System
date: 2025-07-08
excerpt: This update adds a full inventory system with UI and events, plus important fixes to the editor and game.
author: Truman
tags:
  - PS Maker Update
---

## Introducing Inventory System

The 0.15.0 release brings a brand new inventory system. You can now create custom items and display them in the game's inventory bar with a slide-out panel showing each item's details. New events let you add or remove items while playing, opening the possibilities for puzzles, quests, and other exploration mechanics.

Each item also exposes a variable you can check in conditional events. This means you can branch your story depending on whether or not the player has a particular item. Combined with the new UI, the system supports dynamic puzzles and interactions that react to your player's choices.

### Changelog

- [Inventory] Added inventory system with support for creating custom inventory items.
- [Inventory] Added game UI for inventory bar and inventory item slide out panel to display item name, description and icon.
- [Inventory] Added events for adding and removing items from player's inventory
- [Events] Fixed conditional blocks not updating after being added or deleted
- [Tools] Fixed incorrect tool state surrounding editing map and editing events.
- [Editor] Fixed double game canvas loading when switching out of playtest before game fully loads.
- [Game] Added loading bars for game load
