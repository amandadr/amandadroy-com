import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { EMAIL, LOCATION, SITE_INTRO, SOCIAL } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Manny Roy (Amanda Roy)—technical SEO specialist and full-stack developer in Souris, PEI. How to get in touch for professional conversation or consulting.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About"
        headline="Technical SEO, software development and systems that stay useful"
        subtext={SITE_INTRO}
      />

      <section className="mrc-section section-light gh-outer" aria-labelledby="background">
        <div className="gh-inner mrc-prose mrc-stack mrc-stack--l">
          <SectionHeader heading="Background" headingId="background" spacing="tight" />
          <p>
            Based in {LOCATION}. I translate technical findings into prioritized
            implementation requirements, work with developers and content teams, and
            validate improvements through testing, QA and performance analysis.
          </p>
          <p>
            Professionally I go by Manny Roy; you may also see Amanda Roy on older
            profiles and publications. If you need services, business case studies or
            a project inquiry, start at{" "}
            <a href={SOCIAL.mrc}>mannyroy.com</a>. For hiring or technical
            collaboration, the work and experience pages here are the better place
            to dig in.
          </p>
        </div>
      </section>

      <section className="mrc-section section-surface gh-outer" aria-labelledby="contact">
        <div className="gh-inner mrc-stack mrc-stack--l">
          <SectionHeader
            heading="Contact"
            headingId="contact"
            intro="Email for hiring conversations and collaborations. Use the consulting site when you have a client project."
          />
          <div className="mrc-cluster">
            <a className="button mrc-btn-primary" href={`mailto:${EMAIL}`}>
              {EMAIL}
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
