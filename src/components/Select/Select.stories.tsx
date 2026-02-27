import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Form/Select",
  component: Select,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => (
    <Select label="Fruit">
      <Select.Trigger>
        <span>Select a fruit</span>
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="banana">Banana</Select.Item>
        <Select.Item value="cherry">Cherry</Select.Item>
        <Select.Item value="grape">Grape</Select.Item>
      </Select.Content>
    </Select>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      {(["sm", "md"] as const).map((size) => (
        <Select key={size} label={`Size: ${size}`}>
          <Select.Trigger size={size}>
            <span>Select...</span>
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="a">Option A</Select.Item>
            <Select.Item value="b">Option B</Select.Item>
          </Select.Content>
        </Select>
      ))}
    </div>
  ),
};

export const WithHelperText: Story = {
  render: () => (
    <Select label="Country" helperText="Select your country of residence.">
      <Select.Trigger>
        <span>Select a country</span>
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="us">United States</Select.Item>
        <Select.Item value="uk">United Kingdom</Select.Item>
        <Select.Item value="vn">Vietnam</Select.Item>
      </Select.Content>
    </Select>
  ),
};

export const ErrorState: Story = {
  render: () => (
    <Select label="Country" error errorMessage="Please select a country.">
      <Select.Trigger error>
        <span>Select a country</span>
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="us">United States</Select.Item>
        <Select.Item value="uk">United Kingdom</Select.Item>
      </Select.Content>
    </Select>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Select label="Country" disabled>
      <Select.Trigger>
        <span>Select a country</span>
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="us">United States</Select.Item>
      </Select.Content>
    </Select>
  ),
};

export const WithGroups: Story = {
  render: () => (
    <Select label="Food">
      <Select.Trigger>
        <span>Select food</span>
      </Select.Trigger>
      <Select.Content>
        <Select.Group label="Fruits">
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="banana">Banana</Select.Item>
        </Select.Group>
        <Select.Separator />
        <Select.Group label="Vegetables">
          <Select.Item value="carrot">Carrot</Select.Item>
          <Select.Item value="broccoli">Broccoli</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <Select label="Country" fullWidth>
      <Select.Trigger fullWidth>
        <span>Select a country</span>
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="us">United States</Select.Item>
        <Select.Item value="uk">United Kingdom</Select.Item>
        <Select.Item value="vn">Vietnam</Select.Item>
      </Select.Content>
    </Select>
  ),
};
