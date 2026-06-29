---
title: Multiple Maps
description: Create multiple maps and move the player between them.
---

Multiple maps let your game move between separate areas, such as rooms, houses, towns, caves, or different floors of the same building. Instead of building everything in one large map, you can create smaller maps and connect them with events.

## Adding Maps

Use the map dropdown at the top of the map editor to create and switch between maps. When you add a new map, it becomes part of the same project and can use the same tilesets, objects, characters, and actions as your other maps.

## Moving Between Maps In Game

To move the player from one map to another, create an event with a **Transfer Player** action. This action changes the current map and places the player at the destination you choose.

For example, a doorway can transfer the player from an outside town map into a house map. Create an event that contains the **Transfer Player** action, set the destination map and player position, then place that event trigger over the doorway. Make sure the remove condition on the event is to never remove!

If the player should be able to return, create another event on the destination map. Add a **Transfer Player** action that points back to the original map, then place its trigger where the exit should be. With one trigger on each map, the player can move back and forth between the two areas. 

:::note
Use [event triggers](../../event-system/event-triggers/) for doors, stairs, portals, and area exits. **On touch** works well when the player should transfer as soon as they walk into the trigger, while **On interact** works well for doors or objects the player should intentionally use.
:::
