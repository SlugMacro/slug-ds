import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Form/Textarea",
  component: Textarea,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: { label: "Message", placeholder: "Type your message..." },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      {(["sm", "md", "lg"] as const).map((size) => (
        <Textarea key={size} size={size} label={`Size: ${size}`} placeholder="Type here..." />
      ))}
    </div>
  ),
};

export const WithHelperText: Story = {
  args: {
    label: "Bio",
    helperText: "Write a short bio about yourself.",
    placeholder: "Tell us about yourself...",
  },
};

export const ErrorState: Story = {
  args: {
    label: "Message",
    error: true,
    errorMessage: "This field is required.",
    defaultValue: "",
  },
};

export const Disabled: Story = {
  args: {
    label: "Message",
    disabled: true,
    defaultValue: "This textarea is disabled",
  },
};

export const ResizeOptions: Story = {
  render: () => (
    <div className="space-y-4">
      {(["none", "vertical", "horizontal", "both"] as const).map((resize) => (
        <Textarea
          key={resize}
          resize={resize}
          label={`resize="${resize}"`}
          placeholder="Try resizing..."
        />
      ))}
    </div>
  ),
};

export const FullWidth: Story = {
  args: {
    label: "Full width textarea",
    fullWidth: true,
    placeholder: "This takes the full width...",
  },
};
