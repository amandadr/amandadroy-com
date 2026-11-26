import type { SiteMetric } from "@/lib/types";

export const SITE_URL = "https://amandadroy.com";
export const SITE_TITLE = "Manny Roy | Technical SEO and Software Development";
export const SITE_DESCRIPTION =
  "Technical portfolio of Manny Roy (also known as Amanda Roy): technical SEO specialist and full-stack developer working across search, automation, GEO/AEO and web systems from Souris, PEI.";
export const SITE_NAME = "Manny Roy";
export const ALTERNATE_NAME = "Amanda Roy";
export const EMAIL = "manny@mannyroy.com";
export const LOCATION = "Souris, Prince Edward Island, Canada";
export const PERSON_ID = `${SITE_URL}/#person`;

/** Stable sitemap / freshness date — bump when major public content changes. */
export const SITE_CONTENT_UPDATED = "2026-11-25";

export const SOCIAL = {
  github: "https://github.com/amandadr",
  linkedin: "https://www.linkedin.com/in/amandadroy/",
  mrc: "https://www.mannyroy.com/",
  email: `mailto:${EMAIL}`,
} as const;

/** No public résumé PDF—recruiters request the current CV by email. */
export const CV_REQUEST_MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "CV request — Manny Roy portfolio",
)}&body=${encodeURIComponent(
  "Hi Manny,\n\nI'm interested in reviewing your CV for the following role/context:\n\n",
)}`;

export const NAV_LINKS = [
  { href: "/work/", label: "Work" },
  { href: "/experience/", label: "Experience" },
  { href: "/lab/", label: "Lab" },
  { href: "/about/", label: "About" },
] as const;

export const FOOTER_LINKS = [
  { href: SOCIAL.github, label: "GitHub", external: true },
  { href: SOCIAL.linkedin, label: "LinkedIn", external: true },
  { href: SOCIAL.mrc, label: "Manny Roy Consulting", external: true },
  { href: SOCIAL.email, label: "Email", external: true },
] as const;

/** Short hero lede — longer narrative lives on About. */
export const SITE_HERO_LEDE =
  "I'm a technical SEO specialist and full-stack developer. I diagnose search problems, build the fixes and automate the reporting that proves they worked.";

export const SITE_HERO_META =
  "Based in Prince Edward Island, Canada · Available for remote opportunities";

/** Longer professional summary for About and metadata-adjacent uses. */
export const SITE_INTRO =
  "Technical SEO specialist and full-stack developer with 3+ years of agency and consulting experience across B2B SaaS, e-commerce, marketplaces and enterprise sites—including concurrent multi-site portfolios at large URL scale. I combine technical SEO with hands-on development, Python automation and applied AI to investigate architectural issues, identify scalable opportunities and build repeatable analytical workflows.";

/** Verified against the current technical résumé PDF. */
export const SITE_METRICS: SiteMetric[] = [
  {
    value: "50+",
    label: "Technical SEO audits delivered",
    href: "/work/macmillan-search-practice/",
  },
  {
    value: "226%",
    label: "Avg. organic click growth across 18 SaaS pages",
    href: "/work/b2b-saas-organic-growth/",
  },
  {
    value: "10k+",
    label: "URLs across supported multi-site portfolios",
    href: "/work/macmillan-search-practice/",
  },
  {
    value: "~3×",
    label: "Editorial production capacity via workflow automation",
    href: "/work/editorial-workflow-automation/",
  },
];

export const ANONYMIZED_DISCLOSURE =
  "Client details are anonymized. Methods and outcomes describe the work as delivered.";
