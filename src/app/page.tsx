import Link from "next/link";
import { CaseRow } from "@/components/CaseRow";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeader } from "@/components/SectionHeader";
import { capabilities } from "@/data/capabilities";
import { getFeaturedProjects, getLabProjects, getProject } from "@/data/projects";
import { CvRequestCallout } from "@/components/CvRequestCallout";
import {
  CV_REQUEST_MAILTO,
  PERSON_ID,
  SITE_HERO_LEDE,
  SITE_HERO_META,
  SITE_METRICS,
  SITE_NAME,
  SITE_URL,
  SOCIAL,
} from "@/data/site";

export default function HomePage() {
  const featured = getFeaturedProjects().slice(0, 6);
  const labPreview = getLabProjects().slice(0, 3);

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
            "@id": PERSON_ID,
            name: SITE_NAME,
            url: SITE_URL,
          },
        }}
      />

      <Hero
        eyebrow="Technical SEO · Software development · Automation"
        headline="Building systems that are easier to find, use and maintain."
        subtext={`${SITE_HERO_LEDE} ${SITE_HERO_META}`}
        primaryHref="/work/"
        primaryText="Explore selected work"
        secondaryHref={CV_REQUEST_MAILTO}
        secondaryText="Request CV by email"
      />

      <section
        className="section-light gh-outer"
        aria-label="Selected outcomes"
      >
        <div className="gh-inner">
          <div className="mrc-metrics">
            {SITE_METRICS.map((metric) => (
              <div key={metric.label} className="mrc-metric">
                {metric.href ? (
                  <Link href={metric.href} className="mrc-metric__link">
                    <p className="mrc-metric__value">{metric.value}</p>
                    <p className="mrc-metric__label">{metric.label}</p>
                  </Link>
                ) : (
                  <>
                    <p className="mrc-metric__value">{metric.value}</p>
                    <p className="mrc-metric__label">{metric.label}</p>
                  </>
                )}
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
            <a href={`mailto:${SOCIAL.email.replace("mailto:", "")}`}>
              Contact
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
            intro="Search automation, commerce architecture, agency SEO engagements and applied AI workflows—open a project for decisions, constraints and results."
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
            heading="Areas of practice"
            headingId="capabilities"
            intro="How I investigate search systems, build web infrastructure, automate analysis and explore applied AI—each area links to supporting projects."
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
        className="mrc-section section-light gh-outer"
        aria-labelledby="lab-preview"
      >
        <div className="gh-inner">
          <SectionHeader
            heading="From the lab"
            headingId="lab-preview"
            intro="Experiments, independent builds and ongoing research."
            layout="split"
            linkHref="/lab/"
            linkText="Visit the lab"
            spacing="tight"
          />
          <ul className="mrc-lab-preview">
            {labPreview.map((project) => (
              <li key={project.slug}>
                <Link href={`/work/${project.slug}/`}>{project.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="mrc-closing section-light gh-outer"
        aria-labelledby="home-cta"
      >
        <div className="gh-inner mrc-stack mrc-stack--l">
          <SectionHeader
            heading="Let's talk about good technical work"
            headingId="home-cta"
            intro="Email, LinkedIn or GitHub for hiring conversations. Visit mannyroy.com when you have a consulting project."
            spacing="tight"
          />
          <div className="mrc-cluster">
            <a className="button mrc-btn-primary" href={SOCIAL.email}>
              Email
            </a>
            <a className="button mrc-btn-secondary" href={SOCIAL.linkedin}>
              LinkedIn
            </a>
            <a className="button mrc-btn-secondary" href={SOCIAL.github}>
              GitHub
            </a>
          </div>
          <CvRequestCallout headingId="home-cv-request" compact />
        </div>
      </section>
    </>
  );
}
