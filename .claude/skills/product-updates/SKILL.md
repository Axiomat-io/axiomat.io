---
name: product-updates
description: Turn recently merged Ward pull requests into customer-facing product-update posts for axiomat.io. Use when asked to write, draft, or publish product updates, changelog entries, release notes, or "what shipped" posts — or on a schedule to cover the last day's merges.
---

# Product updates from merged PRs

Turn what engineering merged into something a Ward customer would want to read.

The audience is **someone who pays for Ward and wants to know what changed for them**. They
do not know the codebase, do not care which file moved, and will never read the word
"refactor". If a change doesn't alter what they can do, how much it costs, or how much they
should trust the product, it does not belong on the page.

## 1. Gather

Default window is the last 24 hours. Honour whatever window the user asks for instead.

```bash
gh pr list --repo Axiomat-io/Ward --state merged --limit 50 \
  --search "merged:>=$(date -u -v-1d +%Y-%m-%d)" \
  --json number,title,body,mergedAt,author,labels,files
```

(On GNU date: `date -u -d '1 day ago' +%Y-%m-%d`.)

Read the **body**, not just the title. PR bodies here carry the reasoning, the caveats, and
the "before this can ship" notes — that's where the customer-facing meaning usually is. Look
at `files` too: a PR touching `frontend/src` almost always has something visible to say;
one touching only `specs/` usually doesn't.

If nothing merged in the window, say so and stop. **Do not pad.** A changelog that invents
significance is worse than a quiet week.

## 2. Decide what's worth telling a customer

Include when the change affects:

- what someone can now do, or can no longer do
- price, plan, quota, or anything about being billed
- data handling, permissions, security posture
- a bug they might have hit
- something that will visibly look or behave differently

Leave out internal refactors, test changes, CI, dependency bumps, spec edits, and anything
whose only honest description is "we tidied something up".

**Judgment calls that are yours to make:**

- **Size.** A small fix is one line in a roundup. A substantial feature can carry its own
  post, with its own headline and room to explain the thinking. Nothing here forces one
  shape — decide from how much a customer actually needs to understand, not from how much
  work it was to build.
- **Grouping.** Several PRs are often one story to a customer (five commits and three PRs
  might be "assistants can now read your calendar"). Tell the story, not the PRs.
- **Splitting.** If a window contains one big thing and several small ones, a feature post
  plus a short roundup usually reads better than one lumpy post.
- **Silence.** "Nothing customer-facing shipped this week" is a legitimate outcome.

## 2b. What a customer is allowed to see

The reader is a **customer, not a colleague**. Be informative about what changed for
them; do not open the hood. Default to leaving internals out — include them only when
the update is genuinely unintelligible or untrustworthy without them.

**Never:**

- File, function, table, class or module names. `metering.py`, `tiers.py`,
  `workspaces.tier`, `DynamicAgent.run()` — none of it. A customer cannot act on any of
  it, and it reads as showing off.
- Framework and vendor plumbing: FastAPI, Svelte, Postgres, row-level security, Stripe
  webhooks, Auth0, Azure Container Apps, MCP transports.
- PR or issue numbers, branch names, commit hashes, sprint or milestone language.
- **Business internals.** Unit costs, margins, COGS, conversion rates, CAC, runway,
  pricing rationale, what a plan costs us to serve, how many customers there are. When a
  price or limit changes, say what it is now and what it means for them. Do not explain
  the economics — that is an internal document's job, and volunteering it invites an
  argument you can't win in a changelog.
- Anything about how many people work here, or what we plan to build next unless it's
  already announced.
- The *shape* of a bug's cause when the effect is enough. "Scheduled assistants stopped
  waiting for approval they didn't need" beats a tour of the classification logic.

**The narrow exception:** security and privacy claims sometimes need a specific
mechanism to be worth believing. "Your accounts connect over OAuth, so Ward never sees
your password" is worth more than "connections are secure", and it's a fact the customer
can verify and act on. Name a mechanism when it *earns trust or enables a decision* —
never to show how the sausage is made.

**A test that works:** for each sentence, ask *what can the reader do differently
because they know this?* If the answer is nothing, cut it.

Concretely:

| Don't write | Write |
|---|---|
| "`audit.is_write_action` classified unknown tools by verb tokens and defaulted to write" | "Scheduled assistants could stall waiting for approval on work that only reads" |
| "We removed the free tier because it only breaks even at ~35% conversion" | "Every plan starts with a 14-day free trial" |
| "Notifications are dispatched through a notifier abstraction with per-transport gating" | "Ward can email you when a run fails — per-event, and you choose which" |
| "Postgres row-level security scopes every table to a workspace" | "Your workspace's data is isolated from every other workspace" |

## 3. Write it

House voice, matching the rest of the site:

- Plain, direct, unhype. No "we're excited to announce", no "seamless", no "powerful".
- Lead with what it does for them, then how it works, then any caveat.
- Say the honest thing about limits. The Ward site already tells customers what *isn't*
  in place; updates should hold the same line. If a feature has a rough edge, name it.
- Second person. "You can now…" not "Users can now…".
- Never invent specifics — numbers, dates, model names, quotas. If a PR doesn't state it,
  leave it out or check the code.

### File

Write to `content/ward/updates/YYYY-MM-DD-short-slug.md`:

```markdown
+++
title = 'Sentence-case headline, no trailing period'
date = 2026-07-29
label = 'Feature'          # Feature · Improvement · Fix · Security · Pricing
layout = 'update'          # required — do not omit
description = "One or two sentences. Shown on the index and in RSS."
+++

Body in Markdown. `## Subheads` for anything longer than a few paragraphs.
```

`layout = 'update'` is required; without it the page falls back to the wrong template.
`label` is a free string but stick to the five above so the index stays legible. Do not use
`kind` — Hugo reserves it and the build fails.

### Verify before you call it done

```bash
hugo --gc --minify --destination /tmp/updates-check   # must build clean
```

Check the post appears on `/ward/updates/` and reads correctly at its own URL.

## 4. Call out where a screenshot would help

**This matters and is easy to skip.** These posts are about software people look at, and a
sentence describing a new panel is worth far less than a picture of it.

Wherever a visual would materially help, leave a marker in the body at the exact spot:

```markdown
<!-- SCREENSHOT: the power-level picker on an agent's Configuration panel, showing
     Normal/High/Max with the run cost beside each -->
```

An HTML comment is invisible if the post ships before anyone acts on it — it degrades to
nothing rather than to a broken image.

Then **list every marker in your final report to the user**, with what each should show and
where it goes. That list is the point: the human has the running app and can take the shot
in a minute, but only if they know it's wanted.

Ask for a screenshot when: a new screen, panel, or control appeared; something changed
visibly; the feature is spatial or layout-related; or the result is genuinely nicer to look
at than to read about. Don't ask for one for a backend fix, a pricing change, or anything
with no visual surface — a screenshot of nothing erodes the signal.

## 5. Report back

Finish with:

1. What you wrote, and where.
2. **Screenshots wanted** — the list from step 4.
3. What you deliberately left out, and why. This is how the user catches a judgment call
   they disagree with — a merged PR that silently never appears is invisible; one you
   explain skipping is reviewable.
4. Anything you couldn't verify and had to leave vague.

## Notes

- Posts are content only. Committing, pushing, or opening a PR is the user's call unless
  they've asked for it.
- The site lives in a separate repo from Ward. Read PRs with `gh` against
  `Axiomat-io/Ward`; write files into the axiomat.io checkout.
- A dated post is a public claim. If you can't substantiate something from the PR or the
  code, don't write it.
