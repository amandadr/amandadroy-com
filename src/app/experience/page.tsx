import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { education, experience } from "@/data/experience";
import { RESUME_PATH } from "@/data/site";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Career history, education, and a downloadable technical résumé for Manny Roy.",
  alternates: { canonical: "/experience/" },
};

export default function ExperiencePage() {
  return (
    <>
      <Hero
        eyebrow="Experience"
        headline="Responsibilities and outcomes"
        subtext="A readable career history—not a technology badge wall. Download one general technical résumé rather than employer-specific public versions."
        primaryHref={RESUME_PATH}
        primaryText="Download résumé"
        secondaryHref="/work/"
        secondaryText="Selected work"
      />

      <section
        className="mrc-section section-light gh-outer"
        aria-labelledby="career"
      >
        <div className="gh-inner mrc-stack mrc-stack--xl">
          <SectionHeader heading="Career" headingId="career" spacing="tight" />
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.title}`}
              className="mrc-experience-item"
            >
              <h3>
                {item.title}
                <br />
                <span style={{ fontFamily: "var(--font-sans)", fontWeight: 400 }}>
                  {item.company}
                </span>
              </h3>
              <p className="mrc-experience-item__meta">{item.years}</p>
              <p>{item.summary}</p>
              {item.highlights?.length ? (
                <ul>
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              ) : null}
              {item.selectedWork?.length ? (
                <div className="mrc-link-row">
                  {item.selectedWork.map((work) => (
                    <Link key={work.href} href={work.href}>
                      {work.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section
        className="mrc-section section-surface gh-outer"
        aria-labelledby="education"
      >
        <div className="gh-inner mrc-stack mrc-stack--xl">
          <SectionHeader
            heading="Education"
            headingId="education"
            intro="Formal education sits here—not in the employment timeline."
            spacing="tight"
          />
          {education.map((item) => (
            <article
              key={`${item.company}-${item.title}`}
              className="mrc-experience-item"
            >
              <h3>
                {item.title}
                <br />
                <span style={{ fontFamily: "var(--font-sans)", fontWeight: 400 }}>
                  {item.company}
                </span>
              </h3>
              <p className="mrc-experience-item__meta">{item.years}</p>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
