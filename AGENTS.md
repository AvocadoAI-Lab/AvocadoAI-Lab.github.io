# Avocado.ai Public Portal — Codex Guidance

Read `CODEX_START_HERE.md` and `docs/INDEX.md` before changing code. The repository is the public corporate portal for Avocado.ai. It is not the authenticated SenseL customer portal.

## Product intent

The site must present one platform and three primary market entries:

1. SenseL Managed Security for SMB.
2. SenseL Fab Intelligence for semiconductor EnMS and OT resilience.
3. SenseL Healthcare Resilience for threat-informed validation and security operations.

The leadership story is dual-founder: Rain Chung is Co-Founder & CEO; Eric Mao, Ph.D. is Co-Founder & CTO / Chief Architect. Treat all biographies, quotes, customer names, deployment numbers, and partner marks as claims that require explicit publication approval.

## How to work

- For a feature spanning multiple files, a significant refactor, or work likely to take more than thirty minutes, create or update an ExecPlan under `docs/plans/` and follow `PLANS.md`.
- Keep the current ExecPlan's `Progress`, `Surprises & Discoveries`, `Decision Log`, and `Outcomes & Retrospective` sections current.
- Do not stop after writing a plan when implementation is possible. Continue through the next observable milestone.
- Prefer small, reviewable commits and clear file names.

## Architecture constraints

- Use Next.js App Router, React, strict TypeScript, and Tailwind CSS.
- Prefer Server Components. Add `"use client"` only when browser state or event handling is necessary.
- The public site must not store customer telemetry, cases, credentials, reports, or tenant data.
- The future authenticated customer portal belongs in a separate application and security boundary, as described in `docs/architecture/ADR-001-public-site-boundary.md`.
- Keep content access behind `src/content/content.ts` so a CMS adapter can replace the initial repository content without rewriting page components.
- Maintain Traditional Chinese and English parity for every public page.

## Content and claims

- Never publish a named customer, logo, quote, financial number, SLA, endpoint count, CT count, certification, or partner relationship unless its entry in `docs/content/CLAIMS_LEDGER.md` is marked `Approved for public use`.
- Anonymous case studies must still identify engagement status accurately: production, paid deployment, paid PoC, validation engagement, design partner, proposal, or pipeline.
- Do not present a proposal or pipeline as a customer deployment.
- Do not invent founder history. Use approved copy from `docs/content/FOUNDER_PROFILE_APPROVAL.md`.
- Public copy should be outcome-led, evidence-driven, and free of generic hacker imagery or unsupported superlatives.

## Engineering quality gates

Before declaring a change complete, run:

    npm run verify:content
    npm run verify:routes
    npm run typecheck
    npm run lint
    npm run build

If dependencies cannot be installed in the current environment, run the repository-only verification scripts, inspect the changed files carefully, and record the limitation in the active ExecPlan.

## Accessibility and UX

- Preserve semantic heading order, keyboard navigation, visible focus, reduced-motion behavior, color contrast, and descriptive link labels.
- Every page must have one clear primary action.
- The first screen must explain what Avocado.ai is without requiring animation.
- Decorative visuals must be hidden from assistive technology.

## Security and privacy

- Never commit credentials, API tokens, customer data, or unpublished reports.
- Do not add a form backend without rate limiting, validation, abuse controls, privacy disclosure, and an approved data destination.
- Keep dependencies minimal and explain any new production dependency in the active ExecPlan.
- Preserve security headers in `next.config.ts`; changes require a documented reason.

## Code review rules

Flag any change that:

- leaks or implies confidential customer information;
- weakens locale parity, accessibility, or security headers;
- adds client-side JavaScript where a Server Component would work;
- hard-codes content in page components instead of the content layer;
- creates a broken internal link or an unimplemented call to action;
- mixes authenticated portal responsibilities into the public site.
