import fs from "node:fs";
import path from "node:path";

const contentPath = path.resolve("src/content/site-content.json");
const content = JSON.parse(fs.readFileSync(contentPath, "utf8"));
const errors = [];
const requiredLocales = ["zh-Hant", "en"];
const requiredSlugs = ["managed-security", "fab-intelligence", "healthcare-resilience"];
const forbiddenPublicNames = ["童綜合", "光田", "美光", "鼎新", "Micron", "Tungs", "Kuang Tien"];
const allowedMaturity = new Set(["open-source-mvp", "public-research-artifact", "research-preview", "lab-baseline"]);
const approvedPublicHost = "github.com";
const approvedPublicPathPrefix = "/AvocadoAI-Lab/";

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

  const technologyItems = site.technologyPage?.items ?? [];
  const technologyIds = technologyItems.map((item) => item.id);
  if (technologyItems.length === 0) errors.push(`${locale}: missing technology portfolio items`);
  if (new Set(technologyIds).size !== technologyIds.length) errors.push(`${locale}: duplicate technology item id`);

  for (const item of technologyItems) {
    if (!item.id || !item.category || !item.status || !item.title || !item.description || !item.proof) {
      errors.push(`${locale}: incomplete technology item ${item.id || "<missing id>"}`);
    }
    if (!allowedMaturity.has(item.maturity)) errors.push(`${locale}: invalid maturity ${item.maturity} for ${item.id}`);
    if (item.href) {
      try {
        const url = new URL(item.href);
        if (url.protocol !== "https:") errors.push(`${locale}: technology link must use HTTPS for ${item.id}`);
        if (url.hostname !== approvedPublicHost || !url.pathname.startsWith(approvedPublicPathPrefix)) {
          errors.push(`${locale}: technology link is outside the approved public organization for ${item.id}`);
        }
      } catch {
        errors.push(`${locale}: invalid technology URL for ${item.id}`);
      }
    }
  }

  for (const id of site.technology?.featuredIds ?? []) {
    if (!technologyIds.includes(id)) errors.push(`${locale}: featured technology id ${id} does not exist`);
  }
}

const zhTechnology = content["zh-Hant"]?.technologyPage?.items ?? [];
const enTechnology = content.en?.technologyPage?.items ?? [];
const stableTechnologyFields = (items) => items.map(({ id, maturity, href = null }) => ({ id, maturity, href }));
if (JSON.stringify(stableTechnologyFields(zhTechnology)) !== JSON.stringify(stableTechnologyFields(enTechnology))) {
  errors.push("Technology ids, maturity, order, and evidence links must match across locales");
}
if (JSON.stringify(content["zh-Hant"]?.technology?.featuredIds) !== JSON.stringify(content.en?.technology?.featuredIds)) {
  errors.push("Featured technology ids must match across locales");
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
