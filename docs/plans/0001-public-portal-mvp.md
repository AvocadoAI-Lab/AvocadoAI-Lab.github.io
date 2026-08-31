# Deliver a bilingual, evidence-driven Avocado.ai public portal MVP

This ExecPlan is a living document. Maintain it according to `PLANS.md` in the repository root. Keep `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` current as work proceeds.

## Purpose and user-visible outcome

After this plan is complete, a visitor can open the Avocado.ai public portal in Traditional Chinese or English, understand the company category and SenseL platform, compare the three primary solutions, review accurate anonymous field proof, identify Rain Chung and Eric Mao as the two founders, understand the company's trust posture, and reach an approved workshop or contact destination. The application will build cleanly, work across mobile and desktop, and contain no unapproved named customer or quantitative claim.

## Context and boundaries

The repository is a Next.js public corporate site. It is not the SenseL customer portal. No customer telemetry, reports, evidence packages, tenant data, credentials, or authenticated customer routes belong here. The content adapter in `src/content/content.ts` is the only entry point for page content, allowing a CMS to be introduced later.

Founder titles and biographies are drafts until approved in `docs/content/FOUNDER_PROFILE_APPROVAL.md`. Quantitative and named-customer claims are governed by `docs/content/CLAIMS_LEDGER.md`.

## Progress

- [x] 2026-08-31: Added the 新漢 AIoT 新創加速器 2025 成果發表 record and two supplied photographs, then replaced the single-event photo grid with an accessible event and image switcher.
- [x] 2026-08-31: Migrated the complete portal source to `AvocadoAI-Lab/AvocadoAI-Lab.github.io`, configured root-path static export, and prepared the repository for GitHub Actions Pages at `https://avocadoai-lab.github.io/`.
- [x] 2026-08-31: Published and browser-verified the public GitHub Pages preview from `AvocadoAI-Lab/AvocadoAIPortal` at `https://avocadoai-lab.github.io/AvocadoAIPortal/`.
- [x] 2026-08-31: Created repository guidance, product requirements, system design, design system, content governance, security documents, roadmap, backlog, and test plan.
- [x] 2026-08-31: Selected Next.js App Router, strict TypeScript, Tailwind CSS, repository content adapter, and separate authenticated-portal boundary.
- [x] 2026-08-31: Installed dependencies successfully with Node-compatible package metadata and generated `package-lock.json` for reproducible CI builds.
- [x] 2026-08-31: Implemented the bilingual responsive homepage scaffold with hero, proof, problem, closed loop, solutions, field proof, founders, integrations, trust, resources, and final CTA.
- [x] 2026-08-31: Implemented platform, three solution, founder, trust, resource, and contact routes in both locales.
- [x] 2026-08-31: Replaced the temporary text mark in the shared header/footer component with the repository owner's approved transparent AvocadoAI logo asset.
- [x] 2026-08-31: Replaced the temporary browser `AI` favicon with a transparent square icon derived from the approved avocado/gecko emblem.
- [x] 2026-08-31: Published Rain Chung (`rain.chung@mail.avocadolab.ai`) as the approved email contact in both localized contact pages.
- [x] 2026-08-31: Added the approved Taipei office address and Financial Technology Innovation Park / Yangde Building context to both localized contact pages.
- [x] 2026-08-31: Replaced the homepage SenseL `AI` placeholder badge with the selected transparent neural-lattice brain artwork.
- [x] 2026-08-31: Embedded the approved avocado-and-gecko emblem into the neural-lattice brain as the homepage SenseL reasoning core.
- [x] 2026-08-31: Migrated approved product-capability copy and four CES 2025 event photographs from the legacy `www.avocadolab.ai` homepage into the platform and resources pages, with bilingual parity and responsive image treatment.
- [x] 2026-08-31: Passed content verification, route verification, strict TypeScript checking, ESLint, the standard production build, and the GitHub Pages static-export build.
- [ ] Perform keyboard, responsive, and content-parity review.
- [ ] Replace placeholder brand and founder assets with approved files.
- [ ] Connect an approved booking or CRM destination; the approved Rain Chung email contact is now live as the interim public channel.
- [ ] Obtain stakeholder approval for founder copy and all public claims.
- [x] 2026-08-31: Deployed a public GitHub Pages preview with automated checks and HTTPS; stakeholder review remains a separate approval activity.

## Surprises & Discoveries

