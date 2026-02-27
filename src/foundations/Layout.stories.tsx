import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { controlHeight, container, iconSize, avatarSize } from "../tokens/layout";

const meta: Meta = {
  title: "Foundation/Layout",
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <button
      onClick={handleCopy}
      className="opacity-0 group-hover:opacity-100 text-[10px] font-mono text-fg-secondary hover:text-fg-primary transition-all cursor-pointer"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

function TokenRow({ name, value, cssVar, visual }: { name: string; value: string; cssVar: string; visual: React.ReactNode }) {
  return (
    <div className="group flex items-center gap-4 border-b border-border-subtle py-3">
      <span className="font-mono text-sm text-fg-primary w-16 text-right shrink-0">
        {name}
      </span>
      {visual}
      <span className="font-mono text-xs text-fg-secondary bg-bg-elevated border border-border-subtle px-1.5 py-0.5">
        {value}
      </span>
      <span className="font-mono text-xs text-fg-tertiary truncate">
        {cssVar}
      </span>
      <CopyButton text={cssVar} />
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
          cssVar={`h-[${value}]`}
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
          cssVar={`max-w-[${value}]`}
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
          cssVar={`size-[${value}]`}
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
          cssVar={`size-[${value}]`}
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
