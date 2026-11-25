import Link from "next/link";
import { CaseRow } from "@/components/CaseRow";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeader } from "@/components/SectionHeader";
import { capabilities } from "@/data/capabilities";
import { getFeaturedProjects, getProject } from "@/data/projects";
import { RESUME_PATH, SITE_NAME, SITE_URL, SOCIAL } from "@/data/site";

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
        subtext="I'm Manny Roy, a technical SEO specialist and full-stack developer based in Prince Edward Island, Canada. I work at the intersection of search, website architecture, data and automation."
        primaryHref="/work/"
        primaryText="Explore selected work"
        secondaryHref={RESUME_PATH}
        secondaryText="View résumé"
      />

      <section className="mrc-section section-surface gh-outer" aria-label="Profiles">
        <div className="gh-inner mrc-cluster mrc-cluster--center">
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
      </section>

      <section
        className="mrc-section section-light gh-outer"
        aria-labelledby="featured-work"
      >
        <div className="gh-inner">
          <SectionHeader
            heading="Selected work"
            headingId="featured-work"
            intro="Six projects that show how I approach search, engineering, data and content systems. Descriptions are on the page—no modals."
            layout="split"
            linkHref="/work/"
            linkText="All work"
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
            heading="Capabilities"
            headingId="capabilities"
            intro="Organized around what I can accomplish, not a wall of logos."
            width="wide"
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

      <section className="mrc-section section-cta gh-outer" aria-labelledby="home-cta">
        <div className="gh-inner mrc-stack mrc-stack--l">
          <SectionHeader
            heading="Next step"
            headingId="home-cta"
            intro="Looking for consulting outcomes? That’s mannyroy.com. Looking for how I think and build? You’re in the right place."
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
