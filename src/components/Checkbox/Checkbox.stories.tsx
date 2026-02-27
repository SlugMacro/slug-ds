import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Form/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: { label: "Accept terms and conditions" },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      {(["sm", "md", "lg"] as const).map((size) => (
        <Checkbox key={size} size={size} label={`Size: ${size}`} />
      ))}
    </div>
  ),
};

export const Checked: Story = {
  args: { label: "Checked", defaultChecked: true },
};

export const Indeterminate: Story = {
  args: { label: "Indeterminate", checked: "indeterminate" },
};

export const Disabled: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox label="Disabled unchecked" disabled />
      <Checkbox label="Disabled checked" disabled defaultChecked />
    </div>
  ),
};

export const WithDescription: Story = {
  args: {
    label: "Marketing emails",
    description: "Receive emails about new products, features, and more.",
  },
};

export const ErrorState: Story = {
  args: {
    label: "I agree to the terms",
    error: true,
    errorMessage: "You must accept the terms to continue.",
  },
};

export const CheckboxGroup: Story = {
  render: () => (
    <fieldset className="space-y-3">
      <legend className="text-sm font-medium text-fg-primary mb-2">Notifications</legend>
      <Checkbox label="Email" description="Get notified by email" defaultChecked />
      <Checkbox label="SMS" description="Get notified by text message" />
      <Checkbox label="Push" description="Get push notifications" />
    </fieldset>
  ),
};
