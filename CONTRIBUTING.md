# Contributing

> Step-by-step guide for adding, modifying, and reviewing components in the design system.

---

## Adding a New Component

### Pre-flight Checklist

Before writing any code, answer these questions:

- [ ] Does this component already exist? (Check `src/components/`)
- [ ] Can this be composed from existing components instead of built from scratch?
- [ ] What layer does it belong to? (Primitive → Base → Composite → Pattern)
- [ ] Does it need a Radix UI primitive for accessibility? (Dialog, Popover, Tooltip, etc.)
- [ ] What variants does it need? (size, intent, state)
- [ ] What tokens does it consume? (Do all needed tokens exist?)

### Step 1: Create the folder structure

```bash
mkdir -p src/components/ComponentName
```

Create all 6 files:

```
src/components/ComponentName/
├── ComponentName.tsx           # Implementation
├── ComponentName.types.ts      # Props interface
├── ComponentName.variants.ts   # CVA variant definitions
├── ComponentName.stories.tsx   # Storybook stories
├── ComponentName.test.tsx      # Tests
└── index.ts                    # Public export
```

### Step 2: Define the props interface

```tsx
// ComponentName.types.ts
import { type VariantProps } from "class-variance-authority";
import { type componentVariants } from "./ComponentName.variants";

export interface ComponentNameProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof componentVariants> {
  /** Description of what this prop does */
  children: React.ReactNode;
}
```

Rules:

- Extend the correct HTML element attributes (`HTMLButtonElement`, `HTMLInputElement`, etc.)
- Include `VariantProps` from CVA for variant type safety
- JSDoc comment on every prop — this shows up in Storybook autodocs
- Optional props use `?`, required props don't

### Step 3: Define variants with CVA

```tsx
// ComponentName.variants.ts
import { cva } from "class-variance-authority";

export const componentVariants = cva(
  // Base classes (always applied)
  "base-classes-here",
  {
    variants: {
      intent: {
        /* ... */
      },
      size: {
        /* ... */
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
    },
  },
);
```

Rules:

- Only use semantic token classes (`text-fg-primary`, NOT `text-gray-900`)
- Include `defaultVariants` for every variant group
- Keep base classes minimal — only truly universal styles

### Step 4: Implement the component

```tsx
// ComponentName.tsx
import { forwardRef } from "react";
import { cn } from "@/utils/cn";
import { componentVariants } from "./ComponentName.variants";
import { type ComponentNameProps } from "./ComponentName.types";

export const ComponentName = forwardRef<HTMLDivElement, ComponentNameProps>(
  ({ className, intent, size, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(componentVariants({ intent, size }), className)} {...props}>
        {children}
      </div>
    );
  },
);

ComponentName.displayName = "ComponentName";
```

Rules:

- Always use `forwardRef`
- Always spread `...props` for consumer flexibility
- Always use `cn()` to merge variants + user `className`
- Always set `displayName` (helps React DevTools + error messages)
- User `className` must come LAST in `cn()` so it can override defaults

### Step 5: Write tests

```tsx
// ComponentName.test.tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { ComponentName } from "./ComponentName";

expect.extend(toHaveNoViolations);

describe("ComponentName", () => {
  describe("Rendering", () => {
    it("renders with default props", () => {
      render(<ComponentName>Content</ComponentName>);
      expect(screen.getByText("Content")).toBeInTheDocument();
    });

    it("renders all intent variants", () => {
      // Test each variant renders without error
    });

    it("renders all size variants", () => {
      // Test each variant renders without error
    });

    it("applies custom className", () => {
      render(<ComponentName className="custom-class">Content</ComponentName>);
      expect(screen.getByText("Content")).toHaveClass("custom-class");
    });

    it("forwards ref", () => {
      const ref = { current: null };
      render(<ComponentName ref={ref}>Content</ComponentName>);
      expect(ref.current).toBeInstanceOf(HTMLElement);
    });
  });

  describe("Interaction", () => {
    // Add interaction tests if component is interactive
  });

  describe("Accessibility", () => {
    it("has no a11y violations", async () => {
      const { container } = render(<ComponentName>Content</ComponentName>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
```

Minimum test requirements:

- [ ] Renders with default props
- [ ] Renders all variants
- [ ] Accepts custom className
- [ ] Forwards ref
- [ ] No a11y violations (axe)
- [ ] Keyboard accessible (if interactive)
- [ ] Edge cases (empty content, long text, missing optional props)

### Step 6: Write Storybook stories

```tsx
// ComponentName.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { ComponentName } from "./ComponentName";

const meta: Meta<typeof ComponentName> = {
  title: "Components/ComponentName",
  component: ComponentName,
  tags: ["autodocs"],
  argTypes: {
    intent: {
      control: "select",
      options: ["primary", "secondary", "ghost", "danger"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ComponentName>;

// Required stories
export const Default: Story = {
  args: { children: "ComponentName" },
};

export const AllVariants: Story = {
  render: () => (
    // Show all variants side by side
  ),
};

export const Disabled: Story = {
  args: { children: "Disabled", disabled: true },
};

export const DarkTheme: Story = {
  decorators: [
    (Story) => (
      <div data-theme="dark" className="bg-bg-base p-8">
        <Story />
      </div>
    ),
  ],
};
```

