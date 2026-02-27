import type { Meta, StoryObj } from "@storybook/react-vite";
import { fontSize, lineHeightPx, fontWeight } from "../tokens/typography";

const meta: Meta = {
  title: "Foundation/Typography",
  parameters: { layout: "padded" },
};

export default meta;
type Story = StoryObj;

const SAMPLE = "Unlock the Future of Trading";

const typeScale = [
  { name: "text-9xl", size: "9xl", weight: "bold" },
  { name: "text-8xl", size: "8xl", weight: "bold" },
  { name: "text-7xl", size: "7xl", weight: "bold" },
  { name: "text-6xl", size: "6xl", weight: "bold" },
  { name: "text-5xl", size: "5xl", weight: "bold" },
  { name: "text-4xl", size: "4xl", weight: "bold" },
  { name: "text-3xl", size: "3xl", weight: "semibold" },
  { name: "text-2xl", size: "2xl", weight: "semibold" },
  { name: "text-xl", size: "xl", weight: "medium" },
  { name: "text-lg", size: "lg", weight: "medium" },
  { name: "text-base", size: "base", weight: "normal" },
  { name: "text-sm", size: "sm", weight: "normal" },
  { name: "text-xs", size: "xs", weight: "normal" },
] as const;

function InfoPill({ label, value }: { label: string; value: string }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs text-fg-tertiary">
      <span className="text-fg-secondary">{label}</span>
      <span className="font-mono bg-bg-elevated px-1.5 py-0.5">{value}</span>
    </span>
  );
}

export const Scale: Story = {
  name: "Type Scale",
  render: () => (
    <div className="flex flex-col gap-0 w-full max-w-3xl">
      {typeScale.map(({ name, size, weight }) => (
        <div
          key={name}
          className="flex flex-col gap-4 border-b border-border-subtle pb-16 pt-8 first:pt-0"
        >
          <p className="text-base text-fg-secondary font-mono">{name}</p>
          <p
            className="text-fg-primary break-words"
            style={{
              fontSize: fontSize[size],
              lineHeight: lineHeightPx[size],
              fontWeight: fontWeight[weight],
            }}
          >
            {SAMPLE}
          </p>
          <div className="flex flex-wrap gap-4">
            <InfoPill label="Font Size" value={fontSize[size]} />
            <InfoPill label="Line Height" value={lineHeightPx[size]} />
            <InfoPill label="Weight" value={`${weight} (${fontWeight[weight]})`} />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const Weights: Story = {
  name: "Font Weights",
  render: () => (
    <div className="flex flex-col gap-0 w-full max-w-3xl">
      {Object.entries(fontWeight).map(([name, value]) => (
        <div
          key={name}
          className="flex items-baseline justify-between border-b border-border-subtle py-6"
        >
          <p
            className="text-2xl text-fg-primary"
            style={{ fontWeight: value }}
          >
            {name} — {SAMPLE}
          </p>
          <span className="font-mono text-sm text-fg-tertiary bg-bg-elevated px-2 py-0.5 shrink-0 ml-4">
            {value}
          </span>
        </div>
      ))}
    </div>
  ),
};

export const FontFamilies: Story = {
  name: "Font Families",
  render: () => (
    <div className="flex flex-col gap-12 w-full max-w-3xl">
      <div className="flex flex-col gap-4">
        <div className="flex items-baseline gap-3">
          <h3 className="text-lg font-semibold text-fg-primary">Geist Sans</h3>
          <span className="font-mono text-xs text-fg-tertiary bg-bg-elevated px-2 py-0.5">
            --font-sans
          </span>
        </div>
        <p className="text-4xl text-fg-primary font-sans">
          ABCDEFGHIJKLMNOPQRSTUVWXYZ
        </p>
        <p className="text-4xl text-fg-primary font-sans">
          abcdefghijklmnopqrstuvwxyz
        </p>
        <p className="text-4xl text-fg-primary font-sans">
          0123456789 !@#$%^&*()
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-baseline gap-3">
          <h3 className="text-lg font-semibold text-fg-primary">Geist Mono</h3>
          <span className="font-mono text-xs text-fg-tertiary bg-bg-elevated px-2 py-0.5">
            --font-mono
          </span>
        </div>
        <p className="text-4xl text-fg-primary font-mono">
          ABCDEFGHIJKLMNOPQRSTUVWXYZ
        </p>
        <p className="text-4xl text-fg-primary font-mono">
          abcdefghijklmnopqrstuvwxyz
        </p>
        <p className="text-4xl text-fg-primary font-mono">
          0123456789 !@#$%^&*()
        </p>
      </div>
    </div>
  ),
};
