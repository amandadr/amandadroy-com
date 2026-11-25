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
    "Technical projects across professional engagements, tools, independent builds, and archived early work.",
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
        headline="A curated body of technical work"
        subtext="Professional delivery, tools and infrastructure, independent builds, and an archive of earlier projects. Lab experiments live separately."
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
                  <CaseRow key={project.slug} project={project} showCategory={false} />
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
            intro={`${getLabProjects().length} experiments and prototypes with shareable URLs.`}
            layout="split"
            linkHref="/lab/"
            linkText="Visit the lab"
          />
        </div>
      </section>
    </>
  );
}
