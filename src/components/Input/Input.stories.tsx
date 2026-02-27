import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    error: { control: "boolean" },
    disabled: { control: "boolean" },
    fullWidth: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Email",
    placeholder: "you@example.com",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-72">
      <Input label="Small" size="sm" placeholder="Small input" />
      <Input label="Medium" size="md" placeholder="Medium input" />
      <Input label="Large" size="lg" placeholder="Large input" />
    </div>
  ),
};

export const WithHelperText: Story = {
  args: {
    label: "Email",
    placeholder: "you@example.com",
    helperText: "We'll never share your email with anyone.",
  },
};

export const ErrorState: Story = {
  args: {
    label: "Email",
    placeholder: "you@example.com",
    error: true,
    errorMessage: "Please enter a valid email address.",
    defaultValue: "invalid-email",
  },
};

export const Disabled: Story = {
  args: {
    label: "Email",
    placeholder: "you@example.com",
    disabled: true,
    defaultValue: "disabled@example.com",
  },
};

export const WithAddons: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-96">
      <Input label="Website" leftAddon={<span>https://</span>} placeholder="example.com" />
      <Input label="Email" rightAddon={<span>@gmail.com</span>} placeholder="username" />
      <Input
        label="Price"
        leftAddon={<span>$</span>}
        rightAddon={<span>USD</span>}
        placeholder="0.00"
      />
    </div>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <div className="w-96">
      <Input label="Full width input" placeholder="Stretches to fill container" fullWidth />
    </div>
  ),
};
