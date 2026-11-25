import type { ExperienceItem } from "@/lib/types";

/**
 * Dates verified against LinkedIn (amandadroy) as of portfolio rebuild.
 * Outcome metrics omitted until confirmed on a current résumé PDF.
 */
export const experience: ExperienceItem[] = [
  {
    kind: "work",
    company: "Manny Roy Consulting",
    title: "Founder & Technical Consultant",
    years: "2023–Present",
    summary:
      "Lead independent projects spanning website architecture, technical SEO, analytics, and custom development, owning delivery from discovery through implementation and QA.",
    selectedWork: [
      { label: "Good Robot Brewing", href: "/work/good-robot-brewing/" },
      {
        label: "Pictou County Partnership",
        href: "/work/pcp-economic-dashboard/",
      },
    ],
  },
  {
    kind: "work",
    company: "MacMillan Search",
    title: "SEO Coordinator",
    years: "Jul 2024–Jul 2025",
    summary:
      "Promoted from Junior SEO Specialist and Automation Developer. Managed technical SEO and organic growth across SaaS, marketplace, and enterprise accounts, including multi-site portfolios. Maintained automation tooling across GitHub, Docker, GCP, AWS, and Python.",
    highlights: [
      "Promoted from Automation Engineer track (Apr–Jul 2024) to SEO Coordinator",
      "Client-facing technical SEO, audits, and workflow automation",
    ],
  },
  {
    kind: "work",
    company: "Digital Nova Scotia, StFX, CBU & Valley REN",
    title: "Applied AI Curriculum Developer & Instructor",
    years: "2024–2025",
    summary:
      "Developed practical AI education for marketing and business professionals, translating complex concepts into accessible, repeatable workflows.",
  },
  {
    kind: "work",
    company: "DataAnnotation",
    title: "Prompt Engineer / Researcher",
    years: "Jan 2024–Jul 2025",
    summary:
      "Designed and refined prompts for machine learning evaluation, including bias analysis and collaboration with cross-functional engineering teams.",
  },
  {
    kind: "work",
    company: "Scale AI",
    title: "Machine Learning Researcher",
    years: "Jan 2024–Apr 2024",
    summary:
      "Iterated on prompt designs and model evaluation with distributed research and engineering teams.",
  },
];

export const education: ExperienceItem[] = [
  {
    kind: "education",
    company: "Lighthouse Labs",
    title: "Computer Programming — Full-Stack Web Development",
    years: "2023",
    summary:
      "Intensive full-stack program covering JavaScript, React, Node, PostgreSQL, Ruby on Rails, and testing.",
  },
  {
    kind: "education",
    company: "Memorial University of Newfoundland",
    title: "Bachelor of Arts — English Language and Literature",
    years: "2017–2021",
    summary:
      "Undergraduate degree with a focus on clear writing, research, and communication.",
  },
];
