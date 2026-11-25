import Link from "next/link";
import { CaseRow } from "@/components/CaseRow";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeader } from "@/components/SectionHeader";
import { capabilities } from "@/data/capabilities";
import { getFeaturedProjects, getProject } from "@/data/projects";
import {
  RESUME_PATH,
  SITE_INTRO,
  SITE_METRICS,
  SITE_NAME,
  SITE_URL,
  SOCIAL,
} from "@/data/site";

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          name: SITE_NAME,
          url: SITE_URL,
          mainEntity: {
            "@type": "Person",
            name: SITE_NAME,
            url: SITE_URL,
          },
        }}
      />

      <Hero
        eyebrow="Technical SEO · Software development · Automation"
        headline="Building systems that are easier to find, use and maintain."
        subtext={SITE_INTRO}
        primaryHref="/work/"
        primaryText="Explore selected work"
        secondaryHref={RESUME_PATH}
        secondaryText="View résumé"
      />

      <section
        className="section-light gh-outer"
        aria-label="Selected outcomes"
      >
        <div className="gh-inner">
          <div className="mrc-metrics">
            {SITE_METRICS.map((metric) => (
              <div key={metric.label} className="mrc-metric">
                <p className="mrc-metric__value">{metric.value}</p>
                <p className="mrc-metric__label">{metric.label}</p>
              </div>
            ))}
          </div>
          <div className="mrc-profile-row mrc-cluster">
            <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={SOCIAL.mrc} target="_blank" rel="noopener noreferrer">
              Manny Roy Consulting
            </a>
          </div>
        </div>
      </section>

      <section
        className="mrc-section section-light gh-outer"
        aria-labelledby="featured-work"
      >
        <div className="gh-inner">
          <SectionHeader
            heading="Selected work"
            headingId="featured-work"
            intro="Search automation, commerce architecture, programmatic publishing, geographic content systems and consulting infrastructure—open a project for decisions, constraints and results."
            layout="split"
            linkHref="/work/"
            linkText="All work"
            spacing="tight"
          />
          <div className="mrc-case-list">
            {featured.map((project) => (
              <CaseRow key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section
        className="mrc-section section-surface gh-outer"
        aria-labelledby="capabilities"
      >
        <div className="gh-inner">
          <SectionHeader
            heading="Where I can help"
            headingId="capabilities"
            intro="Technical SEO and indexation, web engineering, search analytics and automation, and GEO/AEO research—each area links to projects that demonstrate it."
            width="wide"
            spacing="tight"
          />
          <div className="mrc-grid mrc-grid--auto mrc-grid--gap-m">
            {capabilities.map((capability) => (
              <article key={capability.id} className="mrc-capability">
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
                <ul className="mrc-capability-tools">
                  {capability.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
                <div className="mrc-link-row">
                  {capability.projectSlugs.map((slug) => {
                    const project = getProject(slug);
                    if (!project) return null;
                    return (
                      <Link key={slug} href={`/work/${slug}/`}>
                        {project.title}
                      </Link>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="mrc-closing section-light gh-outer"
        aria-labelledby="home-cta"
      >
        <div className="gh-inner mrc-stack mrc-stack--l">
          <SectionHeader
            heading="Next step"
            headingId="home-cta"
            intro="See the career timeline and résumé, or go to mannyroy.com when you have a consulting project."
            spacing="tight"
          />
          <div className="mrc-cluster">
            <Link className="button mrc-btn-primary" href="/experience/">
              Experience & résumé
            </Link>
            <a className="button mrc-btn-secondary" href={SOCIAL.mrc}>
              Manny Roy Consulting
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
