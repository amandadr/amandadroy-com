import type { ExperienceItem } from "@/lib/types";
import { SOCIAL } from "@/data/site";

/** Aligned to manny-roy-technical.pdf; engagement names anonymized on this site. */
export const experience: ExperienceItem[] = [
  {
    kind: "work",
    company: "Manny Roy Consulting",
    companyUrl: SOCIAL.mrc,
    title: "Founder & Technical Consultant",
    years: "2023–Present · Souris, PEI",
    summary:
      "Independent technical consultancy specializing in website architecture, full-stack development, technical SEO and automation. Own projects from discovery and architectural planning through implementation, experimentation, QA and ongoing optimization—translating business requirements into maintainable technical systems.",
    highlights: [
      {
        text: "Good Robot Brewing: SEO-driven IA, URL migration, custom plugins, DNS/CDN and multi-path fulfillment across **40+** products",
        href: "/work/good-robot-brewing/",
      },
      {
        text: "Organized Chaos Arts: Next.js, Sanity, Supabase and Stripe membership platform architecture in progress",
        href: "/work/organized-chaos-arts/",
      },
      {
        text: "mannyroy.com: structured knowledge base with **13** topic collections and **200+** glossary entries for SEO/GEO research",
        href: "/work/manny-roy-consulting/",
      },
    ],
    selectedWork: [
      { label: "Good Robot Brewing", href: "/work/good-robot-brewing/" },
      { label: "Manny Roy Consulting", href: "/work/manny-roy-consulting/" },
      { label: "Organized Chaos Arts", href: "/work/organized-chaos-arts/" },
    ],
  },
  {
    kind: "work",
    company: "MacMillan Search",
    companyUrl: "https://www.macmillansearch.com/",
    title: "SEO Specialist",
    years: "April 2024–June 2025 · Halifax, NS / Remote",
    summary:
      "Promoted from Automation Engineer to SEO Specialist, bringing software development and automation into technical SEO delivery. Managed organic search initiatives across B2B SaaS, AI, marketplace and enterprise accounts—conducting technical audits, analyzing search performance and developing prioritized implementation roadmaps. Collaborated with clients, developers and content teams; delivered stakeholder reports; established QA processes; and built internal tools to improve the scalability and consistency of SEO operations.",
    highlights: [
      {
        text: "**50+** technical SEO audits across diverse website architectures",
        href: "/work/macmillan-search-practice/",
      },
      {
        text: "**226%** average organic click growth across **18** B2B SaaS pages over six months",
        href: "/work/b2b-saas-organic-growth/",
      },
      {
        text: "Configurable Python GSC reporting tool for page- and query-level comparisons",
        href: "/work/seo-rankings-report/",
      },
      {
        text: "Migration QA across **224** internal URLs with no 4xx/5xx, redirect chains or loops",
        href: "/work/enterprise-migration-qa/",
      },
      {
        text: "JavaScript SEO recommendations for a React secondhand marketplace evaluating Next.js",
        href: "/work/marketplace-rendering-architecture/",
      },
      {
        text: "**18-page** pillar-and-cluster content framework for an AI developer-platform site",
        href: "/work/ai-saas-content-architecture/",
      },
      {
        text: "Human-reviewed AI editorial workflow roughly tripling production capacity",
        href: "/work/editorial-workflow-automation/",
      },
    ],
    selectedWork: [
      { label: "MacMillan practice", href: "/work/macmillan-search-practice/" },
      { label: "B2B SaaS growth", href: "/work/b2b-saas-organic-growth/" },
      { label: "SEO Rankings Report", href: "/work/seo-rankings-report/" },
      {
        label: "Editorial automation",
        href: "/work/editorial-workflow-automation/",
      },
    ],
  },
  {
    kind: "work",
    company: "Digital Nova Scotia, StFX, CBU & Valley REN",
    title: "Applied AI Curriculum & Training",
    years: "2024–2025",
    summary:
      "Developed and delivered professional AI training covering LLM fundamentals, prompt engineering, source-based research, factual verification and practical automation.",
    highlights: [
      {
        text: "DNS/StFX Marketing & Communications stream: **96%** completion rate",
      },
      {
        text: "Broader initial program: **127+** learners",
      },
    ],
  },
  {
    kind: "work",
    company: "Data Annotation Tech",
    companyUrl: "https://www.dataannotation.tech/",
    title: "Machine Learning Developer",
    years: "2023–2025",
    summary:
      "Evaluated LLM outputs across technical, reasoning and coding tasks. Refined prompts and evaluation methodologies to assess factual accuracy, instruction adherence, reasoning reliability and unsupported claims.",
  },
];

export const education: ExperienceItem[] = [
  {
    kind: "education",
    company: "Lighthouse Labs",
    companyUrl: "https://www.lighthouselabs.ca/",
    title: "Diploma — Full-Stack Web Development",
    years: "December 2023",
    summary:
      "Intensive full-stack program covering JavaScript, React, Node, PostgreSQL, Ruby on Rails, testing and delivery practices applied directly to later SEO and product work.",
  },
  {
    kind: "education",
    company: "Memorial University of Newfoundland",
    companyUrl: "https://www.mun.ca/",
    title: "Bachelor of Arts — English",
    years: "May 2021",
    summary:
      "Undergraduate degree focused on clear writing, research and communication—skills that carry into technical documentation, stakeholder reporting and content architecture.",
  },
];
