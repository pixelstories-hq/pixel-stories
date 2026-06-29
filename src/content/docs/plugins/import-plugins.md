---
title: Import Plugins
description: Add existing plugins to a PS Maker project.
---

The Plugin API gives you the TypeScript helpers used to define Pixel Stories Maker plugins. Use it to describe your plugin, add custom actions, and keep action parameters typed while you build.

## How Plugins Work

Plugins allow you to define custom actions that can be run in PS Maker. These actions can take parameters like any other action, then use those parameters along with the game context to perform logic. This allows you to extend your game’s functionality through code.

## Installing Plugins

Plugins are exported as .ps-maker.js files. Simply add the plugin file into your project’s /plugins folder to load the plugin into your project.