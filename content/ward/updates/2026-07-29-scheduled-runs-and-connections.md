+++
title = 'Scheduled runs stop stalling, and a tidier connections browser'
date = 2026-07-29
label = 'Fix'
layout = 'update'
description = "Assistants that only read things no longer wait for an approval nobody was there to give, and the MCP browser only lists servers Ward can actually connect to."
+++

## Scheduled assistants no longer stall on read-only work

If you had an assistant that watched a feed, scored trends, or ran a calculation on a schedule, it may have quietly stopped and waited for your approval — even with a policy that granted it those tools and asked for no approval at all.

The cause was how Ward decided whether a tool was about to *change* something outside your workspace. It guessed from the tool's name, and assumed the risky answer when the name didn't say. "Discover feed" and "score trends" don't contain a reading word, so they were treated as though they might write somewhere, and anything unattended stopped rather than guessing.

Tools now state plainly whether they only read, and that statement wins over the guess. All of Ward's built-in tools are read-only — lookups, fetches, and calculation — so they run unattended as you'd expect.

Two things worth knowing about the shape of the fix:

- **Nothing became more permissive.** Tools that genuinely change things outside Ward still ask first. A Notion tool that creates pages is still gated exactly as before.
- **Tools from connected MCP servers keep the cautious guess**, because Ward doesn't control their names. When it can't tell, it still asks.

If you'd worked around this by turning off approval for external writes, you can turn it back on.

## The connections browser only shows what you can connect

Browsing the MCP registry from Settings turned up thousands of servers, and around half of them couldn't be connected at all — they publish only a command-line package, which Ward doesn't run. They looked available right up until you clicked.

The browser now lists only servers publishing a remote endpoint. The count you see is the count you can actually use.

<!-- SCREENSHOT: Settings → Connections, the MCP registry browser after filtering —
     search results showing connectable servers, ideally with the total count visible
     so the "what you see is what you can use" point lands -->
