import Link from "next/link";

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
              <Link className="button mrc-btn-primary" href={primaryHref}>
                {primaryText}
              </Link>
              {secondaryHref && secondaryText ? (
                <Link className="button mrc-btn-secondary" href={secondaryHref}>
                  {secondaryText}
                </Link>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
