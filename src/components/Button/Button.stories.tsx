import type { Meta, StoryObj } from "@storybook/react";
import { AddLine, ArrowRightLine } from "@mingcute/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    intent: {
      control: "select",
      options: ["primary", "neutral", "success", "danger"],
    },
    variant: {
      control: "select",
      options: ["solid", "subtle", "outline", "ghost"],
    },
    size: { control: "select", options: ["xs", "sm", "md", "lg"] },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    fullWidth: { control: "boolean" },
    leftIcon: { table: { disable: true } },
    rightIcon: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: { children: "Button" },
};

export const AllIntents: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button intent="primary">Primary</Button>
      <Button intent="neutral">Neutral</Button>
      <Button intent="success">Success</Button>
      <Button intent="danger">Danger</Button>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button variant="solid">Solid</Button>
      <Button variant="subtle">Subtle</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
};

export const IntentMatrix: Story = {
  name: "Intent × Variant Matrix",
  render: () => (
    <div className="grid grid-cols-5 gap-3 items-center">
      <div />
      <p className="text-fg-secondary text-sm font-medium">Solid</p>
      <p className="text-fg-secondary text-sm font-medium">Subtle</p>
      <p className="text-fg-secondary text-sm font-medium">Outline</p>
      <p className="text-fg-secondary text-sm font-medium">Ghost</p>

      <p className="text-fg-secondary text-sm font-medium">Primary</p>
      <Button intent="primary" variant="solid">
        Button
      </Button>
      <Button intent="primary" variant="subtle">
        Button
      </Button>
      <Button intent="primary" variant="outline">
        Button
      </Button>
      <Button intent="primary" variant="ghost">
        Button
      </Button>

      <p className="text-fg-secondary text-sm font-medium">Neutral</p>
      <Button intent="neutral" variant="solid">
        Button
      </Button>
      <Button intent="neutral" variant="subtle">
        Button
      </Button>
      <Button intent="neutral" variant="outline">
        Button
      </Button>
      <Button intent="neutral" variant="ghost">
        Button
      </Button>

      <p className="text-fg-secondary text-sm font-medium">Success</p>
      <Button intent="success" variant="solid">
        Button
      </Button>
      <Button intent="success" variant="subtle">
        Button
      </Button>
      <Button intent="success" variant="outline">
        Button
      </Button>
      <Button intent="success" variant="ghost">
        Button
      </Button>

      <p className="text-fg-secondary text-sm font-medium">Danger</p>
      <Button intent="danger" variant="solid">
        Button
      </Button>
      <Button intent="danger" variant="subtle">
        Button
      </Button>
      <Button intent="danger" variant="outline">
        Button
      </Button>
      <Button intent="danger" variant="ghost">
        Button
      </Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button loading intent="primary">
        Primary
      </Button>
      <Button loading intent="neutral">
        Neutral
      </Button>
      <Button loading intent="success">
        Success
      </Button>
      <Button loading intent="danger">
        Danger
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button disabled variant="solid">
        Solid
      </Button>
      <Button disabled variant="subtle">
        Subtle
      </Button>
      <Button disabled variant="outline">
        Outline
      </Button>
      <Button disabled variant="ghost">
        Ghost
      </Button>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button leftIcon={<AddLine />}>Add item</Button>
      <Button variant="outline" intent="neutral" rightIcon={<ArrowRightLine />}>
        Next
      </Button>
      <Button leftIcon={<AddLine />} rightIcon={<ArrowRightLine />}>
        Both icons
      </Button>
    </div>
  ),
};

export const IconPaddingBalance: Story = {
  name: "Icon Padding Balance",
  render: () => (
    <div className="flex flex-col gap-4">
      <p className="text-fg-secondary text-sm">
        Icon-side padding matches vertical space for optical balance.
      </p>
      {(["xs", "sm", "md", "lg"] as const).map((size) => (
        <div key={size} className="flex items-center gap-3">
          <span className="text-fg-secondary text-xs w-6">{size}</span>
          <Button size={size}>No icon</Button>
          <Button size={size} leftIcon={<AddLine />}>
            Left
          </Button>
          <Button size={size} rightIcon={<ArrowRightLine />}>
            Right
          </Button>
          <Button size={size} leftIcon={<AddLine />} rightIcon={<ArrowRightLine />}>
            Both
          </Button>
        </div>
      ))}
    </div>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <div className="w-64">
      <Button fullWidth>Full width button</Button>
    </div>
  ),
};
