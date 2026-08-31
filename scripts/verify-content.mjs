import fs from "node:fs";
import path from "node:path";

const contentPath = path.resolve("src/content/site-content.json");
const content = JSON.parse(fs.readFileSync(contentPath, "utf8"));
const errors = [];
const requiredLocales = ["zh-Hant", "en"];
const requiredSlugs = ["managed-security", "fab-intelligence", "healthcare-resilience"];
const forbiddenPublicNames = ["童綜合", "光田", "美光", "鼎新", "Micron", "Tungs", "Kuang Tien"];

for (const locale of requiredLocales) {
  const site = content[locale];
  if (!site) {
    errors.push(`Missing locale: ${locale}`);
    continue;
  }

  const slugs = site.solutions?.map((solution) => solution.slug) ?? [];
  for (const slug of requiredSlugs) {
    if (!slugs.includes(slug)) errors.push(`${locale}: missing solution ${slug}`);
  }

  const founderIds = site.foundersSection?.people?.map((person) => person.id) ?? [];
  for (const id of ["rain-chung", "eric-mao"]) {
    if (!founderIds.includes(id)) errors.push(`${locale}: missing founder ${id}`);
  }

  if (!site.meta?.title || !site.meta?.description) errors.push(`${locale}: missing metadata`);
  if (!site.hero?.primaryCta?.href) errors.push(`${locale}: missing hero CTA`);
}

const serialized = JSON.stringify(content);
for (const name of forbiddenPublicNames) {
  if (serialized.includes(name)) errors.push(`Public content contains a forbidden named-customer term: ${name}`);
}

if (errors.length > 0) {
  console.error("Content verification failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("Content verification passed for zh-Hant and en.");
