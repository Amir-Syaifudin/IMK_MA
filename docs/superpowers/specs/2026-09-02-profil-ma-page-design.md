# Halaman Profil Mahkamah Agung — Design Spec

**Status:** Approved for planning
**Route:** `/profil` (existing placeholder route, to be replaced)
**Source content:** https://id.wikipedia.org/wiki/Mahkamah_Agung_Republik_Indonesia

## Purpose

`/profil` currently renders a bare `PlaceholderPage` ("Halaman ini sedang dalam pengembangan"). This spec replaces it with a real content page summarizing Mahkamah Agung's history, authority, and organizational structure, sourced from the Wikipedia ID article. Depth is intentionally "ringkas" (concise) — this is a general-public civic site, not a legal reference, so dense subsections (judge appointment requirements, full registry/secretariat breakdown, appellate court lists, 2004-2017 performance data, photo gallery) are explicitly out of scope.

## Scope Decisions (from brainstorming)

- **Depth:** Ringkas — short history, 4-point authority list, condensed structure (leadership + chamber system), key facts. Not the full Wikipedia depth.
- **Layout:** Plain single page, top to bottom. No in-page jump nav, no tabs, no accordion.
- **Visi & Misi:** Excluded — not present in the Wikipedia source; do not add content from elsewhere.
- **Gallery:** Excluded — matches this site's existing anti-clutter convention (no photo widgets on other pages).

## Content

All text below is final copy (Indonesian), condensed from the fetched Wikipedia article. Use verbatim in the data file — do not paraphrase further or leave placeholders.

### Key facts (4 cards)

| Label | Value |
|---|---|
| Didirikan | 19 Agustus 1945 |
| Ketua Saat Ini | Sunarto (sejak 3 April 2023) |
| Alamat | Jl. Medan Merdeka Utara No. 9-13, Jakarta Pusat 10110 |
| Perkara Masuk (2024) | 31.138 perkara |

### Sejarah (one paragraph)

> Mahkamah Agung Republik Indonesia berakar dari Hooggerechtshof, lembaga peradilan tertinggi pada masa Hindia Belanda. Setelah proklamasi kemerdekaan, Mahkamah Agung RI resmi dibentuk pada 19 Agustus 1945 dengan Mr. Dr. R.S.E. Koesoemah Atmadja sebagai Ketua pertama. Lembaga ini sempat berpindah ke Yogyakarta pada masa revolusi kemerdekaan, kemudian mengalami unifikasi sistem peradilan setelah pengakuan kedaulatan. Reformasi besar terjadi pada era 1998, ketika kekuasaan kehakiman dipisahkan sepenuhnya dari kekuasaan eksekutif, menjadikan Mahkamah Agung lembaga yudikatif yang mandiri.

### Wewenang (4 cards)

1. **Mengadili pada Tingkat Kasasi** — Memeriksa dan memutus permohonan kasasi terhadap putusan pengadilan di bawahnya.
2. **Mengusulkan Hakim Konstitusi** — Mengajukan calon hakim untuk Mahkamah Konstitusi.
3. **Menguji Peraturan di Bawah Undang-Undang** — Menguji peraturan perundang-undangan di bawah undang-undang terhadap undang-undang (hak uji materiil).
4. **Pertimbangan Grasi & Rehabilitasi** — Memberikan pertimbangan hukum kepada Presiden atas permohonan grasi dan rehabilitasi.

### Struktur Organisasi (one paragraph)

> Pimpinan Mahkamah Agung terdiri dari seorang Ketua dan dua Wakil Ketua — bidang yudisial dan bidang non-yudisial — didampingi ketua-ketua kamar. Sejak 2011, Mahkamah Agung menerapkan sistem kamar yang membagi hakim agung ke dalam lima kamar spesialisasi: Perdata, Pidana, Agama, Tata Usaha Negara, dan Militer. Mahkamah Agung dapat memiliki paling banyak 60 hakim agung.

### Source citation

