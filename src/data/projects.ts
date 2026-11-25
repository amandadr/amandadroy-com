import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "seo-rankings-report",
    title: "SEO Rankings Report",
    year: "2025",
    eyebrow: "Technical case study · Search automation",
    summary:
      "A configurable Python tool that turns Google Search Console exports into repeatable page- and query-level organic performance comparisons.",
    category: "tools",
    depth: "case-study",
    role: "Developer",
    context: "Agency SEO",
    status: "Public source code",
    technologies: ["Python", "Google Search Console API", "Caching"],
    capabilities: ["technical-search", "data-automation"],
    featured: true,
    repository: "https://github.com/amandadr/seo-rankings-report",
    caseStudy: {
      problem:
        "Recurring organic performance comparisons required manual data collection and analysis. Analysts spent time assembling the same GSC views instead of interpreting what changed.",
      constraints:
        "Needed to work with real Search Console data, stay configurable per client or property, and produce outputs someone could trust without reading the script.",
      responsibility:
        "Designed and implemented the reporting workflow end to end: API integration, caching, configuration, validation, and report generation.",
      alternatives:
        "Spreadsheet templates, one-off notebooks, or a heavier BI dashboard. Spreadsheets drifted; dashboards were overkill for a repeatable comparison job.",
      choice:
        "A configurable CLI-oriented Python tool with cached GSC data and explicit page- and query-level comparisons, so the process stays auditable.",
      implementation:
        "Integrates the Search Console API, caches responses, validates inputs, and generates repeatable comparisons. Configuration keeps property-specific rules out of the core logic.",
      outcome:
        "A reusable workflow that supports performance comparisons and surfaces optimization opportunities. Public source code documents the approach; property-specific client data stays out of the repo.",
    },
  },
  {
    slug: "good-robot-brewing",
    title: "Good Robot Brewing",
    year: "2025",
    eyebrow: "Technical case study · Architecture · E-commerce",
    summary:
      "Technical ownership of a brewery web platform: architecture, integrations, migration, experimentation, and launch—not only the finished storefront.",
    category: "professional",
    depth: "case-study",
    role: "Technical lead",
    context: "Professional engagement via MRC",
    status: "Live commercial site",
    technologies: ["WordPress", "WooCommerce", "Integrations", "Technical SEO"],
    capabilities: ["web-engineering", "technical-search"],
    featured: true,
    mrcUrl: "https://www.mannyroy.com/",
    caseStudy: {
      problem:
        "The brewery needed a maintainable commerce and content platform that could absorb real product, location, and marketing complexity without becoming a fragile custom stack.",
      constraints:
        "Existing brand and operational requirements, third-party integrations, migration risk, and the need for a site the client could operate after launch.",
      responsibility:
        "Owned technical architecture, integrations, migration planning, experimentation around launch, and QA—distinct from the business-outcome narrative published on MRC.",
      alternatives:
        "A full custom build, a hosted commerce SaaS, or a shallow theme swap on the existing stack. Custom cost too much to maintain; a shallow swap would not fix structure.",
      choice:
        "A WordPress and WooCommerce foundation with deliberate content models, integrations, and search-aware information architecture the brewery could own.",
      implementation:
        "Architecture and integration work covered catalog and content structure, shipping and fulfillment touchpoints where relevant, migration of critical content, and launch validation including technical SEO checks.",
      outcome:
        "A launched commercial platform with clearer ownership boundaries. Business results and client story live on mannyroy.com; this page records engineering decisions and trade-offs.",
    },
  },
  {
    slug: "wordpress-venue-management",
    title: "WordPress Venue Management",
    year: "2025",
    eyebrow: "Technical case study · Programmatic publishing",
    summary:
      "A WordPress plugin for venues with a public programme: events, series, rule-based calendar fill, iCal, and Event structured data.",
    category: "tools",
    depth: "case-study",
    role: "Developer",
    context: "Programmatic publishing",
    status: "Public source code",
    technologies: ["PHP", "WordPress", "Structured data", "iCal"],
    capabilities: ["technical-search", "web-engineering"],
    featured: true,
    repository: "https://github.com/amandadr/wordpress-venue-management",
    caseStudy: {
      problem:
        "Venues with recurring programmes (trivia, readings, seasonal dates) needed a content model that kept calendars accurate without hand-building every occurrence.",
      constraints:
        "WordPress as the publishing environment, public-facing archives visitors can trust, and search-friendly Event markup without duplicate-content traps.",
      responsibility:
        "Designed the content model (events vs series), rule-based generation, archive behaviour, iCal export, and Event structured data.",
      alternatives:
        "Manual posts per date, a generic events plugin with opaque data shapes, or a separate calendar SaaS embedded on the site.",
      choice:
        "A purpose-built plugin where each date is an event, related dates form a series, and a saved rule fills the calendar ahead—keeping publishing logic reusable.",
      implementation:
        "PHP plugin code models events and series, generates upcoming dates from rules, exposes an archive and iCal download, and emits Event structured data for eligible pages.",
      outcome:
        "A maintainable publishing pattern for venue programmes. Public repository documents the model; venue-specific content stays on client sites.",
    },
  },
  {
    slug: "eastward",
    title: "Eastward",
    year: "2025",
    eyebrow: "Technical case study · Geographic content",
    summary:
      "A Next.js guide to Eastern Prince Edward Island: communities, places, and trip planning structured for discovery. Portfolio build—the inquiry form does not send mail.",
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
    caseStudy: {
      problem:
        "Location-driven content is easy to flatten into undifferentiated lists. Eastern PEI needed a structure that helps people move from region to place without marketing fiction.",
      constraints:
        "Personal portfolio scope, static-friendly Next.js architecture, honest labelling that this is not a tourism business, and an inquiry form that must not pretend to send.",
      responsibility:
        "Full stack of the public site: information architecture, TypeScript models, pages, and copy that states the project’s portfolio nature.",
      alternatives:
        "A CMS-backed tourism template, a map-first SPA, or a single long scroll. Templates fought the geography; a map-first SPA complicated indexing and maintenance.",
      choice:
        "Next.js with typed content and geographic IA so communities and places remain first-class routes.",
      implementation:
        "App Router pages, TypeScript content structures, and Tailwind UI. The inquiry form is presentational—it does not submit to a backend.",
      outcome:
        "A live demonstration of contemporary frontend work and location-driven content architecture, with clear honesty about scope.",
    },
  },
  {
    slug: "pcp-economic-dashboard",
    title: "Pictou County Partnership",
    year: "2025",
    eyebrow: "Technical case study · Business intelligence",
    summary:
      "Economic dashboard work: data architecture, stakeholder constraints, and Tableau presentation of complex public datasets.",
    category: "professional",
    depth: "case-study",
    role: "Analyst / technical consultant",
    context: "Professional engagement via MRC",
    status: "Published case study on MRC",
    technologies: ["Tableau", "Data architecture", "Public datasets"],
    capabilities: ["data-automation"],
    featured: true,
    mrcUrl:
      "https://www.mannyroy.com/case-studies/pcp-economic-dashboard/",
    caseStudy: {
      problem:
        "Stakeholders needed a clearer view of regional economic indicators drawn from complex public data, without losing methodological honesty.",
      constraints:
        "Public data sources with uneven quality, stakeholder communication needs, and a deliverable that remained maintainable after handoff.",
      responsibility:
        "Data modelling and dashboard construction in Tableau, plus explaining constraints and method so the partnership could trust what the visuals claimed.",
      alternatives:
        "Static PDF reports, a custom web app, or raw spreadsheet dumps. PDFs go stale; a custom app exceeded the engagement; dumps were not decision-ready.",
      choice:
        "Tableau as the presentation layer over a carefully shaped dataset and documented assumptions.",
      implementation:
        "Structured source data, validated joins and calculations, and a dashboard narrative oriented to partnership questions rather than chart decoration.",
      outcome:
        "A usable economic dashboard and a business-facing case study on mannyroy.com. This page focuses on analytical and architectural decisions.",
    },
  },
  {
    slug: "manny-roy-consulting",
    title: "Manny Roy Consulting",
    year: "2025",
    eyebrow: "Technical case study · Content systems",
    summary:
      "mannyroy.com as a technical project: custom Ghost theme, structured knowledge base, content architecture, and ongoing SEO/GEO research.",
    category: "professional",
    depth: "case-study",
    role: "Designer / developer / publisher",
    context: "Own consulting platform",
    status: "Live",
    technologies: ["Ghost", "Handlebars", "JavaScript", "Technical SEO"],
    capabilities: ["web-engineering", "applied-ai-geo", "technical-search"],
    featured: true,
    liveUrl: "https://www.mannyroy.com/",
    repository: "https://github.com/amandadr/mrc-ghost-custom",
    caseStudy: {
      problem:
        "Consulting positioning needed a site that could hold services, case studies, glossary, and research without becoming a generic brochure or an unmaintainable custom CMS.",
      constraints:
        "Editorial workflow, accessibility and performance expectations, and a design system that stays coherent as content grows. A Next.js rebuild (mrc-nextjs) remains later architecture, not the live stack yet.",
      responsibility:
        "Theme architecture, design tokens, information architecture, SEO plumbing, and the publishing patterns used for glossary and case studies.",
      alternatives:
        "Off-the-shelf Ghost themes, Webflow, or jumping straight to a Next.js marketing site. Stock themes fought the IA; Webflow locked content; Next.js is staged separately.",
      choice:
        "A custom Ghost theme (ghost-custom) with a documented design system—cream, olive, maroon, IBM Plex—and structured collections for durable content.",
      implementation:
        "Handlebars templates, CUBE-informed CSS, component partials, sitemap and metadata discipline, and content models for writing, case studies, and glossary terms.",
      outcome:
        "A live consulting site that doubles as a content and SEO laboratory. Theme source is public; commercial messaging stays on mannyroy.com.",
    },
  },
  {
    slug: "organized-chaos-arts",
    title: "Organized Chaos Arts",
    year: "2025",
    summary:
      "Next.js and Sanity site for an arts organization I am co-founding: public pages, a documented content model, and design tokens for later membership work.",
    category: "professional",
    depth: "project",
    role: "Co-founder / developer",
    context: "Organization website",
    status: "Live",
    technologies: ["Next.js", "TypeScript", "Sanity", "Tailwind CSS"],
    capabilities: ["web-engineering"],
    liveUrl: "https://organizedchaosarts.ca/",
    repository: "https://github.com/amandadr/organized-chaos-arts",
    decisionNote:
      "Prioritized a written content model and design tokens early so membership and auth can land on structure instead of a redesign.",
  },
  {
    slug: "apec-site",
    title: "All Points East Campground",
    year: "2025",
    summary:
      "Public Next.js rebuild of the campground marketing site: bilingual content, Keystatic editing, and intentional SEO basics—booking truth stays in a separate system.",
    category: "professional",
    depth: "project",
    role: "Developer",
    context: "Client marketing site",
    status: "In development",
    technologies: ["Next.js", "Keystatic", "TypeScript"],
    capabilities: ["web-engineering", "technical-search"],
    decisionNote:
      "Separated public marketing from reservations so the brochure site can be static, bilingual, and indexable without owning booking state.",
  },
  {
    slug: "apec-reservations",
    title: "All Points East Reservations",
    year: "2025",
    summary:
      "Internal operations hub for campground reservations. Describes the problem boundary with the public site—not staff auth, env, or operational internals.",
    category: "professional",
    depth: "project",
    role: "Developer",
    context: "Internal operations software",
    status: "Private operations app",
    technologies: ["TypeScript", "Google Sheets", "Command journal"],
    capabilities: ["data-automation", "web-engineering"],
    decisionNote:
      "Kept booking truth and staff workflows out of the public marketing repo so each system can change without breaking the other.",
  },
  {
    slug: "macmillan-search-practice",
    title: "MacMillan Search Practice",
    year: "2024–2025",
    summary:
      "Anonymized view of agency technical SEO: audits, automation, and organic growth work across multi-site portfolios—without client names or proprietary data.",
    category: "professional",
    depth: "case-study",
    role: "SEO Specialist & Automation Developer",
    context: "Agency practice (anonymized)",
    status: "Employment experience",
    technologies: ["Technical SEO", "Python", "GSC", "Automation"],
    capabilities: ["technical-search", "data-automation"],
    caseStudy: {
      problem:
        "SaaS, marketplace, and enterprise accounts needed technical SEO that scaled beyond one-off audits—especially across large URL inventories.",
      constraints:
        "Client confidentiality, shared agency tooling, and the need to automate without inventing one-off scripts nobody could run again.",
      responsibility:
        "Technical auditing, automation development, client liaison, and organic performance work after promotion from the automation-focused role.",
      alternatives:
        "Fully manual audits, opaque black-box tools, or ignoring automation until headcount grew.",
      choice:
        "Combine rigorous audit practice with maintainable automation (Python, cloud functions, GSC workflows) so findings could be repeated and explained.",
      implementation:
        "Audits, tooling maintenance across GitHub/Docker/GCP/AWS, and client-facing recommendations. Specific client properties are not published here.",
      outcome:
        "Clearer personal ownership of technical SEO and automation at agency scale. Quantified client outcomes stay on the résumé when verified; this page stays qualitative and anonymized.",
    },
  },
  {
    slug: "woo-trexity",
    title: "WooCommerce to Trexity",
    year: "2025",
    summary:
      "WordPress plugin that books a Trexity delivery after an eligible WooCommerce order is paid, with skip reasons written back to the order.",
    category: "tools",
    depth: "project",
    role: "Developer",
    context: "E-commerce integration",
    status: "Public source code",
    technologies: ["PHP", "WordPress", "WooCommerce"],
    capabilities: ["web-engineering", "data-automation"],
    repository: "https://github.com/amandadr/woo-trexity-plugin",
    decisionNote:
      "Idempotent submission and explicit skip reasons matter more than a clever UI—ops staff need to see why an order did not ship.",
  },
  {
    slug: "rfp-finder",
    title: "Canadian AI-Driven RFP Finder",
    year: "2025",
    summary:
      "Python CLI for Canadian public-sector tenders: fetch CanadaBuys notices, track amendments, and score against a business profile. Model rankings stay explainable.",
    category: "tools",
    depth: "project",
    role: "Developer",
    context: "Independent tool",
    status: "Public source code",
    technologies: ["Python", "SQLite", "LLM APIs"],
    capabilities: ["data-automation", "applied-ai-geo"],
    repository: "https://github.com/amandadr/rfp-finder",
    decisionNote:
      "When a model helps rank a notice, the reason remains human-readable so scoring never becomes a black box.",
  },
  {
    slug: "this-portfolio",
    title: "This portfolio",
    year: "2026",
    summary:
      "Statically generated Next.js rebuild of amandadroy.com: shareable case studies, MRC design system, and technical SEO acceptance criteria built into the site itself.",
    category: "independent",
    depth: "project",
    role: "Developer",
    context: "Personal technical portfolio",
    status: "In progress → launch",
    technologies: ["Next.js", "TypeScript", "Static export"],
    capabilities: ["web-engineering", "technical-search"],
    liveUrl: "https://amandadroy.com/",
    decisionNote:
      "Static HTML for primary content, unique URLs per project, and the ghost-custom design system so this site and mannyroy.com share visual language without sharing sitemap.",
  },
  {
    slug: "hyrule-merchant",
    title: "Hyrule Merchant",
    year: "2025",
    summary:
      "Noncommercial Hyrule shop and field guide. Compendium API snapshot validated at build time; invented prices stay out of source data. Not affiliated with Nintendo.",
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
      "Build-time validation keeps third-party data honest; fictional commerce data is isolated so the experiment stays clearly noncommercial.",
  },
  {
    slug: "newfie",
    title: "Newfie",
    year: "2025",
    summary:
      "Image-led Next.js theme experiment. Started as a possible MRC rebuild, kept as a visual playground—not this portfolio.",
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
      "Useful for image-heavy UI experiments; deliberately not the production portfolio architecture.",
  },
  {
    slug: "home-camera-pipeline",
    title: "Home camera pipeline",
    year: "2025",
    summary:
      "Local bird-feeder detection pipeline: Frigate-oriented recording with an Apple Silicon detector path. Framed as a home lab—no hostnames or camera addresses published.",
    category: "lab",
    depth: "project",
    role: "Developer",
    context: "Home lab",
    status: "Lab · Private deployment",
    technologies: ["Frigate", "ONNX", "Apple Silicon", "go2rtc"],
    capabilities: ["data-automation", "applied-ai-geo"],
    lab: true,
    decisionNote:
      "Kept inference local and omitted network identifiers from public docs so the write-up teaches architecture without exposing the home setup.",
  },
  {
    slug: "petome",
    title: "Petome",
    year: "2023",
    summary:
      "Visual novel built to deepen React state, reducers, hooks, and asynchronous data handling.",
    category: "archive",
    depth: "project",
    role: "Developer",
    context: "Early work",
    status: "Archive · Live",
    technologies: ["React", "Ruby on Rails", "PostgreSQL"],
    capabilities: ["web-engineering"],
    liveUrl: "https://petome.amandadroy.com/",
    repository: "https://github.com/amandadr/petome",
    decisionNote: "Learning project focused on state management and play loop clarity.",
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

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
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
