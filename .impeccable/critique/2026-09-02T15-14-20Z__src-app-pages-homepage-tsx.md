---
target: Homepage (src/app/pages/Homepage.tsx)
total_score: 21
max_score: 40
na_heuristics: 
p0_count: 2
p1_count: 2
target_identity: "file:D:\\Projek kuli ah\\IMK_MA\\src\\app\\pages\\Homepage.tsx"
target_fingerprint: "sha256:84ef1022d4dc21d94c9139831c63dc425c1a71c41ba1b31a2b947a8bca7017a9"
target_path: "D:\\Projek kuli ah\\IMK_MA\\src\\app\\pages\\Homepage.tsx"
timestamp: 2026-09-02T15-14-20Z
slug: src-app-pages-homepage-tsx
closed: true
---
Method: dual-agent (A: a4f6dce5a515d998a · B: a717c39f2d0c1eb10)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Card hover feedback works, but "Lihat Semua Berita" / "Baca Selengkapnya" buttons give zero feedback because they do nothing |
| 2 | Match System / Real World | 3 | Indonesian legal terms and formal institutional tone used naturally throughout |
| 3 | User Control and Freedom | 2 | Search modal closes via backdrop/Esc; mobile menu has no obvious close besides re-tapping the hamburger |
| 4 | Consistency and Standards | 1 | "Cek Status Perkara" is the same label pointing at 3 different destinations (hero CTA, service grid, footer/nav) |
| 5 | Error Prevention | 2 | Search empty-state message is good; dead buttons are an uncaught error class of their own |
| 6 | Recognition Rather Than Recall | 3 | Icons paired with labels consistently across service cards and nav |
| 7 | Flexibility and Efficiency | 2 | "Populer" quick-tags in search are a nice accelerator; no other shortcuts exist |
| 8 | Aesthetic and Minimalist Design | 2 | Hero is clean; 8-card service grid plus a duplicate CTA adds clutter the brief asked to avoid |
| 9 | Error Recovery | 2 | No error states to observe on this page beyond the (good) search empty-state |
| 10 | Help and Documentation | 2 | "Bantuan" nav item routes to FAQ; no contextual help on the homepage itself |
| **Total** | | **21/40** | **Acceptable** |

## Design Specificity Verdict

**LLM assessment**: The homepage is authored for Mahkamah Agung specifically, not a reskinned template — deliberate deep-green/gold palette, Playfair Display serif headlines, a real court-building photo, a circular seal mark, and institution-specific copy. That said, the brief explicitly specified maroon/white ("#8B0000... karena identitas kelembagaan harus tetap terasa") and the implementation substituted green/gold instead — a real, documented deviation from the stated brand grounding, not just a stylistic license. Execution also undercuts the specificity gain: the "Layanan & Inovasi Digital" grid mixes MA's real sub-systems (SIPP, e-Court, e-Berpadu) with generic internal links (Pengumuman, Kepaniteraan) into one undifferentiated 8-card wall, closer to "here is every link we have" than a curated portal.

