import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["body", "caption", "label", "heading"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
    },
    weight: {
      control: "select",
      options: ["normal", "medium", "semibold", "bold"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "muted", "accent", "error", "success"],
    },
    align: { control: "select", options: ["left", "center", "right"] },
    truncate: { control: "boolean" },
    as: { control: "select", options: ["span", "p", "h1", "h2", "h3", "label"] },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: { children: "The quick brown fox jumps over the lazy dog." },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      {(["xs", "sm", "md", "lg", "xl", "2xl"] as const).map((size) => (
        <Text key={size} size={size}>
          Size: {size} — The quick brown fox
        </Text>
      ))}
    </div>
  ),
};

export const AllWeights: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      {(["normal", "medium", "semibold", "bold"] as const).map((weight) => (
        <Text key={weight} weight={weight}>
          Weight: {weight} — The quick brown fox
        </Text>
      ))}
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      {(["primary", "secondary", "muted", "accent", "error", "success"] as const).map((color) => (
        <Text key={color} color={color}>
          Color: {color} — The quick brown fox
        </Text>
      ))}
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Text variant="heading" size="xl">
        Heading variant
      </Text>
      <Text variant="body">Body variant — default text style</Text>
      <Text variant="caption" size="sm" color="secondary">
        Caption variant — secondary information
      </Text>
      <Text variant="label" size="xs" color="muted">
        Label variant — form labels
      </Text>
    </div>
  ),
};

export const AsHeading: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Text as="h1" variant="heading" size="2xl">
        h1 — Page title
      </Text>
      <Text as="h2" variant="heading" size="xl">
        h2 — Section title
      </Text>
      <Text as="h3" variant="heading" size="lg">
        h3 — Subsection title
      </Text>
    </div>
  ),
};

export const Truncated: Story = {
  render: () => (
    <div className="w-48">
      <Text truncate>This is a very long text that should be truncated with an ellipsis</Text>
    </div>
  ),
};

export const Alignment: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-64">
      <Text align="left">Left aligned</Text>
      <Text align="center">Center aligned</Text>
      <Text align="right">Right aligned</Text>
    </div>
  ),
};