- The target `AvocadoAI-Lab` organization is on GitHub Free, the `AvocadoAIPortal` name is available, and the active operator has organization administrator access. GitHub Pages therefore requires this preview repository to be public.
- The initial Next.js configuration uses `output: "standalone"` and response headers, while GitHub Pages requires a static export and cannot apply the configured server response headers.
- Next.js 16 requires metadata routes to declare build-time static behavior under `output: "export"`; `manifest.webmanifest`, `robots.txt`, and `sitemap.xml` now declare `dynamic = "force-static"` and generate successfully.
- The Pages export generated all Traditional Chinese and English routes and served representative pages, metadata files, and hashed CSS assets successfully under the `/AvocadoAIPortal` project path in a local static-host simulation.
- Live browser validation revealed that manually prefixing `redirect()` duplicated Next.js `basePath` handling at runtime. The root redirect now remains locale-relative so Next.js applies `/AvocadoAIPortal` exactly once.
- The supplied logo includes substantial transparent padding around an intact 1024 × 681 RGBA image. The original bitmap is preserved byte-for-byte and its visible bounds are cropped only by the shared logo component at render time.
- The artifact environment could not complete npm registry access within the available execution window. Repository-only verification passed; full dependency installation and Next.js build remain the first Codex validation task.
- The public corporate site and future authenticated customer portal require different security boundaries; they are intentionally separated.
- Current internal material contains strong Fab and healthcare evidence, but customer identity, exact numbers, and engagement status require explicit publication permission.
- Founder positioning is commercially valuable but must be subordinate to platform and field evidence on the homepage.
- The legacy `https://www.avocadolab.ai/zh-Hant` homepage mixes reusable SenseL capability copy and four owned CES 2025 photographs with unapproved SLA numbers, partner names, and interview-style personas. Only the capability copy and explicitly requested CES photographs are in scope for migration.
- The legacy CES photographs are lazy-loaded through Next.js image optimization and are available as four 1920-pixel WebP assets after scrolling the live page to the event section.
- The two supplied AIoT event photographs use complementary landscape and portrait orientations. An `object-contain` main stage preserves the full image while thumbnails remain compact and scannable.

## Decision Log

- Decision: publish the requested GitHub Pages deployment as a public preview, not as the final recommended production host. Rationale: it satisfies the requested review workflow while keeping the production hosting decision open for a platform that can enforce the portal's required response headers and support future server-side integrations.
- Decision: use the GitHub Actions Pages artifact workflow rather than committing generated `out/` files. Rationale: source, verification, build, and deployment remain reproducible from `main`, and rollback is a repository commit rollback.
- Decision: use a single public-site application rather than an early monorepo. Rationale: reduce build complexity while the content and brand system are stabilizing; the authenticated portal will be a separate application for security reasons.
- Decision: use repository-managed bilingual content behind an adapter for MVP. Rationale: claims governance and editorial workflow should be stabilized before selecting a CMS.
- Decision: use anonymous qualitative field-proof copy in the initial render. Rationale: avoid implying public customer permission or an incorrect commercial status.
- Decision: present Rain and Eric at equal visual weight under `Founders & Leadership`. Rationale: explain complementary founder fit without making the site a personal-brand page.
- Decision: place detailed legacy SenseL capability copy on the platform page and the CES 2025 photographs on the resources page, while adding only a concise event-note teaser to the homepage resources section. Rationale: product detail belongs with platform architecture, event photography belongs with public field notes, and the newly simplified founder contact page should remain concise.
- Decision: exclude the legacy `1-3 days`, `7×24`, `<2 hours`, partner names, compliance output claims, and interview personas from this migration. Rationale: they are either governed SLA/partner claims or lack the publication evidence required by the claims ledger.
- Decision: retain the target repository's existing history and replace only its placeholder page with the reviewed portal source. Build the organization site at the root path without `/AvocadoAIPortal`. Rationale: `AvocadoAI-Lab.github.io` is a GitHub Pages organization-site repository and is served directly from `/`.
- Decision: use manual event tabs plus previous, next, and thumbnail controls instead of autoplay. Rationale: the interaction remains understandable, keyboard-accessible, mobile-friendly, and scalable as additional event records are published without adding an unbounded vertical photo wall.

## Implementation plan

### Milestone 1 — Make the scaffold installable and observable

Review package versions and generated configuration against the target Node environment. Install dependencies, run the repository-only scripts, then run typecheck, lint, and build. Fix configuration or framework issues. At the end of this milestone, `npm run check` and `npm run build` should complete successfully on a clean checkout.

### Milestone 2 — Validate the homepage in both locales

Inspect the homepage components and content adapter. Ensure the first viewport communicates category, benefit, and CTA without animation. Validate all sections: proof, customer problem, SenseL closed loop, three solutions, field proof, founders, integrations, trust, resources, and final CTA. Test keyboard navigation and responsive layouts. At the end, `/zh-Hant` and `/en` should render equivalent content with no broken links or horizontal overflow.

### Milestone 3 — Validate supporting pages and conversion

Review the platform, solution, founder, trust, resource, and contact pages. Every page should have localized metadata, one primary action, and consistent navigation. Replace placeholder CTA destinations only with approved environment configuration. At the end, a visitor can move from any primary solution page to a valid next step.

### Milestone 4 — Publication readiness

