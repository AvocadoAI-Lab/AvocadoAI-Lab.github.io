import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";

const content = JSON.parse(fs.readFileSync(path.resolve("src/content/site-content.json"), "utf8"));
const errors = [];
const allowedStatic = new Set(["/agent-assurance", "/platform", "/products/ndr-e200", "/case-studies", "/technology", "/resources", "/trust", "/company/founders", "/contact"]);
const allowedSolutions = new Set(["/solutions/managed-security", "/solutions/fab-intelligence", "/solutions/healthcare-resilience"]);
const allowedDownloads = new Map([
  ["/datasheets/avocado-ndr-e200/avocado-ndr-e200-datasheet-zh-hant.pdf", "4ea2cbeff8ce300bb5b71aafac6937122173608442a858172d14d5da5ac1139b"],
  ["/datasheets/avocado-ndr-e200/avocado-ndr-e200-datasheet-en.pdf", "0911cd5eaad74804c7ed24e19f2730f9ae07db9bbb87c3b3b980248b9fab2e06"],
  ["/datasheets/avocado-ndr-e200/avocado-ndr-e200-catalog-zh-hant.pdf", "e7a58d20de4401019650e169a76314e44973bc2dd11218e2b92029936f401e8b"],
]);

function walk(value, locale, trail = []) {
  if (Array.isArray(value)) {
    value.forEach((item, index) => walk(item, locale, [...trail, String(index)]));
    return;
  }

  if (value && typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      if (key === "href" && typeof child === "string") {
        if (child.startsWith("#") || child.startsWith("http") || child.startsWith("mailto:")) continue;
        if (allowedDownloads.has(child)) {
          const asset = path.resolve("public", child.slice(1));
          const bytes = fs.existsSync(asset) ? fs.readFileSync(asset) : null;
          if (!bytes || bytes.subarray(0, 5).toString() !== "%PDF-" || createHash("sha256").update(bytes).digest("hex") !== allowedDownloads.get(child)) {
            errors.push(`${locale}:${[...trail, key].join(".")} references a missing or invalid PDF ${child}`);
          }
          continue;
        }
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
  for (const download of site.ndrE200Page?.downloads ?? []) {
    if (!allowedDownloads.has(download.href)) errors.push(`${locale}: unapproved download path ${download.href}`);
  }
}

if (errors.length > 0) {
  console.error("Route verification failed:");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log("Route verification passed for configured internal links.");
