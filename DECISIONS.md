# Architecture Decision Records

> Record of key technical decisions, the context behind them, and alternatives considered.
> Format: Status → Context → Decision → Alternatives → Consequences

---

## ADR-001: Tailwind CSS + CSS Custom Properties for Styling

**Status:** Accepted
**Date:** 2025-02-26

### Context

We need a styling approach that supports:

- Rapid component development
- Theming (light/dark + custom brand themes)
- Tree-shaking (only ship CSS that's used)
- Consistency across all components
- Low learning curve for new contributors

### Decision

Use **Tailwind CSS v4** for utility classes combined with **CSS custom properties** for design tokens and theming.

Tailwind classes reference CSS custom properties under the hood:

```
Token (TS) → CSS variable (--color-fg-primary) → Tailwind class (text-fg-primary)
```

### Alternatives Considered

| Option                      | Pros                                   | Cons                                                 | Why rejected                            |
| --------------------------- | -------------------------------------- | ---------------------------------------------------- | --------------------------------------- |
| CSS Modules                 | Scoped by default, no naming conflicts | No utility classes, slower dev, manual theming       | Too slow for rapid iteration            |
| styled-components           | Popular, dynamic styles                | Runtime overhead, bundle size, SSR complexity        | Runtime cost unacceptable for a library |
| Vanilla Extract             | Zero runtime, type-safe                | Complex setup, steep learning curve, small ecosystem | Too niche, hard to hire for             |
| Tailwind only (no CSS vars) | Simple                                 | No runtime theming, hard to do dark mode cleanly     | Theming is a hard requirement           |

### Consequences

- Positive: Fast development, automatic tree-shaking, theming via CSS variables
- Positive: Consumers can customize themes without touching component code
- Negative: Team must learn Tailwind + semantic token naming
- Negative: Must enforce "no raw colors" rule via linting or code review

---

## ADR-002: CVA for Variant Management

**Status:** Accepted
**Date:** 2025-02-26

### Context

Components need multiple visual variants (size, intent, state). We need a structured way to manage these without writing brittle conditional className logic.

### Decision

Use **class-variance-authority (CVA)** to define variant configurations.

```tsx
const buttonVariants = cva("base-classes", {
  variants: {
    intent: { primary: "...", secondary: "..." },
    size: { sm: "...", md: "...", lg: "..." },
  },
  defaultVariants: { intent: "primary", size: "md" },
});
```

### Alternatives Considered

| Option                 | Pros                               | Cons                                             | Why rejected                                |
| ---------------------- | ---------------------------------- | ------------------------------------------------ | ------------------------------------------- |
| Manual ternary chains  | No dependency                      | Unreadable at scale, error-prone, no type safety | Becomes unmaintainable with 3+ variant axes |
| Stitches               | Built-in variants, nice API        | Runtime CSS-in-JS, project deprecated            | Dead project, runtime cost                  |
| Tailwind variants (tv) | Similar to CVA, slightly nicer API | Newer, smaller community, less battle-tested     | CVA is more established and widely adopted  |

### Consequences

- Positive: Clean, declarative variant definitions
- Positive: Full TypeScript inference on variant props
- Positive: Zero runtime — just string concatenation
- Negative: Extra dependency (~2KB gzipped, acceptable)

---

## ADR-003: Radix UI for Headless Primitives

**Status:** Accepted
**Date:** 2025-02-26

### Context

Complex components (Dialog, Dropdown, Tooltip, Popover, Tabs, etc.) require significant accessibility work: focus trapping, keyboard navigation, ARIA attributes, portal rendering, animations. Building these from scratch is error-prone and time-consuming.

### Decision

Use **@radix-ui** headless primitives for complex interactive components. Style them with our Tailwind + token system.

### Alternatives Considered

| Option                      | Pros                        | Cons                                           | Why rejected                                         |
| --------------------------- | --------------------------- | ---------------------------------------------- | ---------------------------------------------------- |
| Build from scratch          | Full control, no deps       | Months of a11y work, easy to miss edge cases   | Not feasible with current resources                  |
| Headless UI (Tailwind Labs) | Made for Tailwind           | Smaller component set, less active development | Missing components we need                           |
| Ariakit                     | Good a11y, flexible         | Smaller community, fewer resources             | Less battle-tested than Radix                        |
| React Aria (Adobe)          | Excellent a11y, hooks-based | Complex API, steep learning curve, verbose     | Too much boilerplate for component development speed |

### Consequences

- Positive: Excellent accessibility out of the box
- Positive: Well-maintained by WorkOS team
- Positive: Unstyled — doesn't conflict with our design tokens
- Negative: Adds bundle size per primitive used
- Negative: Must learn Radix API conventions

---

## ADR-004: Vitest over Jest for Testing

**Status:** Accepted
**Date:** 2025-02-26

### Context

We need a test runner that works well with our Vite-based build setup and supports TypeScript, JSX, and modern ES modules natively.

### Decision

Use **Vitest** as the primary test runner, paired with **React Testing Library** for component tests and **jest-axe** for accessibility audits.

### Alternatives Considered

| Option                       | Pros                         | Cons                                                       | Why rejected                          |
| ---------------------------- | ---------------------------- | ---------------------------------------------------------- | ------------------------------------- |
| Jest                         | Most popular, huge ecosystem | Slow with ESM, needs babel/ts-jest transform, config heavy | Vitest is faster and Vite-native      |
| Playwright Component Testing | Real browser, visual         | Slower, heavier setup, overkill for unit tests             | Better suited for E2E, not unit tests |

### Consequences

- Positive: Near-instant startup, shared Vite config
- Positive: Jest-compatible API (easy migration if needed)
- Positive: Native ESM + TypeScript support
- Negative: Smaller ecosystem than Jest (but growing fast)

---

## ADR-005: pnpm over npm/yarn

**Status:** Accepted
**Date:** 2025-02-26

### Context

Need a reliable, fast package manager that prevents dependency issues common in library development.

### Decision

Use **pnpm** exclusively. No npm or yarn.

### Why pnpm specifically

- **Strict dependency resolution**: Can't accidentally import a package that's not in your `package.json`. This catches missing peer dependency issues early.
- **Disk efficient**: Uses content-addressable store + symlinks. Saves significant disk space in monorepo setups.
- **Fast**: Parallel installations, cached aggressively.
- **Workspace support**: If we ever expand to a monorepo (docs site, example apps), pnpm workspaces are ready.

### Consequences

- Positive: Catches undeclared dependency usage immediately
- Positive: Faster CI installs
- Negative: Some developers need to install pnpm (minor friction)
- Negative: Some npm scripts or guides assume npm — must adapt

---

## ADR-006: Changesets for Versioning

**Status:** Accepted
**Date:** 2025-02-26

### Context

As a published npm package, we need disciplined semantic versioning and clear changelogs for consumers.

### Decision

Use **Changesets** to manage versioning and changelog generation.

### How it works

1. Developer creates a changeset: `pnpm changeset`
2. Selects bump type: major (breaking), minor (feature), patch (fix)
3. Writes description of the change
4. On release: changesets are consumed → version bumped → CHANGELOG.md updated

### Alternatives Considered

| Option            | Pros                                 | Cons                                     | Why rejected                                       |
| ----------------- | ------------------------------------ | ---------------------------------------- | -------------------------------------------------- |
| Manual versioning | Simple                               | Human error, forgotten changelog updates | Not scalable                                       |
| semantic-release  | Fully automated from commit messages | Less control, harder to customize        | Too opinionated, changeset descriptions are better |
| Lerna             | Monorepo focused                     | Overkill for single package, complex     | We're not a monorepo (yet)                         |

### Consequences

- Positive: Enforced versioning discipline
- Positive: Auto-generated, accurate CHANGELOG
- Positive: PR-based workflow (changeset lives with the PR)
- Negative: Extra step per PR (minor friction)

---

## ADR-007: Named Exports Only

**Status:** Accepted
**Date:** 2025-02-26

### Context

Need to decide on export strategy for the package.

### Decision

**Named exports only.** Default exports are banned.

```tsx
// ✅ Correct
export { Button } from "./Button";
import { Button } from "design-system";

// ❌ Banned
export default Button;
import Button from "design-system/Button";
```

### Why

- **Tree-shaking**: Bundlers can statically analyze named exports better
- **Refactoring safety**: Renaming is tracked across the codebase
- **IDE support**: Better autocomplete, auto-import, and go-to-definition
- **Consistency**: One way to do it, no debates about when to use default vs named
- **Re-export friendly**: `export { Button } from "./Button"` works cleanly

### Consequences

- Positive: Better DX for consumers
- Positive: Smaller bundles via tree-shaking
- Negative: Slightly more verbose exports (negligible)

---

## Template for New Decisions

```markdown
## ADR-XXX: [Title]

**Status:** Proposed | Accepted | Deprecated | Superseded by ADR-XXX
**Date:** YYYY-MM-DD

### Context

[What is the issue? Why do we need to make a decision?]

### Decision

[What did we decide?]

### Alternatives Considered

[What other options were evaluated?]

### Consequences

[What are the positive and negative outcomes?]
```
