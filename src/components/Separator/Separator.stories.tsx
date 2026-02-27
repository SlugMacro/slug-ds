import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "./Separator";

const meta: Meta<typeof Separator> = {
  title: "Layout/Separator",
  component: Separator,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Default: Story = {};

export const Horizontal: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-sm text-fg-primary">Above the separator</p>
      <Separator />
      <p className="text-sm text-fg-primary">Below the separator</p>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex items-center gap-4 h-8">
      <span className="text-sm text-fg-primary">Left</span>
      <Separator orientation="vertical" />
      <span className="text-sm text-fg-primary">Right</span>
    </div>
  ),
};

export const Decorative: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-sm text-fg-tertiary">
        Decorative separators use role=&quot;none&quot; and are hidden from screen readers.
      </p>
      <Separator decorative />
      <p className="text-sm text-fg-primary">Content below</p>
    </div>
  ),
};

export const InNavigation: Story = {
  render: () => (
    <nav className="flex items-center gap-3 text-sm text-fg-primary">
      <a href="#" className="hover:text-fg-secondary">
        Home
      </a>
      <Separator orientation="vertical" decorative className="h-4" />
      <a href="#" className="hover:text-fg-secondary">
        Products
      </a>
      <Separator orientation="vertical" decorative className="h-4" />
      <a href="#" className="hover:text-fg-secondary">
        About
      </a>
    </nav>
  ),
};
