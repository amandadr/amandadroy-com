import Link from "next/link";
import { FOOTER_LINKS, NAV_LINKS, SITE_NAME, SOCIAL } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="gh-foot mrc-foot gh-outer">
      <div className="mrc-foot-inner gh-inner">
        <p className="mrc-foot-bio">
          Technical SEO, software development, and automation. Prince Edward
          Island. Consulting lives at{" "}
          <a href={SOCIAL.mrc}>mannyroy.com</a>.
        </p>
        <div className="mrc-foot-navs mrc-foot-navs--portfolio">
          <nav className="mrc-foot-col" aria-labelledby="foot-explore">
            <h2 id="foot-explore" className="mrc-foot-heading">
              Explore
            </h2>
            <ul className="mrc-foot-list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="mrc-foot-col" aria-labelledby="foot-connect">
            <h2 id="foot-connect" className="mrc-foot-heading">
              Connect
            </h2>
            <ul className="mrc-foot-list">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    {...(link.external && !link.href.startsWith("mailto:")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mrc-foot-bottom">
          <span className="mrc-foot-copy">
            {SITE_NAME} © {year}
          </span>
        </div>
      </div>
    </footer>
  );
}
