import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mrc-section section-light gh-outer">
      <div className="gh-inner mrc-stack mrc-stack--l">
        <p className="mrc-eyebrow">404</p>
        <h1 className="mrc-hero-headline">Page not found</h1>
        <p className="mrc-hero-subtext">
          That URL is not part of this portfolio. Try work, experience, lab, or about.
        </p>
        <div className="mrc-cluster">
          <Link className="button mrc-btn-primary" href="/">
            Home
          </Link>
          <Link className="button mrc-btn-secondary" href="/work/">
            Work
          </Link>
        </div>
      </div>
    </section>
  );
}
