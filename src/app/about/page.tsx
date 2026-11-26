import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CvRequestCallout } from "@/components/CvRequestCallout";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { EMAIL, LOCATION, SITE_HERO_LEDE, SOCIAL } from "@/data/site";

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
        subtext={SITE_HERO_LEDE}
      />

      <section className="mrc-section section-light gh-outer" aria-labelledby="background">
        <div className="gh-inner mrc-about-layout">
          <figure className="mrc-about-photo">
            <Image
              src="/images/headshot.webp"
              alt="Portrait of Manny Roy"
              width={640}
              height={800}
              className="mrc-about-photo__img"
              priority
            />
            <figcaption className="mrc-about-photo__caption">
              {LOCATION}
            </figcaption>
          </figure>

          <div className="mrc-prose mrc-stack mrc-stack--l">
            <SectionHeader
              heading="How I approach technical work"
              headingId="background"
              spacing="tight"
            />
            <p>
              My background is somewhat unconventional: an English degree,
              full-stack development training, agency SEO, software automation
              and independent consulting.
            </p>
            <p>
              What connects those disciplines is an interest in making complex
              things understandable and useful. I enjoy investigating how a
              system works, identifying where it breaks down, and developing
              solutions that make the next person&apos;s work easier.
            </p>
            <p>
              In technical SEO, that means looking beyond individual ranking
              changes to understand the architecture, content and processes that
              influence discoverability. In development, it means building with
              accessibility, maintainability and clear ownership in mind. In
              applied AI, it means understanding where automation adds value and
              where human judgment needs to remain involved.
            </p>
            <p>
              I work best where research, implementation and measurement remain
              connected. I&apos;m particularly interested in large-scale search
              architecture, emerging AI-search technologies and the tools that
              make technical work more repeatable.
            </p>
            <p>
              Professionally I go by Manny Roy; you may also see Amanda Roy on
              older profiles and publications. Through{" "}
              <a href={SOCIAL.mrc}>Manny Roy Consulting</a>, I apply these
              principles to client projects. This portfolio is a more technical
              and personal record of the systems I&apos;ve built, the problems
              I&apos;ve investigated and the ideas I&apos;m continuing to
              explore.
            </p>
          </div>
        </div>
      </section>

      <section className="mrc-section section-surface gh-outer" aria-labelledby="contact">
        <div className="gh-inner mrc-stack mrc-stack--l">
          <SectionHeader
            heading="Contact"
            headingId="contact"
            intro="Email for hiring conversations and collaborations. Use the consulting site when you have a client project. Recruiters and reps can request a current CV by email—there is no public résumé download on this site."
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
          <CvRequestCallout headingId="about-cv-request" compact />
        </div>
      </section>
    </>
  );
}
