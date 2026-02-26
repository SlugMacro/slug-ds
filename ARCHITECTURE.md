# Architecture

> System architecture, design decisions, and technical flows for the design system.

---

## System Overview

```
┌─────────────────────────────────────────────────────┐
│                  Design System                       │
│                                                     │
│  ┌───────────┐    ┌──────────────┐    ┌──────────┐ │
│  │  Tokens   │───▶│  Tailwind    │───▶│Components│ │
│  │ (source   │    │  Config      │    │ (consume  │ │
│  │  of truth)│    │ (maps tokens │    │  tokens   │ │
│  │           │    │  to classes) │    │  via tw)  │ │
│  └───────────┘    └──────────────┘    └──────────┘ │
│       │                                     │       │
│       ▼                                     ▼       │
│  ┌───────────┐                       ┌──────────┐  │
│  │   CSS     │                       │ Storybook│  │
│  │ Custom    │                       │ (visual  │  │
│  │ Properties│                       │  docs)   │  │
│  │ (theming) │                       └──────────┘  │
│  └───────────┘                                     │
└─────────────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────┐
│              Consumer Applications                   │
│                                                     │
│  import { Button, Card, Input } from "design-system"│
│  Wrap app in <ThemeProvider> for theming             │
└─────────────────────────────────────────────────────┘
```

---

## Token Flow

Tokens flow through the system in one direction. This is the most important architectural concept.

```
1. TypeScript constants (src/tokens/*.ts)
   │
   │  Single source of truth. All values defined here.
   │  Example: colors.ts → { "fg-primary": "#111827" }
   │
   ▼
2. Tailwind config (tailwind.config.ts)
   │
   │  Reads token files. Maps to Tailwind utility classes.
   │  Example: "fg-primary" → generates class `text-fg-primary`
   │
   ▼
3. CSS custom properties (src/tokens/theme.css)
   │
   │  Same tokens exported as CSS variables for theming.
   │  Example: :root { --color-fg-primary: #111827; }
   │  Dark theme overrides: [data-theme="dark"] { --color-fg-primary: #f9fafb; }
   │
   ▼
4. Components (src/components/*.tsx)
   │
   │  Use Tailwind classes that reference tokens.
   │  Example: className="text-fg-primary bg-bg-surface"
   │  These classes resolve to CSS custom properties under the hood.
   │
   ▼
5. Consumer apps
      │
      Import components. Set data-theme attribute to switch themes.
      Optionally override CSS custom properties for custom themes.
```

### Why this flow matters

- **Change a token** → Tailwind config + CSS variables update → all components update → all apps update
- **Add a theme** → Only add new CSS custom property values → zero component changes
- **Add a component** → Only uses existing tokens → zero token changes needed

---

## Theming Strategy

### How themes work

```css
/* Layer 1: Token definitions (light theme = default) */
:root {
  --color-fg-primary: #111827;
  --color-bg-base: #ffffff;
  --color-accent-primary: #7c3aed;
}

/* Layer 2: Theme overrides */
[data-theme="dark"] {
  --color-fg-primary: #f9fafb;
  --color-bg-base: #111827;
  --color-accent-primary: #a78bfa;
}

/* Layer 3: Custom brand themes (consumers can add their own) */
[data-theme="brand-x"] {
  --color-accent-primary: #e11d48;
}
```

### Theme switching

```tsx
// Simple: set attribute on html element
document.documentElement.setAttribute("data-theme", "dark");

// React: via ThemeProvider context (optional, for convenience)
<ThemeProvider theme="dark">
  <App />
</ThemeProvider>;
```

### Theme rules

- Components NEVER reference theme directly — they use tokens, tokens change per theme
- All themes must define ALL semantic tokens — no partial overrides that leave gaps
- Test every component in every theme before release

---

## Component Architecture

### Layers

```
Layer 1: Primitives (lowest level)
  │  Box, Text, Stack, Icon
  │  Polymorphic, no business logic, pure layout
  │
Layer 2: Base Components
  │  Button, Input, Badge, Avatar, Separator
  │  Single responsibility, fully accessible
  │
Layer 3: Composite Components
  │  Card, Dialog, Dropdown, Tooltip, Toast
  │  Composed from Layer 1 + 2, use Radix for behavior
  │
Layer 4: Patterns (highest level)
     Form, DataTable, CommandPalette
     Composed from Layer 1-3, opinionated layout
```

