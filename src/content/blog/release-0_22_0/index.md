---
title: Event System Copy/Paste and Show Image Action
date: 2026-04-07
excerpt: ""
author: Truman
tags:
  - PS Maker Update
  - 0.22.0
---

## Event System Copy, Paste, Cut, and Select

Hey everyone in this update, I'm adding some common operations that we are extremely useful for event system actions. The problem that arises with the event system right now is once you add a number of actions to an event there's no really easy way to move them around. Safe for example you wanted to move your actions from one event to the other. You would literally have to add the actions each of those actions individually to the new place that you'd like them and then remove all of those actions from the old place that was just a huge painful process because if you wanted to edit your story then it would takes ages to do that simple task.

So the solution to this is basically treating actions as items that you can select and copy paste to move them around. What does is basically copy the action and all of the properties and configuration that you set for the action then paste it exactly into another spot. Right now it doesn't really do anything intelligent such as detecting whether an MPC that you spawn in earlier still exist at the new spot if the MPC doesn't exist anymore then the action simply won't work so you'll have to watch out for that yourself.

<video src="/blog/release-0_22_0/copy-paste.webm" class="auto-video" loop muted playsinline></video>

## Show Image Actions

Along with this update, I'm also adding new image actions. They are the following:

- Show image
- Set image properties
- Remove image

What's cool about these image actions is that you can show an image, then set the properties on that image with a transition, so it acts like a tween effect.

<video src="/blog/release-0_22_0/image-action.webm" class="auto-video" loop muted playsinline></video>

## Fixed Tile Extrusion Bug

There was a bug where tilesets had the classic 2D rendering pixel art line bleeding. This one was fixed by adding tile extrusion to the tileset pipeline. So thats nice!

| Before                                 | After                                  |
| -------------------------------------- | -------------------------------------- |
| ![Showing tile extrusion](image-1.png) | ![Showing tile extrusion](image-2.png) |
