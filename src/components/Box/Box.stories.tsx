import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "./Box";

const meta: Meta<typeof Box> = {
  title: "Layout/Box",
  component: Box,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
  render: () => (
    <Box className="p-4 bg-bg-surface border border-border-default rounded-lg">
      A basic Box rendering as a div
    </Box>
  ),
};

export const AsSection: Story = {
  render: () => (
    <Box as="section" className="p-6 bg-bg-surface rounded-lg">
      <h2 className="text-lg font-semibold text-fg-primary">Section heading</h2>
      <p className="text-sm text-fg-secondary mt-2">Box as a semantic section element.</p>
    </Box>
  ),
};

export const AsNav: Story = {
  render: () => (
    <Box as="nav" aria-label="Main navigation" className="flex gap-4 p-4 bg-bg-surface rounded-lg">
      <a href="#" className="text-fg-interactive hover:underline">
        Home
      </a>
      <a href="#" className="text-fg-secondary hover:underline">
        About
      </a>
      <a href="#" className="text-fg-secondary hover:underline">
        Contact
      </a>
    </Box>
  ),
};

export const WithTailwindClasses: Story = {
  render: () => (
    <Box className="flex items-center justify-between p-4 bg-bg-surface border border-border-default rounded-lg shadow-md">
      <span className="font-medium text-fg-primary">Styled with Tailwind</span>
      <span className="text-sm text-fg-tertiary">via className</span>
    </Box>
  ),
};
