# Design System — Avocado.ai Portal V2

## Design personality

The interface should feel calm, technical, evidence-driven, and enterprise-ready. It should avoid generic hacker photography, glowing lock icons, Matrix-style decoration, and ornamental AI brains. Visual meaning should come from signal flow, episode timelines, evidence relationships, validation states, and real approved product or field imagery.

## Core color tokens

- Graphite `#101714`: primary dark surface and enterprise credibility.
- Deep Forest `#184B3C`: platform and trust emphasis.
- Avocado Green `#9BCB3C`: primary action and verified-success accent.
- Warm White `#F6F7F2`: primary light surface.
- Evidence Gray `#66716B`: metadata and secondary copy.
- Signal Amber `#D99A2B`: warning, gap, or pending-validation state.

Green must not be used as the only indication of success. Pair state color with text or an icon.

## Typography

Use a system-first sans-serif stack until approved web fonts and performance budgets are selected. Chinese and English hierarchy must be visually equivalent. Use a monospace stack only for event IDs, technical labels, and compact evidence metadata.

## Layout

Use a maximum content width around 1200px, generous section spacing, and a twelve-column desktop grid. On mobile, preserve the hierarchy of category, outcome, proof, and CTA; decorative diagrams may simplify but must not hide meaning.

## Component set

- Site header with locale switch and one primary CTA.
- Hero with semantic headline and nonessential platform visual.
- Proof bar with only approved claims.
- Problem card.
- Closed-loop step.
- Solution card.
- Field-proof card with engagement status.
- Founder card supporting photography or initials fallback.
- Integration chip.
- Trust-control card.
- Resource card.
- CTA panel.
- Footer with legal and security links.

## Founder presentation

Rain and Eric should be presented at equal visual weight. The composition should express complementary responsibility: market, strategy, customers, and ecosystem on Rain's side; architecture, AI security, validation, and product engineering on Eric's side. A central line can communicate `Market Need → SenseL Platform → Field Evidence`.

Approved photography should use consistent lighting, crop, tone, and formality. Generated portraits are not acceptable for official founder identity.

## Motion

Motion may clarify signal-to-evidence progression but must not be required to understand the page. Respect `prefers-reduced-motion`; avoid continuous particles and distracting loops.

## Accessibility

Maintain semantic headings, sufficient contrast, visible keyboard focus, 44px touch targets, descriptive links, form labels, reduced-motion handling, and meaningful reading order. Decorative visuals use `aria-hidden`.
