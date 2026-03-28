---
title: Moving the player between maps
description: How to move your player between maps in PS Maker.
---

In this guide, we will explore how to connect maps using the **Transfer Player** action.

`TransferPlayer` is an action that transports the player to a different map. This is useful when you want progression between different settings.

## How do I use it?

Transfer Player is most often used inside an **event**. After the player interacts with an object or meets a condition, this action can move them to the next map.

You can add **Transfer Player** when building actions inside an event, including inside a conditional branch. After adding it, choose the destination map from the dropdown menu.

<div style="max-width: 500px">

![img](../../../assets/images/unlock-door-event.png "An event for unlocking a door.")

</div>

In the Fetch Quest guide, we use the **Transfer Player** action to move the player through a door after they obtain a key.

Important note: after you add a Transfer Player action, later actions in that same branch may not run because the player has already moved maps. Put Transfer Player as the final action in that branch.
