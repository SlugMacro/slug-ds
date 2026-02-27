import type { Meta, StoryObj } from "@storybook/react-vite";
import { controlHeight, container, iconSize, avatarSize } from "../tokens/layout";

const meta: Meta = {
  title: "Foundation/Layout",
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

function TokenRow({ name, value, visual }: { name: string; value: string; visual: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 border-b border-border-subtle py-3">
      <span className="font-mono text-sm text-fg-secondary w-16 text-right shrink-0">
        {name}
      </span>
      {visual}
      <span className="font-mono text-xs text-fg-tertiary bg-bg-elevated px-1.5 py-0.5">
        {value}
      </span>
    </div>
  );
}

export const ControlHeights: Story = {
  name: "Control Heights",
  render: () => (
    <div className="flex flex-col gap-0 w-full max-w-3xl">
      <h3 className="text-lg font-semibold text-fg-primary mb-4">
        Control Heights
      </h3>
      <p className="text-sm text-fg-secondary mb-6">
        Standard heights for form controls (buttons, inputs, selects).
      </p>
      {Object.entries(controlHeight).map(([name, value]) => (
        <TokenRow
          key={name}
          name={name}
          value={value}
          visual={
            <div
              className="bg-bg-primary shrink-0 w-32"
              style={{ height: value }}
            />
          }
        />
      ))}
    </div>
  ),
};

export const Containers: Story = {
  name: "Containers",
  render: () => (
    <div className="flex flex-col gap-0 w-full max-w-4xl">
      <h3 className="text-lg font-semibold text-fg-primary mb-4">
        Container Max-Widths
      </h3>
      {Object.entries(container).map(([name, value]) => (
        <TokenRow
          key={name}
          name={name}
          value={value}
          visual={
            <div
              className="h-4 bg-bg-primary shrink-0"
              style={{ width: `min(${value}, 100%)` }}
            />
          }
        />
      ))}
    </div>
  ),
};

export const IconSizes: Story = {
  name: "Icon Sizes",
  render: () => (
    <div className="flex flex-col gap-0 w-full max-w-3xl">
      <h3 className="text-lg font-semibold text-fg-primary mb-4">
        Icon Sizes
      </h3>
      {Object.entries(iconSize).map(([name, value]) => (
        <TokenRow
          key={name}
          name={`${name}px`}
          value={value}
          visual={
            <div
              className="bg-bg-primary shrink-0"
              style={{ width: value, height: value }}
            />
          }
        />
      ))}
    </div>
  ),
};

export const AvatarSizes: Story = {
  name: "Avatar Sizes",
  render: () => (
    <div className="flex flex-col gap-0 w-full max-w-3xl">
      <h3 className="text-lg font-semibold text-fg-primary mb-4">
        Avatar Sizes
      </h3>
      {Object.entries(avatarSize).map(([name, value]) => (
        <TokenRow
          key={name}
          name={`${name}px`}
          value={value}
          visual={
            <div
              className="bg-bg-primary shrink-0 rounded-full"
              style={{ width: value, height: value }}
            />
          }
        />
      ))}
    </div>
  ),
};
