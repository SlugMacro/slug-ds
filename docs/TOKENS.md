# Design Tokens

> Single source of truth for all visual decisions. Tokens are defined as TypeScript constants and mapped to Tailwind classes via CSS custom properties.

---

## Colors

All colors use semantic naming. Never use raw hex values or Tailwind palette colors directly.

### Foreground

| Token          | Tailwind Class      | Light     | Dark      | Usage                              |
| -------------- | ------------------- | --------- | --------- | ---------------------------------- |
| `fg.primary`   | `text-fg-primary`   | `#111827` | `#f9fafb` | Primary text, headings             |
| `fg.secondary` | `text-fg-secondary` | `#6b7280` | `#9ca3af` | Secondary text, descriptions       |
| `fg.muted`     | `text-fg-muted`     | `#9ca3af` | `#6b7280` | Placeholder text, disabled         |
| `fg.onAccent`  | `text-fg-on-accent` | `#ffffff` | `#ffffff` | Text on accent/colored backgrounds |

### Background

| Token             | Tailwind Class        | Light     | Dark      | Usage                            |
| ----------------- | --------------------- | --------- | --------- | -------------------------------- |
| `bg.base`         | `bg-bg-base`          | `#ffffff` | `#111827` | Page background                  |
| `bg.surface`      | `bg-bg-surface`       | `#f9fafb` | `#1f2937` | Cards, panels, elevated surfaces |
| `bg.surfaceHover` | `bg-bg-surface-hover` | `#f3f4f6` | `#374151` | Hover state for surfaces         |

### Border

| Token            | Tailwind Class          | Light     | Dark      | Usage                     |
| ---------------- | ----------------------- | --------- | --------- | ------------------------- |
| `border.default` | `border-border-default` | `#e5e7eb` | `#374151` | Default borders, dividers |

### Accent

| Token                 | Tailwind Class            | Light     | Dark      | Usage                          |
| --------------------- | ------------------------- | --------- | --------- | ------------------------------ |
| `accent.primary`      | `bg-accent-primary`       | `#7c3aed` | `#a78bfa` | Primary actions, focus rings   |
| `accent.primaryHover` | `bg-accent-primary-hover` | `#6d28d9` | `#8b5cf6` | Hover state for primary accent |

### Semantic

| Token     | Tailwind Class                | Light     | Dark      | Usage                             |
| --------- | ----------------------------- | --------- | --------- | --------------------------------- |
| `error`   | `text-error` / `bg-error`     | `#ef4444` | `#f87171` | Error states, destructive actions |
| `success` | `text-success` / `bg-success` | `#22c55e` | `#4ade80` | Success states, confirmations     |
| `warning` | `text-warning` / `bg-warning` | `#f59e0b` | `#fbbf24` | Warning states, cautions          |
| `info`    | `text-info` / `bg-info`       | `#3b82f6` | `#60a5fa` | Informational states              |

### Usage Examples

```tsx
// Text colors
<Text color="primary">Primary text</Text>
<Text color="secondary">Secondary text</Text>
<Text color="muted">Muted text</Text>

// Background colors
<Box className="bg-bg-surface">Surface panel</Box>

// Semantic colors
<Alert intent="error">Something went wrong</Alert>
<Badge color="success">Active</Badge>
```

---

## Spacing

4px base scale. Use Tailwind spacing utilities (`p-`, `m-`, `gap-`, `space-`).

| Scale | Value  | Pixels | Common Usage                |
| ----- | ------ | ------ | --------------------------- |
| `0`   | `0px`  | 0      | Reset spacing               |
| `0.5` | `2px`  | 2      | Micro adjustments           |
| `1`   | `4px`  | 4      | Tight spacing, icon gaps    |
| `1.5` | `6px`  | 6      | Small internal padding      |
| `2`   | `8px`  | 8      | Default small gap           |
| `3`   | `12px` | 12     | Input padding, list gaps    |
| `4`   | `16px` | 16     | Card padding, section gaps  |
| `5`   | `20px` | 20     | Medium spacing              |
| `6`   | `24px` | 24     | Large gaps between sections |
| `8`   | `32px` | 32     | Section padding             |
| `10`  | `40px` | 40     | Large section spacing       |
| `12`  | `48px` | 48     | Page section spacing        |
| `16`  | `64px` | 64     | Hero section spacing        |
| `20`  | `80px` | 80     | Extra large spacing         |
| `24`  | `96px` | 96     | Maximum spacing             |

### Usage Examples

```tsx
// Component spacing
<Stack gap={4}>          {/* 16px gap */}
<Stack gap={2}>          {/* 8px gap */}

// Tailwind classes
<div className="p-4">   {/* 16px padding */}
<div className="gap-6">  {/* 24px gap */}
```

---

## Typography

