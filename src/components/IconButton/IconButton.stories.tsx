import type { Meta, StoryObj } from "@storybook/react";
import { AddLine, DeleteLine } from "@mingcute/react";
import { IconButton } from "./IconButton";

const meta: Meta<typeof IconButton> = {
  title: "Components/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  argTypes: {
    icon: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: { icon: <AddLine />, "aria-label": "Add item" },
};

export const AllIntents: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      {(["primary", "neutral", "success", "danger"] as const).map((intent) => (
        <IconButton
          key={intent}
          intent={intent}
          icon={<AddLine />}
          aria-label={`Add (${intent})`}
        />
      ))}
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      {(["solid", "subtle", "outline", "ghost"] as const).map((variant) => (
        <IconButton
          key={variant}
          variant={variant}
          icon={<AddLine />}
          aria-label={`Add (${variant})`}
        />
      ))}
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      {(["xs", "sm", "md", "lg"] as const).map((size) => (
        <IconButton key={size} size={size} icon={<AddLine />} aria-label={`Add (${size})`} />
      ))}
    </div>
  ),
};

export const Loading: Story = {
  args: { icon: <AddLine />, "aria-label": "Add item", loading: true },
};

export const Disabled: Story = {
  args: { icon: <AddLine />, "aria-label": "Add item", disabled: true },
};

export const DangerAction: Story = {
  args: { icon: <DeleteLine />, "aria-label": "Delete item", intent: "danger" },
};
