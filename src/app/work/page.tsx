import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { WorkDirectory } from "@/components/WorkDirectory";
import { getLabProjects, getWorkIndexProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Technical projects across professional engagements, tools, independent builds and earlier development work by Manny Roy.",
  alternates: { canonical: "/work/" },
};

export default function WorkIndexPage() {
  const directory = getWorkIndexProjects().map((project) => ({
    ...project,
    // Keep the client filter payload lean; case-study prose stays on project pages.
    overview: undefined,
    caseStudy: undefined,
    sections: undefined,
    blocks: undefined,
    decisionNote: undefined,
    outcomes: undefined,
  }));
  const workCount = directory.length;

  return (
    <>
      <Hero
        eyebrow="Work"
        headline="Search systems, commerce builds and publishing tools"
        subtext="Agency engagements, consulting builds, open-source tools and earlier projects. Each case study covers the problem, my role, the constraints and the result."
      />

      <section
        className="mrc-section section-light gh-outer"
        aria-labelledby="work-directory"
      >
        <div className="gh-inner mrc-stack mrc-stack--l">
          <SectionHeader
            heading="Work directory"
            headingId="work-directory"
            intro={`${workCount} projects. Filter by discipline, or browse the full list.`}
            spacing="tight"
          />
          <WorkDirectory projects={directory} />
        </div>
      </section>

      <section className="mrc-section section-surface gh-outer" aria-labelledby="lab-note">
        <div className="gh-inner">
          <SectionHeader
            heading="Lab"
            headingId="lab-note"
            intro={`${getLabProjects().length} experiments and prototypes, each labelled by status.`}
            layout="split"
            linkHref="/lab/"
            linkText="Visit the lab"
          />
        </div>
      </section>
    </>
  );
}
