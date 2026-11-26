import Link from "next/link";
import type { CapabilityId, Project } from "@/lib/types";

const CAPABILITY_LABELS: Record<CapabilityId, string> = {
  "technical-search": "Technical SEO",
  "web-engineering": "Web engineering",
  "data-automation": "Data & automation",
  "applied-ai-geo": "Applied AI",
};

type ProjectBreadcrumbsProps = {
  project: Project;
};

export function ProjectBreadcrumbs({ project }: ProjectBreadcrumbsProps) {
  const primaryCapability = project.capabilities[0];

  return (
    <nav className="mrc-breadcrumbs" aria-label="Breadcrumb">
      <ol>
        <li>
          <Link href="/work/">Work</Link>
        </li>
        {primaryCapability ? (
          <li>
            <Link href="/work/">{CAPABILITY_LABELS[primaryCapability]}</Link>
          </li>
        ) : null}
        <li aria-current="page">{project.title}</li>
      </ol>
    </nav>
  );
}
