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
      "A React marketplace with a large product inventory needed a clearer path from client-side rendering constraints to organic discovery. The work centered on technical investigation, architectural trade-offs and communicating implementation priorities to stakeholders—delivered as a recommendation package for a transition toward Next.js.",
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
        "Agency timelines, existing React architecture and stakeholder buy-in requirements.",
      responsibility:
        "Technical investigation of JavaScript SEO and rendering implications; recommendations for a transition path toward Next.js; communication of priorities and ROI framing to stakeholders.",
      alternatives:
        "Continue optimizing within client-side rendering alone; recommend a full rewrite without evidence; or defer architecture work until ranking declines forced the issue.",
      choice:
        "Ground the recommendation in rendering and discoverability analysis, then sequence implementation priorities that developers could schedule.",
      implementation:
        "Reviewed how product discovery interacted with rendering strategy, documented architectural considerations and produced a prioritized recommendation set for stakeholders.",
      outcome:
        "A clear recommendation package establishing buy-in for architectural change, with prioritized implementation steps developers could schedule.",
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
      "Recurring organic optimization for a Canadian HR and payroll SaaS platform. Search performance data, competitive research, internal linking and editorial improvements across eighteen written or refreshed pages produced a 226% average organic click increase over six months.\n\nThat average reflects the measured set of pages—including strong performers—not median growth, sitewide growth or a guaranteed result.",
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
      "Supporting GSC comparison tooling later open-sourced as SEO Rankings Report",
    ],
    caseStudy: {
      problem:
        "SaaS organic growth required more than one-off content production: pages needed selection rationale, internal linking and a measurement loop that could survive monthly reporting cycles.",
      constraints:
        "Agency delivery cadence, shared tooling and the need to keep client property data out of shared repositories.",
      responsibility:
        "Opportunity identification, search intent mapping, page selection and refresh, internal linking guidance and recurring performance analysis.",
      alternatives:
        "Spray-and-pray content volume; dashboard-only reporting without editorial action; or outsourcing measurement to opaque third-party scorecards.",
      choice:
        "Pair editorial work with repeatable GSC-based comparisons so optimization priorities stayed evidence-led.",
      implementation:
        "Wrote or refreshed 18 pages over six months while using GSC, Ahrefs, Screaming Frog and DataForSEO. A Python reporting workflow supported page- and query-level comparisons (see SEO Rankings Report).",
      outcome:
        "226% average organic click increase across the measured set of eighteen pages over six months.",
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
      "Migration SEO is as much about validation criteria as redirects. QA across 224 internal URLs found no 4xx or 5xx errors, redirect chains or loops, while remaining redirect, sitemap and hreflang issues were documented for remediation.",
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
        "A migration QA package stakeholders could act on, with clean measured results reported separately from outstanding remediation.",
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
      "Keyword lists alone do not make a site architecture. This engagement translated research into page purposes, topical relationships, content formats and internal linking guidance—an 18-page pillar-and-cluster framework that informed publishing strategy and website architecture.",
    category: "professional",
    depth: "case-study",
    role: "SEO Specialist",
    context: "Agency engagement · Anonymized",
    status: "Recommendation",
    technologies: [
      "Content architecture",
      "DataForSEO",
      "Sitebulb",
      "PageSpeed",
      "Internal linking",
    ],
    capabilities: ["technical-search", "applied-ai-geo"],
    featured: false,
    presentation: "standard",
    engagementType: "agency",
    deliveryStatus: "recommendation",
    visibility: "anonymized",
    relatedProjectSlugs: [
      "macmillan-search-practice",
      "webflow-platform-optimization",
      "enterprise-content-consolidation",
    ],
    outcomes: [
      "18-page pillar-and-cluster framework shaping publishing priorities",
      "Page purposes tied to intent, audience needs and product capabilities",
      "Research stack included DataForSEO, Sitebulb crawling and PageSpeed analysis",
    ],
    caseStudy: {
      problem:
        "An AI SaaS product needed content architecture that connected search demand to product capabilities without producing an unmaintainable blog farm.",
      constraints:
        "Agency delivery cadence and the boundary between strategy recommendations and implemented site changes.",
      responsibility:
        "Research synthesis, pillar-and-cluster design, page purpose definitions and a publishing roadmap that informed website architecture.",
      alternatives:
        "Flat blog calendar; keyword-stuffed feature pages; or delaying IA until engineering shipped unrelated templates.",
      choice:
        "A structured pillar-and-cluster map that made topical relationships and internal linking explicit.",
      implementation:
        "Mapped keyword volume, competition, CPC, search intent, technical findings and content format into an 18-page executable publishing plan—supported by DataForSEO research, Sitebulb crawling, PageSpeed analysis and recurring content/performance work.",
      outcome:
        "An actionable content architecture deliverable stakeholders could use to shape publishing and site structure.",
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
      "For a Canadian financial-services organization, this workflow integrated transcription, structuring, AI-assisted drafting, verification and CMS preparation—producing seven accuracy-sensitive articles while roughly tripling production capacity.",
    category: "professional",
    depth: "case-study",
    role: "Automation / SEO Specialist",
    context: "Agency engagement · Anonymized",
    status: "Delivered",
    technologies: [
      "Python",
      "Whisper/AssemblyAI",
      "SurferSEO",
      "OpenAI",
      "Squarespace CMS prep",
    ],
    capabilities: ["applied-ai-geo", "data-automation"],
    featured: true,
    featuredRank: 6,
    presentation: "standard",
    engagementType: "agency",
    deliveryStatus: "delivered",
    visibility: "anonymized",
    relatedProjectSlugs: [
      "macmillan-search-practice",
      "squarespace-publishing-automation",
    ],
    outcomes: [
      "Roughly 3× editorial production capacity with human review retained",
      "Pipeline covering transcription through CMS-ready drafts",
      "Seven accuracy-sensitive articles produced during the engagement",
    ],
    caseStudy: {
      problem:
        "Expert podcast material contained valuable insights, but turning episodes into publishable SEO articles by hand could not keep pace with editorial demand.",
      constraints:
        "Accuracy requirements in financial services, CMS conventions and the need for human judgment on factual claims.",
      responsibility:
        "Workflow design across transcription, structuring, AI-assisted drafting, factual verification and CMS preparation.",
      alternatives:
        "Fully manual production; fully automated publishing without review; or generic summarization tools that ignored source grounding.",
      choice:
        "A Python-assisted pipeline that accelerated drafting while keeping verification and editorial ownership with people.",
      implementation:
        "Moved podcast audio through Whisper/AssemblyAI transcription, SEO structuring (including SurferSEO), OpenAI-assisted first drafts and human factual review before CMS preparation for Squarespace.",
      outcome:
        "Approximately triple production capacity for the measured workflow, with seven accuracy-sensitive articles completed during the engagement. Publishing landed on the client's Squarespace property via CMS preparation rather than a fully unattended publish loop.",
    },
  },
  {
    slug: "enterprise-content-consolidation",
    title: "Enterprise content consolidation",
    year: "2024–2025",
    code: "WORK / 015",
    eyebrow: "Information architecture · Editorial strategy",
    summary:
      "Content consolidation strategy for a global entertainment-data platform—keyword, competitor and share-of-voice research turned into editorial direction, internal-linking standards and a film/TV subdomain restructuring proposal.",
    overview:
      "For a global entertainment-data platform with content split across related properties, keyword, competitor and share-of-voice research became editorial recommendations, internal-linking standards and a film-and-television subdomain consolidation strategy.",
    category: "professional",
    depth: "case-study",
    role: "SEO Specialist",
    context: "Agency engagement · Anonymized",
    status: "Recommendation",
    technologies: [
      "Keyword research",
      "Share-of-voice analysis",
      "Internal linking",
      "Subdomain strategy",
    ],
    capabilities: ["technical-search"],
    featured: false,
    presentation: "standard",
    engagementType: "agency",
    deliveryStatus: "recommendation",
    visibility: "anonymized",
    relatedProjectSlugs: [
      "macmillan-search-practice",
      "ai-saas-content-architecture",
    ],
    outcomes: [
      "Editorial direction grounded in keyword, competitor and share-of-voice research",
      "Internal-linking standards for fragmented entertainment-data content",
      "Proposed film-and-television subdomain consolidation strategy",
    ],
    caseStudy: {
      problem:
        "A global entertainment-data platform needed clearer topical ownership across film and television content that had grown across related surfaces.",
      constraints:
        "Agency delivery cadence and the boundary between strategic recommendation and engineering change.",
      responsibility:
        "Convert keyword, competitor and share-of-voice research into editorial recommendations, internal-link standards, content opportunities and a subdomain consolidation proposal.",
      alternatives:
        "Keep publishing into the existing fragmentation; merge properties without research; or treat consolidation as a pure redirect exercise without editorial standards.",
      choice:
        "Lead with information architecture and topical relationships so consolidation decisions had a documented rationale.",
      implementation:
        "Documented editorial direction, link standards and a film-and-television subdomain restructuring strategy stakeholders could evaluate against product and brand constraints.",
      outcome:
        "A consolidation recommendation package stakeholders could evaluate against product and brand constraints.",
    },
  },
  {
    slug: "webflow-platform-optimization",
    title: "Webflow platform optimization",
    year: "2024–2025",
    code: "WORK / 016",
    eyebrow: "CMS implementation · SEO · UI/UX",
    summary:
      "SEO-driven architecture and UI/UX improvements for an AI software platform—working directly in Webflow and its custom theme to support features, on-site optimization and content publishing.",
    overview:
      "Search recommendations only matter when someone can implement them in the CMS the team actually uses. For an AI software platform, this engagement balanced organic discoverability with usability inside Webflow—including custom theme work, feature implementation, on-site optimization and content publishing.",
    category: "professional",
    depth: "case-study",
    role: "SEO Specialist",
    context: "Agency engagement · Anonymized",
    status: "Delivered",
    technologies: ["Webflow", "Custom theme", "On-page SEO", "UI/UX"],
    capabilities: ["technical-search", "web-engineering"],
    featured: false,
    presentation: "standard",
    engagementType: "agency",
    deliveryStatus: "delivered",
    visibility: "anonymized",
    relatedProjectSlugs: [
      "macmillan-search-practice",
      "ai-saas-content-architecture",
    ],
    outcomes: [
      "Direct Webflow and custom-theme implementation supporting SEO goals",
      "Architecture and UI/UX changes balancing discoverability with usability",
      "Feature support, on-site optimization and content publishing in-platform",
    ],
    caseStudy: {
      problem:
        "An AI software marketing site needed SEO and UX improvements that could ship inside the team's existing Webflow setup rather than as abstract recommendations.",
      constraints:
        "Custom theme limits and shared agency/client ownership of publishing.",
      responsibility:
        "Contribute to SEO-driven website architecture and UI/UX improvements while implementing features, on-site optimization and content publishing in Webflow.",
      alternatives:
        "PDF-only recommendations with no CMS work; a rebuild outside Webflow; or design changes disconnected from search constraints.",
      choice:
        "Work inside Webflow and the custom theme so discoverability and usability changes landed in the same delivery surface.",
      implementation:
        "Used Webflow day-to-day for feature implementation, on-site optimization and publishing while coordinating SEO architecture with UI/UX goals.",
      outcome:
        "Hands-on Webflow delivery that connected SEO architecture with UI/UX and publishing in the same CMS.",
    },
  },
  {
    slug: "multisite-technical-seo",
    title: "Multi-site technical SEO",
    year: "2024–2025",
    code: "WORK / 017",
    eyebrow: "Enterprise SEO · Portfolio scale",
    summary:
      "Technical SEO across enterprise and multi-location service portfolios spanning thousands to tens of thousands of URLs—audits, performance analysis, prioritized recommendations and stakeholder reporting.",
    overview:
      "Large portfolios do not get page-by-page attention equally. Across concurrent enterprise and multi-location accounts, technical auditing, performance analysis, prioritized recommendations and stakeholder reporting covered websites and multi-site portfolios spanning thousands to tens of thousands of URLs.",
    category: "professional",
    depth: "case-study",
    role: "SEO Specialist",
    context: "Agency practice · Anonymized accounts",
    status: "Ongoing during tenure",
    technologies: [
      "Technical audits",
      "Screaming Frog",
      "Sitebulb",
      "GSC",
      "Stakeholder reporting",
    ],
    capabilities: ["technical-search", "data-automation"],
    featured: false,
    presentation: "standard",
    engagementType: "agency",
    deliveryStatus: "delivered",
    visibility: "anonymized",
    relatedProjectSlugs: [
      "macmillan-search-practice",
      "technical-audit-methodology",
      "enterprise-migration-qa",
    ],
    outcomes: [
      "Technical SEO support across multi-site portfolios at thousand- to tens-of-thousands URL scale",
      "Audit findings translated into prioritized implementation recommendations",
      "Recurring stakeholder reporting across concurrent enterprise and multi-location accounts",
    ],
    caseStudy: {
      problem:
        "Enterprise and multi-location portfolios concentrate crawl, indexation and template risk across large URL inventories that cannot all be optimized manually.",
      constraints:
        "Concurrent accounts, shared tooling and limited engineering bandwidth.",
      responsibility:
        "Contribute to technical auditing, performance analysis, prioritized recommendations and stakeholder reporting across large portfolios.",
      alternatives:
        "Sample a handful of URLs and hope; drown stakeholders in unprioritized crawl exports; or treat every property as a greenfield rebuild.",
      choice:
        "Audit-first delivery that carries crawlability, rendering, indexation and performance findings into ranked implementation work.",
      implementation:
        "Moved between Screaming Frog/Sitebulb crawls, GSC and analytics reviews, recommendation writing and client communication across B2B SaaS, AI, data, insurance and multi-location service accounts.",
      outcome:
        "Portfolio-scale technical SEO delivery with prioritized recommendations stakeholders could schedule across large URL inventories.",
    },
  },
  {
    slug: "multibrand-digital-operations",
    title: "Multi-brand digital operations",
    year: "2024–Present",
    code: "WORK / 018",
    eyebrow: "Technical advisory · Local search · Ops",
    summary:
      "Ongoing technical advisory across three Atlantic Canadian brands for 2+ years—technical SEO, local search, Google Business Profile, platform strategy, integrations and marketing technology.",
    overview:
      "Long-running advisory is less about a single launch and more about prioritization, troubleshooting and incremental systems improvement. Across three Atlantic Canadian brands this has meant SEO and local search support, Google Business Profile, platform strategy, integrations and marketing technology ownership for more than two years.",
    category: "professional",
    depth: "case-study",
    role: "Technical advisor",
    context: "Manny Roy Consulting · Anonymized brands",
    status: "Ongoing",
    technologies: [
      "Technical SEO",
      "Local SEO",
      "Google Business Profile",
      "Integrations",
      "Marketing technology",
    ],
    capabilities: ["technical-search", "web-engineering"],
    featured: false,
    presentation: "compact",
    engagementType: "consulting",
    deliveryStatus: "live",
    visibility: "anonymized",
    relatedProjectSlugs: ["manny-roy-consulting"],
    outcomes: [
      "2+ years of continuous advisory across three Atlantic Canadian brands",
      "Coverage spanning SEO, local search, GBP, platforms and integrations",
      "Incremental operations ownership rather than one-off website launches",
    ],
    caseStudy: {
      problem:
        "Small multi-brand operators needed steady technical ownership—local visibility, platform choices and integrations—without staffing a full in-house web team.",
      constraints:
        "Budget realism, mixed platforms and work that accumulates over years rather than a single ship date.",
      responsibility:
        "Ongoing technical SEO, local search, Google Business Profile support, platform strategy, integrations troubleshooting and marketing technology guidance.",
      alternatives:
        "One-off redesign projects; fully outsourced retainers with no technical ownership; or leaving each brand on disconnected DIY stacks.",
      choice:
        "Fix the most useful thing next, instead of relaunching every few years.",
      implementation:
        "Supported three Nova Scotian brands concurrently—balancing SEO/local search work with platform and integration decisions as needs emerged.",
      outcome:
        "Durable multi-brand technical ownership spanning SEO, local search, platforms and integrations.",
    },
  },
  {
    slug: "applied-ai-microcredential",
    title: "Applied AI microcredential",
    year: "2024–2025",
    code: "WORK / 019",
    eyebrow: "Curriculum · Responsible AI · Instruction",
    summary:
      "Co-developed the Marketing & Communications stream of an accredited professional AI microcredential—prompt engineering, responsible AI, research and workflow augmentation—with a 96% stream completion rate.",
    overview:
      "With Rob Newcombe (AI First Consulting), co-led the Marketing & Communications stream pilot for Digital Nova Scotia and St. Francis Xavier University's accredited Practical Utilization of AI microcredential.\n\nThe stream reported a **96%** completion rate. The broader initial program reached **127+** learners (~59% above its original target). Over **90%** of participants rated the program great-to-excellent; **70%** reported productivity or career improvement; **100%** of surveyed employers recommended the program. Stream results are distinct from program-wide results.",
    category: "professional",
    depth: "case-study",
    role: "Curriculum co-lead",
    context: "Digital Nova Scotia · StFX · AI First Consulting",
    status: "Delivered",
    technologies: [
      "Prompt engineering",
      "Responsible AI",
      "Curriculum design",
      "Workflow augmentation",
    ],
    capabilities: ["applied-ai-geo"],
    featured: false,
    presentation: "standard",
    engagementType: "educational",
    deliveryStatus: "delivered",
    visibility: "public",
    relatedProjectSlugs: ["applied-ai-tourism-training", "llm-evaluation-practice"],
    outcomes: [
      "Marketing & Communications stream with 96% completion rate",
      "Broader initial program reached 127+ learners (~59% above target)",
      "Strong participant and employer feedback on usefulness and recommendation",
    ],
    caseStudy: {
      problem:
        "Marketing and communications professionals needed an accredited path from AI curiosity to responsible, work-ready practice—not tool demos without judgment.",
      constraints:
        "Accreditation requirements, cohort delivery, collaboration across organizations and honest separation of stream vs program metrics.",
      responsibility:
        "Translate prompt engineering, responsible AI, research, content production, tool evaluation and workflow augmentation into an applied curriculum stream.",
      alternatives:
        "Generic AI literacy with no domain focus; vendor training tied to a single product; or theory without workflow practice.",
      choice:
        "A Marketing & Communications stream that treated prompting, source quality and human review as professional skills.",
      implementation:
        "Co-led stream development and delivery with AI First Consulting for the Digital Nova Scotia / StFX Practical Utilization of AI program.",
      outcome:
        "96% stream completion alongside strong program-level participation and feedback—stream results kept distinct from broader program figures.",
    },
  },
  {
    slug: "applied-ai-tourism-training",
    title: "Applied AI for tourism operations",
    year: "2024–2025",
    code: "WORK / 020",
    eyebrow: "Training · Prompting · Workflow automation",
    summary:
      "Co-developed and delivered professional AI training for tourism operators—including a sold-out workshop for 32 operators and the CLEAN prompting framework with review-data exercises.",
    overview:
      "Through CBU World Tourism Institute and Valley Regional Enterprise Network engagements, translated AI fundamentals, research, content creation, responsible adoption and workflow automation into hands-on training for tourism operators.\n\nOne in-person workshop sold out with **32** tourism operators. Instruction included the **CLEAN** framework (Context, Language, Example, Action, Nurture), tool evaluation and using real review data to demonstrate source-based analysis and prompt refinement—without publishing identifiable participant data.",
    category: "professional",
    depth: "case-study",
    role: "Curriculum co-developer / facilitator",
    context: "CBU World Tourism Institute · Valley REN",
    status: "Delivered",
    technologies: [
      "CLEAN prompting",
      "Tool evaluation",
      "Source-based research",
      "Workshop facilitation",
    ],
    capabilities: ["applied-ai-geo"],
    featured: false,
    presentation: "standard",
    engagementType: "educational",
    deliveryStatus: "delivered",
    visibility: "public",
    relatedProjectSlugs: ["applied-ai-microcredential"],
    outcomes: [
      "Sold-out in-person workshop with 32 tourism operators",
      "CLEAN prompting framework taught as a practical method",
      "Review-data exercises demonstrating source-based analysis and prompt refinement",
    ],
    caseStudy: {
      problem:
        "Tourism operators needed practical AI skills for research, content and operations—not abstract model theory.",
      constraints:
        "In-person workshop timeboxes, mixed digital literacy and the need to keep participant data out of public case writing.",
      responsibility:
        "Co-develop and facilitate training covering AI fundamentals, research, content creation, responsible adoption and workflow automation.",
      alternatives:
        "Slide-only awareness sessions; tool-vendor demos; or leaving operators to figure out prompting alone.",
      choice:
        "Hands-on exercises anchored in CLEAN prompting and real review-data examples operators already understand.",
      implementation:
        "Delivered workshop and training content with partner organizations, emphasizing tool evaluation and source-based prompt refinement.",
      outcome:
        "A sold-out 32-operator workshop and a reusable instructional pattern for tourism AI adoption.",
    },
  },
  {
    slug: "b2b-technical-editorial",
    title: "B2B technical editorial",
    year: "2024–2025",
    code: "WORK / 021",
    eyebrow: "Technical writing · Editorial ownership",
    summary:
      "Managed MacMillan Search’s in-house newsletter and blog The B2B SEO—topic planning, research, technical writing, editing and recurring publication for marketing and search professionals.",
    overview:
      "I planned, researched, wrote and edited The B2B SEO, MacMillan Search’s newsletter and blog for marketers and SEO practitioners—an audience that already knows the subject.\n\nThe channel has since been retired.",
    category: "professional",
    depth: "case-study",
    role: "Editor / writer",
    context: "MacMillan Search",
    status: "Retired",
    technologies: [
      "Technical writing",
      "Editorial planning",
      "SEO subject matter",
      "Editing",
    ],
    capabilities: ["technical-search"],
    featured: false,
    presentation: "compact",
    engagementType: "agency",
    deliveryStatus: "retired",
    visibility: "public",
    relatedProjectSlugs: [
      "macmillan-search-practice",
      "b2b-saas-organic-growth",
    ],
    outcomes: [
      "Owned topic planning through publication for The B2B SEO",
      "Regular writing and editing for a professional marketing/search audience",
      "Channel retired after the agency engagement",
    ],
    caseStudy: {
      problem:
        "The agency needed a recurring editorial channel that spoke credibly to B2B marketers and SEO practitioners.",
      constraints:
        "Async account work elsewhere and editorial standards for an expert audience.",
      responsibility:
        "Topic planning, research, writing, editing and recurring publication for the in-house newsletter and blog.",
      alternatives:
        "Outsource thought leadership; post irregularly without an editorial calendar; or avoid a public agency channel entirely.",
      choice:
        "Own the channel end to end so planning and craft stayed consistent with client delivery standards.",
      implementation:
        "Researched, drafted, edited and published for The B2B SEO while managing concurrent client accounts.",
      outcome:
        "Editorial ownership for a specialist audience, from topic planning through recurring publication.",
    },
  },
];
