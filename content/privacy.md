+++
title = 'Privacy Policy'
layout = 'legal'
eyebrow = 'Legal'
effective = 'July 25, 2026'
lastmod = 2026-07-25
summary = "What Axiomat collects, why, how long we keep it, and what we never do with it. We don't train AI on your data. We do keep operational logs so we can run the service and fix what breaks."
description = "Axiomat's privacy policy for axiomat.io and Ward: what we collect, how connected accounts are handled, our Google API Limited Use commitments, retention, and your rights."
+++

## The short version

- **We don't train AI models on your data.** Not your emails, files, calendar, documents, or anything your assistants produce.
- **We don't sell your data** or share it for advertising.
- **We do keep operational logs** — records of runs, errors, and system activity — so we can keep the service running, investigate problems, and check output quality. Some of those logs contain content your assistants processed.
- **You connect accounts through OAuth**, you choose the access, and you can revoke it at any time.
- **You can ask us to delete your account and data**, and we'll do it.

This page is the detail behind those five points. If anything here is unclear, email us at [hello@axiomat.io](mailto:hello@axiomat.io) and we'll explain it in plain terms.

## Who we are

Axiomat is an independent software studio based in Tampa Bay, Florida, USA. It operates the website at axiomat.io and the Ward product. For anything in this policy, including privacy requests, contact:

**[COMPANY LEGAL NAME]**
[MAILING ADDRESS]
Tampa Bay, Florida, USA
[hello@axiomat.io](mailto:hello@axiomat.io)

Ward is in early access. Where a practice isn't settled yet, this policy says so rather than describing an aspiration as a fact.

## What this policy covers

This policy covers the **axiomat.io website** and the **Ward application**. It does not cover the third-party services you choose to connect to Ward — Google, Notion, and others are governed by their own privacy policies, and your relationship with them is your own.

---

## What we collect

### The website

The marketing site at axiomat.io runs no analytics, sets no cookies, and stores nothing in your browser. We do not track visitors across sites.

Two exceptions worth naming:

- **Fonts.** Pages load a typeface from Google Fonts, which means Google receives your IP address and browser user-agent when a page loads. We don't receive that data or control what Google does with it.
- **Hosting logs.** Our host records standard web-server request data (IP address, timestamp, requested URL, user-agent) as part of serving the site. We use these only to keep the site up and to investigate abuse.

If you submit the early-access form, we collect the **email address** you enter, the optional **description of what you'd use Ward for**, and which page you submitted from. We use it to contact you about early access — nothing else. The form is processed by a third-party form provider acting on our behalf. See *Who else touches your data*.

### The Ward application

**Account information.** When you create an account we collect your email address and basic profile information from your sign-in provider, handled through Auth0. We don't store passwords ourselves.

**What you tell your assistants.** The instructions you write, the assistants you create, and the conversations you have with Ward.

**Data from accounts you connect.** When you connect Gmail, Google Calendar, Google Drive, Notion, or another integration, your assistants read the data needed to do the job you described — messages, events, files, pages — and may write or modify data when you allow it. Connections use OAuth: we receive a scoped access token, never your password.

**What your assistants produce.** Results, briefs, dashboards, predictions, drafts, and the memory an assistant builds up so it doesn't repeat itself.

**Operational and audit records.** Each run produces records of what happened: which tools were called, what actions were taken, whether they succeeded, error details, and timing. Actions that change something — sending, posting, editing — are recorded in an audit trail you can inspect.

**Billing information.** If and when you pay for Ward, payment is handled by a third-party payment processor. We do not receive or store full card numbers.

---

## Why we use it, and on what basis

| What we do | Why | Legal basis (GDPR/UK GDPR) |
| --- | --- | --- |
| Run your assistants and the app | To provide the service you asked for | Performance of a contract |
| Keep operational and error logs | To run reliably, debug failures, prevent abuse | Legitimate interests |
| Review output quality | To find and fix bad or unsafe behavior | Legitimate interests |
| Send service and account email | To tell you about access, changes, and problems | Performance of a contract |
| Respond to your messages | To answer you | Legitimate interests |
| Early-access marketing email | To tell you when access opens | Consent |
| Meet legal obligations | Because we have to | Legal obligation |

You can withdraw consent for marketing email at any time; every such message includes an unsubscribe link.

