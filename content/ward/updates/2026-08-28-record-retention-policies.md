+++
title = 'Old records can now age out on their own'
date = 2026-08-28
label = 'Feature'
layout = 'update'
description = "Workspaces can have a data-retention policy — old records archive automatically instead of piling up, and anything still open is never touched."
+++

An assistant that's been running for a while accumulates records — leads it tracked, predictions it scored, items it triaged. Left alone, an older assistant's default views fill up with things nobody needs to see anymore.

Ward workspaces can now have a retention policy for that: a way to say how long different kinds of records should stick around before they're archived. Archived means archived, not deleted — the record stops showing up in an assistant's everyday views, but the full history is still there. And it never touches anything still open: a retention policy quiets old noise, it doesn't hide work still being tracked.

Right now, this is available at the API level rather than something you can configure yourself from inside the app. If you'd like a retention policy set up for your workspace, reach out and we'll get it configured.
