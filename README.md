# amandadroy.com — technical portfolio

Statically generated Next.js portfolio for [amandadroy.com](https://amandadroy.com). It is the technical counterpart to [mannyroy.com](https://www.mannyroy.com): decisions, systems, and outcomes for hiring managers, engineers, and collaborators—not a second consultancy homepage.

## Why this architecture

- **Static export** (`output: 'export'`) so primary content is in the initial HTML
- **Unique URLs** for every project under `/work/[slug]/`
- **Design system from [ghost-custom](../ghost-custom)** — colours, IBM Plex, composition primitives, section headers, case rows, buttons, and section tones — without copying MRC’s sitemap
- **Portfolio IA:** Home, Work, Experience, Lab, About

## Local development

```bash
npm install
npm run dev
```

```bash
npm run test:content   # fails if projects lack required fields / case-study sections
npm run build          # validates content, then static export to out/
```

## Content

Projects live in [`src/data/projects.ts`](src/data/projects.ts). Experience and capabilities are adjacent typed modules. Featured projects must be `depth: "case-study"` with full sections.

## Design

Styles under `src/styles/` are adapted from the MRC Ghost theme (`ghost-custom`):

- Tokens: cream `#F0E8E0`, paper `#FAF6F0`, ink, mustard, olive, maroon
- Fonts: self-hosted IBM Plex Sans / Serif
- Layout: `gh-outer` / `gh-inner`, stack / cluster / grid
- Blocks: hero, section header, case-study row, footer

Replace `public/resume/manny-roy-technical.pdf` with your current general technical résumé before cutover.

## Analytics

Optional. Set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` or `NEXT_PUBLIC_GA_ID`. Neither script loads when unset.

## Related

- Live consulting site: [mannyroy.com](https://www.mannyroy.com)
- Theme source of design system: `ghost-custom`
- Previous CRA portfolio (untouched until cutover): `my-website`
