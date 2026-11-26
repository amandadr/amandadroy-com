import Link from "next/link";
import { TechList } from "@/components/TechList";
import { getProjectCode } from "@/data/projects";
import type { Project } from "@/lib/types";

type CaseRowProps = {
  project: Project;
};

export function CaseRow({ project }: CaseRowProps) {
  const code = getProjectCode(project);
  const presentation = project.presentation ?? (project.featured ? "standard" : "compact");
  const isFlagship = presentation === "flagship";
  const isCompact = presentation === "compact";

  return (
    <article
      className={`mrc-case-row mrc-case-row--${presentation}`}
      data-presentation={presentation}
    >
      <div className="mrc-case-row__body">
        <p className="mrc-project-id">{code}</p>
        <p className="mrc-case-row__tag">
          {project.status} · {project.year}
        </p>
        <h3 className="mrc-case-row__title">
          <Link href={`/work/${project.slug}/`}>{project.title}</Link>
        </h3>
        {!isCompact ? (
          <p className="mrc-case-row__excerpt">{project.summary}</p>
        ) : null}
        {isFlagship ? (
          <p className="mrc-case-row__cta">
            <Link href={`/work/${project.slug}/`}>Read the case study</Link>
          </p>
        ) : null}
        <TechList
          technologies={project.technologies}
          limit={isCompact ? 3 : 4}
          className="mrc-case-row__tech-list"
        />
      </div>
    </article>
  );
}
