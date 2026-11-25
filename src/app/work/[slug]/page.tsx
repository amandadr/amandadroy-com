import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { Prose } from "@/components/Prose";
import { TechList } from "@/components/TechList";
import {
  categoryLabels,
  getProject,
  getProjectCode,
  projects,
} from "@/data/projects";
import { SITE_NAME, SITE_URL } from "@/data/site";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}/` },
    openGraph: {
      title: `${project.title} | ${SITE_NAME}`,
      description: project.summary,
      url: `${SITE_URL}/work/${project.slug}/`,
    },
  };
}

const CASE_LABELS = {
  problem: "The problem",
  constraints: "Constraints",
  responsibility: "What I owned",
  alternatives: "Alternatives considered",
  choice: "Why this approach",
  implementation: "Implementation & validation",
  outcome: "Outcome",
} as const;

export default function ProjectPage({ params }: PageProps) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const code = getProjectCode(project);

  const creativeWork = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: `${SITE_URL}/work/${project.slug}/`,
    dateCreated: project.year,
    author: { "@type": "Person", name: SITE_NAME },
    keywords: project.technologies.join(", "),
  };

  return (
    <>
      <JsonLd data={creativeWork} />
      <article className="mrc-section section-light gh-outer">
        <div className="gh-inner mrc-prose">
          <p className="mrc-project-id">{code}</p>
          <p className="mrc-eyebrow">
            {project.eyebrow ?? categoryLabels[project.category]}
          </p>
          <h1 className="mrc-hero-headline">{project.title}</h1>
          <p className="mrc-lede">{project.summary}</p>

          {project.overview ? <Prose text={project.overview} /> : null}

          {project.outcomes?.length ? (
            <ul className="mrc-outcome-list">
              {project.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          ) : null}

          <dl className="mrc-project-meta">
            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Context</dt>
              <dd>{project.context}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{project.status}</dd>
            </div>
            <div>
              <dt>Year</dt>
              <dd>{project.year}</dd>
            </div>
          </dl>

          <TechList technologies={project.technologies} />

          <div className="mrc-link-row">
            {project.repository ? (
              <a
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source code
              </a>
            ) : null}
            {project.liveUrl ? (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Live project
              </a>
            ) : null}
            {project.mrcUrl ? (
              <a href={project.mrcUrl} target="_blank" rel="noopener noreferrer">
                Business case study on MRC
              </a>
            ) : null}
          </div>

          {project.caseStudy ? (
            <div className="mrc-stack mrc-stack--l" style={{ marginTop: "2rem" }}>
              {(
                Object.keys(CASE_LABELS) as (keyof typeof CASE_LABELS)[]
              ).map((key) => (
                <section key={key} className="mrc-case-section">
                  <h2>{CASE_LABELS[key]}</h2>
                  <Prose text={project.caseStudy?.[key] ?? ""} />
                </section>
              ))}
            </div>
          ) : null}

          {project.sections?.map((section) => (
            <section key={section.heading} className="mrc-case-section">
              <h2>{section.heading}</h2>
              <Prose text={section.body} />
            </section>
          ))}

          {project.decisionNote ? (
            <section className="mrc-case-section">
              <h2>Decision note</h2>
              <Prose text={project.decisionNote} />
            </section>
          ) : null}

          <p style={{ marginTop: "2.5rem" }}>
            <Link href="/work/">← All work</Link>
          </p>
        </div>
      </article>
    </>
  );
}
