import fs from "node:fs";
import path from "node:path";

const contentPath = path.resolve("src/content/site-content.json");
const content = JSON.parse(fs.readFileSync(contentPath, "utf8"));
const errors = [];
const requiredLocales = ["zh-Hant", "en"];
const requiredSlugs = ["managed-security", "fab-intelligence", "healthcare-resilience"];
const requiredAgentModuleIds = ["assess", "validate", "gate", "lens"];
const requiredProductFamilyIds = ["agent-assurance", "security-operations", "validation-evidence"];
const requiredCaseIds = ["regional-hospital-edr", "semiconductor-ot-energy", "smb-supply-chain"];
const forbiddenPublicNames = ["童綜合", "光田", "美光", "鼎新", "Micron", "Tungs", "Kuang Tien"];
const forbiddenUnapprovedClaims = ["1,000", "1000 endpoints", "千台 EDR", "1,700", "10,207", "6.04%", "33 days", "33 天"];
const allowedMaturity = new Set(["open-source-mvp", "public-research-artifact", "research-preview", "lab-baseline"]);
const allowedAgentMaturity = new Set(["available-service", "design-partner", "closed-beta-roadmap", "research-option"]);
const allowedCaseEvidenceStatus = new Set(["delivery-pattern", "poc-evidence-model", "service-blueprint"]);
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
  if (site.hero?.visualInputs?.length !== 6) errors.push(`${locale}: hero must declare six visual inputs`);

  const productFamilyItems = site.productFamily?.items ?? [];
  const productFamilyIds = productFamilyItems.map((item) => item.id);
  if (JSON.stringify(productFamilyIds) !== JSON.stringify(requiredProductFamilyIds)) {
    errors.push(`${locale}: product family must be ordered Agent Assurance, Security Operations, Validation & Evidence`);
  }
  for (const item of productFamilyItems) {
    if (!item.title || !item.description || item.tags?.length < 3 || !item.href || !item.linkLabel) {
      errors.push(`${locale}: incomplete product-family item ${item.id || "<missing id>"}`);
    }
  }

  const agentModules = site.agentAssurance?.modules ?? [];
  const agentModuleIds = agentModules.map((agentModule) => agentModule.id);
  if (JSON.stringify(agentModuleIds) !== JSON.stringify(requiredAgentModuleIds)) {
    errors.push(`${locale}: Agent Assurance modules must be ordered assess, validate, gate, lens`);
  }
  for (const agentModule of agentModules) {
    if (!allowedAgentMaturity.has(agentModule.maturity)) errors.push(`${locale}: invalid Agent Assurance maturity ${agentModule.maturity}`);
    if (!agentModule.status || !agentModule.title || !agentModule.description || agentModule.deliverables?.length < 3) {
      errors.push(`${locale}: incomplete Agent Assurance module ${agentModule.id || "<missing id>"}`);
    }
  }

  const caseStudies = site.caseStudies?.items ?? [];
  const caseIds = caseStudies.map((item) => item.id);
  if (JSON.stringify(caseIds) !== JSON.stringify(requiredCaseIds)) {
    errors.push(`${locale}: field cases must be ordered hospital, semiconductor, SMB`);
  }
  for (const item of caseStudies) {
    if (!allowedCaseEvidenceStatus.has(item.evidenceStatus)) errors.push(`${locale}: invalid field-case evidence status ${item.evidenceStatus}`);
    if (!Array.isArray(item.claimIds) || !item.challenge || item.approach?.length < 3 || item.outcomes?.length < 3) {
      errors.push(`${locale}: incomplete field case ${item.id || "<missing id>"}`);
    }
  }

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

const stableAgentFields = (items) => items.map(({ id, maturity }) => ({ id, maturity }));
if (JSON.stringify(stableAgentFields(content["zh-Hant"]?.agentAssurance?.modules ?? [])) !== JSON.stringify(stableAgentFields(content.en?.agentAssurance?.modules ?? []))) {
  errors.push("Agent Assurance ids, maturity, and order must match across locales");
}

const stableProductFamilyFields = (items) => items.map(({ id, href }) => ({ id, href }));
if (JSON.stringify(stableProductFamilyFields(content["zh-Hant"]?.productFamily?.items ?? [])) !== JSON.stringify(stableProductFamilyFields(content.en?.productFamily?.items ?? []))) {
  errors.push("Product-family ids, links, and order must match across locales");
}

const stableCaseFields = (items) => items.map(({ id, evidenceStatus, claimIds }) => ({ id, evidenceStatus, claimIds }));
if (JSON.stringify(stableCaseFields(content["zh-Hant"]?.caseStudies?.items ?? [])) !== JSON.stringify(stableCaseFields(content.en?.caseStudies?.items ?? []))) {
  errors.push("Field-case ids, evidence status, claim ids, and order must match across locales");
}

const serialized = JSON.stringify(content);
for (const name of forbiddenPublicNames) {
  if (serialized.includes(name)) errors.push(`Public content contains a forbidden named-customer term: ${name}`);
}
for (const claim of forbiddenUnapprovedClaims) {
  if (serialized.includes(claim)) errors.push(`Public content contains an unapproved quantitative claim: ${claim}`);
}

if (errors.length > 0) {
  console.error("Content verification failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("Content verification passed for zh-Hant and en.");
