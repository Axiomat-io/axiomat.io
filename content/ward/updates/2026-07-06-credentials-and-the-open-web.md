+++
title = "Security work you shouldn't have to think about"
date = 2026-07-06
label = 'Security'
layout = 'update'
description = "Connection credentials are encrypted where they're stored, assistants browsing the web can't reach anywhere private, and a few doors that were merely closed are now locked."
+++

Most of what shipped this week is invisible if it's working. Worth saying out loud anyway, because "trust us" is not an argument.

## Your connection credentials are encrypted where they're stored

When you connect an account, Ward holds a scoped token — never your password. Those tokens are now encrypted before they're stored, so a leaked copy of our storage yields unreadable data rather than working credentials.

The assistants themselves never see the raw credential. They ask Ward to act on a connection; Ward holds the key.

## An assistant on the open web can't reach anywhere private

Assistants that fetch web pages are now fenced in: they can reach the public internet and nothing else. They can't be talked into requesting something on our internal network, and they carry no credentials into a page they fetch.

This matters because a page an assistant reads is untrusted input. If a page tries to instruct the assistant to go somewhere it shouldn't, there's nowhere for it to go.

## Doors that were closed are now locked

A handful of entry points that were previously *validated* now **fail closed** — if something can't be verified, it's refused rather than accepted with a warning. Errors also no longer echo internal detail back in a response.

None of this changes anything you do. It changes what happens on the bad day.

You can read the full picture on the [security overview](/ward/security/), including what isn't in place yet.
