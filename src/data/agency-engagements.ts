import type { Project } from "@/lib/types";

/** Anonymized MacMillan / agency engagements as independently shareable case studies. */
export const agencyEngagements: Project[] = [
  {
    slug: "marketplace-rendering-architecture",
    title: "Marketplace rendering architecture",
    year: "2024–2025",
    code: "WORK / 010",
    eyebrow: "JavaScript SEO · Rendering strategy",
    summary:
      "Investigated JavaScript SEO and rendering for a React secondhand marketplace with thousands of product URLs, with recommendations toward Next.js for scalable organic discoverability.",
    overview:
      "A React marketplace with a large product inventory needed a clearer path from client-side rendering constraints to organic discovery. The work focused on technical investigation, architectural trade-offs and communicating implementation priorities to stakeholders.\n\nStatus: technical recommendation. This page does not claim that a migration was implemented or that organic growth was measured afterward.",
    category: "professional",
    depth: "case-study",
    role: "Technical SEO",
    context: "Agency engagement · Anonymized",
    status: "Recommendation",
    technologies: ["React", "Next.js recommendations", "JavaScript SEO", "Technical SEO"],
    capabilities: ["technical-search", "web-engineering"],
    featured: true,
    featuredRank: 3,
    presentation: "standard",
    engagementType: "agency",
    deliveryStatus: "recommendation",
    visibility: "anonymized",
    relatedProjectSlugs: ["macmillan-search-practice"],
    outcomes: [
      "Documented rendering and discoverability constraints across a large product URL inventory",
      "Recommended architectural direction toward Next.js with prioritized implementation steps",
      "Framed stakeholder trade-offs without overselling unverified growth outcomes",
    ],
    caseStudy: {
      problem:
        "Thousands of product URLs in a React application raised crawl, rendering and indexation questions that a conventional page-by-page SEO checklist could not answer.",
      constraints:
        "Agency timelines, existing React architecture, stakeholder buy-in requirements and the need to avoid confidential client infrastructure detail in public writing.",
      responsibility:
        "Technical investigation of JavaScript SEO and rendering implications; recommendations for a transition path toward Next.js; communication of priorities and ROI framing to stakeholders.",
      alternatives:
        "Continue optimizing within client-side rendering alone; recommend a full rewrite without evidence; or defer architecture work until ranking declines forced the issue.",
      choice:
        "Ground the recommendation in rendering and discoverability analysis, then sequence implementation priorities that developers could schedule.",
      implementation:
        "Reviewed how product discovery interacted with rendering strategy, documented architectural considerations and produced a prioritized recommendation set for stakeholders.",
      outcome:
        "A clear recommendation package establishing buy-in for architectural change. Public case study stays anonymized; no migration completion or post-migration growth is claimed.",
    },
  },
  {
    slug: "b2b-saas-organic-growth",
    title: "B2B SaaS organic growth",
    year: "2024–2025",
    code: "WORK / 011",
    eyebrow: "Organic growth · Search analytics",
    summary:
      "Recurring organic optimization for a Canadian HR/payroll SaaS platform—content, internal linking and measurement that produced a 226% average click increase across 18 pages over six months.",
    overview:
      "This is the authoritative case study for the 226% measured-set metric. Work combined search performance data, competitive research, internal linking and editorial improvements across eighteen written or refreshed pages over six months.\n\nThe average is influenced by high-performing pages in the measured set. It is not median growth, sitewide growth or a guaranteed result.",
    category: "professional",
    depth: "case-study",
    role: "SEO Specialist",
    context: "Agency engagement · Anonymized",
    status: "Delivered",
    technologies: ["GSC", "Ahrefs", "Screaming Frog", "DataForSEO", "Content strategy"],
    capabilities: ["technical-search", "data-automation"],
    featured: true,
    featuredRank: 2,
    presentation: "standard",
    engagementType: "agency",
    deliveryStatus: "delivered",
    visibility: "anonymized",
    relatedProjectSlugs: ["seo-rankings-report", "macmillan-search-practice"],
    outcomes: [
      "226% average organic click growth across 18 written or refreshed SaaS pages over six months",
      "Recurring measurement loop connecting winners, losers and re-optimization opportunities",
      "Supporting infrastructure documented separately as SEO Rankings Report",
    ],
    caseStudy: {
      problem:
        "SaaS organic growth required more than one-off content production: pages needed selection rationale, internal linking and a measurement loop that could survive monthly reporting cycles.",
      constraints:
        "Agency delivery cadence, shared tooling, anonymized public reporting and the need to keep client property data out of public repositories.",
      responsibility:
        "Opportunity identification, search intent mapping, page selection and refresh, internal linking guidance and recurring performance analysis.",
      alternatives:
        "Spray-and-pray content volume; dashboard-only reporting without editorial action; or outsourcing measurement to opaque third-party scorecards.",
      choice:
        "Pair editorial work with repeatable GSC-based comparisons so optimization priorities stayed evidence-led.",
      implementation:
        "Wrote or refreshed 18 pages over six months while using GSC, Ahrefs, Screaming Frog and DataForSEO. The Python reporting workflow that supported comparisons is documented as SEO Rankings Report.",
      outcome:
        "226% average organic click increase across the measured set. Use this page for the growth story; use SEO Rankings Report for the tooling story.",
    },
  },
  {
    slug: "enterprise-migration-qa",
    title: "Enterprise website migration & QA",
    year: "2024–2025",
    code: "WORK / 012",
    eyebrow: "Technical SEO · Migration risk",
    summary:
      "SEO support for an enterprise migration: URL mapping, launch support, post-launch crawling and technical reporting—with QA across 224 internal URLs and documented remediations.",
    overview:
      "Migration SEO is as much about validation criteria as redirects. QA across 224 internal URLs found no 4xx or 5xx errors, redirect chains or loops, while remaining redirect, sitemap and hreflang issues were documented for remediation.\n\nThis is not framed as an entirely error-free migration; the distinction between clean measured results and outstanding follow-up is part of the evidence.",
    category: "professional",
    depth: "case-study",
    role: "SEO Specialist",
    context: "Agency engagement · Anonymized",
    status: "Delivered",
    technologies: ["Technical SEO", "Crawl QA", "Redirect mapping", "hreflang"],
    capabilities: ["technical-search", "web-engineering"],
    featured: true,
    featuredRank: 5,
    presentation: "standard",
    engagementType: "agency",
    deliveryStatus: "delivered",
    visibility: "anonymized",
    relatedProjectSlugs: ["macmillan-search-practice"],
    outcomes: [
      "QA across 224 internal URLs with no 4xx/5xx, redirect chains or loops in the measured set",
      "Documented remaining redirect, sitemap and hreflang issues for remediation",
      "Launch support spanning mapping, implementation coordination and post-launch crawling",
    ],
    caseStudy: {
      problem:
        "Enterprise migrations concentrate SEO risk into a short launch window: broken paths, chains, loops and incomplete hreflang can erase years of equity quickly.",
      constraints:
        "Shared agency tooling, launch schedules, multi-stakeholder ownership and the need for auditable QA evidence.",
      responsibility:
        "URL mapping support, programmatic implementation coordination, launch support, post-launch crawling and technical reporting.",
      alternatives:
        "Rely on platform defaults without SEO QA; sample a handful of URLs; or treat post-launch fixes as purely reactive firefighting.",
      choice:
        "Define validation criteria up front, crawl systematically after launch and separate clean results from remaining remediation work.",
      implementation:
        "Mapped URLs, supported launch, crawled afterward and classified issues—reporting both the clean 224-URL QA result and outstanding redirect, sitemap and hreflang follow-ups.",
      outcome:
        "A migration QA package stakeholders could act on. Public writing stays anonymized and avoids implying zero remaining work.",
    },
  },
  {
    slug: "ai-saas-content-architecture",
    title: "AI SaaS content architecture",
    year: "2024–2025",
    code: "WORK / 013",
    eyebrow: "Information architecture · Semantic SEO",
    summary:
      "Eighteen-page pillar-and-cluster framework for an AI customer-support platform—connecting intent, audience needs and product capabilities to a publishing roadmap that informed site architecture.",
    overview:
      "Keyword lists alone do not make a site architecture. This engagement translated research into page purposes, topical relationships, content formats and internal linking guidance.\n\nStatus: strategy and architecture deliverable. No unverified organic performance claims.",
    category: "professional",
    depth: "case-study",
    role: "SEO Specialist",
    context: "Agency engagement · Anonymized",
    status: "Recommendation",
    technologies: ["Content architecture", "Keyword research", "Internal linking", "IA"],
    capabilities: ["technical-search", "applied-ai-geo"],
    featured: false,
    presentation: "standard",
    engagementType: "agency",
    deliveryStatus: "recommendation",
    visibility: "anonymized",
    relatedProjectSlugs: ["macmillan-search-practice"],
    outcomes: [
      "18-page pillar-and-cluster framework shaping publishing priorities",
      "Page purposes tied to intent, audience needs and product capabilities",
      "Architecture guidance suitable for stakeholder and developer handoff",
    ],
    caseStudy: {
      problem:
        "An AI SaaS product needed content architecture that connected search demand to product capabilities without producing an unmaintainable blog farm.",
      constraints:
        "Agency delivery, anonymized public documentation and the boundary between strategy recommendations and implemented site changes.",
      responsibility:
        "Research synthesis, pillar-and-cluster design, page purpose definitions and a publishing roadmap that informed website architecture.",
      alternatives:
        "Flat blog calendar; keyword-stuffed feature pages; or delaying IA until engineering shipped unrelated templates.",
      choice:
        "A structured pillar-and-cluster map that made topical relationships and internal linking explicit.",
      implementation:
        "Connected search intent, competitive research, audience needs and product capabilities into an 18-page framework stakeholders could use to shape architecture.",
      outcome:
        "An actionable content architecture deliverable. Public case study remains anonymized and does not claim unmeasured traffic outcomes.",
    },
  },
  {
    slug: "editorial-workflow-automation",
    title: "Human-reviewed AI editorial automation",
    year: "2024–2025",
    code: "WORK / 014",
    eyebrow: "Applied AI · Workflow engineering",
    summary:
      "Python-assisted workflow turning expert podcast material into structured, SEO-ready articles—roughly tripling production capacity while keeping human editorial oversight.",
    overview:
      "Automation only helps when source grounding and factual review stay in the loop. This workflow integrated transcription, structuring, AI-assisted drafting, verification and CMS preparation for a Canadian financial-services organization.\n\nSupporting evidence from the engagement includes seven accuracy-sensitive articles produced during the work. Exact client identity stays anonymized.",
    category: "professional",
    depth: "case-study",
    role: "Automation / SEO Specialist",
    context: "Agency engagement · Anonymized",
    status: "Delivered",
    technologies: ["Python", "LLM APIs", "Editorial QA", "CMS preparation"],
    capabilities: ["applied-ai-geo", "data-automation"],
    featured: true,
    featuredRank: 6,
    presentation: "standard",
    engagementType: "agency",
    deliveryStatus: "delivered",
    visibility: "anonymized",
    relatedProjectSlugs: ["macmillan-search-practice"],
    outcomes: [
      "Roughly 3× editorial production capacity with human review retained",
      "Pipeline covering transcription through CMS-ready drafts",
      "Seven accuracy-sensitive articles produced during the engagement",
    ],
    caseStudy: {
      problem:
        "Expert podcast material contained valuable insights, but turning episodes into publishable SEO articles by hand could not keep pace with editorial demand.",
      constraints:
        "Accuracy requirements in financial services, CMS conventions, anonymized public reporting and the need for human judgment on factual claims.",
      responsibility:
        "Workflow design across transcription, structuring, AI-assisted drafting, factual verification and CMS preparation.",
      alternatives:
        "Fully manual production; fully automated publishing without review; or generic summarization tools that ignored source grounding.",
      choice:
        "A Python-assisted pipeline that accelerated drafting while keeping verification and editorial ownership with people.",
      implementation:
        "Connected source material to structured outlines and drafts, then routed work through factual review before CMS preparation—preserving oversight where accuracy mattered.",
      outcome:
        "Approximately triple production capacity for the measured workflow, with seven accuracy-sensitive articles completed during the engagement.",
    },
  },
];
