import type { Meta, StoryObj } from "@storybook/react-vite";
import { shadows } from "../tokens/shadows";

const meta: Meta = {
  title: "Foundation/Shadows",
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

export const Elevation: Story = {
  name: "Elevation",
  render: () => (
    <div className="flex flex-col gap-8 w-full max-w-3xl">
      {Object.entries(shadows).map(([name, value]) => (
        <div key={name} className="flex flex-col gap-3">
          <div className="flex items-baseline gap-3">
            <span className="text-sm font-medium text-fg-primary">shadow-{name}</span>
            <span className="font-mono text-xs text-fg-tertiary bg-bg-elevated px-1.5 py-0.5 truncate max-w-md">
              {value}
            </span>
          </div>
          <div
            className="h-24 bg-bg-surface flex items-center justify-center"
            style={{ boxShadow: value }}
          >
            <span className="text-fg-secondary text-sm">{name}</span>
          </div>
        </div>
      ))}
    </div>
  ),
};
