import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./Heading";

const meta: Meta<typeof Heading> = {
  title: "Components/Heading",
  component: Heading,
  tags: ["autodocs"],
  argTypes: {
    level: { control: "select", options: [1, 2, 3, 4, 5, 6] },
    size: { control: "select", options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"] },
    weight: { control: "select", options: ["medium", "semibold", "bold"] },
    color: { control: "select", options: ["primary", "secondary", "muted", "accent"] },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: { children: "Heading" },
};

export const AllLevels: Story = {
  render: () => (
    <div className="space-y-3">
      <Heading level={1}>Heading Level 1</Heading>
      <Heading level={2}>Heading Level 2</Heading>
      <Heading level={3}>Heading Level 3</Heading>
      <Heading level={4}>Heading Level 4</Heading>
      <Heading level={5}>Heading Level 5</Heading>
      <Heading level={6}>Heading Level 6</Heading>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="space-y-3">
      <Heading level={3} color="primary">
        Primary
      </Heading>
      <Heading level={3} color="secondary">
        Secondary
      </Heading>
      <Heading level={3} color="muted">
        Muted
      </Heading>
      <Heading level={3} color="accent">
        Accent
      </Heading>
    </div>
  ),
};

export const CustomSize: Story = {
  args: {
    level: 4,
    size: "2xl",
    children: "H4 with 2xl size override",
  },
};

export const Truncated: Story = {
  render: () => (
    <div className="w-64">
      <Heading level={3} truncate>
        This is a very long heading that should be truncated with an ellipsis
      </Heading>
    </div>
  ),
};
