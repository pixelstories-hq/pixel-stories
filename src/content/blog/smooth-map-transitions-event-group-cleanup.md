---
title: Smooth Map Transitions and Event Group Cleanup
date: 2025-03-18
excerpt: Map transfers now feature a smooth fade transition and updated event group removal options for a more seamless experience.
author: Truman
cover:
  image: ../../assets/images/smooth-map-transitions.png
  alt: Preview of smooth map transition effect
tags:
  - PS Maker Update
---

# Smooth Map Transitions and Event Group Cleanup

This update introduces a smoother map transfer process and revised options for event group removal.

### Map Transition Update

The transfer player event now includes a 350ms fade transition between maps. This small delay helps the screen change feel less abrupt. In the future, we'll add an update so you'll be able to adjust the fade duration and choose specific fade colors.

### Updated Event Group Removal

Removing event groups is now easier. Instead of using a separate removal event, you can choose a removal method when adding an event group:

1. Keep in Map: The group stays until you remove it with a Remove Group Event.
2. Remove on Finish: The group is removed automatically after playing once.
3. Remove after N Plays: The group is removed automatically after a set number of plays.

### Changelog

**Added**

- [Event] Transfer player event now uses a 350ms fade transition between maps.
- [Event] New option in the Add Event Group event to remove the group after finishing:
