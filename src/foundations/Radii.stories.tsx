import type { Meta, StoryObj } from "@storybook/react-vite";
import { radii } from "../tokens/radii";

const meta: Meta = {
  title: "Foundation/Radii",
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

export const Scale: Story = {
  name: "Border Radius",
  render: () => (
    <div className="grid grid-cols-5 gap-6 w-full max-w-3xl">
      {Object.entries(radii).map(([name, value]) => (
        <div key={name} className="flex flex-col items-center gap-3">
          <div
            className="w-20 h-20 bg-bg-primary"
            style={{ borderRadius: value }}
          />
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-sm font-medium text-fg-primary">{name}</span>
            <span className="font-mono text-xs text-fg-tertiary bg-bg-elevated px-1.5 py-0.5">
              {value}
            </span>
          </div>
        </div>
      ))}
    </div>
  ),
};
