+++
title = 'Old records can now age out on their own'
date = 2026-08-28
label = 'Feature'
layout = 'update'
description = "A new Data & Retention section in workspace settings lets old records archive automatically instead of piling up, and anything still open is never touched."
+++

An assistant that's been running for a while accumulates records — leads it tracked, predictions it scored, items it triaged. Left alone, an older assistant's default views fill up with things nobody needs to see anymore.

There's now a place to configure that yourself: a **Data & Retention** section in workspace settings. Set a default number of days records should stick around before archiving, and override that window for specific collections that should age out faster or slower than the rest.

One thing worth knowing before you turn it on: the default window is pre-filled at **30 days**. If you enable retention without changing that number, anything already older than 30 days gets archived on the next sweep — check it first if that's not what you want.

A couple of things hold no matter how you configure it:

- **Archived means archived, not deleted.** The record stops showing up in an assistant's everyday views, but the full history is still there.
- **Open records are never archived**, regardless of age or settings. A retention policy quiets old noise — it doesn't hide work still being tracked. You can also exempt specific collections or statuses outright.

Nothing changes until you set a policy — every workspace starts with none, and clearing it turns retention back off entirely.

<!-- SCREENSHOT: the Data & Retention section in workspace settings — the default-days
     field alongside the per-collection override rows -->
