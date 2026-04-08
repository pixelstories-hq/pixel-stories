---
title: Dialog Layout Makeover and New Camera & Movement Events
date: 2025-10-04
excerpt: Release 0.19.0 unlocks fully customizable dialog layouts, introduces camera shake and movement events, and adds new controls to the in-game settings menu.
author: Truman
tags:
  - PS Maker Update
---

Pixel Stories 0.19.0 is all about staging your cutscenes exactly the way you imagined. Dialog events now support layouts so you can place the text box, name box, and character portrait anywhere on the screen and tune details. We also shipped new events for stopping player movement and camera related events. Finally, the in-game settings menu gets an update with quick share and fullscreen buttons.

## Customizing dialog screens

The dialog event editor now lets you build a layout with the text box, name box, and portrait components. Portraits and names box can be set in the dialog event content with custom tags. With each of those components, you can customize the position, size, colours, text styles, for how you want the UI to look.

## New events

In this update, we added the move camera and shake camera events, as well as stop/resume player movement events.

## Game settings menu update

Players will now find share and fullscreen buttons inside the game settings menu.

## Full changelog

- [Editor] Added a log for crashes on unhandled rejection event
- [Events] Added stop/resume player movement events
- [Events] Added move and shake camera events
- [Dialog layouts] Added dialog layout feature: allowing for customization of text box, name box, and portraits.
  - Name and portrait can be set in dialog content with tags.
  - Each dialog screen component has rich customization options.
- [Game] Add share button in game settings menu
- [Game] Add fullscreen button in game settings menu
