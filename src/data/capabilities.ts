import type { Capability } from "@/lib/types";

export const capabilities: Capability[] = [
  {
    id: "technical-search",
    title: "Technical SEO & search architecture",
    description:
      "I investigate how websites are crawled, rendered, indexed and discovered, translating technical findings into practical implementation priorities.",
    tools: ["GSC", "Screaming Frog", "Ahrefs", "GA4"],
    projectSlugs: [
      "marketplace-rendering-architecture",
      "enterprise-migration-qa",
      "seo-rankings-report",
      "b2b-saas-organic-growth",
    ],
  },
  {
    id: "web-engineering",
    title: "Web engineering & infrastructure",
    description:
      "I build and maintain web systems with an emphasis on reusable architecture, accessibility, performance and long-term ownership.",
    tools: ["Next.js", "React", "TypeScript", "WordPress"],
    projectSlugs: [
      "good-robot-brewing",
      "organized-chaos-arts",
      "eastward",
      "marketplace-rendering-architecture",
    ],
  },
  {
    id: "data-automation",
    title: "Data & automation",
    description:
      "I develop repeatable workflows that turn disparate data into reliable information, reducing manual work and supporting better decisions.",
    tools: ["Python", "SQL", "BigQuery", "GSC API"],
    projectSlugs: [
      "seo-rankings-report",
      "editorial-workflow-automation",
      "pcp-economic-dashboard",
      "rfp-finder",
    ],
  },
  {
    id: "applied-ai-geo",
    title: "Applied AI & GEO research",
    description:
      "I explore how language models interact with information, drawing on evaluation, source verification and structured content to investigate emerging search behaviours.",
    tools: ["LLM APIs", "Evaluation", "Entity architecture"],
    projectSlugs: [
      "editorial-workflow-automation",
      "ai-saas-content-architecture",
      "manny-roy-consulting",
      "rfp-finder",
    ],
  },
];
