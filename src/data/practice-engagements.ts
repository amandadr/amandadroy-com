import type { Project } from "@/lib/types";

/**
 * Under-documented résumé themes, expanded only where October 2026 materials
 * support public-safe method + contribution claims (no invented client metrics).
 */
export const practiceEngagements: Project[] = [
  {
    slug: "technical-audit-methodology",
    title: "Technical audit methodology",
    year: "2024–2025",
    code: "WORK / 022",
    eyebrow: "Practice · Prioritization · Delivery",
    summary:
      "How 50+ technical SEO audits were structured in practice—crawlability, rendering, indexation and performance findings carried into prioritized recommendations, IA opportunities and stakeholder reporting.",
    overview:
      "Audit volume alone is not a method. Across agency and consulting work, audits were treated as the start of a loop: investigate, prioritize, recommend, support implementation where possible and validate with measurement.\n\nThis page documents the practice pattern behind the aggregate **50+** audits metric. It is not a single-client case study and does not attach the total to one property.",
    category: "professional",
    depth: "case-study",
    role: "SEO Specialist",
    context: "Agency & consulting practice",
    status: "Practice documentation",
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
      "Findings routinely translated into content, IA and web-strategy opportunities",
      "Supports the aggregate 50+ audits outcome without single-client attribution",
    ],
    caseStudy: {
      problem:
        "Stakeholders often receive crawl dumps without a clear sense of what to fix first—or how audit findings relate to content and architecture decisions.",
      constraints:
        "Concurrent accounts, mixed stacks, limited engineering time and the need for explainable priorities.",
      responsibility:
        "Structure technical audits so crawlability, rendering, indexation and performance findings become ranked implementation recommendations and stakeholder-ready reporting.",
      alternatives:
        "Tool exports without narrative; checklist SEO disconnected from IA; or endless discovery with no delivery.",
      choice:
        "Audit-first delivery that explicitly carries findings into content opportunities, information architecture and web strategy—not only bug lists.",
      implementation:
        "Combined Screaming Frog/Sitebulb crawls, Lighthouse/PSI signals and Search Console evidence with written priorities suited to developers and marketers.",
      outcome:
        "A documented methodology behind the 50+ audit body of work. Sanitized example deliverables remain a future artifact opportunity.",
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
      "Résumé materials document contribution to tracking and revenue attribution work, including paid-versus-organic performance analysis for lead acquisition—not ownership of a named client’s full measurement stack.\n\nPublic detail stays at the method and contribution level: GA4, Search Console, Looker Studio/Tableau-oriented reporting, validation habits and stakeholder communication. Exact tracking implementations and client numbers stay private.",
    category: "professional",
    depth: "case-study",
    role: "SEO Specialist",
    context: "Agency engagement · Anonymized",
    status: "Contribution documented",
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
        "Shared agency access, anonymized public writing and incomplete public documentation of individual property setups.",
      responsibility:
        "Contribute to tracking/attribution initiatives and analyze paid versus organic channel performance for lead acquisition conversations.",
      alternatives:
        "Rankings-only reporting; accepting last-click defaults without critique; or deferring all measurement work to a separate analytics vendor without SEO input.",
      choice:
        "Treat attribution questions as part of SEO delivery—validate what the data can support before using it to prioritize content or technical work.",
      implementation:
        "Worked with GA4, Search Console and BI-style reporting surfaces (Looker Studio/Tableau) while collaborating with clients and internal stakeholders on acquisition interpretation.",
      outcome:
        "Documented practice contribution. Deeper public methodology samples require sanitized tracking diagrams you still approve for release.",
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
      "Judging model answers is a skill with direct carry-over into GEO/AEO, editorial automation and RAG design. At Data Annotation Tech (2023–2025), work focused on evaluating outputs for reasoning, factuality, instruction adherence and quality, including complex coding tasks.\n\nNo client-confidential evaluation sets are published here. The transferable practice is how evaluation criteria and prompt refinement interact.",
    category: "professional",
    depth: "case-study",
    role: "Machine Learning Developer",
    context: "Data Annotation Tech",
    status: "Completed tenure",
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
      "Foundation for later human-reviewed AI workflows and RAG quality instincts",
    ],
    caseStudy: {
      problem:
        "LLM outputs can look fluent while failing on reasoning, factuality or instruction adherence—especially on technical coding tasks.",
      constraints:
        "Vendor evaluation protocols, confidential task material and no public release of proprietary datasets.",
      responsibility:
        "Evaluate outputs against quality criteria and refine prompts/evaluation approaches for complex coding work.",
      alternatives:
        "Accept surface fluency; score only formatting; or skip structured criteria entirely.",
      choice:
        "Treat evaluation as a disciplined review practice that surfaces unsupported claims and instruction misses.",
      implementation:
        "Reviewed model responses for reasoning reliability, factual accuracy, instruction adherence and overall quality while iterating prompts and rubrics.",
      outcome:
        "Evaluation experience that later informed curriculum work and human-in-the-loop editorial automation—without publishing proprietary examples.",
    },
  },
  {
    slug: "cloud-rag-workflows",
    title: "Cloud RAG workflows",
    year: "2024–2025",
    code: "WORK / 025",
    eyebrow: "Retrieval · Source quality · Automation",
    summary:
      "Built cloud-based RAG tools and AI-assisted workflows where automation handled repetitive work—emphasizing structure and source quality as the difference between useful retrieval and fluent noise.",
    overview:
      "Cover letters and expertise lists in the October 2026 résumé archive describe building cloud-based RAG tools after LLM evaluation work, with a clear lesson: structure and source quality determine whether retrieval helps.\n\nThis page stays honest about public evidence: architecture diagrams, proprietary corpora and benchmark tables are not published here. What is documented is the practice stance and how it connects to evaluation and editorial automation.",
    category: "lab",
    depth: "case-study",
    role: "Developer",
    context: "Independent / applied AI practice",
    status: "Practice documentation",
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
      "Cloud RAG tooling built for repetitive research/automation workflows",
      "Practice emphasis on document structure and source quality",
      "Connected evaluation judgment to retrieval design",
    ],
    caseStudy: {
      problem:
        "LLM assistants without retrieval invent confidently; retrieval without structure still returns the wrong passages.",
      constraints:
        "Limited public artifacts, evolving tooling and the need to avoid overselling unverified productized RAG systems.",
      responsibility:
        "Build cloud-based RAG tools and AI-assisted workflows that keep source grounding visible while automating repetitive steps.",
      alternatives:
        "Prompt-only assistants; black-box vendor RAG with no evaluation loop; or manual research with no automation.",
      choice:
        "Prefer workflows where retrieval inputs are inspectable and evaluation criteria from prior LLM QA still apply.",
      implementation:
        "Used Python/API-centered automation around retrieval-assisted tasks, informed by earlier output-evaluation practice.",
      outcome:
        "A documented RAG practice note. Lab experiments with public or synthetic corpora can deepen this further without client data.",
    },
  },
  {
    slug: "squarespace-publishing-automation",
    title: "Squarespace publishing automation",
    year: "2024",
    code: "WORK / 026",
    eyebrow: "CMS preparation · Editorial ops",
    summary:
      "AI-assisted, human-reviewed publishing for accuracy-sensitive articles that landed on a Squarespace site—roughly tripling content output while keeping factual review before CMS preparation.",
    overview:
      "The editorial automation engagement produced accuracy-sensitive financial-services articles and prepared them for the client’s Squarespace property. Résumé language describes roughly tripling content output with human factual review in the loop.\n\nThis page focuses on the CMS/publishing edge of that workflow. The full pipeline narrative lives on Human-reviewed AI editorial automation.",
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
      "Productivity gains framed as ~3× for the measured editorial workflow",
    ],
    caseStudy: {
      problem:
        "Podcast-sourced expert material needed a path to a Squarespace publishing surface without skipping factual review.",
      constraints:
        "Accuracy-sensitive vertical, CMS conventions and anonymized public documentation.",
      responsibility:
        "Connect transcription/structuring/drafting automation to human review and CMS preparation for Squarespace publication.",
      alternatives:
        "Fully manual CMS entry; unattended auto-publish; or drafting without a defined CMS handoff.",
      choice:
        "Automate preparation up to the CMS edge while keeping people responsible for factual approval.",
      implementation:
        "Used Python with Whisper/AssemblyAI, SurferSEO and OpenAI-assisted drafting upstream of human review and Squarespace-oriented CMS preparation (see related editorial case study for the full pipeline).",
      outcome:
        "A publishable workflow edge that supported the ~3× capacity outcome without claiming unattended Squarespace posting.",
    },
  },
  {
    slug: "ux-experimentation-practice",
    title: "UX experimentation practice",
    year: "2026",
    code: "WORK / 027",
    eyebrow: "Experimentation · Conversion · Architecture",
    summary:
      "UX experimentation as part of website modernization—A/B testing, conversion-path thinking and template/layout optimization alongside SEO-driven architecture on a multi-location commerce engagement.",
    overview:
      "On Good Robot Brewing (with Differo), what began as ecommerce work expanded into modernization that explicitly included UX experimentation, events overhaul, custom development and SEO-driven architecture.\n\nThis practice note separates the experimentation stance from the full commerce case study. Specific test matrices and lift tables are not published here; hypothesis-led UI/UX work is.",
    category: "professional",
    depth: "case-study",
    role: "Technical lead",
    context: "Manny Roy Consulting · with Differo",
    status: "Delivered with related launch",
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
      "Experimentation paired with SEO-driven IA rather than treated as decoration",
      "Detailed lift tables reserved until sanitized results are approved for release",
    ],
    caseStudy: {
      problem:
        "Architecture and SEO changes can still fail commercially if usability and conversion paths are left untested.",
      constraints:
        "Multi-stakeholder agency/client delivery, live commerce risk and incomplete public test documentation.",
      responsibility:
        "Include UX experimentation and UI/UX improvements alongside SEO-driven architecture, custom development and launch QA.",
      alternatives:
        "Ship IA changes with no behavioral validation; run cosmetic A/B tests disconnected from architecture; or defer UX until after launch exclusively.",
      choice:
        "Treat experimentation as part of modernization—templates, journeys and SEO constraints in the same conversation.",
      implementation:
        "Coordinated A/B-oriented UI/UX work with information architecture and WordPress implementation during the Good Robot engagement (see related case study for commerce scope).",
      outcome:
        "A practice record of hypothesis-led UX work inside a real launch. Publishable experiment results remain a follow-up artifact.",
    },
  },
];
