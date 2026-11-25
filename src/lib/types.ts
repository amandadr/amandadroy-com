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

export type CaseStudySections = {
  problem: string;
  constraints: string;
  responsibility: string;
  alternatives: string;
  choice: string;
  implementation: string;
  outcome: string;
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  summary: string;
  category: ProjectCategory;
  depth: ProjectDepth;
  role: string;
  context: string;
  status: string;
  technologies: string[];
  capabilities: CapabilityId[];
  featured?: boolean;
  lab?: boolean;
  repository?: string;
  liveUrl?: string;
  mrcUrl?: string;
  eyebrow?: string;
  caseStudy?: CaseStudySections;
  decisionNote?: string;
};

export type ExperienceItem = {
  company: string;
  title: string;
  years: string;
  summary: string;
  highlights?: string[];
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
