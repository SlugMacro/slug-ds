import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Button } from "../Button";
import { Text } from "../Text";
import { Badge } from "../Badge";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["elevated", "outlined", "filled"],
    },
    padding: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <Card.Header>
        <Text variant="heading" size="lg">
          Card Title
        </Text>
      </Card.Header>
      <Card.Body>
        <Text color="secondary">This is the card body content. It can contain any elements.</Text>
      </Card.Body>
      <Card.Footer>
        <div className="flex justify-end gap-2">
          <Button intent="ghost" size="sm">
            Cancel
          </Button>
          <Button size="sm">Save</Button>
        </div>
      </Card.Footer>
    </Card>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4">
      {(["elevated", "outlined", "filled"] as const).map((variant) => (
        <Card key={variant} variant={variant} className="w-64">
          <Card.Header>
            <Text variant="heading" size="md">
              {variant}
            </Text>
          </Card.Header>
          <Card.Body>
            <Text color="secondary" size="sm">
              Card with {variant} variant
            </Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  ),
};

export const WithPadding: Story = {
  render: () => (
    <div className="flex gap-4">
      {(["none", "sm", "md", "lg"] as const).map((padding) => (
        <Card key={padding} variant="outlined" padding={padding} className="w-48">
          <Text size="sm">padding: {padding}</Text>
        </Card>
      ))}
    </div>
  ),
};

export const WithBadge: Story = {
  render: () => (
    <Card className="w-80">
      <Card.Header>
        <div className="flex items-center justify-between">
          <Text variant="heading" size="lg">
            Feature
          </Text>
          <Badge color="success">Active</Badge>
        </div>
      </Card.Header>
      <Card.Body>
        <Text color="secondary">Feature description goes here.</Text>
      </Card.Body>
    </Card>
  ),
};

export const SimpleWithPadding: Story = {
  render: () => (
    <Card variant="outlined" padding="md" className="w-80">
      <Text variant="heading" size="lg" className="mb-2">
        Simple Card
      </Text>
      <Text color="secondary">A card with padding and no sub-components.</Text>
    </Card>
  ),
};
