---
title: Standalone Game Web Export
date: 2025-03-27
excerpt: Export games to web platforms with standalone games. New comprehensive development history in the changelog.
author: Truman
cover:
  image: ../../assets/images/web-export-standalone-builds.png
  alt: Screenshot showcasing the new web export and standalone build features
tags:
  - PS Maker Update
---

# Standalone Game Web Export

Previously, you could only share your game via a Pixel Stories link. While this is convenient, those that play your game need an internet connection. Not to mention, in the very unlikely event that Pixel Stories goes down due to some catastrophic failure, your games would also go down! To fix those things, we added standalone game exports.

You can now export your games directly to HTML, CSS, and JavaScript, making them playable in any modern web browser as long as it's served with a web browser, [which can be done locally](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server). So now, your game is no longer dependant on an internet connection or to the Pixel Stories website.

## Changelog with Development History

With this standalone game export, we realized that we need to provide a good sense of versioning for your games and which version of the game maker it was made with. If the game maker has a breaking change update, your game will still work with the game maker version it was exported with. Right now there is only one release of the game container, so the export will come with that version. In the future, we will add an export release selector so you can have the granular control over your game export. You can find [the changelog here](/changelog/).

### Changelog

**Added**

- [Editor] Export games to web platforms using HTML, CSS, and JavaScript.
- [Misc] Support for creating standalone game builds.
- [Changelog] Comprehensive development history of the Pixel Stories game maker.
