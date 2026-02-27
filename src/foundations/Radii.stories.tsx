import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { radii } from "../tokens/radii";

const meta: Meta = {
  title: "Foundation/Radii",
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

export const Scale: Story = {
  name: "Border Radius",
  render: () => (
    <div className="grid grid-cols-5 gap-6 w-full max-w-3xl">
      {Object.entries(radii).map(([name, value]) => (
        <div key={name} className="group flex flex-col items-center gap-3">
          <div
            className="w-20 h-20 bg-bg-primary"
            style={{ borderRadius: value }}
          />
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-sm font-medium text-fg-primary">{name}</span>
            <span className="font-mono text-xs text-fg-secondary bg-bg-elevated border border-border-subtle px-1.5 py-0.5">
              {value}
            </span>
            <span className="font-mono text-[10px] text-fg-tertiary">
              rounded-{name}
            </span>
            <CopyButton text={`rounded-${name}`} />
          </div>
        </div>
      ))}
    </div>
  ),
};
