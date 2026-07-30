+++
title = 'Try an assistant before you trust it'
date = 2026-07-05
label = 'Feature'
layout = 'update'
description = "A test mode that runs an assistant for real but changes nothing, per-assistant permissions, and charts that assistants can actually draw."
+++

## Test mode: a real run that touches nothing

You can now run an assistant in test mode. It thinks through the whole job for real — reads what it would read, reasons over live data — but **every action that would change something is held back**. Nothing sends, nothing posts, nothing gets written anywhere.

You see what it *would* have done, listed out, and a comparison against its last real run so you can tell what your edit actually altered.

This is the answer to the most reasonable hesitation about handing work to an assistant: you can watch it do the job once before it does the job.

<!-- SCREENSHOT: an assistant in test mode after a run — the list of held-back actions,
     and the diff against the previous real run side by side if it fits -->

## Permissions, per assistant

Each assistant now carries its own rules about what it may use and what needs your say-so. A research assistant can be allowed to read widely and permitted to change nothing. A drafting assistant can be allowed to write, but only with approval.

It's set per assistant, not once for the whole workspace, so a cautious setting on one doesn't hobble the others.

## Assistants draw charts now

If an assistant is tracking something over time, it can put a chart on its page rather than only a table — lines, bars, areas. Ask for the view you want and it builds it.
