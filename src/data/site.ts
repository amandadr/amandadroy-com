import type { SiteMetric } from "@/lib/types";

export const SITE_URL = "https://amandadroy.com";
export const SITE_TITLE = "Manny Roy | Technical SEO and Software Development";
export const SITE_DESCRIPTION =
  "Technical portfolio of Manny Roy (also known as Amanda Roy): technical SEO specialist and full-stack developer working across search, automation, GEO/AEO and web systems from Souris, PEI.";
export const SITE_NAME = "Manny Roy";
export const ALTERNATE_NAME = "Amanda Roy";
export const EMAIL = "manny@mannyroy.com";
export const LOCATION = "Souris, Prince Edward Island, Canada";

export const SOCIAL = {
  github: "https://github.com/amandadr",
  linkedin: "https://www.linkedin.com/in/amandadroy/",
  mrc: "https://www.mannyroy.com/",
  email: `mailto:${EMAIL}`,
} as const;

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

export const RESUME_PATH = "/resume/manny-roy-technical.pdf";

/** Verified against the current technical résumé PDF. */
export const SITE_METRICS: SiteMetric[] = [
  { value: "50+", label: "Technical SEO audits" },
  { value: "226%", label: "Avg. click growth across 18 SaaS pages" },
  { value: "3+", label: "Years in SEO & web systems" },
];

export const SITE_INTRO =
  "Technical SEO specialist and full-stack developer with 3+ years of agency and consulting experience across B2B SaaS, e-commerce, marketplaces and enterprise sites—including multi-site portfolios spanning thousands to tens of thousands of URLs. I combine technical SEO with hands-on development, Python automation and applied AI to investigate architectural issues, identify scalable opportunities and build repeatable analytical workflows.";
