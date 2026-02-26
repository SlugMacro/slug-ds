# Lessons Learned

> Claude Code reads this file at session start. After ANY correction from the user, add a new entry.
> Format: [Date] [Category] — What went wrong → What to do instead

---

## How to Use This File

1. **After every correction**: Add a new entry immediately
2. **Before every session**: Review all entries related to the current task
3. **Periodically**: Consolidate similar lessons into rules
4. **Never delete entries**: They're a learning record

---

## Categories

| Category     | Covers                                                |
| ------------ | ----------------------------------------------------- |
| `Tokens`     | Design token usage, naming, hardcoded values          |
| `Styling`    | Tailwind classes, CSS issues, theming                 |
| `Components` | Component architecture, props, patterns               |
| `A11y`       | Accessibility violations, ARIA, keyboard nav          |
| `Testing`    | Test failures, missing coverage, wrong approach       |
| `Build`      | Build errors, config issues, dependency problems      |
| `Git`        | Commit messages, branch management                    |
| `Process`    | Workflow violations, skipped steps, planning failures |
| `TypeScript` | Type errors, any usage, strict mode violations        |

---

## Entries

> No entries yet. Project is starting fresh.
> First entries will be added after the first user correction.

<!-- Example entry format:

### [2025-02-26] [Styling] — Used raw Tailwind color instead of semantic token
**What happened:** Used `text-gray-900` in Button component.
**User correction:** "Use `text-fg-primary` from our token system."
**Rule:** NEVER use raw Tailwind colors (gray-900, blue-500, etc.). Always use semantic token classes (fg-primary, bg-surface, border-default).

### [2025-02-26] [Components] — Forgot forwardRef on new component
**What happened:** Created Avatar component without forwardRef.
**User correction:** "All components need forwardRef."
**Rule:** EVERY component that renders a DOM element MUST use forwardRef. No exceptions. Check CONTRIBUTING.md Step 4.

### [2025-02-26] [A11y] — Missing aria-label on icon-only button
**What happened:** Created an IconButton without aria-label.
**User correction:** "Screen readers can't read this button."
**Rule:** Icon-only interactive elements ALWAYS need aria-label. Add to component props as required when no children text is provided.

### [2025-02-26] [Process] — Started coding without writing plan
**What happened:** Jumped straight into implementing Dialog component.
**User correction:** "Write the plan first in todo.md."
**Rule:** For ANY task with 3+ steps, write plan in tasks/todo.md FIRST. Get user approval. Then code.

-->
