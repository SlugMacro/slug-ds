# slug-ds

A production-grade React design system built with TypeScript and Tailwind CSS v4.

## Installation

```bash
pnpm add slug-ds
```

**Peer dependencies:** `react >= 18`, `react-dom >= 18`

## Usage

```tsx
import { Button, Input, Card } from "slug-ds";
import "slug-ds/styles.css";

function App() {
  return (
    <Card>
      <Card.Header>
        <h2>Sign In</h2>
      </Card.Header>
      <Card.Body>
        <Input label="Email" type="email" />
        <Input label="Password" type="password" />
        <Button intent="primary">Sign In</Button>
      </Card.Body>
    </Card>
  );
}
```

## Components

**Layout:** Box, Stack, Grid, Container, Separator

**Typography:** Text, Heading

**Forms:** Button, IconButton, Input, Textarea, Checkbox, Radio, Switch, Select, Label

**Feedback:** Alert, Badge, Spinner, Toast

**Overlays:** Dialog, DropdownMenu, Popover, Tooltip

**Data Display:** Accordion, Avatar, Card, Tabs

## Theming

slug-ds uses CSS custom properties for theming. Toggle dark mode by setting `data-theme="dark"` on a parent element.

```html
<div data-theme="dark">
  <!-- Components automatically use dark theme -->
</div>
```

## Documentation

- [Storybook](https://slugmacro.github.io/slug-ds/) — Interactive component explorer
- [Architecture](./ARCHITECTURE.md) — System design and token flow
- [Contributing](./CONTRIBUTING.md) — How to add and modify components

## License

[MIT](./LICENSE)
