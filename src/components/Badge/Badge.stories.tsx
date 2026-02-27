import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["solid", "subtle", "outline"] },
    color: {
      control: "select",
      options: ["default", "accent", "success", "warning", "error"],
    },
    size: { control: "select", options: ["sm", "md"] },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: { children: "Badge" },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(["solid", "subtle", "outline"] as const).map((variant) => (
        <div key={variant} className="flex items-center gap-2">
          <span className="w-16 text-sm text-fg-secondary">{variant}</span>
          {(["default", "accent", "success", "warning", "error"] as const).map((color) => (
            <Badge key={color} variant={variant} color={color}>
              {color}
            </Badge>
          ))}
        </div>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
    </div>
  ),
};
