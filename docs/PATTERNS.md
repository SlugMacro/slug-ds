# Component Patterns

> Composition guides and best practices for using slug-ds components.

---

## Installation

```bash
pnpm add slug-ds
```

```tsx
// Import components
import { Button, Input, Card } from "slug-ds";

// Import styles (required once at app root)
import "slug-ds/styles.css";
```

---

## Compound Components

Several components use the compound pattern for flexible composition.

### Card

```tsx
<Card>
  <Card.Header>
    <Heading level={3}>Card Title</Heading>
    <Text color="secondary">Card description</Text>
  </Card.Header>
  <Card.Body>
    <p>Card content goes here.</p>
  </Card.Body>
  <Card.Footer>
    <Button intent="ghost">Cancel</Button>
    <Button>Save</Button>
  </Card.Footer>
</Card>
```

### Dialog

```tsx
<Dialog>
  <Dialog.Trigger>
    <Button>Open Dialog</Button>
  </Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Header>
      <Dialog.Title>Edit Profile</Dialog.Title>
      <Dialog.Description>Update your information.</Dialog.Description>
    </Dialog.Header>
    <div className="px-6 py-4">
      <Input label="Name" fullWidth />
    </div>
    <Dialog.Footer>
      <Dialog.Close>
        <Button intent="ghost">Cancel</Button>
      </Dialog.Close>
      <Button>Save</Button>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog>
```

### Tabs

```tsx
<Tabs defaultValue="account">
  <Tabs.List>
    <Tabs.Trigger value="account">Account</Tabs.Trigger>
    <Tabs.Trigger value="password">Password</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="account">
    <Input label="Email" fullWidth />
  </Tabs.Content>
  <Tabs.Content value="password">
    <Input label="New password" type="password" fullWidth />
  </Tabs.Content>
</Tabs>
```

### Accordion

```tsx
<Accordion type="single" collapsible>
  <Accordion.Item value="faq-1">
    <Accordion.Trigger>What is slug-ds?</Accordion.Trigger>
    <Accordion.Content>A production-grade React design system.</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="faq-2">
    <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
    <Accordion.Content>Yes. All components meet WCAG 2.1 AA.</Accordion.Content>
  </Accordion.Item>
</Accordion>
```

### Alert

```tsx
<Alert intent="warning" onClose={() => setVisible(false)}>
  <Alert.Title>Session expiring</Alert.Title>
  <Alert.Description>Your session will expire in 5 minutes.</Alert.Description>
</Alert>
```

---

## Layout Composition

### Page Layout with Container + Stack

```tsx
<Container size="lg">
  <Stack gap={8} direction="vertical">
    <Heading level={1}>Dashboard</Heading>
    <Grid columns={3} gap={4}>
      <Card>
        <Card.Body>Metric 1</Card.Body>
      </Card>
      <Card>
        <Card.Body>Metric 2</Card.Body>
      </Card>
      <Card>
        <Card.Body>Metric 3</Card.Body>
      </Card>
    </Grid>
  </Stack>
</Container>
```

### Horizontal Layout with Stack

```tsx
<Stack direction="horizontal" gap={3} align="center">
  <Avatar src="/avatar.jpg" alt="User" size="sm" />
  <Stack gap={0.5}>
    <Text weight="medium">John Doe</Text>
    <Text size="sm" color="muted">
      john@example.com
    </Text>
  </Stack>
</Stack>
```

### Responsive Grid

```tsx
<Grid columns={1} gap={4} className="md:grid-cols-2 lg:grid-cols-3">
  {items.map((item) => (
    <Card key={item.id}>
      <Card.Body>{item.name}</Card.Body>
    </Card>
  ))}
</Grid>
```

---

## Form Patterns

### Basic Form

```tsx
<Stack gap={4}>
  <Input label="Full name" placeholder="Enter your name" fullWidth />
  <Input label="Email" type="email" placeholder="you@example.com" fullWidth />
  <Textarea label="Bio" placeholder="Tell us about yourself" fullWidth />
  <Stack direction="horizontal" gap={3}>
    <Button type="submit">Save</Button>
    <Button intent="ghost" type="button">
      Cancel
    </Button>
  </Stack>
</Stack>
```

### Form with Validation

