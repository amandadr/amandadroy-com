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

export type ProjectPresentation = "flagship" | "standard" | "compact";

export type EngagementType =
  | "agency"
  | "consulting"
  | "independent"
  | "open-source"
  | "educational";

export type DeliveryStatus =
  | "delivered"
  | "live"
  | "recommendation"
  | "in-progress"
  | "prototype"
  | "retired";

export type ProjectVisibility = "public" | "anonymized";

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
  /** Immutable journal ID, e.g. WORK / 004 */
  code?: string;
  featured?: boolean;
  /** Lower sorts first among featured homepage projects */
  featuredRank?: number;
  presentation?: ProjectPresentation;
  engagementType?: EngagementType;
  deliveryStatus?: DeliveryStatus;
  visibility?: ProjectVisibility;
  relatedProjectSlugs?: string[];
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
  /** Project URL; only `linkText` is hyperlinked, not the whole bullet. */
  href?: string;
  /** Phrase inside `text` (without `**`) wrapped as the link. */
  linkText?: string;
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
  href?: string;
};
