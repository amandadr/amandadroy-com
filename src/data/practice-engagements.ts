import type { Project } from "@/lib/types";

/**
 * Cross-account practice notes kept as standalone pages.
 * Squarespace publishing, UX experimentation and paid/organic attribution
 * were merged into stronger case studies (see src/data/redirects.ts).
 */
export const practiceEngagements: Project[] = [
  {
    slug: "technical-audit-methodology",
    title: "Technical audit methodology",
    headline: "How technical SEO audits become implementation work",
    year: "2024–2025",
    code: "WORK / 022",
    eyebrow: "Technical SEO · Prioritization · Delivery",
    summary:
      "How technical SEO audits were structured across agency and consulting work—crawlability, rendering, indexation and performance findings carried into prioritized recommendations, IA opportunities and stakeholder reporting.",
    overview:
      "Each audit followed the same loop: investigate, prioritize, recommend, support implementation and measure. Crawl, rendering, indexation and performance findings fed content plans, information architecture and web strategy, not just bug lists.\n\nMore than fifty audits across agency and consulting work used this approach.",
    category: "professional",
    depth: "case-study",
    role: "SEO Specialist",
    context: "Agency & consulting practice",
    status: "Delivered across engagements",
    technologies: [
      "Screaming Frog",
      "Sitebulb",
      "Lighthouse/PSI",
      "GSC",
      "Prioritized roadmaps",
    ],
    capabilities: ["technical-search"],
    featured: false,
    presentation: "standard",
    editorialRank: 20,
    engagementType: "agency",
    deliveryStatus: "delivered",
    visibility: "public",
    relatedProjectSlugs: [
      "macmillan-search-practice",
      "enterprise-migration-qa",
    ],
    outcomes: [
      "Repeatable audit → recommendation → reporting loop across diverse architectures",
      "Findings carried into content, IA and web-strategy opportunities",
      "50+ technical SEO audits delivered across agency and consulting work",
    ],
    caseStudy: {
      problem:
        "Stakeholders often receive crawl dumps without a clear sense of what to fix first—or how audit findings relate to content and architecture decisions.",
      constraints:
        "Concurrent accounts, mixed stacks and limited engineering time.",
      responsibility:
        "Structure technical audits so crawlability, rendering, indexation and performance findings become ranked implementation recommendations and stakeholder-ready reporting.",
      alternatives:
        "Tool exports without narrative; checklist SEO disconnected from information architecture; or endless discovery with no delivery.",
      choice:
        "Audit-first delivery that carries findings into content opportunities, information architecture and web strategy.",
      implementation:
        "Combined Screaming Frog/Sitebulb crawls, Lighthouse/PSI signals and Search Console evidence with written priorities suited to developers and marketers.",
      outcome:
        "A durable audit method used across more than fifty engagements, with findings that could move into implementation planning.",
    },
    blocks: [
      {
        type: "steps",
        heading: "The delivery loop",
        items: [
          "Investigate: crawl, render checks, Search Console and performance signals.",
          "Prioritize: rank by risk, effort and dependency on other workstreams.",
          "Recommend: write implementation notes developers can schedule.",
          "Support: clarify findings during engineering and content handoff.",
          "Validate: re-crawl or re-measure after changes land.",
        ],
      },
    ],
  },
  {
    slug: "llm-evaluation-practice",
    title: "LLM evaluation practice",
    headline: "Judging model answers when fluency is not enough",
    year: "2023–2025",
    code: "WORK / 024",
    eyebrow: "Evaluation · Prompting · Quality",
    summary:
      "Evaluated LLM outputs for reasoning, factual accuracy, instruction adherence and response quality—refining prompts and evaluation approaches for complex coding tasks at Data Annotation Tech.",
    overview:
      "Fluent model answers can still fail on reasoning, factuality or instruction adherence. At Data Annotation Tech (2023–2025), I evaluated LLM outputs against those criteria—including complex coding tasks—and refined prompts and evaluation approaches when responses missed the mark.\n\nThat judgment carried into later curriculum work and human-reviewed editorial automation.",
    category: "professional",
    depth: "case-study",
    role: "Machine Learning Developer",
    context: "Data Annotation Tech",
    status: "Completed",
    technologies: [
      "LLM evaluation",
      "Prompt refinement",
      "Factual accuracy review",
      "Coding-task assessment",
    ],
    capabilities: ["applied-ai-geo"],
    featured: false,
    presentation: "standard",
    editorialRank: 28,
    engagementType: "educational",
    deliveryStatus: "delivered",
    visibility: "public",
    relatedProjectSlugs: [
      "editorial-workflow-automation",
      "applied-ai-microcredential",
    ],
    outcomes: [
      "Multi-year LLM output evaluation across reasoning and coding tasks",
      "Prompt and evaluation-approach refinement for accuracy-sensitive judgments",
      "Foundation for later human-reviewed AI workflows",
    ],
    caseStudy: {
      problem:
        "LLM outputs can look fluent while failing on reasoning, factuality or instruction adherence—especially on technical coding tasks.",
      constraints:
        "Vendor evaluation protocols and confidential task material.",
      responsibility:
        "Evaluate outputs against quality criteria and refine prompts/evaluation approaches for complex coding work.",
      alternatives:
        "Accept surface fluency; score only formatting; or skip structured criteria entirely.",
      choice:
        "Treat evaluation as a disciplined review practice that surfaces unsupported claims and instruction misses.",
      implementation:
        "Reviewed model responses for reasoning reliability, factual accuracy, instruction adherence and overall quality while iterating prompts and rubrics.",
      outcome:
        "Stronger instincts for when AI assistance is trustworthy—later applied in curriculum design and editorial automation with human review.",
    },
  },
];
