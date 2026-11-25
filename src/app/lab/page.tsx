import type { Metadata } from "next";
import { CaseRow } from "@/components/CaseRow";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { getLabProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Lab",
  description:
    "Experiments, prototypes, and technical explorations—clearly labelled, with shareable project URLs.",
  alternates: { canonical: "/lab/" },
};

export default function LabPage() {
  const lab = getLabProjects();

  return (
    <>
      <Hero
        eyebrow="Lab"
        headline="Experiments without pretending they are finished products"
        subtext="A home for curiosity: Astro demos, theme playgrounds, local detection pipelines, and other explorations. Each item still has a /work URL."
      />
      <section className="mrc-section section-light gh-outer" aria-labelledby="lab-list">
        <div className="gh-inner">
          <SectionHeader
            heading="Current lab work"
            headingId="lab-list"
            spacing="tight"
          />
          <div className="mrc-case-list">
            {lab.map((project) => (
              <CaseRow key={project.slug} project={project} showCategory={false} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
