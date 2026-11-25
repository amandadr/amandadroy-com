type ProseProps = {
  text: string;
  className?: string;
};

/** Renders blank-line-separated paragraphs. */
export function Prose({ text, className }: ProseProps) {
  const paragraphs = text
    .split(/\n\n+/)
    .map((part) => part.trim())
    .filter(Boolean);

  return (
    <div className={className}>
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 48)}>{paragraph}</p>
      ))}
    </div>
  );
}
