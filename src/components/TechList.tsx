import { getTechIcon } from "@/data/tech-icons";

type TechListProps = {
  technologies: string[];
  /** Limit chips (e.g. CaseRow shows first 4). */
  limit?: number;
  className?: string;
  "aria-label"?: string;
};

export function TechList({
  technologies,
  limit,
  className,
  "aria-label": ariaLabel = "Technologies",
}: TechListProps) {
  const items = limit ? technologies.slice(0, limit) : technologies;

  return (
    <ul
      className={["mrc-tech-list", className].filter(Boolean).join(" ")}
      aria-label={ariaLabel}
    >
      {items.map((tech) => {
        const icon = getTechIcon(tech);
        return (
          <li key={tech}>
            {icon ? (
              <svg
                className="mrc-tech-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path fill="currentColor" d={icon.path} />
              </svg>
            ) : null}
            <span>{tech}</span>
          </li>
        );
      })}
    </ul>
  );
}