A small line at the bottom of the page: "Sumber: Wikipedia" linking to `https://id.wikipedia.org/wiki/Mahkamah_Agung_Republik_Indonesia` (external link, `target="_blank" rel="noopener noreferrer"`).

## File Structure

- **Create** `src/app/data/profilMA.ts` — typed content module (facts array, sejarah string, wewenang array, struktur string, source URL). Separates content from presentation, matching the pattern already established this session for `src/app/lib/unifiedSearch.ts` and the `dummyData` content in `InformationPage.tsx`.
- **Create** `src/app/pages/ProfilPage.tsx` — page component. Visual language matches `InformationPage.tsx` (header: gold icon badge + title + gold underline bar, `bg-[var(--ma-bg)]` page background, white rounded cards with `border-gray-100`) and `Homepage.tsx`'s `SectionHeader` pattern for section titles. Uses the `Buildings` icon (already used for "Profil MA" in `Navbar.tsx`) for the header badge.
- **Modify** `src/app/routes.tsx` — replace the inline `PlaceholderPage` element at `path: "profil"` with `<ProfilPage />`, add the import.

## Visual Design

- Header: gold icon badge (`Buildings` icon) + `<h1>Profil Mahkamah Agung</h1>` + gold underline bar — copy `InformationPage.tsx`'s header block structure exactly.
- Key facts: 4-card grid (`grid-cols-2 md:grid-cols-4`, matching the responsive pattern already used for the homepage hero CTAs), each card: icon + label (muted, uppercase, small) + value (bold). Icons: `CalendarBlank` (Didirikan), `Users` (Ketua Saat Ini), `MapPin` (Alamat), `FileText` (Perkara Masuk).
- Sejarah: a single white card, `<h2>Sejarah</h2>` + paragraph, `leading-relaxed`.
- Wewenang: 4-card grid (`grid-cols-1 sm:grid-cols-2`), each card: icon + bold title + description. Icons: `Gavel` (Kasasi), `Scales` (Usul Hakim Konstitusi), `ClipboardText` (Menguji Peraturan), `HandHeart` (Grasi & Rehabilitasi) — confirmed present in the installed `@phosphor-icons/react` package (`node_modules/@phosphor-icons/react/dist/csr/HandHeart.d.ts`).
- Struktur Organisasi: a single white card, `<h2>Struktur Organisasi</h2>` + paragraph, same style as Sejarah.
- Source line: small muted text at the very bottom, above where `Footer` renders (Footer is provided by `Layout.tsx`, not part of this page).
- Colors/typography: reuse existing CSS variables only (`--ma-green`, `--ma-gold`, `--ma-gold-soft`, `--ma-title`, `--ma-text`, `--ma-text-muted`, `--ma-bg`) — no new tokens.

## Out of Scope

- Photo gallery (Wikipedia's "Galeri" section).
- Full judge-appointment requirements (age, education, experience thresholds).
- Full Kepaniteraan/Sekretariat organizational breakdown.
- List of appellate courts (5 types) and first-instance court environments (4 types).
- 2004-2017 performance/backlog statistics.
- "Visi & Misi" section (not in the Wikipedia source).
- Wiring the dead `tentangItems` array in `Navbar.tsx` into working sub-navigation — this page is a single flat page, not a hub with sub-pages. `tentangItems` remains unused dead code; not addressed by this spec.
- Historical list of all past Ketua Mahkamah Agung with years (the source article does not provide a complete list).

## Testing

This project has no automated test suite (confirmed: `package.json` has only `build`/`dev` scripts, no test runner). Verification is manual, matching how every other page in this codebase is verified:

1. `npm run build` — must succeed with no errors.
2. Browser check at desktop width (~1440px) and mobile width (~390px): all 4 sections render, no layout overflow, no broken images (there are none — this page is text/icon only), no console errors.
3. Confirm `/profil` no longer shows the "Halaman ini sedang dalam pengembangan" placeholder text.
4. Confirm the Wikipedia source link opens in a new tab.
