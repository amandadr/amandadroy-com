import type { Project } from "@/lib/types";

/** Cross-account practice and applied-AI work presented as shareable projects. */
export const practiceEngagements: Project[] = [
  {
    slug: "technical-audit-methodology",
    title: "Technical audit methodology",
    year: "2024–2025",
    code: "WORK / 022",
    eyebrow: "Technical SEO · Prioritization · Delivery",
    summary:
      "How technical SEO audits were structured across agency and consulting work—crawlability, rendering, indexation and performance findings carried into prioritized recommendations, IA opportunities and stakeholder reporting.",
    overview:
      "An audit is useful when it starts a loop: investigate, prioritize, recommend, support implementation where possible and validate with measurement. Across agency and consulting engagements, crawlability, rendering, indexation and performance findings routinely fed content opportunities, information architecture and web strategy—not only bug lists.\n\nMore than fifty audits followed this pattern across diverse website architectures.",
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
    engagementType: "agency",
    deliveryStatus: "delivered",
    visibility: "public",
    relatedProjectSlugs: [
      "macmillan-search-practice",
      "multisite-technical-seo",
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
        "Tool exports without narrative; checklist SEO disconnected from IA; or endless discovery with no delivery.",
      choice:
        "Audit-first delivery that carries findings into content opportunities, information architecture and web strategy.",
      implementation:
        "Combined Screaming Frog/Sitebulb crawls, Lighthouse/PSI signals and Search Console evidence with written priorities suited to developers and marketers.",
      outcome:
        "A durable audit method used across more than fifty engagements, with findings that could move into implementation planning.",
    },
  },
  {
    slug: "paid-organic-attribution",
    title: "Paid vs organic attribution",
    year: "2024–2025",
    code: "WORK / 023",
    eyebrow: "Analytics · Lead acquisition · Reporting",
    summary:
      "Contributed to tracking and revenue attribution initiatives—analyzing paid versus organic channel performance to inform lead acquisition strategies across B2B SaaS, AI, data and enterprise accounts.",
    overview:
      "Organic priorities are clearer when paid and organic acquisition can be read together. Across concurrent B2B SaaS, AI, data and enterprise accounts, I contributed to tracking and revenue attribution work and analyzed paid-versus-organic performance for lead acquisition conversations.\n\nDay-to-day tools included GA4, Search Console and Looker Studio/Tableau-oriented reporting, with attention to what the data could and could not support before using it to prioritize content or technical work.",
    category: "professional",
    depth: "case-study",
    role: "SEO Specialist",
    context: "Agency engagement · Anonymized",
    status: "Delivered",
    technologies: [
      "GA4",
      "Google Search Console",
      "Looker Studio",
      "Tableau",
      "Revenue attribution",
    ],
    capabilities: ["data-automation", "technical-search"],
    featured: false,
    presentation: "compact",
    engagementType: "agency",
    deliveryStatus: "delivered",
    visibility: "anonymized",
    relatedProjectSlugs: [
      "macmillan-search-practice",
      "seo-rankings-report",
      "b2b-saas-organic-growth",
    ],
    outcomes: [
      "Contributed to tracking and revenue attribution initiatives",
      "Analyzed paid vs organic performance to inform lead acquisition strategy",
      "Connected SEO delivery to stakeholder reporting beyond rankings alone",
    ],
    caseStudy: {
      problem:
        "Organic work is hard to prioritize when paid and organic acquisition are reported in isolation—or when tracking cannot support the questions stakeholders actually ask.",
      constraints:
        "Shared agency access and varied maturity of client measurement stacks.",
      responsibility:
        "Contribute to tracking/attribution initiatives and analyze paid versus organic channel performance for lead acquisition conversations.",
      alternatives:
        "Rankings-only reporting; accepting last-click defaults without critique; or deferring all measurement work to a separate analytics vendor without SEO input.",
      choice:
        "Treat attribution questions as part of SEO delivery—validate what the data can support before using it to prioritize content or technical work.",
      implementation:
        "Worked with GA4, Search Console and BI-style reporting surfaces while collaborating with clients and internal stakeholders on acquisition interpretation.",
      outcome:
        "Clearer lead-acquisition conversations that connected organic work to channel performance, not rankings alone.",
    },
  },
  {
    slug: "llm-evaluation-practice",
    title: "LLM evaluation practice",
    year: "2023–2025",
    code: "WORK / 024",
    eyebrow: "Evaluation · Prompting · Quality",
    summary:
      "Evaluated LLM outputs for reasoning, factual accuracy, instruction adherence and response quality—refining prompts and evaluation approaches for complex coding tasks at Data Annotation Tech.",
    overview:
      "Fluent model answers can still fail on reasoning, factuality or instruction adherence. At Data Annotation Tech (2023–2025), I evaluated LLM outputs against those criteria—including complex coding tasks—and refined prompts and evaluation approaches when responses missed the mark.\n\nThat judgment carried into later curriculum work, human-reviewed editorial automation and retrieval-assisted workflows.",
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
    presentation: "compact",
    engagementType: "educational",
    deliveryStatus: "delivered",
    visibility: "public",
    relatedProjectSlugs: [
      "cloud-rag-workflows",
      "editorial-workflow-automation",
      "applied-ai-microcredential",
    ],
    outcomes: [
      "Multi-year LLM output evaluation across reasoning and coding tasks",
      "Prompt and evaluation-approach refinement for accuracy-sensitive judgments",
      "Foundation for later human-reviewed AI workflows and retrieval quality instincts",
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
  {
    slug: "cloud-rag-workflows",
    title: "Cloud RAG workflows",
    year: "2024–2025",
    code: "WORK / 025",
    eyebrow: "Retrieval · Source quality · Automation",
    summary:
      "Cloud-based RAG tools and AI-assisted workflows where automation handled repetitive work—emphasizing structure and source quality as the difference between useful retrieval and fluent noise.",
    overview:
      "After evaluating LLM outputs for accuracy and reasoning, I built cloud-based RAG tools and AI-assisted workflows so automation could handle repetitive research steps without inventing answers.\n\nThe practical lesson is structural: retrieval only helps when source material is well organized and quality is visible. Python and APIs made routine evaluation and preparation repeatable.",
    category: "lab",
    depth: "case-study",
    role: "Developer",
    context: "Independent / applied AI practice",
    status: "Prototype / practice",
    technologies: [
      "RAG",
      "LLM APIs",
      "Python",
      "Source grounding",
      "Workflow automation",
    ],
    capabilities: ["applied-ai-geo", "data-automation"],
    featured: false,
    presentation: "compact",
    engagementType: "independent",
    deliveryStatus: "prototype",
    visibility: "public",
    lab: true,
    relatedProjectSlugs: [
      "llm-evaluation-practice",
      "editorial-workflow-automation",
    ],
    outcomes: [
      "Cloud RAG tooling for repetitive research and automation workflows",
      "Emphasis on document structure and source quality",
      "Connected evaluation judgment to retrieval design",
    ],
    caseStudy: {
      problem:
        "LLM assistants without retrieval invent confidently; retrieval without structure still returns the wrong passages.",
      constraints:
        "Evolving tooling and the need to keep source grounding inspectable.",
      responsibility:
        "Build cloud-based RAG tools and AI-assisted workflows that keep source grounding visible while automating repetitive steps.",
      alternatives:
        "Prompt-only assistants; black-box vendor RAG with no evaluation loop; or manual research with no automation.",
      choice:
        "Prefer workflows where retrieval inputs are inspectable and evaluation criteria from prior LLM QA still apply.",
      implementation:
        "Used Python/API-centered automation around retrieval-assisted tasks, informed by earlier output-evaluation practice.",
      outcome:
        "Working RAG-assisted workflows where structure and source quality stayed first-class, not afterthoughts.",
    },
  },
  {
    slug: "squarespace-publishing-automation",
    title: "Squarespace publishing automation",
    year: "2024",
    code: "WORK / 026",
    eyebrow: "CMS preparation · Editorial ops",
    summary:
      "AI-assisted, human-reviewed publishing for accuracy-sensitive articles prepared for Squarespace—roughly tripling content output while keeping factual review before CMS handoff.",
    overview:
      "Accuracy-sensitive financial-services articles needed a path from expert podcast material to a Squarespace publishing surface without skipping factual review. Upstream automation covered transcription, structuring and drafting; people stayed responsible for verification; CMS preparation made the work publish-ready.\n\nThe measured workflow roughly tripled content-production capacity.",
    category: "professional",
    depth: "case-study",
    role: "Automation / SEO Specialist",
    context: "Agency engagement · Anonymized",
    status: "Delivered",
    technologies: [
      "Squarespace",
      "CMS preparation",
      "Python",
      "Whisper/AssemblyAI",
      "Editorial QA",
    ],
    capabilities: ["applied-ai-geo", "data-automation"],
    featured: false,
    presentation: "compact",
    engagementType: "agency",
    deliveryStatus: "delivered",
    visibility: "anonymized",
    relatedProjectSlugs: ["editorial-workflow-automation"],
    outcomes: [
      "CMS preparation path into Squarespace for accuracy-sensitive articles",
      "Human factual review retained before publish-ready handoff",
      "~3× capacity for the measured editorial workflow",
    ],
    caseStudy: {
      problem:
        "Podcast-sourced expert material needed a path to a Squarespace publishing surface without skipping factual review.",
      constraints:
        "Accuracy-sensitive vertical and CMS publishing conventions.",
      responsibility:
        "Connect transcription/structuring/drafting automation to human review and CMS preparation for Squarespace publication.",
      alternatives:
        "Fully manual CMS entry; unattended auto-publish; or drafting without a defined CMS handoff.",
      choice:
        "Automate preparation up to the CMS edge while keeping people responsible for factual approval.",
      implementation:
        "Used Python with Whisper/AssemblyAI, SurferSEO and OpenAI-assisted drafting upstream of human review and Squarespace-oriented CMS preparation.",
      outcome:
        "A publishable handoff that supported roughly triple production capacity without unattended Squarespace posting.",
    },
  },
  {
    slug: "ux-experimentation-practice",
    title: "UX experimentation practice",
    year: "2026",
    code: "WORK / 027",
    eyebrow: "Experimentation · Conversion · Architecture",
    summary:
      "UX experimentation inside a website modernization—A/B testing, conversion-path thinking and template/layout optimization alongside SEO-driven architecture on a multi-location commerce engagement.",
    overview:
      "On Good Robot Brewing (with Differo), ecommerce work expanded into modernization that included UX experimentation, an events overhaul, custom development and SEO-driven architecture.\n\nExperimentation sat next to information architecture and WordPress implementation—not as a separate cosmetic track after launch.",
    category: "professional",
    depth: "case-study",
    role: "Technical lead",
    context: "Manny Roy Consulting · with Differo",
    status: "Delivered",
    technologies: [
      "A/B testing",
      "UI/UX",
      "Conversion paths",
      "WordPress",
      "Technical SEO",
    ],
    capabilities: ["web-engineering", "technical-search"],
    featured: false,
    presentation: "compact",
    engagementType: "consulting",
    deliveryStatus: "delivered",
    visibility: "public",
    relatedProjectSlugs: ["good-robot-brewing", "webflow-platform-optimization"],
    outcomes: [
      "UX experimentation included in a live commerce modernization scope",
      "Experimentation paired with SEO-driven IA",
      "Hypothesis-led UI/UX work coordinated through launch",
    ],
    caseStudy: {
      problem:
        "Architecture and SEO changes can still fail commercially if usability and conversion paths are left untested.",
      constraints:
        "Multi-stakeholder agency/client delivery and live commerce risk.",
      responsibility:
        "Include UX experimentation and UI/UX improvements alongside SEO-driven architecture, custom development and launch QA.",
      alternatives:
        "Ship IA changes with no behavioral validation; run cosmetic A/B tests disconnected from architecture; or defer UX until after launch exclusively.",
      choice:
        "Treat experimentation as part of modernization—templates, journeys and SEO constraints in the same conversation.",
      implementation:
        "Coordinated A/B-oriented UI/UX work with information architecture and WordPress implementation during the Good Robot engagement.",
      outcome:
        "Hypothesis-led UX work shipped inside a real commerce launch alongside SEO and platform modernization.",
    },
  },
];
