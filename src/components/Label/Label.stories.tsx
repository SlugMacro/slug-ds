import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";

const meta: Meta<typeof Label> = {
  title: "Form/Label",
  component: Label,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: { children: "Email address" },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-2">
      {(["sm", "md", "lg"] as const).map((size) => (
        <div key={size}>
          <Label size={size}>Label ({size})</Label>
        </div>
      ))}
    </div>
  ),
};

export const Required: Story = {
  args: { children: "Email address", required: true },
};

export const Disabled: Story = {
  args: { children: "Disabled field", disabled: true },
};

export const WithInput: Story = {
  render: () => (
    <div className="space-y-1.5">
      <Label htmlFor="demo-input" required>
        Email address
      </Label>
      <input
        id="demo-input"
        type="email"
        placeholder="you@example.com"
        className="w-full px-3 py-2 text-sm border border-border-default rounded-lg bg-bg-base text-fg-primary"
      />
    </div>
  ),
};
