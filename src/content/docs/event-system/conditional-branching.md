---
title: Conditional Branches
description: Use variables and conditions to create branching paths.
---


Conditional branches let your actions respond to the player's behaviour. They check variables or inventory and decide what happens next. If the condition is true, one set of actions plays; if false, those actions are skipped.

## Common Mechanics

- Checking if the player has a key before opening a door.
- Changing dialogue if the player has already met an NPC.
- Triggering different endings based on player choices.
- Unlocking puzzles only if certain switches are active.

## Variables

To use conditionals, first create variables in the **Assets** page. Variables cannot change type once created. Types include:

- **Switch**: On or off (`true`/`false`).
- **Number**: Any numeric value.
- **Text**: A string of characters.

Update values with the **Set Variable** action. Clear names like `hasKey` or `metNPC` help keep track as projects grow.

:::note
Name variables clearly so you can find them later. Conditions run in sequence, so be careful that one branch does not accidentally make another branch below activate.
:::

## Adding a Conditional

Click **+ Conditional** in the action list. Add your condition, then place actions inside each branch. Conditions are tested in order, so the first true condition runs its actions.

You can check for:

- **Switch variables**: True or false values.
- **Number variables**: Greater, less, or equal to a number.
- **Text variables**: Matches specific text.
- **Inventory items**: Whether the player has or does not have an item.
