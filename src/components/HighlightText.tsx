import Link from "next/link";
import type { ReactNode } from "react";

type HighlightTextProps = {
  text: string;
  href?: string;
  /** Substring of `text` (without `**`) to wrap as the only link. */
  linkText?: string;
};

function renderWithBold(segment: string, keyPrefix: string): ReactNode[] {
  const parts = segment.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${keyPrefix}-${index}`}>{part.slice(2, -2)}</strong>;
    }
    return <span key={`${keyPrefix}-${index}`}>{part}</span>;
  });
}

function LinkedPhrase({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const isExternal = /^https?:\/\//.test(href) || href.startsWith("mailto:");
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return <Link href={href}>{children}</Link>;
}

/**
 * Renders `**emphasized**` spans as <strong>.
 * When `href` + `linkText` are set, only that phrase is linked—not the whole line.
 */
export function HighlightText({ text, href, linkText }: HighlightTextProps) {
  if (href && linkText) {
    const index = text.indexOf(linkText);
    if (index === -1) {
      return <>{renderWithBold(text, "full")}</>;
    }
    const before = text.slice(0, index);
    const after = text.slice(index + linkText.length);
    return (
      <>
        {before ? renderWithBold(before, "before") : null}
        <LinkedPhrase href={href}>{linkText}</LinkedPhrase>
        {after ? renderWithBold(after, "after") : null}
      </>
    );
  }

  return <>{renderWithBold(text, "plain")}</>;
}
