---
title: Making a quest
description: How to create a Fetch Quest in PS Maker
---

In this tutorial, we will create a fetch quest: the player must obtain a key from a rock and use it to unlock a door.

Along the way, we will combine **map actions**, **events**, dialogue, and conditional branches.

## Setting up the maps

Create two maps:

1. **Map 1** where the quest takes place
2. **Map 2** as the destination after unlocking the door

In Map 1, place a rock and a door using default assets.

## Setting up game data

Create the supporting data before wiring gameplay:

1. Create an actor named `Tom`
2. Pick a spawn position for Tom
3. Create a switch variable named `Player has key`

## Creating events

Create three events for this quest: one for the door, one for Tom, and one for the rock.

Events do not need to be created in gameplay order. They are reusable collections of actions that run when triggered. Map actions are separate and run automatically when the map loads.

### Door interaction event

This event handles two outcomes: locked door (no key) and transfer to Map 2 (has key).

1. Go to the map editor and create a new **event** under the Events section
2. Name it `Unlock door`
3. Add a **Conditional** action: `If player has key = False`
4. Add a dialogue action in that branch with text: `The door is locked.`
5. Add another conditional branch: `If player has key = True`
6. Add a **TransferPlayer** action in that branch targeting `Map 2`
7. Set the transfer position to the door location

### Tom interaction event

This event changes dialogue based on whether the player already has the key.

1. Create another event named `Tom interaction`
2. Add a conditional branch: `If player has key = False`
3. Add dialogue text: `You have to get the key from the rock.`
4. Add the `If player has key = True` branch
5. Add dialogue text: `You can proceed.`

### Rock interaction event

This event gives the key once, then disables itself.

1. Create an event named `Get key from rock`
2. Add dialogue text: `Found key!`
3. Add a **Set Variable** action to set `Player has key = True`
4. Add a **Remove Event** action targeting `Get key from rock`

## Wiring map actions

Now add map actions to place Tom and register the three events on the map.

1. Add a **Spawn actor** map action for Tom
2. Add an **Add Event** action for `Get key from rock` with an interact trigger at the rock position
3. Add an **Add Event** action for `Tom interaction` with an interact trigger at Tom’s position
4. Add an **Add Event** action for `Unlock door` with an interact trigger at the door position

That’s it. You now have a complete fetch quest flow with actions, events, and conditional branching.

**Important note:** restart the game between test runs so `Player has key` resets properly.
