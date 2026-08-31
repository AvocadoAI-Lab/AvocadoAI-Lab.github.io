# Codex Execution Plans

An ExecPlan is a self-contained, living design and implementation document that lets a developer or coding agent complete a substantial change without relying on conversation history.

## When an ExecPlan is required

Use an ExecPlan for work that spans multiple files, introduces a new page family or integration, changes architecture, handles security-sensitive data, or is likely to take more than thirty minutes.

## Required sections

Every ExecPlan must contain:

1. `Purpose and user-visible outcome` — what a visitor or operator can do after the work.
2. `Context and boundaries` — repository paths, existing behavior, assumptions, and explicit non-goals.
3. `Progress` — a timestamped checklist that is updated at every stopping point.
4. `Surprises & Discoveries` — facts learned during implementation, with evidence.
5. `Decision Log` — each material choice, alternatives, and rationale.
6. `Implementation plan` — narrative milestones with exact files and intended behavior.
7. `Validation and acceptance` — commands to run and observable results.
8. `Rollback and recovery` — how to undo or safely retry changes.
9. `Outcomes & Retrospective` — what shipped, what remains, and lessons.

## Execution rules

- The plan must remain understandable to a person new to the repository.
- Define unfamiliar terms in plain language.
- Resolve reasonable ambiguity in the plan instead of delegating every choice to the reader.
- Describe acceptance as observable behavior, not merely internal code structure.
- Update the plan while implementing; do not treat it as a one-time proposal.
- When a milestone is complete, run the stated checks and record the result.
- If blocked by environment limitations, preserve working code, document the exact limitation, and continue with all checks that remain possible.
