import type { Capability } from "@/lib/types";

export const capabilities: Capability[] = [
  {
    id: "technical-search",
    title: "Technical SEO & indexation",
    description:
      "Technical audits, crawlability and indexation, crawl budget, JavaScript SEO, canonicalization, sitemaps, robots.txt, structured data, hreflang, Core Web Vitals and site migrations.",
    tools: ["GSC", "Screaming Frog", "Ahrefs", "GA4"],
    projectSlugs: [
      "seo-rankings-report",
      "macmillan-search-practice",
      "wordpress-venue-management",
    ],
  },
  {
    id: "web-engineering",
    title: "Web development & infrastructure",
    description:
      "Full-stack development with React and Next.js, rendering strategies, dynamic routing, headless CMS, WordPress, DNS, CDN and caching—built to stay maintainable after handoff.",
    tools: ["Next.js", "React", "TypeScript", "WordPress"],
    projectSlugs: ["good-robot-brewing", "organized-chaos-arts", "eastward"],
  },
  {
    id: "data-automation",
    title: "Search analytics & automation",
    description:
      "Repeatable analytical workflows with Google Search Console, GA4, Python, SQL and BigQuery—API integrations, automated reporting and performance monitoring.",
    tools: ["Python", "SQL", "BigQuery", "GSC API"],
    projectSlugs: [
      "seo-rankings-report",
      "pcp-economic-dashboard",
      "rfp-finder",
    ],
  },
  {
    id: "applied-ai-geo",
    title: "GEO, AEO & applied AI",
    description:
      "AI-search discoverability research, LLM evaluation, prompt engineering, source verification and structured content systems that support semantic discoverability.",
    tools: ["LLM APIs", "Evaluation", "Entity architecture"],
    projectSlugs: ["manny-roy-consulting", "rfp-finder", "macmillan-search-practice"],
  },
];
