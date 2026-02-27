import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
        <Accordion.Content>
          Yes. It adheres to the WAI-ARIA design pattern for accordions.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Is it styled?</Accordion.Trigger>
        <Accordion.Content>
          Yes. It ships with default styles that match the design system&apos;s look and feel.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>Is it animated?</Accordion.Trigger>
        <Accordion.Content>
          Yes. It uses CSS animations for smooth open and close transitions.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple">
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Can I open multiple items?</Accordion.Trigger>
        <Accordion.Content>
          Yes. When the type is set to &quot;multiple&quot;, you can expand several items at once.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>How does it differ from single mode?</Accordion.Trigger>
        <Accordion.Content>
          In single mode, opening one item automatically closes the previously opened item. In
          multiple mode, each item toggles independently.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>When should I use multiple mode?</Accordion.Trigger>
        <Accordion.Content>
          Use multiple mode when users may need to reference content from several sections at the
          same time, such as comparing features or reading related topics.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  ),
};

export const DefaultOpen: Story = {
  render: () => (
    <Accordion type="single" collapsible defaultValue="item-2">
      <Accordion.Item value="item-1">
        <Accordion.Trigger>First section</Accordion.Trigger>
        <Accordion.Content>Content for the first section.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Second section (open by default)</Accordion.Trigger>
        <Accordion.Content>
          This section is expanded by default using the defaultValue prop.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>Third section</Accordion.Trigger>
        <Accordion.Content>Content for the third section.</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  ),
};