### Component internal structure

```
ButtonComponent
  │
  ├── Button.types.ts      → Props interface (public API contract)
  │
  ├── Button.variants.ts   → CVA config (visual variants)
  │     │
  │     └── Uses tokens via Tailwind classes
  │
  ├── Button.tsx            → Implementation
  │     │
  │     ├── forwardRef (always)
  │     ├── Destructure props + apply defaults
  │     ├── cn() to merge: base + variants + user className
  │     └── Render with correct HTML semantics + ARIA
  │
  ├── Button.test.tsx       → Tests
  │     │
  │     ├── Rendering (all variants)
  │     ├── Interaction (click, keyboard)
  │     └── Accessibility (axe audit)
  │
  ├── Button.stories.tsx    → Storybook
  │     │
  │     ├── Default
  │     ├── All variants
  │     ├── All states
  │     ├── Edge cases
  │     └── Theming (light + dark)
  │
  └── index.ts              → Public export
        │
        export { Button } from "./Button"
        export type { ButtonProps } from "./Button.types"
```

---

## Build Pipeline

```
Source (src/)
  │
  ├─▶ Vite library mode OR tsup
  │     │
  │     ├── Output ESM (import/export) → dist/index.mjs
  │     ├── Output CJS (require) → dist/index.cjs
  │     └── Output Types (.d.ts) → dist/index.d.ts
  │
  ├─▶ Tailwind CSS
  │     │
  │     └── Output compiled CSS → dist/styles.css
  │         (consumers import this file)
  │
  └─▶ Storybook build
        │
        └── Static site → storybook-static/
            (deploy to Chromatic or any static host)
```

### What gets shipped to npm

```
dist/
├── index.mjs         # ESM bundle (tree-shakeable)
├── index.cjs         # CJS bundle (backward compat)
├── index.d.ts        # TypeScript declarations
└── styles.css        # Compiled Tailwind CSS with all tokens
```

### What does NOT get shipped

- Storybook files
- Test files
- Source TypeScript (only compiled JS + declarations)
- Dev dependencies

---

## Folder Structure Rationale

| Folder            | Why it exists                                                                                                        |
| ----------------- | -------------------------------------------------------------------------------------------------------------------- |
| `src/tokens/`     | Centralized source of truth. Tokens change rarely, components change often — separation prevents accidental coupling |
| `src/components/` | Each component is self-contained folder with all related files. Easy to find, easy to delete, easy to move           |
| `src/hooks/`      | Shared logic extracted from components. If 2+ components need the same behavior, extract to a hook                   |
| `src/utils/`      | Pure utility functions (cn, mergeRefs, polymorphic type helpers). No React dependencies, easily testable             |
| `src/types/`      | Shared TypeScript types that don't belong to any specific component                                                  |
| `docs/`           | Human documentation. Not consumed by code, not shipped to npm                                                        |
| `tasks/`          | Claude Code working files. Plans, progress tracking, lessons learned                                                 |

---

## Key Architectural Decisions

See `docs/DECISIONS.md` for full ADRs. Summary:

| Decision            | Choice                           | Why                                                     |
| ------------------- | -------------------------------- | ------------------------------------------------------- |
| Variant management  | CVA                              | Zero runtime, type-safe, works with Tailwind natively   |
| Headless primitives | Radix UI                         | Best a11y out of box, unstyled, maintained by WorkOS    |
| Styling             | Tailwind + CSS custom properties | Utility-first for speed, custom properties for theming  |
| Build tool          | Vite library mode                | Fast, modern, good ESM support                          |
| Package manager     | pnpm                             | Strict deps, fast installs, disk efficient              |
| Testing             | Vitest + RTL + Axe               | Fast, Vite-native, covers behavior + a11y               |
| Versioning          | Changesets                       | Automates semver + changelogs, works well for libraries |
