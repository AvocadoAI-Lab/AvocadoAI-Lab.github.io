import fs from "node:fs";
import path from "node:path";

const content = JSON.parse(fs.readFileSync(path.resolve("src/content/site-content.json"), "utf8"));
const errors = [];
const allowedStatic = new Set(["/platform", "/resources", "/trust", "/company/founders", "/contact"]);
const allowedSolutions = new Set(["/solutions/managed-security", "/solutions/fab-intelligence", "/solutions/healthcare-resilience"]);

function walk(value, locale, trail = []) {
  if (Array.isArray(value)) {
    value.forEach((item, index) => walk(item, locale, [...trail, String(index)]));
    return;
  }

  if (value && typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      if (key === "href" && typeof child === "string") {
        if (child.startsWith("#") || child.startsWith("http") || child.startsWith("mailto:")) continue;
        if (!allowedStatic.has(child) && !allowedSolutions.has(child)) {
          errors.push(`${locale}:${[...trail, key].join(".")} references unimplemented path ${child}`);
        }
      } else {
        walk(child, locale, [...trail, key]);
      }
    }
  }
}

for (const [locale, site] of Object.entries(content)) walk(site, locale);

for (const [locale, site] of Object.entries(content)) {
  for (const solution of site.solutions ?? []) {
    const route = `/solutions/${solution.slug}`;
    if (!allowedSolutions.has(route)) errors.push(`${locale}: no route declaration for ${route}`);
  }
}

if (errors.length > 0) {
  console.error("Route verification failed:");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log("Route verification passed for configured internal links.");
