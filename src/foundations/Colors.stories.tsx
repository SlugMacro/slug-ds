import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta = {
  title: "Foundation/Colors",
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

function Swatch({ token, cssVar }: { token: string; cssVar: string }) {
  return (
    <div className="group flex items-center gap-3">
      <div
        className="w-10 h-10 shrink-0 border border-border-subtle"
        style={{ background: `var(${cssVar})` }}
      />
      <div className="flex flex-col gap-0.5 min-w-0 flex-1">
        <span className="text-sm text-fg-primary font-medium truncate">{token}</span>
        <span className="font-mono text-xs text-fg-secondary truncate">{cssVar}</span>
      </div>
      <CopyButton text={cssVar} />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold text-fg-primary border-b border-border-subtle pb-2">
        {title}
      </h3>
      <div className="grid grid-cols-2 gap-x-8 gap-y-3">{children}</div>
    </section>
  );
}

const fgTokens = [
  "primary", "secondary", "tertiary", "inverse", "disabled", "placeholder",
  "helper", "label", "interactive", "interactive-hover", "interactive-active",
  "success", "danger", "warning", "info", "on-dark", "on-light",
];

const bgTokens = [
  "canvas", "surface", "elevated", "sunken", "inverse", "disabled",
  "backdrop", "floating",
  "primary", "primary-hover", "primary-active", "primary-subtle",
  "neutral", "neutral-hover", "neutral-active", "neutral-subtle",
  "neutral-muted", "neutral-muted-hover",
  "success", "success-hover", "success-subtle",
  "danger", "danger-hover", "danger-subtle",
  "warning", "warning-hover", "warning-subtle",
  "info", "info-hover", "info-subtle",
];

const borderTokens = [
  "subtle", "default", "strong", "disabled", "inverse",
  "primary", "primary-subtle", "neutral-subtle",
  "success", "success-subtle", "danger", "danger-subtle",
  "warning", "warning-subtle", "info", "info-subtle",
];

export const Foreground: Story = {
  name: "Foreground",
  render: () => (
    <div className="w-full max-w-3xl">
      <Section title="Foreground (text & icons)">
        {fgTokens.map((t) => (
          <Swatch key={t} token={`fg-${t}`} cssVar={`--color-fg-${t}`} />
        ))}
      </Section>
    </div>
  ),
};

export const Background: Story = {
  name: "Background",
  render: () => (
    <div className="w-full max-w-3xl">
      <Section title="Background (surfaces & fills)">
        {bgTokens.map((t) => (
          <Swatch key={t} token={`bg-${t}`} cssVar={`--color-bg-${t}`} />
        ))}
      </Section>
    </div>
  ),
};

export const Border: Story = {
  name: "Border",
  render: () => (
    <div className="w-full max-w-3xl">
      <Section title="Border">
        {borderTokens.map((t) => (
          <Swatch key={t} token={`border-${t}`} cssVar={`--color-border-${t}`} />
        ))}
      </Section>
    </div>
  ),
};

export const Palette: Story = {
  name: "Primary Palette",
  render: () => {
    const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
    return (
      <div className="flex flex-col gap-8 w-full max-w-3xl">
        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-fg-primary border-b border-border-subtle pb-2">
            Primary (Green)
          </h3>
          <div className="flex gap-0 overflow-hidden">
            {steps.map((step) => (
              <div
                key={step}
                className="flex-1 h-16 flex items-end justify-center pb-1"
                style={{ background: `var(--color-primary-${step})` }}
              >
                <span className="text-[10px] font-mono mix-blend-difference text-white">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-fg-primary border-b border-border-subtle pb-2">
            Neutral (Gray)
          </h3>
          <div className="flex gap-0 overflow-hidden">
            {steps.map((step) => (
              <div
                key={step}
                className="flex-1 h-16 flex items-end justify-center pb-1"
                style={{ background: `var(--color-neutral-${step})` }}
              >
                <span className="text-[10px] font-mono mix-blend-difference text-white">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  },
};
