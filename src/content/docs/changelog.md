---
title: Pixel Stories Changelog
description: Find specific releases and changelogs for the game maker.
---

## 0.21.0

**April 4, 2026** ([Release notes](https://pixelstories.io/blog/introducing-ps-maker))

- Added PS Maker Desktop app
- Overhauled the event system and project asset system, consolidating event system actions, input UI, and enabling plugin support.

## 0.20.0

**October 18, 2025** ([Release notes](https://pixelstories.io/blog/release-0_20_0))

- [Editor] Added onboarding interface tour for new users.
- [Editor] Replaced all instances of "dialog" with "dialogue" for correct spelling given story content.
- [Game, Editor] Consolidated editor and game state for modes with clear editor, play, and playtest modes.
- [Game settings] Updated game settings to new config UI.
- [NPC] Fixed NPC animations playing the correct walk cycles.
- [Sound] Fixed play sound to end event after sound finishes playing.
- [Events] Added back the Fade Transition event.
- [Events] Added Play Character Animation event which plays a one-shot animation for characters.
- [Events] Renamed "Set NPC Animation Set" to "Set Character Movement Animations."
- [Events] Added option to set movement animations on the player.
- [Events] Added Set Camera Effect event, allowing for horror camera filters and other effects.
- [UI] Moved UI elements to a separate scene, allowing for higher text resolution and avoiding camera effects.

## 0.19.0

**October 4, 2025** ([Release notes](https://pixelstories.io/blog/release-0_19_0))

- [Editor] Added a log for crashes on unhandled rejection event
- [Events] Added stop/resume player movement events
- [Events] Added move and shake camera events
- [Dialog layouts] Added dialog layout feature: allowing for customization of text box, name box, and portraits.
  - Name and portrait can be set in dialog content with tags.
  - Each dialog screen component has rich customization options.
- [Game] Add share button in game settings menu
- [Game] Add fullscreen button in game settings menu

## 0.18.0

**September 27, 2025** ([Release notes](https://pixelstories.io/blog/release-0_18_0))

- [Docs] Changed release docs md file naming scheme to use underscore instead of dot for release version number.
- [Editor] Fixed dark theme still existing when browser has default dark theme.
- [Editor] Redirect directly to projects page in /editor when user lands on app's root path.
- [Dialog box] Set default font in dialog box to be cursive system font.
- [Editor] Renamed game assets to game components for better representation.
- [Audio] Added audio into game components list, including uploading and previewing audio.
- [Game] Added game settings for players to adjust music/sound levels, enable touch controls, and show keyboard controls
- [Game] Added touch controls for moving character and touch action button
- [Game] Added crash guard to suggest for user to refresh page
- [Game] Added default aspect ratio game resolution options
- [Dialog] Fixed game events stuck when dialog event is empty
- [Game] Added a simple NPC preview for spawn NPC event

## 0.17.0

**September 11, 2025** ([Release notes](https://pixelstories.io/blog/release-0.17.0))

- [Editor] Fixed restart game resetting editor mode and map editing mode
- [Map editor] Fixed switch to rectangle/circle for tileset if its a single tile
- [Editor] Fixed discrepancy between character and NPC event names
- [Map editor, tileset] Fixed tiles selection going out of bounds of tileset and breaking tile stamping
- [Map editor] Fixed deleting map layer not actually deleting map layer
- [Map editor] Fixed reordering map layers not reordering
- [Map editor] Fixed broken create new maps
- [Map editor] Fixed deleting map leading to broken state
- [Map editor] Added right click for draw tools to switch to erase tool counterpart
- [Events editor] Separated event groups and map events (On load events) to their own tabs
- [Events editor] Revamped add game event modal
- [Show image] Simplified show image event configuration and removed unnecessary features
- [Game variables] Fixed bug where inventory variables interfering with user variables
- [Events editor] Removed unfinished image, music, and sound management, and music/sound events
- [Events editor] Fixed bug where add event group to map is did not add instance Id
- [Dialog event] Fixed awkward space present after [pb] and [r] tags in dialog rendering. Also adjusted default text size to be smaller.
- [Chase event] Fixed overlapping player touch/collision activated events with chase end touch events and event group following NPC touch event. Priorty is given to chase event touch, event group touch is disabled until NPC is done chasing and finishes on chase end events.
- [Add event group event] Added trigger area size for event group triggers.
- [Game] Fixed collision detection between player, event group triggers, and NPCs to be based on rectangle overlap instead of distance.
- [Characters] Renamed all character related titles to use NPC instead
- [NPCs] Fixed back button loop after deleting an animation
- [NPCs] Moved player out of NPC list, into own asset
- [Game] Fixed game restart not keeping active map after restarting
- [Asset library] Fixed asset library access for guest users
- [Game] Fixed long loading times for projects with a lot of assets during game restart

## 0.16.0

**July 17, 2025** ([Release notes](https://pixelstories.io/blog/release-0.16.0))

- [Event groups] Added option for event group position to follow an NPC
- [Events] Added NPC chase player event - NPC chases the player until stopped, with options to trigger follow-up events.
- [Events] Added Stop NPC Chase event – Stops a specific NPC from chasing.
- [Events] Added NPC Patrol Path event – NPC walks a looped path until stopped.
- [Events] Added Stop Patrol Path event – Stops an NPC's patrol and leaves it at its current position.
- [Editor] Fixed issue where player movement was not disabled during dialog or in editor mode.
- [Events] Fixed incorrect "Event does not exist" message when the game map is not loaded.
- [Editor] Fixed issue where starting a project from scratch still added Zelda-like assets.
- [Editor] Fixed switching map editing section not updating to the associated tool.
- [Map Editor] Improved active tool state handling by remembering the last tool used in each editor mode, including selection previews.

## 0.15.0

**July 8, 2025** ([Release notes](https://pixelstories.io/blog/release-0.15.0))

- [Inventory] Added inventory system with support for creating custom inventory items.
- [Inventory] Added game UI for inventory bar and inventory item slide out panel to display item name, description and icon.
- [Inventory] Added events for adding and removing items from player's inventory
- [Events] Fixed conditional blocks not updating after being added or deleted
- [Tools] Fixed incorrect tool state surrounding editing map and editing events.
- [Editor] Fixed double game canvas loading when switching out of playtest before game fully loads.
- [Game] Added loading bars for game load

## 0.14.0

**July 2, 2025** ([Release notes](https://pixelstories.io/blog/release-0.14.0))

- [Asset Library] Added new and better organized zelda-like asset pack with tilesets
- [Asset Library] Added a new asset library which includes search and filters.
- [Editor] Added start project with default asset pack or from scratch
- [Tilesets] Added tilesets to asset library
- [Tilesets] Moved edit tilesets to its own tab section
- [Tilesets] Improved efficiency of tile stamping which used to cause a lot of lag when stamping a big selection
- [Editor] Added press escape to cancel active tool (set tool to pan)
- [Maps] Fixed deleting the last map in project leading to broken state.
- [Editor] Uploading a new asset sets the asset name to the file name when no name exists.
- [Editor] Fixed blank unmodified guest project being transferred to user's projects
- [Map objects] Fixed broken animated map objects
- [Map objects] Added correct draw preview for animated map objects
- [Editor] Fixed browser back button on going to project from projects list

## 0.13.0

**June 16, 2025** ([Release notes](https://pixelstories.io/blog/release-0.13.0))

- [Editor] Fix empty project name. Set default name "A New Beginning."
- [Terrain Tilesets] Support for multiple tilesets in a map. **Breaking change**, all previous maps that used the single tileset will not be supported.
- [Editor] Game canvas now uses all screen space.
- [Editor] Added undo redo for all map editor tool actions.
- [Editor] Fixed buggy panning in game canvas when panning slowly.
- [Editor] Added new way to add map collisions, with dragging and resizing map collisions rectangles.
- [Editor] Consolidated how map switching is done by moving the map switcher to the map editor.
- [Editor] Added search and categorization functionality to map objects.
- [Assets] Moved terrains and map objects configuration from assets page to map editor side panel.
- [Terrain Tilesets] Added functionality to draw a rectangular selection of tiles from tilesets.
- [Misc] Update dependencies

## 0.12.0

**May 25, 2025** ([Release notes](https://pixelstories.io/blog/release-0.12.0))

- [Editor] Added offline mode and syncing local/remote project data
- [Editor] Added guest mode for editing guest project without remote save
- [Auth] Remove legacy auth service and replace with updated auth service from provider
- [Editor] Added a safe guard against saving an empty project file to the cloud

---

## 0.11.0

**May 13, 2025**

Added

- [Map objects] Animated Map Objects, added the option for static and animated map objects, and configuration for animation strip.

Changed

- [Terrains] Added confirm delete pop up for deleting terrains in the edit terrains modal

Fixed

- [Editor] Optimize handling of state when editing terrains

---

## 0.10.1

**May 1, 2025** ([Release notes](https://pixelstories.io/blog/choice-event-upgrade))

Added

- [Event groups] Event group now has an `Add to map` button which adds an `Add event group` event to the top of initial map events with the event group already selected.

Changed

- [Event] Show Choices event plays user events on choice selection instead of setting variable
- [Editor] New project game config: size mode default to "fit" instead of "fill", Game size to 800 by 800
- [Editor] New project includes an empty default map "Map 1"
- [Animations] Set better fallback values (16x16 size, 4 fps) for missing animation config to help see error

Fixed

- [Editor] Stale mouse events triggered from outside game canvas
- [Editor] Back button navigates to session history, last-visited URL by default, instead of page structure.
- [Assets library] A more focused asset library that does not overwhelm the user by showing everything. Skips asset library to go to asset pack right away instead, since there is only one right now.
- [Assets library] Fix duplicate asset ids
- [Game UI] Remove choices UI config, instead inherit UI style config from dialog box
- [Editor] Remove ability to drag and move nested events in or out of their nested positions due to buggy behaviour
- [Animations] Crash due to undefined frame configuration

---

## 0.10.0

**April 11, 2025** ([Release notes](https://pixelstories.io/blog/introducing-code-event))

Added

- [Navigation] Bring out map terrain and objects so its not nested in navigation
- [Navigation] Enable back button from playtest page
- [Map objects] Integrate collision boxes into map objects
- [Player] Enable adjusting collision box for player
- [Events] New event: Add Run Code event. Lets users execute custom client-side code at specific points during gameplay to directly manipulate game objects, camera, scene behavior, or anything else.

Fixed

- [Transfer player event] Fix transfer player event setting player position while map not loaded

---

## 0.9.0

**March 27, 2025** ([Release notes](https://pixelstories.io/blog/standalone-game-export))

Added

- [Editor] Add game export for web HTML/CSS/JS
- [Misc] Add standalone game build
- [Changelog] Add a rough history of development in the Pixel Stories game maker

---

## 0.8.0

**March 18, 2025**

Misc user experience fixes

- [Routing] Fix infinite reload when going to an undefined path
- [Side panel] Add slideable side panel to adjust width
- [Projects] Fix double game canvas when switching projects from playtest and settings
- [Editor] Fix not going back to editor mode after visiting playtest
- [Editor, Map objects] Fix different objects cant be placed at same tile
- [Editor, zoom] Have map editor zoom to persist through playtest and reloads
- [Editor] Rename “Actor” to “Character” in UI copy and assets path.
- [Editor] fix when no show grid, zooming map enables grid again

New Show image and Set Character Animation Events

- [Event] Add show image event
- [Event] Add Set NPC Animation Set event
- [Event] Fix NPC walk event to use duration parameter to determine when NPC has finished walking.

Improvement to custom character animation import flow

- [Characters] Change animation settings to inheritance from settings defined in character
  - Remove copy-paste in animation config.
  - Introduce a default animation configuration for characters.
  - Animation settings now inherit default settings defined in character unless explicitly overridden.
- [Character] Enable idle animation
- [Player] Implement default config inheritance for player as well

Easier event group clean up and less jank map switching

- [Event] Tranfer player event to fade for a fix 350ms amount between maps
- [Event] Remove own event group after finish playing from Add event group event:
  - Keep in Map: Group remains until explicitly removed by a Remove Group Event.
  - Remove on Finish: Group is automatically removed after playing once.
  - Remove after N Plays: Group is automatically removed after a specified number of plays.

---

## 0.7.1

**February 19, 2025**

- Fix wrong dialog box size and position

---

## 0.7.0

**February 19, 2025**

Asset Management, Enhanced Map Tools and Dialog UI

Key changes:

- Adds Zelda-like open source assets
- Implements a better game window size, along with better map tools including zoom
- Fixes DialogUI to include good default settings

Changelog

- Set default map editing tool to be “pan”
- Set game scale to envope
- Remove game size config
- Redo game size to be “true game size”
- Add game size fit or fill window option
- Add default map zoom and map zoom
- Fix map editor grid rendering bugs
- Json schema change: new ui config json format
  - rename story.ui to story.gameUI
- Completely revamp dialog screen view layout and simplify configuration flow
  - Add web safe fonts
  - Add dialog box background and border color customization
  - Change dialog box size defined from px to percentage of screen
  - Remove NineSlice background option
  - Remove concept of widgets, including image widget
- Move adding and editing terrains and map objects to game assets page
- Add map zoom input for precise zoom adjustment
- Add new assets from OpenGameArt
  - zelda like assets
- Add tags to assets for organization
- Add search and filter for assets
- sort editor drawer stories by last edited

---

## 0.6.0

**November 13, 2024**

Improved Terrain Creation and Mapping

Added

- [Map terrains, Editor] Expandable single tile tileset and individual tile placement
- [Map terrains] New modal for creating auto tile terrains with clear format mode selection
- [Map terrains] Support for blob auto tile format
- [Editor] Zoom in and out in editor (ctrl + scroll wheel)

Changed

- [Editor] Game window in editor takes up entire screen view instead of only limiting to game’s view
- [Terrain layers] New layer is added on top of list instead of below
- [Map terrains, Map objects] Temporarily remove terrain and objects library (better default assets coming soon)

Fixed

- [Map terrains] Fix “Wang” format incorrectly generating the auto tileset at corners
- [Editor] Restarting game did not properly signal for UI updates
- [Terrain layers, Editor] Drawing on hidden terrain layers

---

## 0.5.0

**September 10, 2024**

Customize UI Feature Release

- Dialog box customization via Game Assets
- Dialog screen customization button
- Face sprite support and customization
- New dialog text editor experience
- Remove “Textbox” RexUI component
- Add “Text player” RexUI component
- Integrate Monaco Editor
- Add widget and tag system
- Add face sprite widget
- Implement tag parser for Text player
- Update image and sound asset system
- Support replaceable assets

---

## 0.4.3

**Aug 8, 2024**

- Fix total events infinite loading

---

## 0.4.2

**July 15, 2024**

- Hot fix for clipped dialog box

---

## 0.4.1

**July 15, 2024**

- Fix default dialog box size to fit in game window

---

## 0.4.0

**July 15, 2024**

Better Drawing Tools and Input Fixes

- Add rectangle and ellipse tools for terrains and collisions
- Change interact key from `X` to `Z`
- Improve input handling and story store update logic

---

## 0.3.0

**July 10, 2024**

Choices event and UI Upgrade

- Redo dialog box using Phaser Rex UI
- Add choices UI and choices event
- Add resources section to project page
- Remove unused queries:
  - `purchased_stories`
  - `is_paid`
  - `is_listed`
  - `published_date`

---

## 0.2.0

**June 22, 2024**

- Add foundational mapping features and map editing tools

---

## 0.1.0

**April 10, 2024**

- Core game maker features

---

## 0.0.0

**July 21, 2023**

Begin development of Pixel Stories game maker
