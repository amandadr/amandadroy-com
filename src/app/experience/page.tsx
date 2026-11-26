import type { Metadata } from "next";
import Link from "next/link";
import { CvRequestCallout } from "@/components/CvRequestCallout";
import { Hero } from "@/components/Hero";
import { HighlightText } from "@/components/HighlightText";
import { SectionHeader } from "@/components/SectionHeader";
import { education, experience } from "@/data/experience";
import { CV_REQUEST_MAILTO } from "@/data/site";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Career history and education for Manny Roy—agency SEO, consulting, applied AI training and development. Request a current CV by email.",
  alternates: { canonical: "/experience/" },
};

export default function ExperiencePage() {
  return (
    <>
      <Hero
        eyebrow="Experience"
        headline="Where I've worked"
        subtext="Independent consulting since 2023, agency SEO at MacMillan Search, accredited AI training and LLM evaluation."
        primaryHref={CV_REQUEST_MAILTO}
        primaryText="Request CV by email"
        secondaryHref="/work/"
        secondaryText="View case studies"
      />

      <section
        className="mrc-section section-light gh-outer"
        aria-labelledby="career"
      >
        <div className="gh-inner mrc-stack mrc-stack--xl">
          <SectionHeader
            heading="Career"
            headingId="career"
            intro="Linked terms open the full case study."
            spacing="tight"
          />
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.title}`}
              className="mrc-experience-item"
            >
              <h3>
                {item.title}
                <br />
                <span className="mrc-experience-item__org">
                  {item.companyUrl ? (
                    <a
                      href={item.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.company}
                    </a>
                  ) : (
                    item.company
                  )}
                </span>
              </h3>
              <p className="mrc-experience-item__meta">{item.years}</p>
              <p>{item.summary}</p>
              {item.highlights?.length ? (
                <ul>
                  {item.highlights.map((highlight) => (
                    <li key={highlight.text}>
                      <HighlightText
                        text={highlight.text}
                        href={highlight.href}
                        linkText={highlight.linkText}
                      />
                    </li>
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
            intro="A full-stack diploma for the build side; an English degree for the writing side."
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
                <span className="mrc-experience-item__org">
                  {item.companyUrl ? (
                    <a
                      href={item.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.company}
                    </a>
                  ) : (
                    item.company
                  )}
                </span>
              </h3>
              <p className="mrc-experience-item__meta">{item.years}</p>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mrc-section section-surface gh-outer" aria-label="CV request">
        <div className="gh-inner">
          <CvRequestCallout headingId="experience-cv-request" />
        </div>
      </section>
    </>
  );
}
