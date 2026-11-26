import Link from "next/link";
import { TechList } from "@/components/TechList";
import { getProjectCode } from "@/data/projects";
import type { Project } from "@/lib/types";

type CaseRowProps = {
  project: Project;
};

export function CaseRow({ project }: CaseRowProps) {
  const code = getProjectCode(project);
  const presentation =
    project.presentation ?? (project.featured ? "standard" : "compact");
  const isFlagship = presentation === "flagship";
  const displayTitle = project.headline ?? project.title;

  return (
    <article
      className={`mrc-case-row mrc-case-row--${presentation}`}
      data-presentation={presentation}
    >
      <div className="mrc-case-row__body">
        <p className="mrc-case-row__tag">
          {project.status} · {project.year}
          <span className="mrc-case-row__id" aria-hidden="true">
            {" "}
            · {code}
          </span>
        </p>
        <h3 className="mrc-case-row__title">
          <Link href={`/work/${project.slug}/`}>{displayTitle}</Link>
        </h3>
        {project.headline && project.headline !== project.title ? (
          <p className="mrc-case-row__product">{project.title}</p>
        ) : null}
        <p className="mrc-case-row__excerpt">{project.summary}</p>
        {isFlagship ? (
          <p className="mrc-case-row__cta">
            <Link href={`/work/${project.slug}/`}>Read the case study</Link>
          </p>
        ) : null}
        <TechList
          technologies={project.technologies}
          limit={4}
          className="mrc-case-row__tech-list"
        />
      </div>
    </article>
  );
}
