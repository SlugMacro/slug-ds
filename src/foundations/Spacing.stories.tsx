import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { spacing } from "../tokens/spacing";

const meta: Meta = {
  title: "Foundation/Spacing",
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
  name: "Spacing Scale",
  render: () => (
    <div className="flex flex-col gap-0 w-full max-w-3xl">
      {Object.entries(spacing).map(([key, value]) => {
        const tailwindClass = `p-${key}`;
        return (
          <div
            key={key}
            className="group flex items-center gap-4 border-b border-border-subtle py-3"
          >
            <span className="font-mono text-sm text-fg-primary w-12 text-right shrink-0">
              {key}
            </span>
            <div
              className="h-4 bg-bg-primary shrink-0"
              style={{ width: value }}
            />
            <span className="font-mono text-xs text-fg-secondary bg-bg-elevated border border-border-subtle px-1.5 py-0.5">
              {value}
            </span>
            <span className="font-mono text-xs text-fg-tertiary">
              {tailwindClass}
            </span>
            <CopyButton text={tailwindClass} />
          </div>
        );
      })}
    </div>
  ),
};
