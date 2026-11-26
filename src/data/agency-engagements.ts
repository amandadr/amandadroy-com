import type { Project } from "@/lib/types";

/** Anonymized MacMillan / agency engagements as independently shareable case studies. */
export const agencyEngagements: Project[] = [
  {
    slug: "marketplace-rendering-architecture",
    title: "Marketplace rendering architecture",
    headline: "JavaScript SEO for a large-scale marketplace",
    year: "2024–2025",
    code: "WORK / 010",
    eyebrow: "Agency engagement · Recommendation delivered",
    summary:
      "Investigated how a React secondhand marketplace with thousands of product URLs rendered for crawlers, then recommended a Next.js path with prioritized implementation steps—not a rewrite slogan.",
    overview:
      "The marketplace already ran on React. The question was not whether React can rank; it was which rendering and routing choices blocked discovery at inventory scale.\\n\\nThis engagement produced a recommendation package. Implementation ownership stayed with the client’s engineering team.",
    category: "professional",
    depth: "case-study",
    role: "Technical SEO",
    context: "Agency engagement · Anonymized",
    status: "Recommendation delivered",
    technologies: ["React", "Next.js recommendations", "JavaScript SEO", "Technical SEO"],
    capabilities: ["technical-search", "web-engineering"],
    featured: true,
    featuredRank: 3,
    editorialRank: 3,
    presentation: "flagship",
    engagementType: "agency",
    deliveryStatus: "recommendation",
    visibility: "anonymized",
    relatedProjectSlugs: ["macmillan-search-practice", "enterprise-migration-qa"],
    outcomes: [
      "Documented rendering and discoverability constraints across a large product URL inventory",
      "Recommended Next.js capabilities (SSR/SSG/hybrid) mapped to marketplace templates",
      "Prioritized implementation steps developers could schedule—without claiming unverified traffic lifts",
    ],
    caseStudy: {
      problem:
        "Thousands of product URLs raised crawl, rendering and indexation questions that a page-by-page SEO checklist could not answer.",
      constraints:
        "Agency timelines, an existing React architecture and the need for stakeholder buy-in before engineering investment.",
      responsibility:
        "Investigate JavaScript SEO and rendering implications; recommend a transition path that used Next.js rendering options deliberately; communicate priorities without overselling growth.",
      alternatives:
        "Keep optimizing within client-side rendering alone; recommend a full rewrite without evidence; or wait until ranking declines forced the conversation.",
      choice:
        "Ground the recommendation in rendering and discoverability analysis, then sequence work developers could schedule.",
      implementation:
        "Compared what crawlers received in initial HTML versus after client rendering for product and listing templates. Reviewed routing and internal linking patterns that affected discovery of deep inventory URLs. Assessed metadata and structured-data delivery under the current render path. Mapped those findings to Next.js rendering strategies (server rendering, static generation and hybrid patterns) where they addressed the observed gaps—not because Next.js is “better React,” but because those capabilities change what reaches the crawler before hydration.",
      outcome:
        "A recommendation package that separated investigation findings from implementation sequencing. Buy-in was for architectural change with clear next steps; delivery of the migration itself was out of scope.",
    },
    blocks: [
      {
        type: "table",
        heading: "Investigation focus",
        headers: ["Area", "What I checked", "Why it mattered"],
        rows: [
          ["Initial HTML", "Whether product content appeared before JavaScript execution", "Crawlers that do not fully render never see CSR-only content"],
          ["Routing", "How listing and product URLs were generated and linked", "Orphan or parameter-heavy paths limit discovery at inventory scale"],
          ["Metadata", "Title, canonical and structured-data delivery under the current render path", "Marketplace SERP presentation depends on stable head content"],
          ["Internal linking", "Paths from hubs and filters into deep product URLs", "Large inventories fail when only a fraction of SKUs are reachable"],
          ["Recommendation", "Where SSR, SSG or hybrid rendering would close gaps", "Next.js was proposed for those capabilities—not as a brand preference"],
        ],
      },
      {
        type: "prose",
        heading: "Recommendation vs implementation",
        body:
          "This page documents a delivered recommendation. It does not claim that the marketplace completed a Next.js migration or that organic traffic changed as a result. Those outcomes would require a separate implementation engagement and measurement window.",
      },
    ],
  },
  {
    slug: "b2b-saas-organic-growth",
    title: "B2B SaaS organic growth",
    headline: "226% average organic click growth on 18 SaaS pages",
    year: "2024–2025",
    code: "WORK / 011",
    eyebrow: "Agency engagement · Delivered",
    summary:
      "Recurring organic optimization for a Canadian HR/payroll SaaS platform—page selection, content refreshes, internal linking and Search Console measurement over six months.",
    overview:
      "The acquisition problem was not a missing blog calendar. Priority landing and feature pages underperformed relative to demand the product could serve. Over six months I selected, wrote or refreshed eighteen pages, improved internal linking and reviewed performance every cycle.\\n\\nThe headline metric is a 226% average organic click increase across that measured set. Several high-performing pages pulled the average up; this is not median growth, sitewide growth or a claim about typical page performance.",
    category: "professional",
    depth: "case-study",
    role: "SEO Specialist",
    context: "Agency engagement · Anonymized",
    status: "Delivered",
    technologies: ["GSC", "Ahrefs", "Screaming Frog", "DataForSEO", "Content strategy"],
    capabilities: ["technical-search", "data-automation"],
    featured: true,
    featuredRank: 2,
    editorialRank: 2,
    presentation: "flagship",
    engagementType: "agency",
    deliveryStatus: "delivered",
    visibility: "anonymized",
    relatedProjectSlugs: ["seo-rankings-report", "macmillan-search-practice"],
    outcomes: [
      "226% average organic click growth across 18 written or refreshed SaaS pages over six months",
      "Monthly winners/losers loop that set the next round of refreshes",
      "Measurement workflow later open-sourced as SEO Rankings Report",
    ],
    caseStudy: {
      problem:
        "Organic acquisition lagged where the product had clear search demand. One-off content production without a measurement loop could not prioritize the next page.",
      constraints:
        "Agency delivery cadence, shared tooling and keeping client property data out of shared repositories.",
      responsibility:
        "Opportunity identification, intent mapping, page selection and refresh, internal linking guidance and recurring Search Console analysis.",
      alternatives:
        "High-volume publishing without prioritization; dashboard reporting with no editorial action; or opaque third-party scorecards.",
      choice:
        "Pair editorial work with repeatable Search Console comparisons so each month’s priorities came from evidence.",
      implementation:
        "Pages were selected from demand, competitive gaps and existing equity—not from a generic keyword dump. Revisions covered titles, on-page structure, internal links and clarity of product fit. Ahrefs, Screaming Frog and DataForSEO informed research; a Python GSC comparison workflow (later open-sourced) showed which pages gained or lost clicks so the next sprint was not guesswork.",
      outcome:
        "226% average organic click increase across the eighteen measured pages over six months, with methodology and limits documented below.",
    },
    blocks: [
      {
        type: "table",
        heading: "How the 226% figure was measured",
        headers: ["Detail", "Value"],
        rows: [
          ["Measured population", "18 written or refreshed pages"],
          ["Engagement duration", "Six months"],
          ["Metric", "Google Search Console organic clicks"],
          ["Aggregation", "Average click change across the measured page set"],
          ["Distribution", "Several high-performing pages influenced the average"],
          ["Not claimed", "Median page growth, sitewide growth or guaranteed future results"],
        ],
      },
      {
        type: "prose",
        heading: "Relationship to SEO Rankings Report",
        body:
          "The open-source reporting tool is the reusable measurement workflow. This case study is the client engagement that used that loop. Growth numbers belong here; software architecture belongs on the Rankings Report page.",
      },
    ],
  },
  {
    slug: "enterprise-migration-qa",
    title: "Enterprise website migration & QA",
    headline: "Migration QA that separates clean results from remaining work",
    year: "2024–2025",
    code: "WORK / 012",
    eyebrow: "Agency engagement · Delivered",
    summary:
      "SEO support for an enterprise migration: URL mapping, launch support, post-launch crawling and technical reporting—with a 224-URL QA set and documented remediations.",
    overview:
      "Migration SEO is validation criteria, not only redirect spreadsheets. After launch I crawled a defined internal URL set, reported what passed and documented what still needed work—so “clean” and “done” were never confused.",
    category: "professional",
    depth: "case-study",
    role: "SEO Specialist",
    context: "Agency engagement · Anonymized",
    status: "Delivered",
    technologies: ["Technical SEO", "Crawl QA", "Redirect mapping", "hreflang"],
    capabilities: ["technical-search", "web-engineering"],
    featured: true,
    featuredRank: 5,
    editorialRank: 5,
    presentation: "flagship",
    engagementType: "agency",
    deliveryStatus: "delivered",
    visibility: "anonymized",
    relatedProjectSlugs: ["macmillan-search-practice", "technical-audit-methodology"],
    outcomes: [
      "QA across 224 internal URLs with no 4xx/5xx, redirect chains or loops in the measured set",
      "Documented remaining redirect, sitemap and hreflang issues for remediation",
      "Launch support spanning mapping, coordination and post-launch crawling",
    ],
    caseStudy: {
      problem:
        "Enterprise migrations concentrate SEO risk into a short launch window: broken paths, chains, loops and incomplete hreflang can erase equity quickly.",
      constraints:
        "Shared agency tooling, launch schedules, multi-stakeholder ownership and the need for auditable QA evidence.",
      responsibility:
        "URL mapping support, implementation coordination, launch support, post-launch crawling and technical reporting.",
      alternatives:
        "Trust platform defaults; sample a handful of URLs; or treat post-launch fixes as reactive firefighting only.",
      choice:
        "Define validation criteria up front, crawl systematically after launch and report clean results separately from remediation.",
      implementation:
        "Mapped priority URLs before launch, supported cutover, then crawled the agreed internal set. Issues were classified so stakeholders saw both the clean 224-URL result and the follow-ups that remained.",
      outcome:
        "A QA package stakeholders could act on—clean measured results and outstanding remediations in the same report.",
    },
    blocks: [
      {
        type: "table",
        heading: "Migration acceptance matrix (224-URL QA set)",
        caption: "Clean results and follow-ups reported together",
        headers: ["Validation area", "Documented observation"],
        rows: [
          ["Internal 4xx and 5xx responses", "None identified in the 224-URL QA set"],
          ["Redirect chains and loops", "None identified in the QA set"],
          ["Redirect configuration", "Additional remediation documented"],
          ["XML sitemaps", "Follow-up issues documented"],
          ["Hreflang", "Follow-up issues documented"],
        ],
      },
      {
        type: "prose",
        heading: "Why the distinction matters",
        body:
          "A migration can pass a critical URL sample and still leave sitemap or hreflang debt. Reporting both keeps engineering focused and prevents a single clean metric from implying the entire migration is finished.",
      },
    ],
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
    headline: "Tripling article capacity without skipping factual review",
    year: "2024–2025",
    code: "WORK / 014",
    eyebrow: "Agency engagement · Delivered",
    summary:
      "Python-assisted workflow from expert podcast material to Squarespace-ready articles—roughly 3× production capacity with humans still responsible for verification.",
    overview:
      "For a Canadian financial-services organization, expert podcasts held publishable insight that manual article production could not keep up with. The workflow covered transcription, structuring, AI-assisted drafting, human factual review and CMS preparation for Squarespace.\\n\\nSeven accuracy-sensitive articles shipped during the engagement. Capacity for the measured workflow roughly tripled. This is applied editorial automation—not a claim about AI-search citation gains.",
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
    editorialRank: 6,
    presentation: "flagship",
    engagementType: "agency",
    deliveryStatus: "delivered",
    visibility: "anonymized",
    relatedProjectSlugs: [
      "macmillan-search-practice",
      "llm-evaluation-practice",
    ],
    outcomes: [
      "Roughly 3× editorial production capacity with human review retained",
      "Pipeline from podcast audio to Squarespace CMS preparation",
      "Seven accuracy-sensitive articles completed during the engagement",
    ],
    caseStudy: {
      problem:
        "Expert podcast material had to become publishable SEO articles faster than a fully manual process allowed—without skipping factual review in a regulated vertical.",
      constraints:
        "Accuracy requirements in financial services, Squarespace publishing conventions and the need for human judgment on claims.",
      responsibility:
        "Workflow design across transcription, structuring, AI-assisted drafting, factual verification and CMS preparation.",
      alternatives:
        "Fully manual production; unattended auto-publish; or generic summarization that ignored source grounding.",
      choice:
        "Automate preparation up to the CMS edge while keeping people responsible for factual approval.",
      implementation:
        "Podcast audio moved through Whisper/AssemblyAI transcription, SEO structuring (including SurferSEO), OpenAI-assisted first drafts and human factual review before Squarespace-oriented CMS preparation. Nothing published without a person accepting the claims.",
      outcome:
        "Approximately triple production capacity for the measured workflow, with seven accuracy-sensitive articles completed. Publishing was a prepared handoff—not an unattended Squarespace post loop.",
    },
    blocks: [
      {
        type: "steps",
        heading: "Where automation stopped and people took over",
        items: [
          "Source: expert podcast audio (confidential material; not reproduced here).",
          "Automate: transcription and structured editorial outline from the transcript.",
          "Automate: AI-assisted first draft shaped for search intent and on-page structure.",
          "Human: factual verification, unsupported-claim removal and voice corrections.",
          "Automate assist: CMS preparation fields and formatting for Squarespace.",
          "Human: final publish decision on the client CMS.",
        ],
      },
      {
        type: "prose",
        heading: "What this does and does not prove",
        body:
          "The engagement proves an applied AI content-engineering workflow with measurable throughput and retained review. It does not independently prove improved visibility in AI-generated search answers.",
      },
    ],
  },
  {
    slug: "enterprise-content-consolidation",
    title: "Enterprise content consolidation",
    headline: "Consolidating fragmented enterprise content architecture",
    editorialRank: 18,
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
    headline: "Technical SEO across large multi-site portfolios",
    editorialRank: 16,
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
    headline: "Managing a B2B technical publication",
    editorialRank: 22,
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