**Deterministic scan**: `detect.mjs --json` on Homepage.tsx + 4 related components returned exit 0 / zero findings (static AST scan). The live DOM overlay (via injected detect.js) found 14 anti-patterns the static scan missed: undersized 10px text ("Republik Indonesia" nav subtitle), an all-caps 46-character hero motto, a skipped heading level (`<h1>` → `<h3>` with no `<h2>`, on the hero CTA titles), 4× "icon-tile-stack" flags on the hero CTA buttons (a generic icon-over-label pattern — reinforces the LLM's genericness concern, just located one section higher than the LLM flagged it), and 8 low-contrast readings. Six of those low-contrast readings (white text against `#f2f2f2`) are very likely false positives — the detector samples an ambient page background value and cannot read the hero's gradient/photo backdrop, so it is not measuring what a user actually sees. The remaining low-contrast reading — `#c9a84c` gold on a near-white background — is corroborated independently by the manual scan (`NewsCard.tsx:23`, "Baca Selengkapnya →" in gold-on-white) and by the same gold token reused in "Lihat Semua Berita"; this one is real, not a sampling artifact, and estimates to roughly 2:1 against a 4.5:1 requirement.

**Visual overlays**: No user-visible overlay was left running in a browser tab for you — the live-server used for detection was stopped again after evidence was captured, per the isolation/cleanup requirement for this run. The findings above are the summarized console output.

## Overall Impression

The hero is the strongest thing on the page: an authoritative, calm first impression that fits a judicial institution. Everything below it gets progressively less considered — an 8-card link wall, three different destinations behind one repeated button label, and two dead buttons in the news section. The single biggest opportunity is finishing what's already started: the search modal and the hero are genuinely well-built; the rest of the page needs to be brought up to that same bar rather than redesigned from scratch.

## What's Working

1. **Hero composition** (Homepage.tsx:127-198): layered gradient + vignette over the court photo, gold uppercase motto, glassmorphic CTA buttons — high-fidelity, on-brand, matches the brief's ask for something that "looks like a real website."
2. **Navbar search modal** (Navbar.tsx:276-446): live, categorized results (Perkara/Berita/Agenda) with icons and a genuinely helpful empty-state message — the best-executed interaction on the whole surface.
3. **Footer contact block** (Footer.tsx:177-213): concrete address/phone/email with clean icon-label pairing — a small but real trust signal for someone who needs to reach a human.

## Priority Issues

**[P0] Dead CTAs in the news section.**
Why it matters: `Homepage.tsx:228` ("Lihat Semua Berita") and `NewsCard.tsx:23` ("Baca Selengkapnya →" on all 3 cards) are plain `<button>` elements with no `onClick` and no `href`/`Link`. Every interaction in the news section is non-functional; for a visitor already anxious about a legal matter, a dead button reads as "this government site is broken," which is corrosive to trust.
Fix: wire "Lihat Semua Berita" to `Link to="/id/berita"`, and give each news card either a real detail route or drop the "Baca Selengkapnya" affordance if no detail page exists yet.
Suggested command: `/impeccable harden`

**[P0] "Cek Status Perkara" resolves to three different destinations under the same label.**
Why it matters: the hero CTA points to `/perkara?tab=status` (internal, and that query param isn't even read by SearchPage), the service-grid card and footer/nav "Layanan Digital" entries point to `https://sipp.pn-jakartapusat.go.id` (a single-district external system). Same visible label, three behaviors — a direct Nielsen Consistency violation, and confusing for a first-time visitor who has no way to know which one is "the" status checker.
Fix: pick one canonical status-check destination and repoint every instance of the label to it, or rename the internal one so it's not a homonym.
Suggested command: `/impeccable clarify`

**[P1] Hero CTAs are pushed off-screen on mobile.**
Why it matters: at 390×844 only part of the 4-button row is visible without scrolling past the heading/tagline/description block, defeating the brief's own stated purpose (an immediately visible "where do I start" CTA row) for exactly the audience most likely to be on a phone.
Fix: compress the heading/tagline stack on small viewports, or reflow the CTA row above/beside the description at mobile widths.
Suggested command: `/impeccable adapt`

**[P1] No persistent search bar on the homepage body.**
Why it matters: the redesign brief explicitly calls for a single global search box "below the hero, on the page itself." The implementation moved search entirely into a navbar-triggered modal, so it's invisible until a visitor notices and clicks "Cari" in the top-right — the exact "pengunjung tidak tahu harus mulai dari mana" problem the brief was written to solve, just moved one click deeper.
Fix: add a persistent inline search input below the hero, in addition to (not instead of) the navbar modal.
Suggested command: `/impeccable layout`

**[P2] Service grid shows 8 cards; the brief asks for 4-6.**
Why it matters: `Homepage.tsx:52-101` renders SIPP/e-Court/e-Berpadu (external, leaves the site) and Jadwal Sidang/Kepaniteraan/Pengumuman (internal) as one flat, undifferentiated grid — no visual cue distinguishes "stays here" from "leaves to a legacy system," and the count itself doubles the brief's target, working against the "reduce clutter vs. the old site" goal.
Fix: trim to the brief's 4-6 curated services, or split into two visually distinct groups with an external-link affordance on the ones that leave the site.
Suggested command: `/impeccable distill`

## Persona Red Flags

**Jordan (anxious first-timer)** looking for "cari putusan" on mobile: lands on a wall of green and has to scroll past roughly 600px of heading/tagline/description before reaching any button — the same "doesn't know where to start" problem the old site had, now reproduced on small screens. If he later scrolls to the news section hoping for more context, "Baca Selengkapnya" does nothing.

**Sam (screen-reader/keyboard-only)**: the 4 hero CTA buttons have rich hover styling (`hover:-translate-y-1`, gold border glow) but no custom focus/focus-visible treatment in that block, so keyboard focus falls back to the browser default outline against a dark photographic background — much lower-visibility than what mouse users get. Tabbing through would also land on "Cek Status Perkara" twice with no way to tell, until activating it, that the two lead to different systems.

**Casey (distracted, thumb-only mobile)** trying to "adukan pelanggaran": Pengaduan is the 4th of 4 hero buttons, requiring a full scroll; via the hamburger menu instead, "Pengaduan" is the last item after roughly a dozen other rows in one flat, unsectioned list.

## Minor Observations

- `NewsCard.tsx` title truncates mid-word via `line-clamp-2` ("...Sistem Digital untuk Transparan..."); clamp at a word boundary or shorten source titles.
- Footer social icons and "Kebijakan Privasi" / "Syarat & Ketentuan" all use `href="#"` — dead links on an otherwise credible footer (Footer.tsx:31-53, 224-234).
- `#root` carries the real scroll (`height:100vh; overflow-y:auto`) instead of the document scrolling naturally; this can suppress mobile browsers' address-bar auto-collapse, quietly costing vertical space on the small screens this audience uses most.
- Hero uses `backgroundAttachment: "fixed"` (Homepage.tsx:132), which renders inconsistently on mobile Safari/Android Chrome.
- Detector flagged a skipped heading level (`<h1>` directly to `<h3>` on the hero CTA titles, no `<h2>`) — a real semantic/screen-reader issue neither assessment's manual read caught on its own; worth a quick pass to insert or relabel heading levels site-wide, not just here.

## Questions to Consider

1. Was the maroon-to-green/gold palette swap validated against real MA branding guidance, or is it a stylistic preference that quietly drifted from the brief's stated identity requirement?
2. With 8 service cards, 4 hero CTAs, and a flat mobile menu of a dozen-plus items, has clutter actually been reduced versus the old site, or just relocated into a cleaner visual shell?
3. If the homepage's own hero already has an internal/external ambiguity on "Cek Status Perkara," is the homepage the redesign's single source of truth, or a thin wrapper over the same scattered-portal problem it was meant to fix?
