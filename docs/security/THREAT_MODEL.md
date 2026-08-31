# Threat Model — Public Corporate Portal

## Assets

Brand trust, approved public content, founder identity, lead contact data, publishing credentials, deployment credentials, analytics integrity, and site availability.

## Trust boundaries

Browser to public application; application to CMS; application to CRM or booking service; application to analytics; deployment platform to source repository. The future customer portal is outside this application's boundary.

## Material threats and mitigations

### Unauthorized or misleading publication

A compromised CMS account or weak editorial process could publish false customer claims or altered founder information. Use least-privilege publishing, MFA, approval workflow, revision history, claim ownership, and rapid rollback.

### Cross-site scripting and unsafe embeds

User-controlled or rich CMS content could execute script. Avoid raw HTML, sanitize approved rich text, restrict embeds, encode output, and enforce CSP after origins are known.

### Form abuse and data leakage

Automated spam, oversized payloads, malicious links, or sensitive customer details could enter a lead form. Use server-side schema validation, size limits, rate limiting, bot controls, privacy notice, data minimization, and explicit warnings not to submit sensitive operational data.

### Dependency and build-chain compromise

Malicious or vulnerable packages could affect the site. Keep dependencies minimal, pin lockfiles, review changes, run audits and dependency updates, use protected branches, and scan artifacts.

### Secret exposure

Client bundles, logs, source maps, or repository history could expose credentials. Keep secrets server-side, prevent body logging, scan commits, rotate on suspicion, and separate environments.

### Availability and content defacement

Traffic spikes, platform incidents, DNS compromise, or deployment errors could take the site offline. Use managed DNS security, access control, rollback, uptime monitoring, backups/export, and a documented incident owner.

### Privacy-invasive analytics

Analytics could collect more visitor data than intended. Select minimal tooling, review consent requirements, avoid sensitive event properties, and document retention and processors.

## Explicit exclusion

The public application must not retrieve or display SenseL customer episodes, assets, evidence, reports, credentials, or tenant information. Any requirement to do so triggers design in the separate customer portal.
