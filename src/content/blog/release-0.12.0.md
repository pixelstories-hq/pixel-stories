---
title: Offline Editing and Editor Access Without an Account
date: 2025-05-25
excerpt: This update brings two big changes to help you build games more reliably and make it easier for new creators to get started.
author: Truman
tags:
  - PS Maker Update
---

## Guest Mode: Start Creating Instantly

You can now use the Pixel Stories Maker without signing in. Guest Mode lets you jump right into creating your game. No account or no setup needed. While Guest Mode does not support cloud saving, all your work is saved to your own device's storage. Our goal with this is to lower the barriers for new users looking to try out the story game maker!

## Offline Mode: Keep Working Through Disruptions

We’ve also added a best-effort offline mode. If your internet connection drops while working, your progress will no longer be interrupted. Your project data is saved locally first, and then synced to the cloud when the connection returns.

This setup helps protect your work against both internet issues and local crashes. You can work with peace of mind, knowing your data is automatically saved locally and in the cloud.

We hope that this update will make Pixel Stories more stable, flexible, and welcoming to new creators.

### Changelog

- [Editor] Added offline mode and syncing local/remote project data
- [Editor] Added guest mode for editing guest project without remote save
- [Auth] Remove legacy auth service and replace with updated auth service from provider
- [Editor] Added a safe guard against saving an empty project file to the cloud
