import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "seo-rankings-report",
    title: "SEO Rankings Report",
    year: "2024–2025",
    eyebrow: "Search automation · Agency SEO",
    summary:
      "Configurable Python reporting that turns Google Search Console data into repeatable page- and query-level organic performance comparisons.",
    overview:
      "At MacMillan Search, recurring performance reviews for SaaS clients meant rebuilding the same GSC comparisons by hand. This tool automated those comparisons so analysts could spend time on interpretation—winners, losers, anomalies and re-optimization opportunities—instead of data assembly.\n\nIt was developed alongside organic growth work for a B2B SaaS account, where search-driven content optimization, internal linking and performance analysis produced a 226% average click increase across 18 pages over six months.",
    category: "tools",
    depth: "case-study",
    role: "Developer / SEO Specialist",
    context: "MacMillan Search · B2B SaaS engagement",
    status: "Public source code",
    technologies: [
      "Python",
      "Google Search Console API",
      "Caching",
      "Ahrefs",
      "Screaming Frog",
      "DataForSEO",
    ],
    capabilities: ["technical-search", "data-automation"],
    featured: true,
    repository: "https://github.com/amandadr/seo-rankings-report",
    outcomes: [
      "Automated page- and query-level GSC comparisons for recurring client reviews",
      "Supported 226% average organic click growth across 18 B2B SaaS pages over six months",
      "Surfaced winners, losers and re-optimization opportunities without opaque dashboards",
    ],
    caseStudy: {
      problem:
        "Organic performance comparisons for agency accounts required manual collection from Google Search Console and adjacent tools. Analysts rebuilt the same views each cycle, which slowed prioritization and made it harder to trust week-over-week changes.",
      constraints:
        "Had to work with real Search Console properties, stay configurable per client, remain explainable to SEO specialists who are not engineers, and avoid locking the workflow into a heavyweight BI product.",
      responsibility:
        "Designed and implemented the reporting workflow end to end: GSC API integration, caching, configuration, validation and report generation. Used the outputs alongside Ahrefs, Screaming Frog and competitive research while writing or refreshing SaaS landing pages.",
      alternatives:
        "Spreadsheet templates drifted and broke. One-off notebooks did not transfer between accounts. A full BI dashboard would have been slower to ship and harder for day-to-day SEO operators to own.",
      choice:
        "A configurable Python tool with cached API responses and explicit page- and query-level comparisons—auditable, repeatable and independent of any single client’s proprietary data.",
      implementation:
        "Integrates the Search Console API, caches responses, validates inputs and generates comparisons that highlight relative movement. Property-specific rules stay in configuration so the core logic remains reusable across accounts.",
      outcome:
        "A reusable agency workflow that identifies organic search winners and losers and informs optimization priorities. Public source code documents the approach; client property data stays out of the repository.",
    },
  },
  {
    slug: "good-robot-brewing",
    title: "Good Robot Brewing",
    year: "2026",
    eyebrow: "Commerce architecture · Technical SEO · Integrations",
    summary:
      "Website modernization and e-commerce infrastructure for a multi-location brewery—SEO-driven IA, custom plugins, fulfillment paths and launch QA.",
    overview:
      "What began as an e-commerce proposal became a full modernization roadmap with Differo: SEO-driven information architecture, URL migration strategy, events management overhaul and UI/UX improvements supported by A/B testing.\n\nThe technical surface spanned two WordPress origins, 40+ products and three fulfillment paths—plus DNS/CDN, payments, data mapping and stakeholder requirements through implementation and launch.",
    category: "professional",
    depth: "case-study",
    role: "Technical lead",
    context: "Manny Roy Consulting · with Differo",
    status: "Live commercial site",
    technologies: [
      "WordPress",
      "WooCommerce",
      "Custom plugins",
      "DNS/CDN",
      "Technical SEO",
      "A/B testing",
    ],
    capabilities: ["web-engineering", "technical-search"],
    featured: true,
    mrcUrl: "https://www.mannyroy.com/",
    outcomes: [
      "SEO-driven information architecture and URL migration strategy",
      "Custom plugins and integrations across 2 WordPress origins, 40+ products and 3 fulfillment paths",
      "Coordinated DNS/CDN, payments, data mapping and technical QA through launch",
    ],
    caseStudy: {
      problem:
        "The brewery needed a maintainable commerce and content platform that could absorb product, location, events and marketing complexity without becoming a fragile one-off stack—or a shallow theme swap that left search and fulfillment problems untouched.",
      constraints:
        "Existing brand and operational requirements, multiple fulfillment paths, migration risk, third-party integrations and a site the client could operate after launch. Business outcomes and client storytelling belong on mannyroy.com; this page focuses on engineering ownership.",
      responsibility:
        "Led SEO-driven IA, URL migration strategy, events management overhaul, UI/UX improvements with A/B testing, custom WordPress plugins, third-party integrations, data mapping, DNS/CDN, payment processing coordination and technical QA through launch.",
      alternatives:
        "A full custom commerce build would have been expensive to maintain. A hosted SaaS storefront would have fought existing WordPress content operations. A theme-only refresh would not have fixed URL, events or fulfillment architecture.",
      choice:
        "Evolve WordPress/WooCommerce with deliberate content models, custom plugins where integrations demanded it, and a migration plan that treated search and redirects as first-class work—not a launch afterthought.",
      implementation:
        "Managed technical dependencies across two WordPress origins, more than forty products and three fulfillment paths. Coordinated data mapping, DNS/CDN infrastructure, payment processing, stakeholder requirements and QA through implementation and launch, including experimentation around UI/UX changes.",
      outcome:
        "A launched commercial platform with clearer ownership boundaries between content, commerce and fulfillment. For the business narrative and client perspective, see the consulting case study on mannyroy.com.",
    },
    sections: [
      {
        heading: "What this page is for",
        body: "Hiring managers and engineers evaluating technical ownership: architecture, integrations, migration and QA. Prospective clients looking for commercial outcomes should start on mannyroy.com.",
      },
    ],
  },
  {
    slug: "wordpress-venue-management",
    title: "WordPress Venue Management",
    year: "2025",
    eyebrow: "Programmatic publishing · Structured data",
    summary:
      "WordPress plugin for venues with recurring programmes: events, series, rule-based calendar fill, iCal export and Event structured data.",
    overview:
      "Venues with trivia nights, readings and seasonal calendars often publish the same dates as disconnected posts. This plugin models each date as an event, groups related dates into series and uses saved rules to fill the calendar ahead—so the public archive, iCal feed and Event markup stay aligned with how the programme actually works.",
    category: "tools",
    depth: "case-study",
    role: "Developer",
    context: "Programmatic publishing",
    status: "Public source code",
    technologies: ["PHP", "WordPress", "Structured data", "iCal", "JSON-LD"],
    capabilities: ["technical-search", "web-engineering"],
    featured: true,
    repository: "https://github.com/amandadr/wordpress-venue-management",
    outcomes: [
      "Reusable content model for events vs series",
      "Rule-based generation of upcoming dates",
      "Public archive, iCal download and Event structured data",
    ],
    caseStudy: {
      problem:
        "Recurring venue programmes required hand-building occurrences or relying on generic events plugins with opaque data shapes. Calendars drifted, archives were hard to trust and search markup was inconsistent.",
      constraints:
        "WordPress as the publishing environment, visitors who need a reliable public programme, and search-friendly Event markup without creating duplicate-content traps.",
      responsibility:
        "Designed the content model (events vs series), rule-based generation, archive behaviour, iCal export and Event structured data.",
      alternatives:
        "Manual posts per date do not scale. A separate calendar SaaS embeds poorly and splits ownership. Off-the-shelf plugins often hide the data model venues actually need.",
      choice:
        "A purpose-built plugin where each date is an event, related dates form a series, and a saved rule fills the calendar ahead—keeping publishing logic reusable.",
      implementation:
        "PHP plugin code models events and series, generates upcoming dates from rules, exposes an archive and iCal download, and emits Event structured data for eligible pages.",
      outcome:
        "A maintainable publishing pattern for venue programmes. The public repository documents the model; venue-specific content stays on client sites.",
    },
  },
  {
    slug: "eastward",
    title: "Eastward",
    year: "2025",
    eyebrow: "Geographic content architecture · Next.js",
    summary:
      "Next.js guide to Eastern Prince Edward Island: communities, places and trip planning structured for discovery. Portfolio build—the inquiry form does not send mail.",
    overview:
      "Location-driven content is easy to flatten into undifferentiated lists. Eastward treats communities and places as first-class routes so visitors can move from region to place without marketing fiction.\n\nIt is explicitly a portfolio demonstration: the site says so, and the inquiry form does not submit anywhere.",
    category: "independent",
    depth: "case-study",
    role: "Developer",
    context: "Independent portfolio build",
    status: "Live demo",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    capabilities: ["web-engineering"],
    featured: true,
    liveUrl: "https://eastward.amandadroy.com/",
    repository: "https://github.com/amandadr/eastward",
    outcomes: [
      "Typed geographic content model with community and place routes",
      "Contemporary App Router frontend suitable for indexable location content",
      "Honest scope labelling for portfolio evaluation",
    ],
    caseStudy: {
      problem:
        "Eastern PEI needed a structure that helps people move from region to place. Flat list pages and brochure templates erase the geography that makes the content useful.",
      constraints:
        "Personal portfolio scope, static-friendly Next.js architecture, and clear labelling that this is not an operating tourism business.",
      responsibility:
        "Full public site: information architecture, TypeScript models, pages and copy that state the project’s nature.",
      alternatives:
        "A CMS-backed tourism template fought the geography. A map-first SPA complicated indexing and maintenance. A single long scroll could not support place-level discovery.",
      choice:
        "Next.js with typed content and geographic IA so communities and places remain first-class routes.",
      implementation:
        "App Router pages, TypeScript content structures and Tailwind UI. The inquiry form is presentational and does not send mail.",
      outcome:
        "A live demonstration of contemporary frontend work and location-driven content architecture that hiring managers can click through without ambiguity about scope.",
    },
  },
  {
    slug: "pcp-economic-dashboard",
    title: "Pictou County Partnership",
    year: "2025",
    eyebrow: "Business intelligence · Data architecture",
    summary:
      "Economic dashboard work: data architecture, stakeholder constraints and Tableau presentation of complex public datasets.",
    overview:
      "Regional partners needed a clearer view of economic indicators drawn from uneven public data—without losing methodological honesty or creating a dashboard nobody could maintain after handoff.\n\nThe business narrative is on mannyroy.com. Here you get the analytical structure, constraints and how the deliverable was shaped for stakeholders.",
    category: "professional",
    depth: "case-study",
    role: "Analyst / technical consultant",
    context: "Manny Roy Consulting",
    status: "Published case study on MRC",
    technologies: ["Tableau", "Data architecture", "Public datasets"],
    capabilities: ["data-automation"],
    featured: true,
    mrcUrl: "https://www.mannyroy.com/case-studies/pcp-economic-dashboard/",
    outcomes: [
      "Decision-ready Tableau dashboard over shaped public data",
      "Documented assumptions stakeholders could interrogate",
      "Complementary business case study on mannyroy.com",
    ],
    caseStudy: {
      problem:
        "Stakeholders needed usable views of regional economic indicators. Raw public datasets were too complex—and too uneven—to drop straight into charts.",
      constraints:
        "Public sources with quality gaps, partnership communication needs and a deliverable that remained maintainable after handoff.",
      responsibility:
        "Data modelling and dashboard construction in Tableau, plus explaining constraints and method so the partnership could trust what the visuals claimed.",
      alternatives:
        "Static PDF reports go stale. A custom web app exceeded the engagement. Spreadsheet dumps were not decision-ready.",
      choice:
        "Tableau as the presentation layer over a carefully shaped dataset and documented assumptions.",
      implementation:
        "Structured source data, validated joins and calculations, and a dashboard narrative oriented to partnership questions rather than decorative charts.",
      outcome:
        "A usable economic dashboard. The business narrative is on mannyroy.com; the analytical and architectural decisions are documented here.",
    },
  },
  {
    slug: "manny-roy-consulting",
    title: "Manny Roy Consulting",
    year: "2025–2026",
    eyebrow: "Content systems · SEO/GEO research",
    summary:
      "mannyroy.com as a technical project: custom Ghost theme, structured knowledge base and ongoing SEO/GEO research.",
    overview:
      "The consulting site is also a working environment for SEO and AI-search research. It holds services, case studies and a structured knowledge base spanning 13 technical topic collections and 200+ glossary entries—exploring semantic content organization, entity relationships, internal linking and organic discoverability.\n\nA Next.js rebuild exists as later architecture; the live stack remains the custom Ghost theme.",
    category: "professional",
    depth: "case-study",
    role: "Designer / developer / publisher",
    context: "Own consulting platform",
    status: "Live",
    technologies: [
      "Ghost",
      "Handlebars",
      "JavaScript",
      "Technical SEO",
      "GEO research",
      "Structured content",
    ],
    capabilities: ["web-engineering", "applied-ai-geo", "technical-search"],
    featured: true,
    liveUrl: "https://www.mannyroy.com/",
    repository: "https://github.com/amandadr/mrc-ghost-custom",
    outcomes: [
      "13 technical topic collections and 200+ glossary entries",
      "Custom theme with documented design system and SEO plumbing",
      "Living lab for semantic architecture and AI-search discoverability",
    ],
    caseStudy: {
      problem:
        "Consulting needed a site that could hold services, case studies, glossary and research without becoming a generic brochure—or an unmaintainable custom CMS.",
      constraints:
        "Editorial workflow, accessibility and performance expectations, and a design system that stays coherent as content grows. Commercial messaging lives on the consulting site; the engineering and IA decisions are what matter for technical evaluation.",
      responsibility:
        "Theme architecture, design tokens, information architecture, SEO plumbing and publishing patterns for glossary collections and case studies. Ongoing GEO/AEO research published through the knowledge base.",
      alternatives:
        "Stock Ghost themes fought the IA. Webflow locked content models. Jumping straight to Next.js before the content system was proven would have slowed publishing research.",
      choice:
        "A custom Ghost theme (ghost-custom) with a documented design system and structured collections for durable technical content.",
      implementation:
        "Handlebars templates, CUBE-informed CSS, component partials, sitemap and metadata discipline, and content models for writing, case studies and glossary terms organized into topical collections.",
      outcome:
        "A live consulting site that doubles as a content and SEO laboratory—with a public theme repository and a knowledge base large enough to test entity and internal-linking hypotheses in production.",
    },
  },
  {
    slug: "organized-chaos-arts",
    title: "Organized Chaos Arts",
    year: "2026",
    eyebrow: "Full-stack architecture · Membership platform",
    summary:
      "In-progress membership platform on Next.js, Sanity, Supabase and Stripe for an arts co-operative—frontend, CMS, database and payments on one architecture.",
    overview:
      "As co-founder and developer, I am building the public site and application foundation for Organized Chaos Arts: structured CMS content, design tokens and the path to membership, auth and billing.\n\nThe goal is a platform that can absorb ambitious co-operative requirements without a rewrite when membership work lands.",
    category: "professional",
    depth: "case-study",
    role: "Co-founder / developer",
    context: "Organization platform",
    status: "In progress · Public site live",
    technologies: ["Next.js", "TypeScript", "Sanity", "Supabase", "Stripe", "Tailwind CSS"],
    capabilities: ["web-engineering"],
    liveUrl: "https://organizedchaosarts.ca/",
    repository: "https://github.com/amandadr/organized-chaos-arts",
    outcomes: [
      "Public Next.js site with documented content model and design tokens",
      "Architecture planned for Supabase and Stripe membership flows",
      "Structure-first approach so later auth and billing do not force a redesign",
    ],
    caseStudy: {
      problem:
        "An arts co-operative needed a digital home that could grow into membership, payments and member services—not a brochure that would be thrown away when those features arrived.",
      constraints:
        "Limited early scope, need for editorial control via CMS, and future requirements for database-backed membership and Stripe billing.",
      responsibility:
        "Frontend architecture, Sanity content model, design tokens and planning the integration path for Supabase and Stripe.",
      alternatives:
        "A static marketing site would stall membership. An off-the-shelf membership SaaS would fight custom content and co-operative workflows.",
      choice:
        "Next.js and Sanity for the public layer, with Supabase and Stripe planned into the architecture so membership can land on existing structure.",
      implementation:
        "Shipped public pages and a written content model first. Design tokens and TypeScript patterns keep later application work consistent with the marketing site.",
      outcome:
        "A live public presence and an application architecture ready for membership work—without pretending billing is finished before it is.",
    },
  },
  {
    slug: "apec-site",
    title: "All Points East Campground",
    year: "2025",
    summary:
      "Public Next.js rebuild of the campground marketing site: bilingual content, Keystatic editing and intentional SEO basics—booking truth stays in a separate system.",
    overview:
      "The public brochure site replaces a Wix property with a bilingual Next.js front end and Keystatic-managed content. Reservations remain a separate operations system so marketing pages can stay static, indexable and editable without owning booking state.",
    category: "professional",
    depth: "project",
    role: "Developer",
    context: "Client marketing site",
    status: "In development",
    technologies: ["Next.js", "Keystatic", "TypeScript", "SEO basics"],
    capabilities: ["web-engineering", "technical-search"],
    decisionNote:
      "Separating public marketing from reservations keeps the brochure site deployable and bilingual without coupling it to private booking workflows.",
  },
  {
    slug: "apec-reservations",
    title: "All Points East Reservations",
    year: "2025",
    summary:
      "Internal operations hub for campground reservations—command journal, inventory and staff workflows bounded away from the public site.",
    overview:
      "Campground operations need a reliable place for blocks, rates, inquiries and booking mode—not a marketing CMS. This app holds that operational truth while the public site stays focused on discovery and conversion content.",
    category: "professional",
    depth: "project",
    role: "Developer",
    context: "Internal operations software",
    status: "Private operations app",
    technologies: ["TypeScript", "Google Sheets", "Command journal"],
    capabilities: ["data-automation", "web-engineering"],
    decisionNote:
      "Staff auth, environment configuration and operational internals stay private; this page only describes the problem boundary with the public site.",
  },
  {
    slug: "macmillan-search-practice",
    title: "MacMillan Search Practice",
    year: "2024–2025",
    eyebrow: "Agency technical SEO · Automation",
    summary:
      "Technical SEO, automation and organic growth across B2B SaaS, marketplace, AI and enterprise accounts—including audits, migrations and content architecture.",
    overview:
      "At MacMillan Search I was promoted from Automation Engineer to SEO Specialist. The work combined technical audits, search performance analysis, client collaboration and internal tooling across accounts that ranged from thousands to tens of thousands of URLs.\n\nSelected engagements below cover a React marketplace, a B2B SaaS growth account, an enterprise migration and an AI developer-platform content architecture.",
    category: "professional",
    depth: "case-study",
    role: "SEO Specialist (promoted from Automation Engineer)",
    context: "MacMillan Search · April 2024–June 2025",
    status: "Employment experience",
    technologies: [
      "Technical SEO",
      "JavaScript SEO",
      "Python",
      "GSC",
      "Ahrefs",
      "Screaming Frog",
      "Next.js recommendations",
      "Content architecture",
    ],
    capabilities: ["technical-search", "data-automation", "applied-ai-geo"],
    outcomes: [
      "50+ technical SEO audits with prioritized implementation recommendations",
      "226% average organic click growth across 18 B2B SaaS pages",
      "Migration QA across 224 URLs with no 4xx/5xx, chains or loops",
      "18-page pillar-and-cluster framework for an AI developer-platform site",
    ],
    caseStudy: {
      problem:
        "SaaS, marketplace and enterprise clients needed technical SEO that scaled beyond one-off audits—especially where JavaScript rendering, large URL inventories and migration risk were involved.",
      constraints:
        "Agency delivery timelines, shared tooling, client communication expectations and the need for automation that other specialists could reuse.",
      responsibility:
        "Technical auditing; automation development; organic growth initiatives; stakeholder reporting; QA processes; and collaboration with clients, developers and content teams after promotion into the SEO Specialist role.",
      alternatives:
        "Fully manual audits do not scale. Opaque black-box tools are hard to defend to developers. Waiting for headcount instead of tooling leaves quality inconsistent across accounts.",
      choice:
        "Pair rigorous audit practice with maintainable automation and clear implementation roadmaps—so findings become work developers can schedule.",
      implementation:
        "Audits covering crawlability, rendering, indexation and performance; Python reporting against GSC; migration URL mapping and post-launch crawling; and content frameworks that connect search intent to site architecture.",
      outcome:
        "Delivered prioritized recommendations across diverse architectures, measurable SaaS organic growth, a clean migration QA result set and reusable internal tooling. Engagement detail follows.",
    },
    sections: [
      {
        heading: "React marketplace — JavaScript SEO & architecture",
        body: "Investigated technical SEO for a React-based secondhand marketplace with thousands of product URLs. Developed recommendations for transitioning toward Next.js, addressing rendering, organic discoverability and the architectural foundations needed for scalable search performance. Communicated technical trade-offs and implementation priorities to stakeholders to establish buy-in and ROI.",
      },
      {
        heading: "B2B SaaS — organic growth & automation",
        body: "Wrote or refreshed 18 B2B SaaS pages over six months, achieving an average organic click increase of 226% across the measured set. Combined GSC, Ahrefs, Screaming Frog and DataForSEO with competitive research to guide optimization.\n\nDeveloped the configurable Python GSC reporting tool documented separately as SEO Rankings Report.",
      },
      {
        heading: "Enterprise migration — site migration & technical QA",
        body: "Led SEO support for a website migration spanning URL mapping, programmatic implementation, launch support, post-launch crawling and technical reporting. QA across 224 internal URLs found no 4xx or 5xx errors, redirect chains or loops. Documented and prioritized remaining redirect, sitemap and hreflang issues for remediation.",
      },
      {
        heading: "AI developer platform — scalable content architecture",
        body: "Developed an 18-page pillar-and-cluster content framework connecting search intent, competitive research, product capabilities and audience needs to a structured publishing strategy that ultimately shaped website architecture.",
      },
    ],
  },
  {
    slug: "woo-trexity",
    title: "WooCommerce to Trexity",
    year: "2025",
    summary:
      "WordPress plugin that books a Trexity delivery after an eligible WooCommerce order is paid, writing shipment data or skip reasons back to the order.",
    overview:
      "Ops staff need to know why an order did or did not create a delivery. The plugin checks cart and shipping method eligibility, skips duplicates and records shipment IDs, tracking or skip reasons on the order.",
    category: "tools",
    depth: "project",
    role: "Developer",
    context: "E-commerce integration",
    status: "Public source code",
    technologies: ["PHP", "WordPress", "WooCommerce"],
    capabilities: ["web-engineering", "data-automation"],
    repository: "https://github.com/amandadr/woo-trexity-plugin",
    decisionNote:
      "Idempotent submission and explicit skip reasons matter more than a clever UI—fulfillment failures should be visible on the order.",
  },
  {
    slug: "rfp-finder",
    title: "Canadian AI-Driven RFP Finder",
    year: "2025",
    summary:
      "Python CLI for Canadian public-sector tenders: fetch CanadaBuys notices, track amendments and score against a business profile with explainable model rankings.",
    overview:
      "Public procurement notices move quickly and amendments matter. This CLI keeps a local record, scores opportunities against a business profile and keeps model-assisted rankings human-readable so scoring never becomes a black box.",
    category: "tools",
    depth: "project",
    role: "Developer",
    context: "Independent tool",
    status: "Public source code",
    technologies: ["Python", "SQLite", "LLM APIs"],
    capabilities: ["data-automation", "applied-ai-geo"],
    repository: "https://github.com/amandadr/rfp-finder",
    decisionNote:
      "When a model helps rank a notice, the reason remains something you can read and challenge.",
  },
  {
    slug: "this-portfolio",
    title: "This portfolio",
    year: "2026",
    summary:
      "Statically generated Next.js site with shareable case studies, structured project metadata and technical SEO acceptance criteria built into the build.",
    overview:
      "You should be able to open a specific project URL, read the constraints and decisions, and share that link from a résumé. The site is statically exported so each case study is indexable HTML with stable paths.",
    category: "independent",
    depth: "project",
    role: "Developer",
    context: "Personal technical portfolio",
    status: "Live rebuild",
    technologies: ["Next.js", "TypeScript", "Static export", "IBM Plex"],
    capabilities: ["web-engineering", "technical-search"],
    liveUrl: "https://amandadroy.com/",
    decisionNote:
      "Static export and unique project URLs make individual case studies easy to cite; the design system stays shared with consulting work while the information architecture stays evaluation-first.",
  },
  {
    slug: "hyrule-merchant",
    title: "Hyrule Merchant",
    year: "2025",
    summary:
      "Noncommercial Hyrule shop and field guide. Compendium API snapshot validated at build time; invented prices stay out of source data.",
    overview:
      "An Astro experiment in build-time data validation and content separation: third-party compendium data is checked at build, while fictional commerce data stays isolated. Not affiliated with Nintendo; nothing is for sale.",
    category: "lab",
    depth: "project",
    role: "Developer",
    context: "Experiment",
    status: "Lab · Live demo",
    technologies: ["Astro", "TypeScript"],
    capabilities: ["web-engineering", "applied-ai-geo"],
    lab: true,
    liveUrl: "https://merchant.amandadroy.com/",
    repository: "https://github.com/amandadr/hyrule-merchant",
    decisionNote:
      "Build-time validation keeps third-party data honest; fictional commerce stays clearly noncommercial.",
  },
  {
    slug: "newfie",
    title: "Newfie",
    year: "2025",
    summary:
      "Image-led Next.js theme experiment exploring heavy media layouts and performance trade-offs.",
    overview:
      "A place to try image-forward composition and Tailwind-driven layout without tying those choices to production evaluation pages.",
    category: "lab",
    depth: "project",
    role: "Developer",
    context: "Theme experiment",
    status: "Lab · In progress",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    capabilities: ["web-engineering"],
    lab: true,
    repository: "https://github.com/amandadr/newfie-portfolio",
    decisionNote:
      "Separating theme experiments from evaluation pages keeps media experiments from shaping how case studies are read.",
  },
  {
    slug: "home-camera-pipeline",
    title: "Home camera pipeline",
    year: "2025",
    summary:
      "Local bird-feeder detection pipeline with Frigate-oriented recording and an Apple Silicon detector path.",
    overview:
      "A home lab for on-device detection and recording without cloud subscriptions. Public write-ups omit hostnames, camera addresses and access details.",
    category: "lab",
    depth: "project",
    role: "Developer",
    context: "Home lab",
    status: "Lab · Private deployment",
    technologies: ["Frigate", "ONNX", "Apple Silicon", "go2rtc"],
    capabilities: ["data-automation", "applied-ai-geo"],
    lab: true,
    decisionNote:
      "Local inference and redacted networking details keep the architecture teachable without exposing the home setup.",
  },
  {
    slug: "petome",
    title: "Petome",
    year: "2023",
    summary:
      "Visual novel built to deepen React state, reducers, hooks and asynchronous data handling.",
    category: "archive",
    depth: "project",
    role: "Developer",
    context: "Early work",
    status: "Archive · Live",
    technologies: ["React", "Ruby on Rails", "PostgreSQL"],
    capabilities: ["web-engineering"],
    liveUrl: "https://petome.amandadroy.com/",
    repository: "https://github.com/amandadr/petome",
    decisionNote: "Learning project focused on state management and play-loop clarity.",
  },
  {
    slug: "simple-weather",
    title: "Simple Weather",
    year: "2024",
    summary:
      "Small Vue weather app using OpenWeatherMap for current conditions and a short forecast.",
    category: "archive",
    depth: "project",
    role: "Developer",
    context: "Early work",
    status: "Archive · Live",
    technologies: ["Vue", "JavaScript", "CSS"],
    capabilities: ["web-engineering"],
    liveUrl: "https://weather.amandadroy.com/",
    repository: "https://github.com/amandadr/simple-weather",
    decisionNote: "First Vue project with a deliberately small scope.",
  },
  {
    slug: "lift-off",
    title: "Lift Off",
    year: "2024",
    summary:
      "Gym calculators for plate math and related helpers so platform time stays on lifting.",
    category: "archive",
    depth: "project",
    role: "Developer",
    context: "Early work",
    status: "Archive · Live",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    capabilities: ["web-engineering"],
    liveUrl: "https://lift.amandadroy.com/",
    repository: "https://github.com/amandadr/lift-off",
    decisionNote: "Utility app prioritizing speed of use over feature breadth.",
  },
  {
    slug: "hyrule-compendium",
    title: "Hyrule Compendium",
    year: "2024",
    summary:
      "React SPA for browsing Breath of the Wild compendium data, with a Lambda-hosted Python fuzzy search.",
    category: "archive",
    depth: "project",
    role: "Developer",
    context: "Early work",
    status: "Archive · Live",
    technologies: ["React", "Python", "AWS Lambda", "MUI"],
    capabilities: ["web-engineering", "data-automation"],
    liveUrl: "https://hyrule.amandadroy.com/",
    repository: "https://github.com/amandadr/hyrule-compendium",
    decisionNote:
      "Combined a public API with a small serverless search function to explore full-stack glue.",
  },
];

export const categoryLabels: Record<Project["category"], string> = {
  professional: "Professional work",
  tools: "Tools & infrastructure",
  independent: "Independent builds",
  lab: "Lab",
  archive: "Archive",
};

export const categoryCodes: Record<Project["category"], string> = {
  professional: "WORK",
  tools: "TOOL",
  independent: "BUILD",
  lab: "LAB",
  archive: "ARCH",
};

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/** Journal-style identifier, e.g. TOOL / 001 */
export function getProjectCode(project: Project): string {
  if (project.code) return project.code;
  const peers = projects.filter((item) => item.category === project.category);
  const index = peers.findIndex((item) => item.slug === project.slug) + 1;
  return `${categoryCodes[project.category]} / ${String(index).padStart(3, "0")}`;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getLabProjects(): Project[] {
  return projects.filter((project) => project.lab || project.category === "lab");
}

export function getProjectsByCategory(category: Project["category"]): Project[] {
  return projects.filter((project) => project.category === category);
}

export function getWorkIndexProjects(): Project[] {
  return projects.filter((project) => project.category !== "lab");
}
