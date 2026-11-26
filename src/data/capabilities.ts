import type { Capability } from "@/lib/types";

export const capabilities: Capability[] = [
  {
    id: "technical-search",
    title: "Technical SEO & search architecture",
    description:
      "Crawling, rendering, indexation and migrations—diagnosed from crawl and Search Console data, then turned into fixes developers can schedule.",
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
      "Next.js, WordPress and custom plugins built for accessibility, performance and a clean handoff to the people who run them.",
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
      "Python and API workflows that replace repetitive reporting—from Search Console comparisons to public-data dashboards.",
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
      "Human-reviewed AI workflows, LLM evaluation and structured content built for visibility in AI search.",
    tools: ["LLM APIs", "Evaluation", "Entity architecture"],
    projectSlugs: [
      "editorial-workflow-automation",
      "ai-saas-content-architecture",
      "manny-roy-consulting",
      "rfp-finder",
    ],
  },
];
