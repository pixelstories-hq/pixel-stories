---
title: Actions Editor
description: Understand how events and actions drive game logic in PS Maker.
---


The Actions Editor is where you turn ideas into gameplay. You add actions, set their options, and the game plays them in order. Use it to create dialogue, choices, map changes, puzzles, and more.

## What Is an Action

An action is a single thing the game can perform. Examples include showing dialogue, presenting choices, moving the player, spawning an NPC, or switching maps. You combine actions to build complete game mechanics in your story.

## What's Possible

There are many ways to use actions in your story. Below are some examples:

- Dialogue and choices for story scenes.
- Doors or portals that transfer the player to other maps.
- NPC movement, patrols, and chase sequences.
- Puzzles or quest mechanics using inventory items.

## Where Actions Run

There are two places where actions run:

- **Map Actions**: Actions that run when a map first loads.
- **Events**: Reusable collections of actions that run when triggered in the map.

Map Actions are great for setup, intros, or cutscenes. Events handle interactions that the player can activate during gameplay.

## Adding Actions

Click **+ Actions...** to open the action menu, then choose your action. After adding an action, configure its settings in the panel on the right. Actions play from top to bottom unless a branch changes the flow.

An event is a collection of actions that run one after another. You place events into the map and trigger them through interaction, touch, or automatic behaviour. They create interactive moments such as opening a door, talking to an NPC, picking up an item, or starting an NPC chase.

## Common Uses

- A note on a table the player can read many times.
- An item that disappears after being picked up.
- NPC interactions that trigger dialogue.
- Puzzle mechanics with inventory items.
