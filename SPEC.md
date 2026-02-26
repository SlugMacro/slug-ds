# Product Specification

> Defines what this design system is, who it's for, and where the boundaries are.
> Claude Code reads this to make product decisions without asking.

---

## Vision

A production-grade, open-source React design system that any team can adopt to build consistent, accessible, and themeable UIs across multiple products — from startup MVPs to enterprise dashboards.

---

## Target Users

| User                              | What they need                                                    | How they use it                                       |
| --------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------- |
| **Frontend developers** (primary) | Import components, customize via props + themes, build pages fast | `import { Button, Card, Dialog } from "package-name"` |
| **Full-stack developers**         | Drop-in UI without learning CSS, just works                       | Copy Storybook examples, tweak props, ship            |
| **Open-source community**         | Free, well-documented, accessible component library               | Install via npm, read docs, contribute PRs            |
| **Designers** (secondary)         | Visual reference of all components and tokens                     | Browse Storybook, use Figma library (future)          |

### NOT for

- Non-React projects (no Vue, Svelte, Angular support)
- Designers who need a Figma-first workflow (code-first approach)
- Teams that need a full app framework (this is UI only, no routing/state/data fetching)

---

## Scope

### In Scope ✅

| Area              | Details                                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------------------- |
| **UI Components** | Buttons, inputs, cards, dialogs, dropdowns, tooltips, toasts, tables, badges, avatars, tabs, accordions, etc. |
| **Design Tokens** | Colors (semantic), spacing, typography, shadows, radii, breakpoints — all themeable                           |
| **Theming**       | Light/dark built-in + custom theme support via CSS custom properties                                          |
| **Accessibility** | WCAG 2.1 AA compliance on every component                                                                     |
| **Responsive**    | Mobile-first approach, all components work from 320px to 2560px+                                              |
| **TypeScript**    | Full type safety, exported types for all props                                                                |
| **Documentation** | Storybook with autodocs, usage examples, variant showcases                                                    |
| **npm Package**   | Published to npm, semver versioned, tree-shakeable                                                            |

### Out of Scope ❌

| Area                    | Why                                                                      |
| ----------------------- | ------------------------------------------------------------------------ |
| **App-level logic**     | No routing, no state management, no data fetching — this is a UI library |
| **Backend/API**         | No server components, no API calls, no database                          |
| **Figma library**       | Future nice-to-have, not MVP. Code is source of truth                    |
| **Other frameworks**    | React only. No Vue/Svelte/Angular wrappers                               |
| **Email templates**     | Different rendering engine, different constraints                        |
| **Native mobile**       | React (web) only. No React Native (future consideration)                 |
| **Full page templates** | Components and layouts, not complete page designs                        |
| **CMS integration**     | No content management, no WYSIWYG editors                                |

### Nice to Have (Post-MVP) 🟡

| Area                      | Priority | Notes                                                                                                                                                                                              |
| ------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Animation / Motion**    | Medium   | Framer Motion or CSS animations. Enter/exit transitions for Dialog, Toast, Dropdown. Micro-interactions for Button, Switch, Checkbox. Will define a motion token system (duration, easing curves). |
| **Figma library**         | Low      | Mirror components from code to Figma for designers                                                                                                                                                 |
| **Dark mode auto-detect** | Medium   | `prefers-color-scheme` media query support                                                                                                                                                         |
| **RTL support**           | Low      | `dir="rtl"` with logical CSS properties (`margin-inline-start` etc.)                                                                                                                               |
| **CSS-only mode**         | Low      | Export just the CSS + class names for non-React projects                                                                                                                                           |
| **React Native**          | Low      | Shared tokens, platform-specific components                                                                                                                                                        |

---

## Design Principles

These guide every decision when building components:

### 1. Accessible by Default

Components are accessible out of the box. Developers should NOT need to add ARIA attributes manually for basic usage. If a component can't be made accessible, it doesn't ship.

### 2. Composable over Configurable

Prefer small, composable pieces over mega-components with 50 props.

```tsx
// ✅ Composable — user has full control
<Card>
  <Card.Header>
    <Text as="h3">Title</Text>
    <Badge intent="success">Active</Badge>
  </Card.Header>
  <Card.Body>Content here</Card.Body>
</Card>

// ❌ Mega-component — rigid, hard to customize
<Card
  title="Title"
  badge="Active"
  badgeColor="success"
  bodyContent="Content here"
/>
```

### 3. Progressively Disclosed Complexity

Simple use cases should be simple. Advanced use cases should be possible.

```tsx
// Simple — works with zero config
<Button>Click me</Button>

// Advanced — full control when needed
<Button
  as="a"
  href="/dashboard"
  intent="secondary"
  size="lg"
  className="custom-override"
  ref={buttonRef}
>
  <Icon name="arrow-right" />
  Go to Dashboard
</Button>
```

### 4. Mobile-First

All components are designed mobile-first:

- Touch targets: minimum 44x44px on mobile
- No hover-only interactions — everything works on touch
- Responsive by default — components adapt to container width
- Test at 320px minimum viewport width

### 5. Themeable Without Forking

Consumers customize via tokens, not by forking components:

```css
/* Consumer overrides — no need to touch component source */
[data-theme="brand"] {
  --color-accent-primary: #e11d48;
  --color-accent-primary-hover: #be123c;
  --radius-md: 4px;
}
```

