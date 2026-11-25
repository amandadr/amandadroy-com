import type { Capability } from "@/lib/types";

export const capabilities: Capability[] = [
  {
    id: "technical-search",
    title: "Technical search",
    description:
      "Crawlability, rendering, indexing, migrations, structured data, and scalable search architecture.",
    tools: ["GSC", "Screaming Frog", "Ahrefs"],
    projectSlugs: [
      "seo-rankings-report",
      "wordpress-venue-management",
      "macmillan-search-practice",
    ],
  },
  {
    id: "web-engineering",
    title: "Web engineering",
    description:
      "Maintainable frontend architecture, CMS integrations, reusable components, and custom functionality.",
    tools: ["Next.js", "React", "TypeScript", "PHP"],
    projectSlugs: ["eastward", "good-robot-brewing", "organized-chaos-arts"],
  },
  {
    id: "data-automation",
    title: "Data & automation",
    description:
      "Repeatable analytical workflows, API integrations, reporting tools, and decision-ready dashboards.",
    tools: ["Python", "SQL", "Tableau"],
    projectSlugs: [
      "seo-rankings-report",
      "pcp-economic-dashboard",
      "rfp-finder",
    ],
  },
  {
    id: "applied-ai-geo",
    title: "Applied AI & GEO",
    description:
      "LLM evaluation, structured content systems, AI-assisted workflows, and search visibility research.",
    tools: ["LLM APIs", "Evaluation", "Semantic architecture"],
    projectSlugs: ["rfp-finder", "manny-roy-consulting", "hyrule-merchant"],
  },
];
