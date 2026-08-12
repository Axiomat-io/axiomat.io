+++
title = 'Invite links, and runs that waste fewer steps'
date = 2026-08-12
label = 'Improvement'
layout = 'update'
description = "An invite link now gets you into Ward without a card, and assistants stop losing steps to malformed tool calls."
+++

Two smaller things from this week.

## An invite link gets you in

If someone at Axiomat sends you an invite link, opening it and signing in now puts you straight into Ward. No card, no plan to choose first.

This also works if you've been here before. Previously, anyone who had ever started a subscription — including people who had already cancelled one — was turned away with a message telling them to cancel a subscription they no longer had. That's fixed: an invite works whether or not you've subscribed in the past. If you're on a live paid plan, an invite is declined, and you'll be pointed at the billing portal instead.

## Fewer wasted steps mid-run

Every assistant has a budget of steps it can take in a single run. When it tried to use one of its tools with the wrong arguments, that attempt was spent anyway, and the explanation it got back was cryptic enough that it often didn't correct course.

Ward now checks a tool call before running it and, when something's wrong, says exactly what — which argument, what was expected. In practice that means fewer runs that wander, and fewer that hit their limit without finishing.

There's a real fix underneath this too: a wrong value of the right general shape used to slip through and, for tools that write, reach your stored data. It doesn't now.
