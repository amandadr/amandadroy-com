/**
 * Merged or retired project URLs → canonical case study.
 * Static export serves a redirect page at the old path.
 */
export const PROJECT_REDIRECTS: Record<string, string> = {
  "squarespace-publishing-automation": "editorial-workflow-automation",
  "ux-experimentation-practice": "good-robot-brewing",
  "paid-organic-attribution": "macmillan-search-practice",
  "multisite-technical-seo": "macmillan-search-practice",
};

export function getRedirectTarget(slug: string): string | undefined {
  return PROJECT_REDIRECTS[slug];
}
