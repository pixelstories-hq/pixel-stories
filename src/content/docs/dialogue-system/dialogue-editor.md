---
title: Dialogue Editor
description: Write dialogue and use commands for portraits, names, layouts, sounds, and timing.
---

To show dialogue in PS Maker, use the **Dialogue** action.

When you add this action, you will see a large text box. This is where you write the dialogue that appears in the in-game dialogue box.

## Page breaks

The dialogue box paginates when there are empty lines between blocks of text. Each block appears as a separate dialogue page.

For example:

```txt
Hello, this is on the first dialogue page.

With the empty line above, this part displays on the next page.
```

:::note
Use the dialogue preview button to preview how the dialogue box will render your text in game!
:::

## Line breaks

Text blocks that have one newline inbetween will render as a linebreak in the dialogue box.

```txt
Hello, this is the first dialogue line.
This line will render right below, on the same page.
```

Any commands will negate this and the text will render as if it were the same line.

```txt
These two lines are the same. One just waits 1 second.

These two lines are the same.
@wait 1000
One just waits 1 second.
```

Add a `@line_break` to bring the line break back.

```txt
Hello, this is the first dialogue line.
@wait 120
@line_break
This line will render right below, on the same page.
```

## Commands

Beside regular dialogue text, you can add commands to change how the dialogue behaves.

Commands must start on a new line and always begin with an `@` character.

A command can take multiple options. Options are separated by spaces.

Some commands you can use:

- `@portrait`
- `@dialogue_layout`
- `@wait`
- `@line_break`
- `@no_page_break`
- `@wait`

example here please, add one where it uses wait, and no_page_break, and line_break

## Showing a Name Box

To show a name in your dialogue, start the line with `Name:`.

Any characters before the `:` symbol will be rendered in the dialogue box as the name.

```txt
Alex: Hello there!
```

The name UI must be enabled in the dialogue layout. You can change this in the project assets.

## Showing Portraits

Use the `@portrait` command to show a portrait.

Use `@portrait none` to remove any portrait that is currently being shown.

```
@portrait alice neutral
@wait 500
Alice: Hey there.

@portrait alice happy
Alice: I'm glad you came.

@portrait none
@wait 1000
The room falls silent.
```

The portrait UI must also be enabled in the dialogue layout. You can change this in the project assets.
