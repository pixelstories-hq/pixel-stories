---
title: Triggering Events
description: Add triggers that run events when the player touches or interacts with them.
---

Event triggers are how you add player interaction to your game. They exist in the map and play an event when triggered.

## Adding a Trigger

To add a trigger to the map, use the `Add Event Trigger` action.

1. Add the `Add Event Trigger` action to the Starting Map Actions. This adds a trigger to the map when the map first loads.
2. In the trigger action, create a new event or link it to an existing event.
3. Configure the trigger as **On interact** or **On touch**, then draw the area that activates it in the map.

## Configuring Your Trigger

The following options are available to configure the trigger:

- **Trigger type**
  - **On interact**: Runs when the player presses the interact key inside the trigger area.
  - **On touch**: Runs when the player collides with the trigger area.
  - **No trigger**: Runs automatically as soon as the event is added.
- **Trigger size**: Adjust the area in pixels.
- **Position**: Place it at a static point on the map or attach it to an NPC.
- **Remove condition**: Choose whether the event can be triggered multiple times or only once.

## Story Progression

An event can also contain an `Add Event Trigger` action. This means an event, when activated, can add more event triggers to the map. This is how story progression works in PS Maker.

For example, the Starting Map Actions might add a trigger for talking to an NPC. After that NPC event plays, it can add a new trigger for a door, a note, or another character. One trigger can unlock the next trigger, and your story can move forward step by step.
