# Test Plan

## Repository checks

`verify:content` validates locales, founder records, solution slugs, and absence of disallowed named-customer placeholders. `verify:routes` validates that configured internal paths have an implemented route or homepage anchor.

## Type and lint checks

Strict TypeScript and ESLint must pass. Next.js production build must complete without warnings that indicate broken routes, hydration problems, unsupported metadata, or missing environment configuration.

## Functional checks

Test both locales for navigation, solution pages, founder page, trust page, resources, contact action, root redirect, unknown locale 404, and unknown solution 404.

## Responsive checks

At 320px, 375px, 768px, 1024px, and 1440px, verify no horizontal overflow, readable type, reachable navigation, correct card stacking, and preserved CTA hierarchy.

## Accessibility checks

Use keyboard-only navigation, screen-reader landmarks, heading outline, focus visibility, contrast, reduced motion, descriptive links, and appropriate alternative text. Run automated checks with axe or equivalent after dependencies are available, followed by manual review.

## Performance checks

Measure representative homepage, solution, and founder pages. Optimize image dimensions, avoid unnecessary client components, minimize third-party scripts, and verify cache behavior. Establish budgets before production assets are added.

## Security checks

Review headers, dependency audit, secret scanning, form validation and rate limiting, third-party script origins, open redirects, unsafe HTML, and data leakage in logs or metadata. Confirm the public app has no customer API credentials or authenticated data routes.

## Content checks

Verify bilingual parity, role titles, claim strength, engagement status, dates, customer anonymity, CTA destinations, and legal wording. All rendered claims must be approved in the ledger.
