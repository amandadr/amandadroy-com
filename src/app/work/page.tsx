import type { Metadata } from "next";
import Link from "next/link";
import { CaseRow } from "@/components/CaseRow";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import {
  categoryLabels,
  getLabProjects,
  getProjectsByCapability,
  getProjectsByCategory,
  projects,
} from "@/data/projects";
import type { CapabilityId, Project } from "@/lib/types";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Technical projects across professional engagements, tools, independent builds and earlier development work by Manny Roy.",
  alternates: { canonical: "/work/" },
};

const WORK_CATEGORIES: Project["category"][] = [
  "professional",
  "tools",
  "independent",
  "archive",
];

const CAPABILITY_FILTERS: { id: CapabilityId | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "technical-search", label: "Technical SEO" },
  { id: "web-engineering", label: "Web engineering" },
  { id: "data-automation", label: "Data & automation" },
  { id: "applied-ai-geo", label: "Applied AI" },
];

export default function WorkIndexPage() {
  const workCount = projects.filter((project) => project.category !== "lab").length;

  return (
    <>
      <Hero
        eyebrow="Work"
        headline="Search systems, commerce builds and publishing tools"
        subtext="Professional engagements, search and publishing tools, independent builds and earlier applications—each with the problem, constraints, ownership and outcomes."
      />

      <section className="mrc-section section-light gh-outer" aria-labelledby="explore-work">
        <div className="gh-inner mrc-stack mrc-stack--l">
          <SectionHeader
            heading="Explore the work"
            headingId="explore-work"
            intro={`${workCount} projects across agency, consulting, tools and independent builds. Browse by capability, then open the full directory below.`}
            spacing="tight"
          />
          <nav className="mrc-work-filters" aria-label="Browse by capability">
            <ul>
              {CAPABILITY_FILTERS.map((filter) => (
                <li key={filter.id}>
                  <a href={filter.id === "all" ? "#directory" : `#cap-${filter.id}`}>
                    {filter.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mrc-capability-index">
            {CAPABILITY_FILTERS.filter((filter) => filter.id !== "all").map((filter) => {
              const items = getProjectsByCapability(filter.id as CapabilityId);
              if (!items.length) return null;
              return (
                <div key={filter.id} id={`cap-${filter.id}`} className="mrc-capability-index__group">
                  <h3>{filter.label}</h3>
                  <ul>
                    {items.map((project) => (
                      <li key={project.slug}>
                        <Link href={`/work/${project.slug}/`}>{project.title}</Link>
                        <span className="mrc-capability-index__meta">
                          {project.status}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <nav className="mrc-work-anchors" aria-label="Jump to category">
            <ul>
              {WORK_CATEGORIES.map((category) => (
                <li key={category}>
                  <a href={`#cat-${category}`}>{categoryLabels[category]}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <div id="directory">
        {WORK_CATEGORIES.map((category) => {
          const items = getProjectsByCategory(category);
          if (!items.length) return null;
          return (
            <section
              key={category}
              id={`cat-${category}`}
              className="mrc-section section-light gh-outer"
              aria-labelledby={`cat-heading-${category}`}
            >
              <div className="gh-inner">
                <SectionHeader
                  heading={categoryLabels[category]}
                  headingId={`cat-heading-${category}`}
                  spacing="tight"
                />
                <div className="mrc-case-list">
                  {items.map((project) => (
                    <CaseRow key={project.slug} project={project} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <section className="mrc-section section-surface gh-outer" aria-labelledby="lab-note">
        <div className="gh-inner">
          <SectionHeader
            heading="Lab"
            headingId="lab-note"
            intro={`${getLabProjects().length} experiments and prototypes—useful when you want to see how I explore ideas before they become production work.`}
            layout="split"
            linkHref="/lab/"
            linkText="Visit the lab"
          />
        </div>
      </section>
    </>
  );
}
