import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { SITE_CONTENT_UPDATED, SITE_URL } from "@/data/site";

function endOfYearFromLabel(year: string): Date {
  const match = year.match(/(\d{4})\s*$/);
  const y = match ? Number(match[1]) : Number(SITE_CONTENT_UPDATED.slice(0, 4));
  return new Date(Date.UTC(y, 11, 31));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUpdated = new Date(`${SITE_CONTENT_UPDATED}T00:00:00.000Z`);

  const staticRoutes = ["", "/work/", "/experience/", "/lab/", "/about/"].map(
    (path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: siteUpdated,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    }),
  );

  const projectRoutes = projects.map((project) => ({
    url: `${SITE_URL}/work/${project.slug}/`,
    lastModified: endOfYearFromLabel(project.year),
    changeFrequency: "monthly" as const,
    priority: project.featured ? 0.9 : 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
