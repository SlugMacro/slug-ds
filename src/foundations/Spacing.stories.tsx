import type { Meta, StoryObj } from "@storybook/react-vite";
import { spacing } from "../tokens/spacing";

const meta: Meta = {
  title: "Foundation/Spacing",
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

export const Scale: Story = {
  name: "Spacing Scale",
  render: () => (
    <div className="flex flex-col gap-0 w-full max-w-3xl">
      {Object.entries(spacing).map(([key, value]) => (
        <div
          key={key}
          className="flex items-center gap-4 border-b border-border-subtle py-3"
        >
          <span className="font-mono text-sm text-fg-secondary w-12 text-right shrink-0">
            {key}
          </span>
          <div
            className="h-4 bg-bg-primary shrink-0"
            style={{ width: value }}
          />
          <span className="font-mono text-xs text-fg-tertiary bg-bg-elevated px-1.5 py-0.5">
            {value}
          </span>
        </div>
      ))}
    </div>
  ),
};
