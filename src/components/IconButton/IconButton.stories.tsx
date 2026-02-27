import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./IconButton";

const meta: Meta<typeof IconButton> = {
  title: "Components/IconButton",
  component: IconButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof IconButton>;

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

const TrashIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M3 6h18M8 6V4h8v2M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6" />
  </svg>
);

export const Default: Story = {
  args: { icon: <PlusIcon />, "aria-label": "Add item" },
};

export const AllIntents: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      {(["primary", "secondary", "ghost", "danger"] as const).map((intent) => (
        <IconButton
          key={intent}
          intent={intent}
          icon={<PlusIcon />}
          aria-label={`Add (${intent})`}
        />
      ))}
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      {(["sm", "md", "lg"] as const).map((size) => (
        <IconButton key={size} size={size} icon={<PlusIcon />} aria-label={`Add (${size})`} />
      ))}
    </div>
  ),
};

export const Loading: Story = {
  args: { icon: <PlusIcon />, "aria-label": "Add item", loading: true },
};

export const Disabled: Story = {
  args: { icon: <PlusIcon />, "aria-label": "Add item", disabled: true },
};

export const DangerAction: Story = {
  args: { icon: <TrashIcon />, "aria-label": "Delete item", intent: "danger" },
};