Replace temporary assets, complete the claims ledger, approve founder copy, add required legal pages, decide analytics and consent, and implement CRM or booking integration with privacy and abuse controls. Add CSP after third-party origins are known and test it in report-only mode. At the end, an internal preview should contain no unresolved public claim and be ready for stakeholder sign-off.

### Milestone 5 — GitHub Pages preview

Convert the application to a static export without introducing authenticated or server-side behavior. Generate every localized route at build time, configure the GitHub project-site base path only in the Pages build, and publish the `out/` artifact with the official GitHub Actions Pages workflow. At the end, the public preview URL should load both locales and all primary routes without broken navigation or assets.

### Milestone 6 — Legacy content and CES media migration

Copy the four approved CES 2025 photographs from the legacy public site into `public/events/ces-2025/` with descriptive file names. Extend the bilingual content model with reviewed SenseL capability descriptions and a CES event-gallery record. Render capability detail on the platform page, render the responsive and accessible photo gallery on the resources page, and add a concise event-note teaser to the homepage resource cards. Do not migrate legacy SLA metrics, partner identities, or interview personas. At the end, both locales must render equivalent copy and descriptive image alternatives with no horizontal overflow.

### Milestone 7 — Multi-event resource gallery

Model event records as a bilingual list rather than a single gallery. Add the owner-supplied 新漢 AIoT 新創加速器 2025 成果發表 photographs with provenance, descriptive alternatives, and approved event wording. Render a manually controlled event switcher with keyboard-operable tabs, previous and next image controls, and a horizontally scrollable thumbnail strip. Do not autoplay. At the end, CES 2025 and the AIoT event must switch without navigation, preserve image aspect ratios, and work without horizontal page overflow on desktop and mobile.

## Validation and acceptance

Run:

    npm run verify:content
    npm run verify:routes
    npm run typecheck
    npm run lint
    npm run build

Then start the application and verify:

- `/` redirects to `/zh-Hant`.
- `/zh-Hant` and `/en` render all homepage sections.
- Each of the three solution routes renders in both locales.
- `/zh-Hant/company/founders` and `/en/company/founders` show Rain and Eric with draft-approved wording only.
- Unknown locales and unknown solution slugs return not found.
- Keyboard focus reaches navigation, locale switch, CTAs, and footer in logical order.
- At 320px there is no horizontal overflow.
- The rendered site contains no named customer, logo, exact confidential metric, unapproved SLA, or unapproved certification.

## Rollback and recovery

Keep content and UI changes separate where practical. If a content claim is challenged, revert the content record without changing components. If an integration fails, restore the prior CTA link and disable the integration rather than silently losing submissions. Deployment must support rollback to the last known build.

## Outcomes & Retrospective

The repository was initialized and published to `AvocadoAI-Lab/AvocadoAIPortal` on 2026-08-31. The standard production build and GitHub Pages static export both pass content checks, route checks, strict TypeScript, ESLint, and Next.js compilation. GitHub Actions now rebuilds and deploys the preview from `main`; the public site enforces HTTPS.

Live checks confirmed the root entry reaches the Traditional Chinese homepage, the language control reaches the English homepage, representative supporting and solution routes return successfully, metadata files and hashed assets are available under the project base path, and the browser console reports no errors during the tested navigation. The root redirect initially duplicated the project base path; browser validation caught the issue and the corrected redirect was re-deployed.

The preview still contains deliberately pending publication items: approved brand and founder assets, an approved contact or booking destination, stakeholder approval for founder wording and public claims, and the final production-host decision. GitHub Pages is therefore treated as a review preview rather than the recommended final host for the commercial portal.

The legacy-content milestone added a four-card SenseL capability section to the platform page, a bilingual CES 2025 event record and four-image gallery to the resources page, and a concise CES resource teaser on the homepage. The source images are stored locally with provenance notes and descriptive alternatives. Legacy SLA metrics, partner identities, and interview personas were deliberately excluded. Desktop and mobile browser checks confirmed correct responsive image loading, bilingual parity, and no horizontal overflow; content verification, route verification, strict TypeScript, ESLint, and the production build all passed afterward.

The organization-site migration retained the target repository's initial commit, removed its placeholder `index.html`, and copied the complete reviewed portal source into `AvocadoAI-Lab/AvocadoAI-Lab.github.io`. The Pages build now exports for the domain root rather than the former `/AvocadoAIPortal` project path. Content verification, route verification, strict TypeScript, ESLint, the standard build, and the root-path Pages build all passed in the target repository before publication.

The multi-event resource milestone added a bilingual 新漢 AIoT 新創加速器 2025 成果發表 record and two owner-supplied photographs with provenance notes. The former static CES photo grid is now a manual event and image switcher with ARIA tabs, arrow-key event navigation, previous and next controls, and scrollable thumbnails. Desktop and mobile browser tests confirmed both event and image switching, preserved natural image dimensions, hidden component scrollbars, no page overflow, and no console errors. All repository checks and both production build modes passed afterward.