### Font Families

| Token  | Value                        | Tailwind    |
| ------ | ---------------------------- | ----------- |
| `sans` | Geist, system-ui, sans-serif | `font-sans` |
| `mono` | Geist Mono, monospace        | `font-mono` |

### Font Sizes

| Token  | Value      | Pixels | Tailwind    | Usage                   |
| ------ | ---------- | ------ | ----------- | ----------------------- |
| `xs`   | `0.75rem`  | 12px   | `text-xs`   | Captions, labels        |
| `sm`   | `0.875rem` | 14px   | `text-sm`   | Body small, form labels |
| `base` | `1rem`     | 16px   | `text-base` | Body text (default)     |
| `lg`   | `1.125rem` | 18px   | `text-lg`   | Large body, H5          |
| `xl`   | `1.25rem`  | 20px   | `text-xl`   | H4, subtitles           |
| `2xl`  | `1.5rem`   | 24px   | `text-2xl`  | H3                      |
| `3xl`  | `1.875rem` | 30px   | `text-3xl`  | H2, hero text           |
| `4xl`  | `2.25rem`  | 36px   | `text-4xl`  | H1, display             |
| `5xl`  | `3rem`     | 48px   | `text-5xl`  | Display large           |

### Font Weights

| Token      | Value | Tailwind        | Usage                 |
| ---------- | ----- | --------------- | --------------------- |
| `normal`   | 400   | `font-normal`   | Body text             |
| `medium`   | 500   | `font-medium`   | Labels, buttons       |
| `semibold` | 600   | `font-semibold` | Subheadings, emphasis |
| `bold`     | 700   | `font-bold`     | Headings              |

### Line Heights

| Token     | Value | Tailwind          |
| --------- | ----- | ----------------- |
| `none`    | 1     | `leading-none`    |
| `tight`   | 1.25  | `leading-tight`   |
| `snug`    | 1.375 | `leading-snug`    |
| `normal`  | 1.5   | `leading-normal`  |
| `relaxed` | 1.625 | `leading-relaxed` |
| `loose`   | 2     | `leading-loose`   |

### Usage Examples

```tsx
// Heading component (auto-maps level to size)
<Heading level={1}>H1 at 3xl</Heading>
<Heading level={2}>H2 at 2xl</Heading>
<Heading level={3} size="lg">H3 with size override</Heading>

// Text component
<Text size="sm" weight="medium">Small medium text</Text>
<Text variant="caption" color="muted">Caption text</Text>
```

---

## Shadows

| Token | Tailwind    | Usage                              |
| ----- | ----------- | ---------------------------------- |
| `sm`  | `shadow-sm` | Subtle elevation (inputs, buttons) |
| `md`  | `shadow-md` | Cards, dropdowns                   |
| `lg`  | `shadow-lg` | Popovers, tooltips                 |
| `xl`  | `shadow-xl` | Dialogs, modals                    |

Dark theme automatically adjusts shadow opacity for better visibility.

---

## Border Radius

| Token  | Value            | Tailwind       | Usage                  |
| ------ | ---------------- | -------------- | ---------------------- |
| `sm`   | `0.25rem` (4px)  | `rounded-sm`   | Badges, small elements |
| `md`   | `0.375rem` (6px) | `rounded-md`   | Buttons (sm), inputs   |
| `lg`   | `0.5rem` (8px)   | `rounded-lg`   | Buttons (md/lg), cards |
| `xl`   | `0.75rem` (12px) | `rounded-xl`   | Dialogs, popovers      |
| `full` | `9999px`         | `rounded-full` | Avatars, pills, badges |

---

## Breakpoints

| Token | Value    | Tailwind Prefix | Target                   |
| ----- | -------- | --------------- | ------------------------ |
| `sm`  | `640px`  | `sm:`           | Large phones (landscape) |
| `md`  | `768px`  | `md:`           | Tablets                  |
| `lg`  | `1024px` | `lg:`           | Small laptops            |
| `xl`  | `1280px` | `xl:`           | Desktops                 |
| `2xl` | `1536px` | `2xl:`          | Large desktops           |

---

## Theming

Themes work via CSS custom property overrides on `[data-theme]`.

### Switching Themes

```tsx
// Set theme on root element
document.documentElement.setAttribute("data-theme", "dark");

// Or via React
<div data-theme="dark">
  <App />
</div>;
```

### Adding Custom Themes

Override CSS custom properties:

```css
[data-theme="custom"] {
  --color-fg-primary: #1a1a2e;
  --color-bg-base: #eaeaea;
  --color-accent-primary: #e94560;
  /* ... override all tokens */
}
```

### Rules

- All color usage must go through CSS custom properties
- Components must never assume a specific theme
- Test all components in both light and dark modes
- New semantic tokens require discussion before adding
