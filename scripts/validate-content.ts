import { validateProjects } from "../src/lib/projects";

const errors = validateProjects();

if (errors.length) {
  console.error("Content validation failed:\n");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("Content validation passed.");
