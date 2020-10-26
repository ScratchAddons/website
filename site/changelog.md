---
layout: markdown
title: Changelog
description: Scratch Addons Changelog
---

# v1.2.0
Changelog TODO
# v1.1.1
## Summary

- Bug fixes
- New theme: Scratch 2.0 → Scratch 3.0
- New addon: forums search
- New addon: search profile
- New addon: 60FPS player mode
- New addon: better emojis
- New addon: cloud games
- New theme: display stage on left side
- Automatically update themes (no refresh needed)
- Fix slow project performance if no feature with a "hurts performance" warning is enabled

### Addon development changes:
- New manifest fields: `"traps"`, `"warning"`
- `"runAtComplete": false` can now happen even if there's no \<body> element yet. The default value is still `true`, and those userscripts are run when the window load event triggers
- Userstyles are now injected very rapidly to avoid flickering
- Theme userstyles are now always injected after non-theme userstyles
- Addon settings can now be of type `"color"`
- Access to `"string"`, `"select"`, `"positive_integer"` and `"color"` settings via CSS variables

### Open source project related changes:
- Links to "credits" and "review" pages on settings page.
