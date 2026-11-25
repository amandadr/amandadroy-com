export type ProjectCategory =
  | "professional"
  | "tools"
  | "independent"
  | "lab"
  | "archive";

export type ProjectDepth = "case-study" | "project";

export type CapabilityId =
  | "technical-search"
  | "web-engineering"
  | "data-automation"
  | "applied-ai-geo";

/** Multi-paragraph bodies use blank-line breaks (`\n\n`). */
export type CaseStudySections = {
  problem: string;
  constraints: string;
  responsibility: string;
  alternatives: string;
  choice: string;
  implementation: string;
  outcome: string;
};

export type ProjectSection = {
  heading: string;
  body: string;
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  /** Short index-card summary */
  summary: string;
  /** Longer lede on the project page (optional) */
  overview?: string;
  category: ProjectCategory;
  depth: ProjectDepth;
  role: string;
  context: string;
  status: string;
  technologies: string[];
  capabilities: CapabilityId[];
  /** Optional override; otherwise derived as CATEGORY / NNN */
  code?: string;
  featured?: boolean;
  lab?: boolean;
  repository?: string;
  liveUrl?: string;
  mrcUrl?: string;
  eyebrow?: string;
  caseStudy?: CaseStudySections;
  /** Extra narrative blocks after the core case-study template */
  sections?: ProjectSection[];
  /** Bullet outcomes shown near the top of the page */
  outcomes?: string[];
  decisionNote?: string;
};

export type ExperienceHighlight = {
  /** Supports `**metric**` markers rendered as <strong>. */
  text: string;
  href?: string;
};

export type ExperienceItem = {
  company: string;
  title: string;
  /** Official org URL when stable and public */
  companyUrl?: string;
  years: string;
  summary: string;
  highlights?: ExperienceHighlight[];
  selectedWork?: { label: string; href: string }[];
  kind: "work" | "education";
};

export type Capability = {
  id: CapabilityId;
  title: string;
  description: string;
  tools: string[];
  projectSlugs: string[];
};

export type SiteMetric = {
  value: string;
  label: string;
};
