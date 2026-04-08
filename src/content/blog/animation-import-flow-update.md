---
title: Less Redundancy in Animation Import Flow
date: 2025-03-11
excerpt: Animation configuration now inherits default settings from character definitions, reducing redundancy and enabling idle animations.
author: Truman
tags:
  - PS Maker Update
---

# Less Redundancy in Animation Import Flow

This update changes the way animations are imported for pixel stories. Animations now use defined animation settings from the character instead of needing to configure each one individually.

### Animation Import Changes

Before this update, you had to manually set the configuration for every walking animation, often repeating the same settings across different animations. Now, you define the configuration once at the character level, and any animation added to that character will use those settings unless you override them.

Idle animations for the player and characters are also added to make your games more lively.

### Changelog

**Added**

- [Character] Enable idle animation

**Changed**

- [Characters] Animation settings now inherit from character definitions
  - Removed the need for repeated configuration in animation setups.
  - Introduced a default animation configuration for characters.
  - Animation settings inherit default values defined in the character unless explicitly overridden.
- [Editor] Renamed “Actor” to “Character” in UI copy and asset paths.
- [Player] Implement default config inheritance for player as well
