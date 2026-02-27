import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "./Container";

const meta: Meta<typeof Container> = {
  title: "Layout/Container",
  component: Container,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Container>;

const Placeholder = () => (
  <div className="p-4 bg-bg-surface border border-border-default rounded-md text-sm text-fg-primary text-center">
    Container content
  </div>
);

export const Default: Story = {
  render: () => (
    <Container>
      <Placeholder />
    </Container>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-6">
      {(["sm", "md", "lg", "xl", "full"] as const).map((size) => (
        <div key={size}>
          <p className="text-sm text-fg-muted mb-2">size=&quot;{size}&quot;</p>
          <Container size={size} className="border border-dashed border-border-default">
            <Placeholder />
          </Container>
        </div>
      ))}
    </div>
  ),
};

export const WithoutPadding: Story = {
  render: () => (
    <Container padding={false} className="border border-dashed border-border-default">
      <Placeholder />
    </Container>
  ),
};

export const Nested: Story = {
  render: () => (
    <Container size="xl">
      <div className="space-y-4">
        <p className="text-sm text-fg-muted">Outer container (xl), inner container (sm)</p>
        <Container size="sm" className="border border-dashed border-border-default">
          <Placeholder />
        </Container>
      </div>
    </Container>
  ),
};
