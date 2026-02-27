# Task Plan

> Current project tasks. Claude Code reads this at session start to understand what's in progress.

---

## Phase 1: Project Foundation — COMPLETE

- [x] Initialize project (Vite + React + TypeScript, pnpm, ESLint + Prettier)
- [x] Setup Tailwind CSS v4 (via `@tailwindcss/vite` plugin)
- [x] Define design tokens (colors, spacing, typography, shadows, radii, breakpoints)
- [x] Setup core utilities (`cn`, `mergeRefs`, polymorphic types)
- [x] Setup Storybook (with dark theme decorator, a11y addon)
- [x] Setup testing (Vitest + React Testing Library + jest-axe)
- [x] Setup build pipeline (Vite library mode, ESM + CJS, Changesets)

---

## Phase 2: First Components — COMPLETE

- [x] Button (4 intents, 3 sizes, loading state)
- [x] Text (polymorphic `as` prop)
- [x] Badge (solid/subtle/outline, 5 colors)
- [x] Input (label, error, helper text)
- [x] Card (compound: Header, Body, Footer)

---

## Phase 3: Interactive Components — COMPLETE

- [x] Dialog (Radix, focus trap, overlay, close button)
- [x] DropdownMenu (Radix, keyboard nav, submenus)
- [x] Tooltip (Radix, with provider)
- [x] Toast (Sonner, `toast()` API)

---

## Phase 4: Layout + Form Primitives — COMPLETE

### Layout
- [x] Box (polymorphic container)
- [x] Stack (vertical/horizontal flex)
- [x] Grid (CSS grid wrapper)
- [x] Separator (horizontal/vertical divider)
- [x] Container (max-width wrapper)

### Form
- [x] Label (Radix)
- [x] Textarea (with label, error, helper text)
- [x] Checkbox (Radix)
- [x] Radio (Radix, RadioGroup + RadioItem)
- [x] Switch (Radix)
- [x] Select (Radix, dropdown with groups)
- [x] IconButton (icon-only button with aria-label)
- [x] Avatar (Radix, image + fallback)
- [x] Spinner (loading indicator)

---

## Phase 5: Extended Components — COMPLETE

- [x] Tabs (Radix, compound: List, Trigger, Content)
- [x] Accordion (Radix, single/multiple, collapsible)
- [x] Popover (Radix, placement, close button)
- [x] Heading (semantic h1-h6, level-to-size mapping)
- [x] Alert (compound: Title, Description, dismissible, 4 intents, 3 variants)

---

## Phase 6: Documentation & Release — COMPLETE

- [x] Write `docs/TOKENS.md` with full token reference
- [x] Write `docs/PATTERNS.md` with composition guides
- [x] First `pnpm changeset` + version bump to **0.1.0**
- [x] CHANGELOG.md auto-generated
- [ ] First npm publish (when ready)
- [ ] Setup Chromatic for visual regression (optional)

---

## Review Log

> Add review notes here after each major completion.

| Date       | Phase   | Notes                                                           |
| ---------- | ------- | --------------------------------------------------------------- |
| 2026-02-27 | 1-4     | Foundation + 24 components complete. 341 tests, all pass.       |
| 2026-02-27 | 5       | +5 components (Tabs, Accordion, Popover, Heading, Alert). 391 tests, all pass. Build verified. |
| 2026-02-27 | 6       | Docs (TOKENS.md, PATTERNS.md), CHANGELOG.md, version bump to 0.1.0. |
