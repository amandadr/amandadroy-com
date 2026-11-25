import Link from "next/link";
import { categoryLabels } from "@/data/projects";
import type { Project } from "@/lib/types";

type CaseRowProps = {
  project: Project;
  showCategory?: boolean;
};

export function CaseRow({ project, showCategory = true }: CaseRowProps) {
  const tag = showCategory
    ? categoryLabels[project.category]
    : project.status;

  return (
    <article className="mrc-case-row">
      <div className="mrc-case-row__body">
        <p className="mrc-case-row__tag">
          {tag} · {project.year}
        </p>
        <h3 className="mrc-case-row__title">
          <Link href={`/work/${project.slug}/`}>{project.title}</Link>
        </h3>
        <p className="mrc-case-row__excerpt">{project.summary}</p>
        <p className="mrc-case-row__excerpt">
          <span>{project.role}</span>
          {" · "}
          <span>{project.technologies.slice(0, 4).join(" · ")}</span>
        </p>
      </div>
    </article>
  );
}
