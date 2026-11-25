import type { Metadata } from "next";
import { CaseRow } from "@/components/CaseRow";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import {
  categoryLabels,
  getLabProjects,
  getProjectsByCategory,
} from "@/data/projects";
import type { Project } from "@/lib/types";

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

export default function WorkIndexPage() {
  return (
    <>
      <Hero
        eyebrow="Work"
        headline="Search systems, commerce builds and publishing tools"
        subtext="Professional engagements, search and publishing tools, independent builds and earlier applications—each with the problem, constraints, ownership and outcomes."
      />

      {WORK_CATEGORIES.map((category) => {
        const items = getProjectsByCategory(category);
        if (!items.length) return null;
        return (
          <section
            key={category}
            className="mrc-section section-light gh-outer"
            aria-labelledby={`cat-${category}`}
          >
            <div className="gh-inner">
              <SectionHeader
                heading={categoryLabels[category]}
                headingId={`cat-${category}`}
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
