# Tasks that need your judgment

Items from `docs/keep-working.md` that I did **not** fully decide or invent for you. Everything else in this pass was implemented from clear brief copy or existing résumé-safe facts.

## Content & confidentiality

1. **Exact metrics in public copy** — Keep `226%`, `224` URLs, `~3×`, `96%` / `127+` as-is, round them, or soften to qualitative language? Brief warns niche + exact numbers can re-identify clients.
2. **Résumé PDF** — Confirm `public/resume/manny-roy-technical.pdf` is the intended *general* résumé only (no confidential client names you do not want public). Site anonymizes; PDF may still name clients.
3. **Project years** — Several catalog dates still say `2025` while older materials say `2026`. Confirm year semantics (start vs ship vs engagement span) per project before we rewrite chronology.
4. **P1 catalogue additions** — Approve which of these become pages next, and supply any missing detail: enterprise content consolidation, Webflow optimization, multi-site SEO overview, multi-brand advisory, AI microcredential, tourism AI training, B2B technical editorial / writing samples.
5. **P2 / under-documented ideas** — Paid vs organic attribution, RAG work, Squarespace automation, UX experiments: only proceed when you can share public-safe method + evidence.

## Artifacts & visuals

6. **Flagship figures** — Provide or approve diagrams/screens for: SEO Rankings Report sample output, marketplace rendering comparison, migration QA checklist, pillar/cluster map, editorial pipeline. Brief wants genuine or explicitly synthetic artifacts—not decorative placeholders.
7. **OG / social images** — Want a default share image and/or per-project images? `summary_large_image` is declared without a real image asset yet.
8. **Headshot usage** — About page now features `/images/headshot.webp`. OK to reuse on Experience/Home, or About-only?
9. **Favicon** — Site icon is now `mannyroy.svg` (wordmark). Prefer a simplified mark / cropped “M” for tiny favicon sizes?

## Art direction

10. **Masthead** — Prototyped lighter paper/ink header with maroon rule (vs MRC olive). Keep, tweak, or revert to olive chrome?
11. **Homepage featured set** — Currently: SEO Rankings (flagship), B2B SaaS growth, marketplace rendering, Good Robot, enterprise migration QA, editorial automation. Swap any in/out?
12. **Case study template flexibility** — Core fields are required; optional sections still authorable. Want a fully custom `blocks[]` schema next (figures/code/tables), or stay with prose sections until artifacts exist?

## Product / ops

13. **Deploy** — Local `main` may be ahead of `origin`; gh-pages deploy is separate. Say when you want push + Pages redeploy.
14. **Analytics** — Wire Plausible/GA for résumé downloads and case-study engagement, or leave dark until you choose a vendor?
15. **Deep-link QA** — After next deploy, confirm every new `/work/.../` URL returns 200 on the live domain (including the five new agency case studies).
16. **Sitemap freshness** — Sitemap now uses `SITE_CONTENT_UPDATED` for static routes and project year end-dates (not build time). Want per-project `updatedAt` fields instead?

## Already done this pass (no judgment required to ship)

- Favicon → `mannyroy.svg`
- About narrative + headshot
- Condensed homepage hero, linked 4-metric strip, Areas of practice, lab preview
- Five shareable anonymized agency case studies + MacMillan practice overview
- Experience links to those case studies; confidentiality disclosure on anonymized pages
- Capability browsing on Work; related-project links; Person `@id` / MRC as Organization founder
- Lighter masthead prototype; flagship/standard/compact case-row variants