```tsx
<Input label="Email" type="email" error="Please enter a valid email address" fullWidth />
```

### Checkbox and Radio Groups

```tsx
{
  /* Checkbox */
}
<Stack gap={2}>
  <Checkbox id="terms" label="Accept terms and conditions" />
  <Checkbox id="newsletter" label="Subscribe to newsletter" />
</Stack>;

{
  /* Radio */
}
<Radio type="single" defaultValue="option-1">
  <Radio.Item value="option-1" label="Option 1" />
  <Radio.Item value="option-2" label="Option 2" />
  <Radio.Item value="option-3" label="Option 3" />
</Radio>;
```

### Select Dropdown

```tsx
<Select>
  <Select.Trigger placeholder="Choose a fruit" />
  <Select.Content>
    <Select.Group>
      <Select.Label>Fruits</Select.Label>
      <Select.Item value="apple">Apple</Select.Item>
      <Select.Item value="banana">Banana</Select.Item>
      <Select.Item value="orange">Orange</Select.Item>
    </Select.Group>
  </Select.Content>
</Select>
```

---

## Feedback Patterns

### Loading State

```tsx
<Button disabled>
  <Spinner size="sm" />
  Loading...
</Button>
```

### Toast Notifications

```tsx
import { toast } from "slug-ds";

// Success
toast.success("Changes saved successfully");

// Error
toast.error("Something went wrong");

// Custom
toast("Custom notification", {
  description: "With a description",
});
```

### Tooltip

```tsx
import { Tooltip, TooltipProvider } from "slug-ds";

// Wrap your app once
<TooltipProvider>
  <App />
</TooltipProvider>

// Use anywhere
<Tooltip content="Edit this item">
  <IconButton aria-label="Edit" icon={<EditIcon />} />
</Tooltip>
```

### Popover

```tsx
<Popover>
  <Popover.Trigger>
    <Button intent="secondary">Filters</Button>
  </Popover.Trigger>
  <Popover.Content side="bottom" align="start">
    <Stack gap={3}>
      <Heading level={4}>Filters</Heading>
      <Input label="Search" fullWidth />
      <Popover.Close>
        <Button size="sm">Apply</Button>
      </Popover.Close>
    </Stack>
  </Popover.Content>
</Popover>
```

---

## Polymorphic Components

`Box`, `Stack`, `Grid`, `Container`, and `Text` accept an `as` prop to change the rendered element.

```tsx
// Render as <section>
<Box as="section" className="p-4">Section content</Box>

// Render as <nav>
<Stack as="nav" direction="horizontal" gap={4}>
  <a href="/">Home</a>
  <a href="/about">About</a>
</Stack>

// Render as <article>
<Container as="article" size="md">
  <Text as="p">Paragraph text</Text>
</Container>
```

---

## Theming in Components

### Dark Mode Toggle

```tsx
function ThemeToggle() {
  const [dark, setDark] = useState(false);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
  };

  return <Switch checked={dark} onCheckedChange={toggle} label="Dark mode" />;
}
```

### Scoped Theming

```tsx
{
  /* Light section */
}
<div data-theme="light">
  <Card>Light card</Card>
</div>;

{
  /* Dark section on same page */
}
<div data-theme="dark">
  <Card>Dark card</Card>
</div>;
```

---

## className Overrides

All components accept `className` for custom styling. Classes are merged using `cn()` (clsx + tailwind-merge), so Tailwind conflicts are resolved automatically.

```tsx
{
  /* Override padding */
}
<Card className="p-8">More padding</Card>;

{
  /* Override width */
}
<Button className="w-full">Full width button</Button>;

{
  /* Responsive overrides */
}
<Stack className="flex-col md:flex-row">Responsive direction</Stack>;
```

---

## Accessibility Checklist

Every component in slug-ds follows WCAG 2.1 AA. When composing:

- Ensure all `IconButton` has an `aria-label`
- Pair `Input` with `label` prop (auto-associates via `htmlFor`)
- Use `Dialog.Title` inside every `Dialog.Content`
- Wrap your app with `TooltipProvider` for tooltips to work
- Use semantic elements via `as` prop (`nav`, `section`, `article`, `main`)
- Test keyboard navigation: Tab, Enter, Space, Escape, Arrow keys
