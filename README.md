# Avocado.ai Public Portal V2

A Codex-ready, bilingual public portal scaffold for Avocado.ai and the SenseL AI-native Security Operations & Validation Platform.

## Public site

The GitHub Pages site is available at [avocadoai-lab.github.io](https://avocadoai-lab.github.io/). Pushes to `main` run the repository checks and publish a fresh static export automatically.

## What is included

- Traditional Chinese and English routes.
- Homepage architecture covering platform, three primary solutions, field proof, founders, integrations, trust, resources, and conversion actions.
- Detailed platform, solution, founder, trust, resources, and contact pages.
- Repository-native content adapter designed for later CMS replacement.
- System design, PRD, design system, content model, claims governance, security boundary, roadmap, backlog, test plan, and Codex ExecPlan.
- CI and repository verification scripts.

## Local setup

Requirements: Node.js 20.9 or newer.

    cp .env.example .env.local
    npm install
    npm run dev

Open:

- `http://localhost:3000/zh-Hant`
- `http://localhost:3000/en`

## Quality checks

    npm run check
    npm run build

## Important publication controls

The site contains draft positioning and anonymous field-proof narratives. Before production launch, complete `docs/content/CLAIMS_LEDGER.md` and `docs/content/FOUNDER_PROFILE_APPROVAL.md`. Do not replace anonymous cases with client names or add quantitative claims without approval.

## Architecture boundary

This repository is the public corporate portal only. The authenticated SenseL customer portal must remain a separate application, identity boundary, deployment, and data plane. See `docs/architecture/ADR-001-public-site-boundary.md`.


## Scaffold validation note

Repository content and route checks were executed successfully when this package was generated. The artifact environment could not complete npm registry access, so run `npm install`, commit the resulting `package-lock.json`, then run `npm run check && npm run build` as the first Codex task.
