"use client";

import { useMemo, useState } from "react";
import { CaseRow } from "@/components/CaseRow";
import type { CapabilityId, Project } from "@/lib/types";

const FILTERS: { id: CapabilityId | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "technical-search", label: "SEO" },
  { id: "web-engineering", label: "Development" },
  { id: "data-automation", label: "Automation" },
  { id: "applied-ai-geo", label: "AI" },
];

type WorkDirectoryProps = {
  projects: Project[];
};

export function WorkDirectory({ projects }: WorkDirectoryProps) {
  const [active, setActive] = useState<CapabilityId | "all">("all");

  const visible = useMemo(() => {
    if (active === "all") return projects;
    return projects.filter((project) => project.capabilities.includes(active));
  }, [active, projects]);

  return (
    <div className="mrc-stack mrc-stack--l">
      <nav className="mrc-work-filters" aria-label="Filter by discipline">
        <ul>
          {FILTERS.map((filter) => {
            const isActive = active === filter.id;
            return (
              <li key={filter.id}>
                <button
                  type="button"
                  className={isActive ? "is-active" : undefined}
                  aria-pressed={isActive}
                  onClick={() => setActive(filter.id)}
                >
                  {filter.label}
                </button>
              </li>
            );
          })}
        </ul>
        <p className="mrc-work-filters__count" aria-live="polite">
          {visible.length} project{visible.length === 1 ? "" : "s"}
          {active !== "all" ? ` · ${FILTERS.find((f) => f.id === active)?.label}` : ""}
        </p>
      </nav>

      <div className="mrc-case-list">
        {visible.map((project) => (
          <CaseRow key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
