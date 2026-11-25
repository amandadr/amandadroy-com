import Link from "next/link";

type SectionHeaderProps = {
  eyebrow?: string;
  heading: string;
  headingId?: string;
  intro?: string;
  align?: "center";
  width?: "wide";
  spacing?: "tight";
  layout?: "split";
  linkHref?: string;
  linkText?: string;
  actionHref?: string;
  actionText?: string;
  action2Href?: string;
  action2Text?: string;
};

export function SectionHeader({
  eyebrow,
  heading,
  headingId,
  intro,
  align,
  width,
  spacing,
  layout,
  linkHref,
  linkText,
  actionHref,
  actionText,
  action2Href,
  action2Text,
}: SectionHeaderProps) {
  const className = [
    "mrc-section-header",
    align && `mrc-section-header--${align}`,
    width && `mrc-section-header--${width}`,
    spacing && `mrc-section-header--${spacing}`,
    layout && `mrc-section-header--${layout}`,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className}>
      <div className="mrc-section-header__text">
        {eyebrow ? <p className="mrc-eyebrow">{eyebrow}</p> : null}
        <h2 id={headingId} className="mrc-section-header__title">
          {heading}
        </h2>
        {intro ? <p className="mrc-section-header__intro">{intro}</p> : null}
      </div>
      {linkText && linkHref ? (
        <p className="mrc-section-header__link">
          <Link href={linkHref}>{linkText}</Link>
        </p>
      ) : null}
      {actionText && actionHref ? (
        <div className="mrc-section-header__actions mrc-cluster">
          <Link className="button mrc-btn-primary" href={actionHref}>
            {actionText}
          </Link>
          {action2Text && action2Href ? (
            <Link className="button mrc-btn-secondary" href={action2Href}>
              {action2Text}
            </Link>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
