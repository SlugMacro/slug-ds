import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "./Radio";

const meta: Meta<typeof Radio> = {
  title: "Form/Radio",
  component: Radio,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  render: () => (
    <Radio label="Select a plan" defaultValue="free">
      <Radio.Item value="free" label="Free" />
      <Radio.Item value="pro" label="Pro" />
      <Radio.Item value="enterprise" label="Enterprise" />
    </Radio>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <Radio label="Size" orientation="horizontal" defaultValue="md">
      <Radio.Item value="sm" label="Small" />
      <Radio.Item value="md" label="Medium" />
      <Radio.Item value="lg" label="Large" />
    </Radio>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-6">
      {(["sm", "md", "lg"] as const).map((size) => (
        <Radio key={size} label={`Size: ${size}`} defaultValue="a">
          <Radio.Item value="a" label="Option A" size={size} />
          <Radio.Item value="b" label="Option B" size={size} />
        </Radio>
      ))}
    </div>
  ),
};

export const WithDescriptions: Story = {
  render: () => (
    <Radio label="Notification preference" defaultValue="email">
      <Radio.Item value="email" label="Email" description="Get notified via email" />
      <Radio.Item value="sms" label="SMS" description="Get notified via text message" />
      <Radio.Item value="push" label="Push" description="Get push notifications on your device" />
    </Radio>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Radio label="Plan" defaultValue="free" disabled>
      <Radio.Item value="free" label="Free" />
      <Radio.Item value="pro" label="Pro" />
    </Radio>
  ),
};

export const ErrorState: Story = {
  render: () => (
    <Radio label="Select a plan" error errorMessage="Please select a plan to continue.">
      <Radio.Item value="free" label="Free" />
      <Radio.Item value="pro" label="Pro" />
    </Radio>
  ),
};
