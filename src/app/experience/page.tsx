import type { Metadata } from "next";
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
        className="mrc-section section-light gh-outer mrc-print-profile"
        aria-labelledby="profile"
      >
        <div className="gh-inner">
          <SectionHeader
            heading="Professional profile"
            headingId="profile"
            intro="A quick scan for hiring conversations. Email for a role-specific CV."
            spacing="tight"
          />
          <div className="mrc-table-wrap">
            <table className="mrc-table mrc-profile-table">
              <tbody>
                <tr>
                  <th scope="row">Specialization</th>
                  <td>Technical SEO &amp; software development</td>
                </tr>
                <tr>
                  <th scope="row">Experience</th>
                  <td>3+ years across agency and consulting environments</td>
                </tr>
                <tr>
                  <th scope="row">Industries</th>
                  <td>B2B SaaS, AI, marketplaces, e-commerce and enterprise</td>
                </tr>
                <tr>
                  <th scope="row">Core technologies</th>
                  <td>Next.js, React, Python, SQL, WordPress</td>
                </tr>
                <tr>
                  <th scope="row">Location</th>
                  <td>Atlantic Canada · Remote</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mrc-profile-cv-note">
            A current, role-specific CV is available by email.{" "}
            <a href={CV_REQUEST_MAILTO}>Request a CV</a>
          </p>
        </div>
      </section>

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

      <section
        className="mrc-section section-surface gh-outer mrc-print-hide"
        aria-label="CV request"
      >
        <div className="gh-inner">
          <CvRequestCallout headingId="experience-cv-request" />
        </div>
      </section>
    </>
  );
}
