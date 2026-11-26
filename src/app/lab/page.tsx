import type { Metadata } from "next";
import { CaseRow } from "@/components/CaseRow";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { getLabProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Lab",
  description:
    "Experiments and prototypes by Manny Roy—Astro demos, theme research, local detection pipelines and other technical explorations.",
  alternates: { canonical: "/lab/" },
};

export default function LabPage() {
  const lab = getLabProjects();

  return (
    <>
      <Hero
        eyebrow="Lab"
        headline="Prototypes, demos and research builds"
        subtext="Astro demos, Next.js theme experiments and a local bird-feeder detection pipeline. Each one is labelled by status."
      />
      <section className="mrc-section section-light gh-outer" aria-labelledby="lab-list">
        <div className="gh-inner">
          <SectionHeader
            heading="Experiments"
            headingId="lab-list"
            spacing="tight"
          />
          <div className="mrc-case-list">
            {lab.map((project) => (
              <CaseRow key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