Required stories:

- [ ] Default (with args)
- [ ] All variants (visual grid)
- [ ] All states (disabled, loading, error, etc.)
- [ ] Edge cases (long text, empty, icon-only)
- [ ] Dark theme

### Step 7: Export from package

```tsx
// src/components/ComponentName/index.ts
export { ComponentName } from "./ComponentName";
export type { ComponentNameProps } from "./ComponentName.types";
```

Then add to the main entry point:

```tsx
// src/index.ts
export { ComponentName, type ComponentNameProps } from "./components/ComponentName";
```

### Step 8: Final checklist

Before considering the component done:

- [ ] All 6 files created and complete
- [ ] Props interface exported with JSDoc comments
- [ ] forwardRef implemented
- [ ] cn() used for className merging
- [ ] Only semantic token classes used (no raw colors)
- [ ] All tests passing
- [ ] Axe a11y test included and passing
- [ ] Keyboard navigation works (if interactive)
- [ ] All Storybook stories render correctly
- [ ] Light + dark theme verified in Storybook
- [ ] Exported from package index.ts
- [ ] No `any`, `@ts-ignore`, or TypeScript errors

---

## Modifying an Existing Component

### Adding a new variant

1. Add variant to `ComponentName.variants.ts`
2. Update `ComponentNameProps` if new prop needed
3. Add test for new variant
4. Add Storybook story for new variant
5. Run full test suite — check for regressions

### Changing the public API (props)

**This is a breaking change if:**

- Removing a prop
- Renaming a prop
- Changing a prop's type
- Changing default behavior

**This is NOT a breaking change:**

- Adding a new optional prop
- Adding a new variant option to existing prop

Breaking changes require:

1. Major version bump (via changeset)
2. Migration guide in CHANGELOG
3. User notification

---

## Commit Convention

Format: `type(scope): description`

| Type       | When                                                |
| ---------- | --------------------------------------------------- |
| `feat`     | New component, new variant, new feature             |
| `fix`      | Bug fix                                             |
| `refactor` | Code change that doesn't fix a bug or add a feature |
| `docs`     | Documentation only                                  |
| `test`     | Adding or fixing tests                              |
| `chore`    | Build, tooling, dependency updates                  |
| `style`    | Code formatting (no logic change)                   |

Examples:

```
feat(button): add icon-only variant with aria-label
fix(input): resolve focus ring not showing in Safari
refactor(tokens): reorganize color tokens by category
docs(contributing): add section about breaking changes
test(card): add compound component interaction tests
chore(deps): update @radix-ui/react-dialog to 1.1.0
```

---

## Code Review Checklist

When reviewing (or self-reviewing) a component:

### Functionality

- [ ] Component works as expected in Storybook
- [ ] All variants render correctly
- [ ] Interactive behavior works (click, hover, focus, keyboard)

### Code Quality

- [ ] No TypeScript errors or `any` types
- [ ] No hardcoded values — uses tokens
- [ ] Props are well-typed with JSDoc comments
- [ ] forwardRef implemented
- [ ] cn() used correctly (user className last)

### Accessibility

- [ ] Axe test passes
- [ ] Keyboard navigation works
- [ ] Screen reader experience verified
- [ ] Color contrast meets AA

### Testing

- [ ] All tests pass
- [ ] Edge cases covered
- [ ] No implementation detail tests

### Documentation

- [ ] Storybook stories complete (default, variants, states, edge cases, themes)
- [ ] Props have JSDoc comments
- [ ] Exported from package index

---

## Release Process

### Creating a Changeset

When your PR includes user-facing changes (new components, bug fixes, API changes):

1. Run `pnpm changeset`
2. Select the change type:
   - **patch** — Bug fixes, documentation updates
   - **minor** — New components, new variants, new features (non-breaking)
   - **major** — Breaking API changes (prop removals, renames, behavior changes)
3. Write a clear, consumer-facing summary of what changed
4. Commit the generated `.changeset/*.md` file with your PR

### Publishing a Release

1. Merge all PRs with changesets into `main`
2. Run `pnpm version-packages` — consumes changesets, bumps version, updates CHANGELOG
3. Review the generated changelog entry
4. Commit: `git commit -m "chore(release): v{version}"`
5. Tag: `git tag v{version}`
6. Push: `git push --follow-tags`
7. Run `pnpm release` — builds and publishes to npm

The `prepublishOnly` script automatically runs lint, typecheck, test, and build before any publish.

### CI/CD

- Every PR runs lint, typecheck, test, and build via GitHub Actions
- When a version tag (`v*`) is pushed, CI automatically publishes to npm using the `NPM_TOKEN` secret
