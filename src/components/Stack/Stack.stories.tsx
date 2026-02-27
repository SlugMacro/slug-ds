import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "./Stack";

const meta: Meta<typeof Stack> = {
  title: "Layout/Stack",
  component: Stack,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Stack>;

const Item = ({ children }: { children: React.ReactNode }) => (
  <div className="px-4 py-2 bg-bg-surface border border-border-default rounded-md text-sm text-fg-primary">
    {children}
  </div>
);

export const Default: Story = {
  render: () => (
    <Stack gap={4}>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </Stack>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <Stack direction="row" gap={4}>
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </Stack>
  ),
};

export const WithAlignment: Story = {
  render: () => (
    <Stack direction="row" gap={4} align="center" justify="between" className="w-full">
      <Item>Start</Item>
      <Item>Center aligned, space between</Item>
      <Item>End</Item>
    </Stack>
  ),
};

export const Wrapped: Story = {
  render: () => (
    <Stack direction="row" gap={3} wrap className="max-w-xs">
      {Array.from({ length: 8 }, (_, i) => (
        <Item key={i}>Tag {i + 1}</Item>
      ))}
    </Stack>
  ),
};

export const AsNav: Story = {
  render: () => (
    <Stack as="nav" aria-label="Sidebar" gap={1}>
      <a
        href="#"
        className="px-3 py-2 rounded-md bg-bg-neutral-muted-hover text-fg-primary text-sm"
      >
        Dashboard
      </a>
      <a
        href="#"
        className="px-3 py-2 rounded-md text-fg-secondary text-sm hover:bg-bg-neutral-muted-hover"
      >
        Settings
      </a>
      <a
        href="#"
        className="px-3 py-2 rounded-md text-fg-secondary text-sm hover:bg-bg-neutral-muted-hover"
      >
        Profile
      </a>
    </Stack>
  ),
};