### 6. Predictable

Components behave the same everywhere:

- No global CSS side effects
- No implicit dependencies between components
- Same props → same output, always
- No internal state that surprises consumers

---

## Browser Support

| Browser          | Version         | Priority         |
| ---------------- | --------------- | ---------------- |
| Chrome           | Last 2 versions | Primary          |
| Firefox          | Last 2 versions | Primary          |
| Safari           | Last 2 versions | Primary          |
| Edge             | Last 2 versions | Primary          |
| Samsung Internet | Last 2 versions | Secondary        |
| iOS Safari       | Last 2 versions | Primary (mobile) |
| Chrome Android   | Last 2 versions | Primary (mobile) |

### Not Supported

- Internet Explorer (any version)
- Opera Mini
- Browsers without CSS custom properties support

### CSS Features We Rely On

- CSS Custom Properties (variables)
- Flexbox
- CSS Grid
- `focus-visible` pseudo-class
- `prefers-color-scheme` media query (for auto dark mode, post-MVP)
- Container queries (future, when browser support is sufficient)

---

## Responsive Breakpoints

Mobile-first approach. Breakpoints match Tailwind defaults:

| Name  | Min-width | Target                       |
| ----- | --------- | ---------------------------- |
| `xs`  | 0px       | Small phones (320px+)        |
| `sm`  | 640px     | Large phones / small tablets |
| `md`  | 768px     | Tablets                      |
| `lg`  | 1024px    | Laptops                      |
| `xl`  | 1280px    | Desktops                     |
| `2xl` | 1536px    | Large desktops               |

Rules:

- Base styles = mobile (no prefix)
- Add complexity with `sm:`, `md:`, `lg:` prefixes
- Components must not break at ANY width between 320px and 2560px
- Test: resize browser slowly from 320px to 1920px — no layout jumps or overflow

---

## Component Roadmap

### MVP (Phase 1-2) — Ship First

**Primitives:**
Box, Text, Stack, Grid, Separator

**Base Components:**
Button, IconButton, Input, Textarea, Select, Checkbox, Radio, Switch, Label, Badge, Avatar, Spinner

**Composite Components:**
Card (compound), Dialog/Modal, Dropdown Menu, Tooltip

**Feedback:**
Toast/Notification

### Post-MVP (Phase 3-4) — Grow

**Navigation:**
Tabs, Breadcrumb, Pagination, Sidebar, Navbar

**Data Display:**
Table, DataTable (sortable/filterable), Accordion, Collapsible

**Overlay:**
Popover, Command Palette, Sheet (slide-in panel)

**Form:**
Form wrapper, FormField, DatePicker, Combobox/Autocomplete

### Future

**Motion system** — enter/exit transitions, micro-interactions, motion tokens
**Chart primitives** — wrapper around Recharts or similar
**Rich text** — basic rich text display component (not editor)

---

## Performance Budget

| Metric                       | Target                                               |
| ---------------------------- | ---------------------------------------------------- |
| Full bundle (all components) | < 50KB gzipped                                       |
| Single component (Button)    | < 2KB gzipped                                        |
| CSS (all tokens + themes)    | < 10KB gzipped                                       |
| Tree-shaking                 | Import 1 component = ship only that component's code |
| First paint impact           | < 5ms per component render                           |
| No runtime CSS               | Zero CSS-in-JS runtime overhead                      |

### How we stay within budget

- CVA = zero runtime (just string concat)
- Tailwind = compile-time CSS, tree-shaken
- Radix = only import primitives you use
- Named exports = bundler knows exactly what to include
- No lodash, no moment, no heavy dependencies

---

## Package Distribution

### npm Package

```json
{
  "name": "package-name-tbd",
  "main": "./dist/index.cjs",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.cjs",
      "types": "./dist/index.d.ts"
    },
    "./styles.css": "./dist/styles.css"
  },
  "peerDependencies": {
    "react": ">=18",
    "react-dom": ">=18"
  },
  "sideEffects": ["*.css"]
}
```

### Consumer Setup

```tsx
// 1. Install
pnpm add package-name-tbd

// 2. Import CSS (once, in app root)
import "package-name-tbd/styles.css";

// 3. Use components
import { Button, Card, Dialog } from "package-name-tbd";

// 4. (Optional) Custom theme
// Add CSS custom property overrides in your app's CSS
```

---

## Quality Gates

A component is NOT shippable unless ALL of these pass:

| Gate              | Requirement                                              |
| ----------------- | -------------------------------------------------------- |
| **TypeScript**    | Zero errors in strict mode, no `any`                     |
| **Tests**         | All passing, including axe a11y audit                    |
| **Storybook**     | All stories render correctly in light + dark theme       |
| **Responsive**    | Works from 320px to 2560px without breaking              |
| **Keyboard**      | Fully navigable via keyboard (Tab, Enter, Space, Escape) |
| **Screen reader** | Tested with VoiceOver (Mac) or NVDA (Windows)            |
| **Contrast**      | Meets WCAG AA (4.5:1 normal text, 3:1 large text)        |
| **Bundle size**   | Under component budget, tree-shakeable                   |
| **Documentation** | Props have JSDoc comments, Storybook autodocs work       |
| **Peer review**   | Self-reviewed against CONTRIBUTING.md checklist          |
