# Content Model and Publishing Workflow

## Content entities

### Site settings

Canonical domain, locales, contact channels, booking URL, customer portal URL, social profiles, legal links, and approved brand assets.

### Page

Slug, locale, title, description, navigation label, hero copy, sections, CTA, SEO image, publication state, owner, reviewers, and revision date.

### Solution

Stable slug, category, locale copy, audience, problem, capabilities, outcomes, delivery path, integrations, evidence references, CTA, and publication state.

### Person

Name, local-language name, role, approved short bio, approved long bio, leadership domains, photograph, social link, quote, quote approval, and publication state.

### Case study

Internal client identifier, public display name, anonymization level, engagement status, challenge, existing environment, SenseL role, deployment scope, measured outcomes, evidence references, customer approval status, approved logo, and publication state.

### Claim

Claim text, category, source document, data owner, measurement date, public wording, anonymization requirement, legal review, customer approval, expiration date, and publication state.

### Resource

Type, title, summary, body or file, author, date, locale, topic, related solution, approval state, and download lead-gating decision.

### Trust statement

Control area, public statement, implementation owner, evidence location, review date, legal/security approval, and public detail level.

## Publication states

Draft → Product review → Security/legal review → Customer review when applicable → Approved → Scheduled/Published → Expired/Archived.

No public component should query or render content in a state earlier than Approved.

## Locale parity

A content entity is publishable only when both Traditional Chinese and English versions pass review, unless a documented exception is approved. Translation must preserve claim strength; it must not turn a qualified statement into an absolute statement.

## Anonymous case rules

Anonymous case studies must still state engagement status accurately. `Proposal`, `Pipeline`, and `Expected contract` are not customer deployments. Quantitative results may be used only when the source, measurement window, calculation method, and public permission are recorded.
