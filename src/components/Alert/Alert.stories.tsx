import type { Meta, StoryObj } from "@storybook/react";
import { InformationLine } from "@mingcute/react";
import { Alert } from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    intent: { control: "select", options: ["info", "success", "warning", "error"] },
    variant: { control: "select", options: ["subtle", "solid", "outline"] },
    icon: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: () => (
    <Alert>
      <Alert.Title>Heads up!</Alert.Title>
      <Alert.Description>You can add components to your app using the CLI.</Alert.Description>
    </Alert>
  ),
};

export const AllIntents: Story = {
  render: () => (
    <div className="space-y-3">
      <Alert intent="info">
        <Alert.Title>Info</Alert.Title>
        <Alert.Description>This is an informational alert.</Alert.Description>
      </Alert>
      <Alert intent="success">
        <Alert.Title>Success</Alert.Title>
        <Alert.Description>Your changes have been saved.</Alert.Description>
      </Alert>
      <Alert intent="warning">
        <Alert.Title>Warning</Alert.Title>
        <Alert.Description>Your session is about to expire.</Alert.Description>
      </Alert>
      <Alert intent="error">
        <Alert.Title>Error</Alert.Title>
        <Alert.Description>Something went wrong. Please try again.</Alert.Description>
      </Alert>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-3">
      <Alert variant="subtle" intent="info">
        <Alert.Title>Subtle</Alert.Title>
        <Alert.Description>Subtle variant with light background.</Alert.Description>
      </Alert>
      <Alert variant="solid" intent="info">
        <Alert.Title>Solid</Alert.Title>
        <Alert.Description>Solid variant with filled background.</Alert.Description>
      </Alert>
      <Alert variant="outline" intent="info">
        <Alert.Title>Outline</Alert.Title>
        <Alert.Description>Outline variant with border only.</Alert.Description>
      </Alert>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Alert icon={<InformationLine className="h-4 w-4" />}>
      <Alert.Title>With Icon</Alert.Title>
      <Alert.Description>This alert has a custom icon.</Alert.Description>
    </Alert>
  ),
};

export const Dismissible: Story = {
  render: () => (
    <Alert intent="warning" onClose={() => console.log("dismissed")}>
      <Alert.Title>Dismissible</Alert.Title>
      <Alert.Description>Click the X to dismiss this alert.</Alert.Description>
    </Alert>
  ),
};
