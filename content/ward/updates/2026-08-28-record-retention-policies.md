+++
title = 'Set how long Ward keeps old records around'
date = 2026-08-28
label = 'Feature'
layout = 'update'
description = "A new workspace setting lets old records quiet down on their own — archived, not deleted, and anything still open is never touched."
+++

An assistant that's been running for a while accumulates records — leads it tracked, predictions it scored, items it triaged. Left alone, the default views for an older assistant fill up with things nobody needs to see anymore. Until now, the only way to quiet that down was to rewrite the assistant's own instructions, which risked overwriting the parts that make it work.

There's now a proper setting for it, at the workspace level.

Configure how long records should stick around before they're archived — by default, or with different windows for different kinds of records. Once a record ages out, it's archived, not deleted: it stops showing up in an assistant's everyday views, but the full history is still there if you go looking for it.

A couple of things are true no matter how you configure it:

- **Nothing changes until you set a policy.** Every workspace starts with no retention policy at all, and stays exactly as it is today until someone configures one.
- **Open records are never archived**, regardless of age or settings. A retention policy quiets old noise — it doesn't hide something that's still being tracked.

<!-- SCREENSHOT: the workspace retention-policy settings panel — the days/collections
     configuration form, ideally with one collection given a different window than the default -->

This lives in workspace settings. If you don't touch it, nothing about your assistants changes.
