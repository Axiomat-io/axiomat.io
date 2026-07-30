+++
title = 'Scheduled runs stop stalling, and a tidier connection catalogue'
date = 2026-07-29
label = 'Fix'
layout = 'update'
description = "Assistants that only read things no longer wait for an approval nobody was there to give, and the connection catalogue only lists what Ward can actually connect to."
+++

## Scheduled assistants no longer stall on read-only work

If you had an assistant that watched a feed, scored trends, or ran a calculation on a schedule, it may have quietly stopped and waited for your approval — even with a policy that granted it those tools and asked for no approval at all.

Ward was being over-cautious. When it wasn't certain whether an action would change something outside your workspace, it asked for approval — which is the right instinct, but it was applying it to work that only *reads*. Unattended, there was nobody there to approve, so the run stopped.

Reading, fetching and calculating are now recognised as read-only and run without interruption.

Two things worth knowing:

- **Nothing became more permissive.** Anything that genuinely changes something outside Ward still asks first. Creating a Notion page is gated exactly as before.
- **Tools from connections you've added stay cautious.** Ward can't always tell what a third-party tool will do, and when it can't tell, it still asks.

If you worked around this by switching off approval for external changes, you can switch it back on.

## The connection catalogue only shows what you can connect

Browsing the connection catalogue turned up thousands of entries, and around half of them couldn't be connected at all. They looked available right up until you clicked.

The catalogue now lists only what Ward can actually connect to. The count you see is the count you can use.

<!-- SCREENSHOT: Settings → Connections, the catalogue after filtering — search results
     with the total count visible, so the "what you see is what you can use" point lands -->
