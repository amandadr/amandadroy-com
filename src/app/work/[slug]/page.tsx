import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContentBlocks } from "@/components/ContentBlocks";
import { JsonLd } from "@/components/JsonLd";
import { ProjectBreadcrumbs } from "@/components/ProjectBreadcrumbs";
import { Prose } from "@/components/Prose";
import { TechList } from "@/components/TechList";
import {
  categoryLabels,
  getProject,
  projects,
} from "@/data/projects";
import { getRedirectTarget, PROJECT_REDIRECTS } from "@/data/redirects";
import { ANONYMIZED_DISCLOSURE, PERSON_ID, SITE_NAME, SITE_URL } from "@/data/site";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  const projectSlugs = projects.map((project) => ({ slug: project.slug }));
  const redirectSlugs = Object.keys(PROJECT_REDIRECTS).map((slug) => ({ slug }));
  return [...projectSlugs, ...redirectSlugs];
}

export function generateMetadata({ params }: PageProps): Metadata {
  const redirectTo = getRedirectTarget(params.slug);
  if (redirectTo) {
    const target = getProject(redirectTo);
    return {
      title: target?.title ?? "Moved",
      description: target?.summary,
      robots: { index: false, follow: true },
      alternates: { canonical: `/work/${redirectTo}/` },
    };
  }

  const project = getProject(params.slug);
  if (!project) return {};
  const pageTitle = project.headline ?? project.title;
  return {
    title: pageTitle,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}/` },
    openGraph: {
      title: `${pageTitle} | ${SITE_NAME}`,
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

const REQUIRED_CASE_KEYS: (keyof typeof CASE_LABELS)[] = [
  "problem",
  "responsibility",
  "implementation",
  "outcome",
];

export default function ProjectPage({ params }: PageProps) {
  const redirectTo = getRedirectTarget(params.slug);
  if (redirectTo) {
    const target = getProject(redirectTo);
    const href = `/work/${redirectTo}/`;
    return (
      <article className="mrc-section section-light gh-outer">
        <div className="gh-inner mrc-prose">
          <h1 className="mrc-hero-headline">This case study moved</h1>
          <p className="mrc-lede">
            {target
              ? `The content now lives under ${target.title}.`
              : "The content has been merged into another case study."}
          </p>
          <p>
            <Link href={href}>Continue to the updated case study →</Link>
          </p>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.location.replace(${JSON.stringify(href)});`,
            }}
          />
        </div>
      </article>
    );
  }

  const project = getProject(params.slug);
  if (!project) notFound();

  const related = (project.relatedProjectSlugs ?? [])
    .map((slug) => getProject(slug))
    .filter(Boolean);

  const pageTitle = project.headline ?? project.title;
  const showProductName = Boolean(project.headline && project.headline !== project.title);

  const creativeWork = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: pageTitle,
    description: project.summary,
    url: `${SITE_URL}/work/${project.slug}/`,
    dateCreated: project.year,
    author: { "@type": "Person", "@id": PERSON_ID, name: SITE_NAME },
    keywords: project.technologies.join(", "),
  };

  const caseKeys = project.caseStudy
    ? (Object.keys(CASE_LABELS) as (keyof typeof CASE_LABELS)[]).filter((key) => {
        const value = project.caseStudy?.[key]?.trim();
        if (!value) return false;
        if (REQUIRED_CASE_KEYS.includes(key)) return true;
        return Boolean(value);
      })
    : [];

  const engagementLabel =
    project.eyebrow ??
    (project.engagementType
      ? `${project.engagementType.replace("-", " ")} · ${project.year}`
      : categoryLabels[project.category]);

  return (
    <>
      <JsonLd data={creativeWork} />
      <article className="mrc-section section-light gh-outer">
        <div className="gh-inner mrc-prose">
          <ProjectBreadcrumbs project={project} />

          <p className="mrc-eyebrow">{engagementLabel}</p>
          <h1 className="mrc-hero-headline">{pageTitle}</h1>
          {showProductName ? (
            <p className="mrc-project-product">{project.title}</p>
          ) : null}
          <p className="mrc-lede">{project.summary}</p>

          {project.visibility === "anonymized" ? (
            <p className="mrc-disclosure">{ANONYMIZED_DISCLOSURE}</p>
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
                Client case study on mannyroy.com
              </a>
            ) : null}
          </div>

          {project.overview ? (
            <section className="mrc-case-section">
              <h2>Overview</h2>
              <Prose text={project.overview} />
            </section>
          ) : null}

          {project.outcomes?.length ? (
            <section className="mrc-case-section">
              <h2>Results</h2>
              <ul className="mrc-outcome-list">
                {project.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {caseKeys.length ? (
            <div className="mrc-stack mrc-stack--l" style={{ marginTop: "2rem" }}>
              {caseKeys.map((key) => (
                <section key={key} className="mrc-case-section">
                  <h2>{CASE_LABELS[key]}</h2>
                  <Prose text={project.caseStudy?.[key] ?? ""} />
                </section>
              ))}
            </div>
          ) : null}

          {project.blocks?.length ? <ContentBlocks blocks={project.blocks} /> : null}

          {project.sections?.map((section) => (
            <section key={section.heading} className="mrc-case-section">
              <h2>{section.heading}</h2>
              <Prose text={section.body} />
            </section>
          ))}

          {project.decisionNote ? (
            <section className="mrc-case-section">
              <h2>Key decision</h2>
              <Prose text={project.decisionNote} />
            </section>
          ) : null}

          {related.length ? (
            <section className="mrc-case-section">
              <h2>Related work</h2>
              <ul className="mrc-related-list">
                {related.map((item) =>
                  item ? (
                    <li key={item.slug}>
                      <Link href={`/work/${item.slug}/`}>{item.title}</Link>
                      {item.summary ? (
                        <span className="mrc-related-list__summary"> — {item.summary}</span>
                      ) : null}
                    </li>
                  ) : null,
                )}
              </ul>
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