---

## Logging, monitoring, and quality review

We keep logs, and we want to be direct about what that means, because it's the part most policies blur.

**What's logged.** Application and infrastructure logs; a record of every assistant run and the steps within it; errors and stack traces; an audit trail of consequential actions. Some of these records contain the content an assistant worked with — an email subject in an error message, a document excerpt in a failed step, the text of a generated result.

**Why.** To keep Ward running, to reproduce and fix bugs you report, to detect abuse and security incidents, and to evaluate whether assistants are producing correct and safe output. When an assistant does something wrong, its logs are usually the only way to find out why.

**Who can see it.** Access is limited to authorized personnel who need it for those purposes. Axiomat is a very small operation, which means in practice a small number of people — and honestly, often one. We don't grant log access to anyone outside that scope.

**What we don't do with it.** We don't use log content to train AI models. We don't sell it, share it for advertising, or use it to build a profile of you.

**Content from Google accounts is treated more strictly** — see the Google section below. We do not review it for general quality-assurance purposes.

> **Note for the site owner:** the "quality review" basis above needs to match what you actually do. If you never read run content and only look at metrics and stack traces, tighten this section — a narrower promise you keep is worth more than a broad one you don't need. See the checklist at the end.

---

## AI models

Ward runs on commercial large language models hosted on **Microsoft Azure**. To do their work, assistants send relevant content — your instructions and data from connected accounts — to those models.

- **We never train AI models on your data**, and we don't allow our providers to. Under Azure OpenAI's commercial terms, prompts and outputs are not used to train, retrain, or improve any Microsoft or third-party models.
- Your content is not shared with other customers.
- Model output is generated text. It can be wrong. Nothing Ward produces is professional, legal, financial, or medical advice, and market-related agents operate on paper only — they never execute trades.

---

## Google user data

If you connect a Google account, the following applies specifically.

**Scopes.** We request only the scopes needed for the assistants you've created — Gmail, Google Calendar, and Google Drive access as applicable. You see and approve these on Google's own consent screen.

**Limited Use.** Axiomat's use and transfer of information received from Google APIs adheres to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including the Limited Use requirements. Specifically:

- We use Google user data only to provide and improve the features you have asked Ward to perform.
- We do not transfer Google user data to third parties except as necessary to provide those features, for security purposes, or to comply with applicable law.
- **We do not use Google user data for advertising.**
- **We do not use Google user data to develop, improve, or train generalized AI or ML models.** Data sent to our AI provider is used only to generate the output for your specific request, under terms that prohibit training.
- **We do not allow humans to read your Google user data**, except: with your explicit consent (for example, when you ask us to investigate a specific problem); where necessary for security purposes such as investigating abuse; to comply with applicable law; or where the data has been aggregated and anonymized.

