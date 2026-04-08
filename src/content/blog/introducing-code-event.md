---
title: Introducing Run Code Event
date: 2025-04-11
excerpt: With the new Run Code event, you can now write custom JavaScript to control game objects, the camera, scene behavior, and more, right from within your events.
author: Truman
tags:
  - PS Maker Update
---

### Run Custom Code at Any Point in Your Game

We’ve always believed that Pixel Stories should give creators the freedom to build their worlds without limits. But we realized something: while our visual event system is great for accessibility, it can also become a bottleneck for advanced users.

Inspired by the flexibility of command-line tools and frameworks like Phaser (which Pixel Stories is built on), we’ve introduced a new way to break past those boundaries: the **Run Code event**.

This new event lets you inject your own JavaScript directly into your game. That means full access to the Phaser `game` object, open-ended control over game objects, camera, scene behavior, and much more. Want to shake the camera? Add a screen effect? Spawn enemies based on dynamic logic? Now you can.

Instead of building a growing library of plugins that risk conflicts and complexity, we’re giving you the power to customize behavior in small, focused pieces, similar to other game makers.

Whether you’re an experienced developer or just starting to learn, this unlocks a whole new layer of creativity in your game.

### Changelog

Added

- [Navigation] Bring out map terrain and objects so its not nested in navigation
- [Navigation] Enable back button from playtest page
- [Map objects] Integrate collision boxes into map objects
- [Player] Enable adjusting collision box for player
- [Events] New event: Add Run Code event. Lets users execute custom client-side code at specific points during gameplay to directly manipulate game objects, camera, scene behavior, or anything else.

Fixed

- [Transfer player event] Fix transfer player event setting player position while map not loaded
