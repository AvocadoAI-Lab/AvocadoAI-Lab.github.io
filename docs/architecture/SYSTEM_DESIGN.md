# System Design — Avocado.ai Portal Ecosystem

## 1. System context

The Avocado.ai digital experience should be treated as three products with distinct risk profiles.

The public corporate portal provides positioning, solution education, approved customer evidence, founder leadership, resources, trust information, and lead conversion. It is anonymous by default and contains no customer telemetry.

The future SenseL customer portal provides authenticated, tenant-isolated access to episodes, evidence timelines, assets, reports, validation campaigns, service status, and support. It handles sensitive customer data and therefore requires a separate application, identity system, API boundary, audit trail, and deployment lifecycle.

The future partner portal provides authenticated enablement, deal registration, pricing tools, co-branded material, training, and support escalation. It may share identity infrastructure with the customer portal but should use separate roles and data authorization.

## 2. Public portal architecture

The initial application is a Next.js App Router application using Server Components by default. Content is read through `src/content/content.ts`. The first implementation uses repository content so product and claims governance can stabilize before selecting a CMS. Page components must not import raw content files directly.

Public routes are locale-prefixed. Traditional Chinese uses `/zh-Hant`; English uses `/en`. The root route redirects to Traditional Chinese. Every content entity must have both locales before it becomes public.

The application is deployable as a standalone Node.js server. Static generation should be preferred for product, solution, founder, trust, and resource pages. Dynamic behavior should be limited to approved integrations such as a CRM form, search, consent, or analytics.

## 3. Content layer

The content adapter exposes typed site content, solution records, founder records, case-study summaries, trust statements, and resource records. When a CMS is introduced, the adapter becomes the only integration point. This avoids coupling page components to a vendor query language.

A future CMS must support:

- locale parity and required translations;
- draft, legal review, customer review, approved, scheduled, and archived states;
- reusable claims linked to sources and approval dates;
- anonymous and named case variants;
- role-based publishing;
- preview without public publication;
- immutable revision history or exportable audit history.

## 4. Lead conversion

The MVP does not implement a form backend. Production conversion may use an approved CRM form or a server-side route that validates input, rate limits abuse, records consent, and forwards only required fields to an approved system. The browser must never receive CRM secrets.

Required lead fields should remain minimal: name, organization, business email, role, solution interest, brief context, consent, and locale. Healthcare and semiconductor visitors must be instructed not to submit patient data, production credentials, network diagrams, vulnerability details, or other sensitive information through the public form.

## 5. Analytics and privacy

Analytics must be configured only after a privacy decision. Prefer privacy-minimizing event measurement. Track page and CTA performance without recording submitted content or sensitive query parameters. Consent requirements depend on selected tools and target jurisdictions and must be reviewed before deployment.

## 6. Authenticated customer portal target architecture

The customer portal should be a separate application, for example `portal.avocadolab.ai`, and should not import code that can accidentally expose server data to the public site. Its target components are:

- an enterprise identity provider supporting MFA and federation;
- tenant-aware authorization enforced server-side on every request;
- a backend-for-frontend that calls SenseL APIs using service credentials unavailable to the browser;
- an audit event pipeline for sign-in, report access, evidence export, role change, and administrative action;
- tenant-scoped object storage for reports and evidence packages;
- rate limiting, anomaly detection, session revocation, and security monitoring;
- secure support access with explicit customer approval and time-limited elevation.

The public site's Customer Login link is only a navigation link to that separate system.

## 7. Deployment and environments

Use development, preview, and production environments. Preview deployments must not expose confidential CMS drafts to unauthenticated users. Production environment variables are managed by the deployment platform; `.env` files are never committed.

The standalone build permits deployment to a managed Next.js platform, a container platform, or a Node.js runtime. The first production target can be selected after DNS, compliance, operations, and cost review.

## 8. Security controls

The public portal uses security headers, strict TypeScript, dependency scanning, server-only secrets, minimal client JavaScript, safe output encoding, and approved content sources. A Content Security Policy should be introduced after analytics, CRM, video, and font origins are finalized. It should be tested in report-only mode before enforcement.

No customer names, logos, quantitative claims, certifications, or founder quotes are rendered until approved through the claims workflow.

## 9. Observability

Minimum production observability includes availability checks, server errors, route latency, build status, broken-link checks, and conversion endpoint failures. Logs must not include form body content, authentication credentials, or sensitive query parameters.

## 10. Evolution path

Phase 1 stabilizes positioning, design, bilingual content, and claims governance. Phase 2 introduces approved brand assets, CMS, CRM, analytics, and case studies. Phase 3 launches a separate authenticated customer portal shell. Phase 4 adds partner workflows and deeper SenseL integration.
