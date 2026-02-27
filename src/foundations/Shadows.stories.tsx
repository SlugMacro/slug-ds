import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { shadows } from "../tokens/shadows";

const meta: Meta = {
  title: "Foundation/Shadows",
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
      className="inline-flex items-center gap-1.5 px-2 py-1 text-xs font-mono text-fg-secondary bg-bg-elevated border border-border-subtle hover:text-fg-primary hover:bg-bg-neutral-muted transition-colors cursor-pointer"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

export const Elevation: Story = {
  name: "Elevation",
  render: () => (
    <div className="flex flex-col gap-8 w-full max-w-3xl">
      {Object.entries(shadows).map(([name, value]) => (
        <div key={name} className="flex flex-col gap-3">
          <div className="flex items-baseline gap-3">
            <span className="text-sm font-medium text-fg-primary">shadow-{name}</span>
          </div>
          <div
            className="h-24 bg-bg-surface flex items-center justify-center"
            style={{ boxShadow: value }}
          >
            <span className="text-fg-secondary text-sm">{name}</span>
          </div>
          <div className="flex items-center gap-2">
            <code className="flex-1 text-xs font-mono text-fg-secondary bg-bg-elevated border border-border-subtle px-3 py-2 truncate">
              shadow-{name}
            </code>
            <CopyButton text={`shadow-${name}`} />
          </div>
          <div className="flex items-center gap-2">
            <code className="flex-1 text-xs font-mono text-fg-tertiary bg-bg-elevated border border-border-subtle px-3 py-2 truncate">
              {value}
            </code>
            <CopyButton text={value} />
          </div>
        </div>
      ))}
    </div>
  ),
};
