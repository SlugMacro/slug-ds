# Task Plan

> Current project tasks. Claude Code reads this at session start to understand what's in progress.

---

## Phase 1: Project Foundation

### 1.1 Initialize Project

- [ ] Create project with Vite + React + TypeScript template
- [ ] Configure `tsconfig.json` (strict mode, path aliases)
- [ ] Install and configure pnpm
- [ ] Setup `.gitignore`, `.editorconfig`, `.nvmrc`
- [ ] Configure ESLint + Prettier
- [ ] Create initial folder structure (`src/tokens/`, `src/components/`, `src/hooks/`, `src/utils/`, `src/types/`)

### 1.2 Setup Tailwind CSS v4

- [ ] Install Tailwind CSS v4
- [ ] Create `tailwind.config.ts` with design token mappings
- [ ] Configure content paths for purging
- [ ] Verify Tailwind classes work in a test component

### 1.3 Define Design Tokens

- [ ] Create `src/tokens/colors.ts` — semantic color tokens (fg, bg, border, accent, error, success)
- [ ] Create `src/tokens/spacing.ts` — 4px base scale
- [ ] Create `src/tokens/typography.ts` — font families, sizes, weights, line-heights
- [ ] Create `src/tokens/shadows.ts` — elevation levels
- [ ] Create `src/tokens/radii.ts` — border radius scale
- [ ] Create `src/tokens/breakpoints.ts` — responsive breakpoints
- [ ] Create `src/tokens/index.ts` — re-export all tokens
- [ ] Create `src/tokens/theme.css` — CSS custom properties for light + dark themes
- [ ] Wire tokens into `tailwind.config.ts`

### 1.4 Setup Core Utilities

- [ ] Create `src/utils/cn.ts` — clsx + tailwind-merge wrapper
- [ ] Create `src/utils/mergeRefs.ts` — ref merging utility
- [ ] Create polymorphic type helpers in `src/types/`

### 1.5 Setup Storybook

- [ ] Install Storybook for React + Vite
- [ ] Configure Storybook with Tailwind CSS
- [ ] Add dark theme decorator
- [ ] Add viewport addon for responsive testing
- [ ] Verify Storybook runs and shows a test story

### 1.6 Setup Testing

- [ ] Install Vitest + React Testing Library + jest-axe
- [ ] Configure `vitest.config.ts`
- [ ] Create test setup file (extend matchers)
- [ ] Verify a simple test runs and passes

### 1.7 Setup Build Pipeline

- [ ] Configure Vite library mode (or tsup)
- [ ] Output: ESM + CJS + TypeScript declarations
- [ ] Configure `package.json` exports field
- [ ] Verify build output is correct and importable
- [ ] Install and configure Changesets

---

## Phase 2: First Components

### 2.1 Button Component

- [ ] `Button.types.ts` — Props interface
- [ ] `Button.variants.ts` — CVA config (intent: primary/secondary/ghost/danger, size: sm/md/lg)
- [ ] `Button.tsx` — Implementation with forwardRef
- [ ] `Button.test.tsx` — Rendering + interaction + a11y tests
- [ ] `Button.stories.tsx` — Default, all variants, states, edge cases, themes
- [ ] Export from `src/index.ts`

### 2.2 Text Component (Polymorphic)

- [ ] `Text.types.ts` — Polymorphic props with `as` prop
- [ ] `Text.variants.ts` — CVA config (size, weight, color)
- [ ] `Text.tsx` — Implementation with polymorphic rendering
- [ ] `Text.test.tsx` — Tests including `as` prop behavior
- [ ] `Text.stories.tsx` — All variants + semantic elements
- [ ] Export from `src/index.ts`

### 2.3 Badge Component

- [ ] `Badge.types.ts`
- [ ] `Badge.variants.ts` — CVA config (intent, size)
- [ ] `Badge.tsx`
- [ ] `Badge.test.tsx`
- [ ] `Badge.stories.tsx`
- [ ] Export from `src/index.ts`

### 2.4 Input Component

- [ ] `Input.types.ts` — Props with label, error, helper text
- [ ] `Input.variants.ts` — CVA config (size, state)
- [ ] `Input.tsx` — Implementation with label association, error states
- [ ] `Input.test.tsx` — Including label-input association a11y test
- [ ] `Input.stories.tsx` — All states, with/without label, error states
- [ ] Export from `src/index.ts`

### 2.5 Card Component (Compound)

- [ ] `Card.types.ts` — Card, Card.Header, Card.Body, Card.Footer props
- [ ] `Card.variants.ts` — CVA config (variant, padding)
- [ ] `Card.tsx` — Compound component implementation
- [ ] `Card.test.tsx` — Compound component interaction tests
- [ ] `Card.stories.tsx` — Composition examples
- [ ] Export from `src/index.ts`

---

## Phase 3: Interactive Components (Radix-powered)

### 3.1 Dialog Component

- [ ] Install `@radix-ui/react-dialog`
- [ ] Implement with design tokens + focus trap
- [ ] Tests + stories

### 3.2 Dropdown Menu Component

- [ ] Install `@radix-ui/react-dropdown-menu`
- [ ] Implement with design tokens + keyboard navigation
- [ ] Tests + stories

### 3.3 Tooltip Component

- [ ] Install `@radix-ui/react-tooltip`
- [ ] Implement with design tokens
- [ ] Tests + stories

### 3.4 Toast/Notification Component

- [ ] Install `@radix-ui/react-toast`
- [ ] Implement with aria-live regions
- [ ] Tests + stories

---

## Phase 4: Layout Primitives

- [ ] Box (polymorphic container)
- [ ] Stack (vertical/horizontal flex layout)
- [ ] Grid (CSS grid wrapper)
- [ ] Separator / Divider
- [ ] Container (max-width wrapper)

---

## Phase 5: Documentation & Release

- [ ] Complete all Storybook stories
- [ ] Write `docs/TOKENS.md` with visual examples
- [ ] Write `docs/PATTERNS.md` with composition guides
- [ ] First `pnpm changeset` + version bump
- [ ] First npm publish (or private registry)
- [ ] Setup Chromatic for visual regression (optional)

---

## Review Log

> Add review notes here after each major completion.

| Date | Phase | Notes                   |
| ---- | ----- | ----------------------- |
| —    | —     | Project not yet started |
