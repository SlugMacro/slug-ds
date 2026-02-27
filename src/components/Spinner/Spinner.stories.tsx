import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./Spinner";

const meta: Meta<typeof Spinner> = {
  title: "Feedback/Spinner",
  component: Spinner,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      {(["xs", "sm", "md", "lg"] as const).map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <Spinner size={size} />
          <span className="text-xs text-fg-muted">{size}</span>
        </div>
      ))}
    </div>
  ),
};

export const CustomLabel: Story = {
  args: {
    label: "Saving changes...",
  },
};

export const WithColor: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner className="text-accent-primary" />
      <Spinner className="text-error" />
      <Spinner className="text-success" />
      <Spinner className="text-fg-muted" />
    </div>
  ),
};
