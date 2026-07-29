# Axiomat / Ward site — relaunch status

Status of the adversarial-review hand-off list. Updated 2026-07-25.

---

## Done

### 1. Real email capture replacing `mailto:` CTAs ✅
Added `partials/signup-form.html` + submit handling in `assets/js/main.js`.
Posts `{email, use_case, source}` as form data to `site.Params.formEndpoint`, over fetch, without
leaving the page. Success clears the form; errors preserve what was typed and keep the mailto
escape hatch visible. Includes a honeypot field, inline validation, and `aria-live` status.

**Backend-agnostic:** set `formEndpoint` in `hugo.toml` (or `HUGO_PARAMS_FORMENDPOINT` in CI) to any
endpoint that accepts a form POST — Formspree, Formspark, a serverless function. **While it's empty
the form is hidden and CTAs fall back to the email link**, so nothing is broken pre-configuration.

> **← the one thing still needed from you:** paste the endpoint URL into `hugo.toml`.

Verified: success, HTTP 500, network failure, empty-email validation, and honeypot suppression.

### 2. Lead with what the product does ✅
Already landed before this pass — the `#watch` chat transcript is the strongest asset on the site.

### 3. Axiomat origin story ✅
Homepage rewritten to lead with the truth rather than reveal it in section four: "the independent
software studio of Andrew Meyer," one-person studio stated plainly as a *feature* ("no account team
between you and the person who writes the code"). Dropped the unverifiable "world's largest teams /
global scale" register. Added a "Check the work" card pointing at GitHub and the security page.
Removed the corporate "we" from the hero. Site/page descriptions updated to match.

### 4. Reliability absolutes ✅ / 5. Financial framing ✅
Already softened. Added a disclaimer directly under the chat transcript, where the market content is
loudest — the previous one sat far away in `#uses`.

### 7. Surface the security page ✅
Inline OAuth/encryption line + "See exactly how we handle your data →" in `#connect`, right where we
ask people to connect Gmail and Drive. Added `/ward/security/` to the main nav and to the new
"Who makes Ward" section.

### New findings fixed this pass

- **Theme demo content was shipping as real pages.** Hugo merges `themes/<theme>/content/`, so the
  build was producing `/posts/`, `/posts/post-1…3`, `/tags/red|blue|green` and `/categories/` — all
  branded with the Axiomat title and all listed in `sitemap.xml`. Deleted `themes/axiom/content/`
  and set `disableKinds = ['taxonomy', 'term']`. Sitemap is now exactly 3 real URLs.
- **`baseURL` was `preview.axiomat.io`.** The deploy workflow runs `hugo --gc --minify` with no
  `--baseURL` override, so every production canonical, OG URL, and sitemap entry pointed at the
  preview host. Now `https://axiomat.io/`.
- **No mobile nav.** `main.css` hid every nav link under 720px, leaving only the CTA — pricing,
  how-it-works and security were unreachable on a phone. Nav now wraps to a second row.
- **Anchor links landed under the sticky header**, and drifted further because the lazy-loaded
  screenshots reserved no space. Added `scroll-margin-top` and intrinsic `width`/`height` on the
  three product images (also helps CLS).
- **Broken nav link:** `/#what` pointed at a section that no longer exists.
- **Duplicate `layouts/partials/footer.html`** at project root shadowed the identical theme partial.
  Removed; one source of truth.
- **Stray published assets** removed: `static/images/old.md` (served at `/images/old.md`, containing
  the superseded "founded 2019 / St. Petersburg / biggest companies in the country" narrative that
  contradicted the current "Est. 2022" copy), plus 6 unreferenced images.
- **Pricing implied self-serve signup** that doesn't exist in early access. "Start free" / "Get Pro"
  / "Go bigger" → "Request access", with a line noting these are the plans at launch.

### Repositioned B2C (2026-07-25)

Go-to-market is B2C now; B2B follows as usage bootstraps. Changes:

