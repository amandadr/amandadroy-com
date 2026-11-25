import Link from "next/link";

type HighlightTextProps = {
  text: string;
  href?: string;
};

/** Renders `**emphasized**` spans as <strong>; optional wrap in Link/a. */
export function HighlightText({ text, href }: HighlightTextProps) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  const content = parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return <span key={index}>{part}</span>;
  });

  if (!href) return <>{content}</>;

  const isExternal = /^https?:\/\//.test(href) || href.startsWith("mailto:");
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <Link href={href}>{content}</Link>;
}
