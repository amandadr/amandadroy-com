import { projects } from "@/data/projects";
import type { Project } from "@/lib/types";

const CORE_CASE_KEYS: (keyof NonNullable<Project["caseStudy"]>)[] = [
  "problem",
  "responsibility",
  "implementation",
  "outcome",
];

export function requireCaseStudySections(project: Project): void {
  if (project.depth !== "case-study") return;
  if (!project.caseStudy) {
    throw new Error(`Case study missing sections: ${project.slug}`);
  }
  for (const key of CORE_CASE_KEYS) {
    if (!project.caseStudy[key]?.trim()) {
      throw new Error(`Case study ${project.slug} missing ${key}`);
    }
  }
}

export function validateProjects(list: Project[] = projects): string[] {
  const errors: string[] = [];
  const slugs = new Set<string>();

  for (const project of list) {
    if (!project.slug?.trim()) errors.push("Project missing slug");
    if (!project.title?.trim()) errors.push(`Missing title: ${project.slug}`);
    if (!project.summary?.trim()) errors.push(`Missing summary: ${project.slug}`);
    if (!project.category) errors.push(`Missing category: ${project.slug}`);
    if (slugs.has(project.slug)) errors.push(`Duplicate slug: ${project.slug}`);
    slugs.add(project.slug);

    if (project.featured || project.depth === "case-study") {
      try {
        requireCaseStudySections(project);
      } catch (error) {
        errors.push(error instanceof Error ? error.message : String(error));
      }
    }

    if (project.featured && project.depth !== "case-study") {
      errors.push(`Featured project must be case-study: ${project.slug}`);
    }

    for (const related of project.relatedProjectSlugs ?? []) {
      if (!list.some((item) => item.slug === related)) {
        errors.push(`Unknown related project on ${project.slug}: ${related}`);
      }
    }
  }

  return errors;
}
