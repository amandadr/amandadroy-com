import Link from "next/link";
import { TechList } from "@/components/TechList";
import { getProjectCode } from "@/data/projects";
import type { Project } from "@/lib/types";

type CaseRowProps = {
  project: Project;
};

export function CaseRow({ project }: CaseRowProps) {
  const code = getProjectCode(project);

  return (
    <article className="mrc-case-row">
      <div className="mrc-case-row__body">
        <p className="mrc-project-id">{code}</p>
        <p className="mrc-case-row__tag">
          {project.status} · {project.year}
        </p>
        <h3 className="mrc-case-row__title">
          <Link href={`/work/${project.slug}/`}>{project.title}</Link>
        </h3>
        <p className="mrc-case-row__excerpt">{project.summary}</p>
        <TechList
          technologies={project.technologies}
          limit={4}
          className="mrc-case-row__tech-list"
        />
      </div>
    </article>
  );
}
