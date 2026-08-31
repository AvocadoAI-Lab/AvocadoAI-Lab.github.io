# Product Requirements Document — Avocado.ai Public Portal V2

## Product objective

The portal must let an enterprise buyer, partner, journalist, candidate, or investor understand within ten seconds that Avocado.ai provides an AI-native security operations and validation platform, not a collection of unrelated consulting projects. Within three minutes, a visitor must be able to identify the relevant solution, understand the evidence model, assess leadership credibility, and select a next action.

## Primary audiences

The first audience is the buyer: SMB owners and IT leaders, hospital CIO/CISO and security teams, semiconductor fab operations and energy leaders, OT security teams, and enterprise security leaders. Secondary audiences are SI/MSSP/ERP/WAF partners, media, candidates, advisors, and investors.

## User jobs

A visitor must be able to answer:

- What is Avocado.ai and what category does it belong to?
- How does SenseL add value without replacing existing EDR, NDR, WAF, OT, or SIEM investments?
- Which solution applies to SMB, healthcare, or semiconductor fab needs?
- What evidence shows the team can operate in high-trust environments?
- Who are Rain Chung and Eric Mao, and why are they suited to build this company?
- How does Avocado.ai protect customer data and govern AI output?
- What is the most appropriate next step: explore, request an assessment, book a workshop, or access an existing customer portal?

## Positioning

Category: AI-Native Security Operations & Validation Platform.

Brand promise: From Signal to Evidence. From Evidence to Resilience.

The platform narrative is: collect, contextualize, reason, validate, preserve evidence, and improve.

## MVP scope

The MVP includes:

- bilingual Traditional Chinese and English public pages;
- homepage with platform, three solution entries, anonymous field proof, founder leadership, integrations, trust, resources, and CTA;
- platform overview;
- detailed pages for Managed Security, Fab Intelligence, and Healthcare Resilience;
- Founders & Leadership page featuring Rain Chung and Eric Mao;
- baseline Trust Center;
- resources index;
- contact/workshop page;
- SEO metadata, sitemap, robots, accessibility baseline, responsive design, and security headers;
- claims and content approval workflow documented in the repository.

The MVP excludes authenticated customer data, service tickets, report downloads, telemetry, tenant management, payment, partner deal registration, and production CRM processing.

## Functional requirements

1. The root route redirects to `/zh-Hant`.
2. Every public page has equivalent `zh-Hant` and `en` content.
3. Navigation works without client-side state.
4. Each solution page states audience, problem, capabilities, outcomes, delivery path, and primary CTA.
5. Founder copy is centrally managed and marked as draft until approved.
6. Anonymous field-proof narratives do not imply a stronger engagement status than evidence supports.
7. The site renders without founder photos; approved photography can be added without changing layout structure.
8. Contact actions are configured through environment variables and must not silently discard submissions.
9. Internal links are verifiable through repository scripts.
10. The site exposes no confidential customer information.

## Non-functional requirements

- WCAG 2.2 AA target.
- Mobile-first layout with no horizontal overflow at 320px.
- Static or server-rendered public content; minimal browser JavaScript.
- Lighthouse targets after approved assets are added: performance 90+, accessibility 95+, best practices 95+, SEO 95+ on representative pages.
- No high-severity dependency vulnerability at release.
- Public pages must remain deployable as a portable Node.js standalone application.

## Success metrics

Initial metrics should include qualified workshop requests, solution-page-to-contact conversion, case-study engagement, founder-page engagement, organic search entrances, partner-sourced leads, and time required to answer security review questions using the Trust Center.

## Launch acceptance

A stakeholder can open both locale homepages, correctly identify the company category, find all three primary solutions, identify Rain and Eric with approved titles, navigate to the Trust Center, and complete an approved contact action. All repository checks and production build pass, and the claims ledger contains no unresolved claim that is rendered publicly.
