import { CV_REQUEST_MAILTO, EMAIL } from "@/data/site";

type CvRequestCalloutProps = {
  headingId?: string;
  compact?: boolean;
};

/** Recruiters/reps: request the current CV by email. */
export function CvRequestCallout({
  headingId = "cv-request",
  compact = false,
}: CvRequestCalloutProps) {
  return (
    <aside
      className={`mrc-cv-callout${compact ? " mrc-cv-callout--compact" : ""}`}
      aria-labelledby={headingId}
    >
      <h2 id={headingId} className="mrc-cv-callout__title">
        Looking for a CV?
      </h2>
      <p className="mrc-cv-callout__body">
        Email{" "}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a> and I&apos;ll share a current
        résumé suited to the role.
      </p>
      <a className="button mrc-btn-secondary" href={CV_REQUEST_MAILTO}>
        Request CV by email
      </a>
    </aside>
  );
}
