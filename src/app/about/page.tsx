import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { EMAIL, SOCIAL } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Professional philosophy and background for Manny Roy—technical SEO, software development, and systems that stay maintainable.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About"
        headline="How I think, build and solve problems"
        subtext="This site is the technical counterpart to mannyroy.com. MRC speaks to businesses. Here, hiring managers, engineers, and collaborators can see decisions, systems and outcomes."
      />

      <section className="mrc-section section-light gh-outer" aria-labelledby="philosophy">
        <div className="gh-inner mrc-prose mrc-stack mrc-stack--l">
          <SectionHeader heading="Philosophy" headingId="philosophy" spacing="tight" />
          <p>
            Useful systems over bloated ones. Clarity in communication. Technology
            that does not require constant intervention. The portfolio itself should
            demonstrate that: static HTML for primary content, shareable case studies,
            accessible navigation, and the same design system that powers my consulting
            site—without copying its sitemap.
          </p>
          <p>
            I am based in Prince Edward Island and work across technical SEO, web
            engineering, automation, and applied AI. You may also know me as Amanda Roy;
            Manny is the professional name I use across this work.
          </p>
        </div>
      </section>

      <section className="mrc-section section-surface gh-outer" aria-labelledby="contact">
        <div className="gh-inner mrc-stack mrc-stack--l">
          <SectionHeader
            heading="Contact"
            headingId="contact"
            intro="For professional conversation, email is best. For consulting inquiries, use mannyroy.com."
          />
          <div className="mrc-cluster">
            <a className="button mrc-btn-primary" href={`mailto:${EMAIL}`}>
              Email me
            </a>
            <a className="button mrc-btn-secondary" href={SOCIAL.mrc}>
              Manny Roy Consulting
            </a>
            <Link className="button mrc-btn-secondary" href="/work/">
              Selected work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
