---
title: Events and Actions
description: Understand how events and actions drive game logic in PS Maker.
---

This article explains what actions and events are, where they run, and how to add them in the editor.

## Common Mechanics

- Talk to an NPC with dialogue and choices.
- Read a note on a table many times.
- Pick up an item that disappears after use.
- Unlock a room after finding an item.

## Actions

An action is basically one thing the game can do. You can read actions like a list of steps that the game will perform. At the bottom of this page, you'll find a list of [common actions](#common-actions).

Actions will run one after another in order. This matters because sometimes an action can depend on a previous one to work, such as running `Spawn NPC` before `Move NPC`.

## Events

An event is a sequence of actions. You create an event, add actions to it, and then trigger that event in the map using the `Add Event Trigger` action. The next article, [Triggering Events](/event-system/event-triggers/), dives into more detail about how events can be triggered.

## Where Actions Run

During the game, actions can run in two places: from the Starting Map Actions or from triggering an event that has actions.

The actions in the Starting Map Actions list will always run when the map first loads.

## Adding Actions

1. Click **+ Actions...** to open the action menu, then choose an action.

2. After adding an action, you can configure any options that are available for it.

To reorder actions, click to select an action first, then drag it to a new spot. You can also use the three-dot menu.

:::note[Action State in Editor]
The editor shows a preview of the current state for the action you are viewing. For NPCs, the current position is shown normally. Previous positions are shown at half opacity.
:::

## Common Actions

- **Show Dialogue**: Shows dialogue text to the player.
- **Show Choices**: Shows choices and runs the selected event.
- **[Add Event](/event-system/event-triggers/)**: Adds an event trigger to the map.
- **[Transfer Player](/map-editor/multiple-maps/)**: Moves the player to another map or position.
- **Spawn NPC**: Places an NPC into the map.
- **Move NPC/Player**: Moves an NPC or the player.
- **Set NPC/Player Direction**: Changes which direction a character faces.
- **[Play NPC/Player Animation](/dialogue-system/npc-animations/)**: Plays a one-shot character animation.
- **[Set Variable](/event-system/conditional-branching/)**: Updates a switch, number, or text variable.
- **[Conditional Branch](/event-system/conditional-branching/)**: Runs actions when a condition is true.
- **Add Item**: Adds an inventory item to the player's inventory.
- **Remove Item**: Removes an inventory item.
- **Move Camera**: Moves the camera to a position or target.
- **Shake Camera**: Shakes the camera for impact.
- **Fade Transition**: Fades the screen in or out.
- **Set Background Music**: Changes the music currently playing.
- **Play Sound**: Plays a sound effect.
