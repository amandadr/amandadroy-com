export const SITE_URL = "https://amandadroy.com";
export const SITE_TITLE = "Manny Roy | Technical SEO and Software Development";
export const SITE_DESCRIPTION =
  "Technical portfolio of Manny Roy (also known as Amanda Roy): technical SEO, software development, automation, and systems work based in Prince Edward Island, Canada.";
export const SITE_NAME = "Manny Roy";
export const ALTERNATE_NAME = "Amanda Roy";
export const EMAIL = "amandadroy@gmail.com";
export const LOCATION = "Prince Edward Island, Canada";

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
