import {
  siAstro,
  siGhost,
  siJavascript,
  siNextdotjs,
  siNodedotjs,
  siPhp,
  siPostgresql,
  siPython,
  siReact,
  siRubyonrails,
  siSanity,
  siSqlite,
  siStripe,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVuedotjs,
  siWoo,
  siWordpress,
  type SimpleIcon,
} from "simple-icons";

export type TechIconDef = {
  label: string;
  path: string;
};

const ICONS: Record<string, SimpleIcon> = {
  "next.js": siNextdotjs,
  react: siReact,
  typescript: siTypescript,
  javascript: siJavascript,
  python: siPython,
  wordpress: siWordpress,
  woocommerce: siWoo,
  php: siPhp,
  ghost: siGhost,
  astro: siAstro,
  vue: siVuedotjs,
  postgresql: siPostgresql,
  stripe: siStripe,
  supabase: siSupabase,
  sanity: siSanity,
  tailwindcss: siTailwindcss,
  sqlite: siSqlite,
  "node.js": siNodedotjs,
  "ruby on rails": siRubyonrails,
};

const ALIASES: Record<string, keyof typeof ICONS> = {
  "next.js": "next.js",
  nextjs: "next.js",
  react: "react",
  typescript: "typescript",
  javascript: "javascript",
  python: "python",
  wordpress: "wordpress",
  woocommerce: "woocommerce",
  php: "php",
  ghost: "ghost",
  handlebars: "ghost",
  astro: "astro",
  vue: "vue",
  postgresql: "postgresql",
  postgres: "postgresql",
  stripe: "stripe",
  supabase: "supabase",
  sanity: "sanity",
  "tailwind css": "tailwindcss",
  tailwind: "tailwindcss",
  tailwindcss: "tailwindcss",
  sqlite: "sqlite",
  "node.js": "node.js",
  node: "node.js",
  "ruby on rails": "ruby on rails",
  rails: "ruby on rails",
};

export function getTechIcon(technology: string): TechIconDef | null {
  const key = ALIASES[technology.trim().toLowerCase()];
  if (!key) return null;
  const icon = ICONS[key];
  if (!icon) return null;
  return { label: icon.title, path: icon.path };
}
