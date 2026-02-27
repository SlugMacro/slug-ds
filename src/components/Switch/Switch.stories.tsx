import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";

const meta: Meta<typeof Switch> = {
  title: "Form/Switch",
  component: Switch,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: { label: "Airplane mode" },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      {(["sm", "md"] as const).map((size) => (
        <Switch key={size} size={size} label={`Size: ${size}`} />
      ))}
    </div>
  ),
};

export const WithDescription: Story = {
  args: {
    label: "Marketing emails",
    description: "Receive emails about new products and features.",
  },
};

export const Checked: Story = {
  args: { label: "Enabled", defaultChecked: true },
};

export const Disabled: Story = {
  render: () => (
    <div className="space-y-4">
      <Switch label="Disabled off" disabled />
      <Switch label="Disabled on" disabled defaultChecked />
    </div>
  ),
};
