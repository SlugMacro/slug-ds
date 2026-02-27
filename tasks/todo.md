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

## Phase 7a: npm Publish Setup — COMPLETE

- [x] Verify + update `package.json` fields (xoá private, thêm license, author, repository, homepage, bugs, keywords, prepublishOnly, packageManager)
- [x] Verify build output (ESM + CJS + types)
- [x] Create LICENSE (MIT)
- [x] Create README.md
- [x] Dry run: `pnpm pack --dry-run` — output verified
- [x] Document publish flow trong `CONTRIBUTING.md`

---

## Phase 7b: CI/CD Pipeline (GitHub Actions) — COMPLETE

- [x] CI workflow: lint + typecheck + test + build on PR/push to main
- [x] Release workflow: auto publish on `v*` tag push
- [ ] Manual: Add `NPM_TOKEN` secret to GitHub repo settings

---

## Phase 7c: Sync Design Tokens từ Figma — COMPLETE

- [x] Nhận Figma file từ user (5 variable collections exported as JSON)
- [x] Đọc Figma variables (token-ui, color, typography, size-core, size-mode)
- [x] Map Figma variable names → code token names
- [x] Cập nhật `src/tokens/` cho khớp Figma values (colors, typography, radii, layout)
- [x] Cập nhật CSS custom properties (light + dark themes — 100+ tokens)
- [x] Update all 29 component variants to use new token names
- [x] Verify: build + tests pass (391 tests, all pass)

---

## Phase 7d: Sync Components từ Figma — IN PROGRESS

- [x] Link component (tạo mới từ Figma design)
- [x] Button icon padding balance (icon-side padding = vertical space)
- [x] IconButton icon-only sizing (bump 1 tier per Figma IconSlot spec)
- [ ] So sánh remaining components với Figma design
- [ ] Update variants/styles cho khớp Figma
- [ ] Verify: build + tests + visual check

---

## Phase 8: Storybook Theming & Foundation Pages — COMPLETE

### Storybook Theming

- [x] Geist font-feature-settings (ss01–ss09) globally
- [x] Storybook manager: Geist fonts + font features for sidebar/toolbar
- [x] Sidebar component icon → mingcute ComponentsLine
- [x] Unified border color: `rgba(135, 135, 135, 0.25)` across all UI
- [x] Border-radius: 0 everywhere (sharp corners)
- [x] Kill Nunito Sans — force DS fonts (Geist/Geist Mono) in docs
- [x] Kill letter-spacing in sidebar + docs headings
- [x] Elevated bg on mono/code elements for visual distinction

### Foundation Pages

- [x] Typography (type scale, font weights, font families)
- [x] Colors (foreground, background, border, primary palette)
- [x] Spacing (4px base scale with visual bars)
- [x] Shadows (sm, md, lg, xl elevation)
- [x] Radii (none → full border-radius scale)
- [x] Layout (control heights, containers, icon sizes, avatar sizes)

---

## Review Log

> Add review notes here after each major completion.

| Date       | Phase | Notes                                                                                                                                                                                                                                                                                   |
| ---------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2026-02-27 | 1-4   | Foundation + 24 components complete. 341 tests, all pass.                                                                                                                                                                                                                               |
| 2026-02-27 | 5     | +5 components (Tabs, Accordion, Popover, Heading, Alert). 391 tests, all pass. Build verified.                                                                                                                                                                                          |
| 2026-02-27 | 6     | Docs (TOKENS.md, PATTERNS.md), CHANGELOG.md, version bump to 0.1.0.                                                                                                                                                                                                                     |
| 2026-02-27 | 7a-7b | npm publish setup (package.json, LICENSE, README.md, CONTRIBUTING.md). CI/CD workflows (ci.yml, release.yml). All verified: 391 tests pass, build clean, pack dry-run OK.                                                                                                               |
| 2026-02-27 | 7c    | Figma token sync complete. Primary color: purple→green (#9AD81A). 100+ CSS custom properties (light+dark). New tokens: radii (10 values), typography (9xl, 9 weights, letter-spacing), layout (control heights, containers, icons, avatars). All 29 components updated. 391 tests pass. |
| 2026-02-27 | 7d    | Link component, Button icon padding balance, IconButton icon-only sizing from Figma specs. 408 tests pass.                                                                                                                                                                             |
| 2026-02-27 | 8     | Storybook fully themed (Geist fonts, DS borders, custom icons, elevated code bg). 6 foundation pages: Typography, Colors, Spacing, Shadows, Radii, Layout.                                                                                                                             |
