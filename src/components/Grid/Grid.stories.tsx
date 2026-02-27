import type { Meta, StoryObj } from "@storybook/react";
import { Grid } from "./Grid";

const meta: Meta<typeof Grid> = {
  title: "Layout/Grid",
  component: Grid,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Grid>;

const Cell = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4 bg-bg-surface border border-border-neutral-subtle rounded-md text-sm text-fg-primary text-center">
    {children}
  </div>
);

export const Default: Story = {
  render: () => (
    <Grid columns={3} gap={4}>
      <Cell>1</Cell>
      <Cell>2</Cell>
      <Cell>3</Cell>
      <Cell>4</Cell>
      <Cell>5</Cell>
      <Cell>6</Cell>
    </Grid>
  ),
};

export const AllColumnCounts: Story = {
  render: () => (
    <div className="space-y-6">
      {([1, 2, 3, 4, 6] as const).map((cols) => (
        <div key={cols}>
          <p className="text-sm text-fg-tertiary mb-2">columns={cols}</p>
          <Grid columns={cols} gap={2}>
            {Array.from({ length: cols * 2 }, (_, i) => (
              <Cell key={i}>{i + 1}</Cell>
            ))}
          </Grid>
        </div>
      ))}
    </div>
  ),
};

export const WithSeparateGaps: Story = {
  render: () => (
    <Grid columns={3} gapX={8} gapY={2}>
      {Array.from({ length: 9 }, (_, i) => (
        <Cell key={i}>{i + 1}</Cell>
      ))}
    </Grid>
  ),
};

export const WithAlignment: Story = {
  render: () => (
    <Grid columns={3} gap={4} alignItems="center" className="h-48">
      <Cell>Short</Cell>
      <div className="p-4 bg-bg-surface border border-border-neutral-subtle rounded-md text-sm text-fg-primary text-center h-24 flex items-center justify-center">
        Tall
      </div>
      <Cell>Short</Cell>
    </Grid>
  ),
};

export const ResponsiveOverride: Story = {
  render: () => (
    <Grid columns={1} gap={4} className="md:grid-cols-2 lg:grid-cols-4">
      <Cell>Responsive 1</Cell>
      <Cell>Responsive 2</Cell>
      <Cell>Responsive 3</Cell>
      <Cell>Responsive 4</Cell>
    </Grid>
  ),
};