- **Pricing (current)**: Basic (4 runs/day, $9.99) · Plus (9/day, $19.99) · Pro (15/day, $29.99),
  each with a 14-day free trial. Free, Team and Enterprise are gone. Published tier, runs/day and
  price only — the unit-cost and margin columns from the source spreadsheet are internal and are
  **not** on the site.
  *(This line was stale — it documented the intermediate Free/Ward/Pro ladder after the site had
  already shipped Basic/Plus/Pro. The design audit caught it.)*
- **Run modes section added**: Standard 1× · High 3× · Max 5×, drawn from the same daily budget.
- Removed the **Enterprise tier**, which promised SSO, security review, and private isolated setup
  while `/ward/security/` states SOC 2 and a DPA don't exist. It advertised infrastructure we don't
  have to a buyer who'd be put off on learning the studio is one person.
- Removed **Team tier's "Admin controls"**, which contradicted the roadmap on the same page
  (sharing with a team is listed under *Down the road*).
- Dropped **founder-forward and enterprise-buyer copy**: hero is product-first; "no account team
  between you and the person who writes the code" assumed a B2B reader and was replaced with what a
  consumer actually gets (fast replies, fast iteration).
- Roadmap keeps "share with family or a team" and the partner program under *Down the road* —
  honest as future intent, which matches the B2B-later plan.

---

## Still open

### 6. Security headers at the CDN/host — **not addressed**
Hosting-layer config, not in this repo. This deploys to **GitHub Pages**, which does not support
custom response headers at all: no CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy.
(GitHub Pages does send HSTS on enforced-HTTPS custom domains.) Getting the rest means fronting the
site with Cloudflare (`Transform Rules` → response headers) or moving to Netlify/Vercel/Cloudflare
Pages. Worth doing given the site sells a `/ward/security/` story.

### 8. Confirm screenshots match the shipped app — **needs your eyes**
`app-screenshot.png`, `ward-themes.png`, `ward-reshape.png`. I can't verify these against the
running product.

### Privacy policy — **drafted, needs your input before it's publishable**
`/privacy/` (`content/privacy.md`, rendered by the new `_default/legal.html` layout). Written to
match how Ward actually works: no model training, operational logs retained for monitoring and QA,
OAuth connections, Google API Limited Use commitments, subprocessors, retention, and GDPR/CCPA/state
rights. Linked from the footer and from `/ward/security/` (which previously said no policy existed).

Accepted as a work-in-progress while Ward is in early access/beta. Remaining work, kept here rather
than in the rendered page:

1. `[BRACKETED]` placeholders: legal entity name, mailing address, Azure region, EEA/UK transfer
   mechanism, retention periods, backup window, form/email/payment providers.
2. **Retention periods are the big one** — "we keep logs" with no number is the weakest claim in the
   document and the first thing a regulator asks about. Pick a period you can technically enforce.
3. Confirm the quality-review section is true. It currently says authorized personnel may review run
   content. Google user data is deliberately excluded from that practice — your systems have to
   actually honor that split, because the Limited Use language commits you to it.
4. Lawyer review before Google OAuth verification. Google reads this page against your scopes, and
   the Limited Use language must match real behavior.
5. Consider self-hosting IBM Plex to drop the Google Fonts disclosure entirely — one less third
   party, one less paragraph. Ten-minute change in `partials/head.html`. (The site moved from Inter
   to IBM Plex in the design-system pass, matching the app; the disclosure still applies.)
6. **Terms of Service still don't exist** and are needed before charging anyone. This policy doesn't
   cover payment terms, acceptable use, or liability.

**Team-size language:** the policy no longer says "often one." Claims that expire on the first hire
don't belong in a legal document nobody re-reads. It now says access is kept to the smallest group
who can do the job, which stays true at any headcount.

**Also resolved:** founding date now reads "the name on Andrew Meyer's work since 2019, and a Florida
company since 2022" rather than a bare "Est. 2022". Hero pill now says "Tampa Bay, FL".