**Revoking access.** Disconnect an integration in Ward's settings, or revoke Axiomat's access directly at [myaccount.google.com/permissions](https://myaccount.google.com/permissions). Revoking stops all future access immediately. Data already retrieved and stored in your workspace stays until you delete it or delete your account.

---

## Who else touches your data

We use a small number of service providers. They process data on our behalf, under contract, for the purposes below only.

| Provider | Role | What it handles |
| --- | --- | --- |
| Microsoft Azure | Hosting and AI models | Application, database, and model inference |
| Auth0 (Okta) | Authentication | Sign-in and identity |
| Google | Connected accounts; web fonts | Gmail/Calendar/Drive data you connect; site font delivery |
| Notion | Connected accounts | Notion content you connect |
| [FORM PROVIDER] | Early-access form | Email address and message you submit |
| [EMAIL PROVIDER] | Outbound email | Address and message content |
| [PAYMENT PROCESSOR] | Billing | Payment details (we never see full card numbers) |

We do not sell personal information, and we do not share it for cross-context behavioral advertising.

We may disclose information if legally required — a valid subpoena, court order, or equivalent — or to protect the rights and safety of people or the service. If we're compelled to hand over your data and are legally permitted to tell you, we will.

---

## Where your data lives, and how long we keep it

Ward runs on Microsoft Azure infrastructure in **[REGION]**. If you're outside the United States, your data will be transferred to and processed in the U.S., where privacy laws differ from your own. Where required for transfers from the EEA or UK, we rely on **[TRANSFER MECHANISM — e.g. Standard Contractual Clauses]**.

| Data | Retention |
| --- | --- |
| Account information | For the life of your account |
| Assistants, instructions, and results | Until you delete them, or you delete your account |
| Connection tokens | Until you disconnect the integration or delete your account |
| Operational and error logs | **[RETENTION PERIOD — e.g. 30 / 90 days]**, then deleted or aggregated |
| Audit trail of actions | **[RETENTION PERIOD]** |
| Early-access form submissions | Until you ask us to remove them, or we close the early-access list |
| Backups | Rolling **[BACKUP WINDOW]**; deleted data ages out with the backup cycle |

Deleting something in the app removes it from active systems immediately. Copies can persist briefly in backups until they age out on the schedule above.

---

## Your choices and rights

Regardless of where you live, you can:

- **See** what Ward holds about you — most of it is visible in the app.
- **Correct or delete** assistants, results, and connections at any time.
- **Disconnect** an integration and cut off future access.
- **Delete your entire account and data** — email us and we'll do it.
- **Export** what you have; email us and we'll help.

**If you're in the EEA, UK, or Switzerland,** you additionally have the rights to access, rectification, erasure, restriction, portability, and objection to processing based on legitimate interests, and the right to lodge a complaint with your local supervisory authority.

**If you're in California,** you have the rights to know, delete, correct, and to opt out of sale or sharing — we don't sell or share, so there's nothing to opt out of. We will not discriminate against you for exercising these rights.

**If you're in another U.S. state** with a comprehensive privacy law (Colorado, Connecticut, Virginia, Texas, and others), you have comparable rights, including the right to appeal a decision we make on your request.

To exercise any of these, email **[hello@axiomat.io](mailto:hello@axiomat.io)**. We'll verify your identity through the email address on your account and respond within the time your law requires — within 45 days at the latest, and usually far sooner. It's a small operation; you'll get a real reply from a real person.

---

## Security

Ward is built to be trusted with account access. In summary: OAuth connections rather than passwords, connection tokens encrypted at rest, per-workspace isolation enforced by Postgres row-level security, verified authentication on every request, an audit trail of consequential actions, and approval gates before an assistant changes anything. Our [security overview](/ward/security/) has the detail, including what isn't in place yet.

No system is perfectly secure. If we discover a breach affecting your personal data, we'll notify you and any required authority as the law demands, and tell you what we know.

If you've found a vulnerability, email **[hello@axiomat.io](mailto:hello@axiomat.io)**. We'd genuinely rather hear it from you.

## Children

Ward is not intended for anyone under 18, and we don't knowingly collect data from children. If you believe a child has given us personal information, email us and we'll delete it.

## Changes to this policy

If we make a material change — new categories of data, a new purpose, a shorter list of protections — we'll update the effective date above and notify account holders by email before it takes effect. Minor clarifications may be made without notice.

## Contact

Questions, requests, or complaints: **[hello@axiomat.io](mailto:hello@axiomat.io)**, or write to the address at the top of this page.

---

> ### ⚠️ Before publishing — for the site owner
>
> This draft is written to match how Ward actually works, but it is **not legal advice**, and it is not finished until you do the following:
>
> 1. **Fill every `[BRACKETED]` placeholder**: legal entity name, mailing address, Azure region, transfer mechanism, retention periods, backup window, and the form/email/payment providers you actually use.
> 2. **Set real retention periods.** "We keep logs" without a number is the weakest claim in this document and the one regulators ask about first. Pick a period you can technically enforce, then enforce it.
> 3. **Confirm the quality-review section is true.** It currently says authorized personnel may review run content. If you don't do that, narrow it. If you do, keep it — but note that the Google section deliberately excludes Google user data from that practice, and your systems must actually honor that split.
> 4. **Have a lawyer review it** before Google OAuth verification. Google reviews this page against your requested scopes, and the Limited Use language above must match your real behavior.
> 5. **Consider self-hosting the Inter font** to remove the Google Fonts disclosure entirely — one less third party, one less paragraph. It's a ten-minute change in `partials/head.html`.
> 6. **You'll also need Terms of Service** before charging anyone. This policy doesn't cover payment terms, acceptable use, or liability.
