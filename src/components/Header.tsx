"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV_LINKS, SITE_NAME } from "@/data/site";

const MOBILE_NAV_QUERY = "(max-width: 991px)";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobileNav, setIsMobileNav] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const media = window.matchMedia(MOBILE_NAV_QUERY);
    const sync = () => {
      setIsMobileNav(media.matches);
      if (!media.matches) setMenuOpen(false);
    };
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("is-head-open", menuOpen);
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.classList.remove("is-head-open");
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        burgerRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const menuInert = isMobileNav && !menuOpen;

  return (
    <header
      id="gh-head"
      className={`gh-head mrc-head gh-outer${menuOpen ? " is-head-open" : ""}`}
    >
      <div className="gh-head-inner gh-inner">
        <div className="gh-head-brand">
          <div className="gh-head-brand-wrapper">
            <Link
              className="gh-head-logo"
              href="/"
              onClick={() => setMenuOpen(false)}
            >
              <span className="mrc-logo-serif">{SITE_NAME}</span>
            </Link>
          </div>
          <button
            ref={burgerRef}
            className="gh-burger"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="gh-head-menu"
            onClick={() => setMenuOpen((value) => !value)}
          />
        </div>

        <nav
          id="gh-head-menu"
          className="gh-head-menu"
          aria-label="Primary"
          aria-hidden={menuInert || undefined}
        >
          <ul className="nav" role="list">
            {NAV_LINKS.map((link) => {
              const current =
                pathname === link.href ||
                pathname.startsWith(link.href.replace(/\/$/, ""));
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    prefetch={false}
                    aria-current={current ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
