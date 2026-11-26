import Link from "next/link";
import type { ReactNode } from "react";

type HeroProps = {
  eyebrow?: string;
  headline: string;
  subtext: string;
  primaryHref?: string;
  primaryText?: string;
  secondaryHref?: string;
  secondaryText?: string;
  headingId?: string;
};

function CtaLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: ReactNode;
}) {
  const external =
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");
  if (external) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }
  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}

export function Hero({
  eyebrow,
  headline,
  subtext,
  primaryHref,
  primaryText,
  secondaryHref,
  secondaryText,
  headingId = "page-hero-heading",
}: HeroProps) {
  return (
    <section
      className="mrc-hero section-light gh-outer"
      aria-labelledby={headingId}
    >
      <div className="mrc-hero-layout gh-inner">
        <div className="mrc-hero-inner mrc-stack mrc-stack--l">
          {eyebrow ? <p className="mrc-eyebrow">{eyebrow}</p> : null}
          <h1 id={headingId} className="mrc-hero-headline">
            {headline}
          </h1>
          <p className="mrc-hero-subtext">{subtext}</p>
          {primaryHref && primaryText ? (
            <div className="mrc-hero-cta mrc-cluster mrc-cluster--center">
              <CtaLink className="button mrc-btn-primary" href={primaryHref}>
                {primaryText}
              </CtaLink>
              {secondaryHref && secondaryText ? (
                <CtaLink
                  className="button mrc-btn-secondary"
                  href={secondaryHref}
                >
                  {secondaryText}
                </CtaLink>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
