import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta = {
  title: "Welcome",
};

export default meta;
type Story = StoryObj;

export const DesignTokens: Story = {
  render: () => (
    <div className="space-y-8 max-w-2xl">
      <section>
        <h2 className="text-fg-primary text-xl font-bold mb-4">Colors</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <div className="w-full h-12 rounded-md bg-accent-primary" />
            <p className="text-fg-secondary text-sm">accent-primary</p>
          </div>
          <div className="space-y-2">
            <div className="w-full h-12 rounded-md bg-error" />
            <p className="text-fg-secondary text-sm">error</p>
          </div>
          <div className="space-y-2">
            <div className="w-full h-12 rounded-md bg-success" />
            <p className="text-fg-secondary text-sm">success</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-fg-primary text-xl font-bold mb-4">Surfaces</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <div className="w-full h-12 rounded-md bg-bg-base border border-border-default" />
            <p className="text-fg-secondary text-sm">bg-base</p>
          </div>
          <div className="space-y-2">
            <div className="w-full h-12 rounded-md bg-bg-surface border border-border-default" />
            <p className="text-fg-secondary text-sm">bg-surface</p>
          </div>
          <div className="space-y-2">
            <div className="w-full h-12 rounded-md bg-bg-surface-hover border border-border-default" />
            <p className="text-fg-secondary text-sm">bg-surface-hover</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-fg-primary text-xl font-bold mb-4">Typography</h2>
        <p className="text-fg-primary text-base">fg-primary — Primary text</p>
        <p className="text-fg-secondary text-sm">fg-secondary — Secondary text</p>
        <p className="text-fg-muted text-xs">fg-muted — Muted text</p>
      </section>

      <section>
        <h2 className="text-fg-primary text-xl font-bold mb-4">Shadows</h2>
        <div className="grid grid-cols-4 gap-4">
          {(["sm", "md", "lg", "xl"] as const).map((size) => (
            <div
              key={size}
              className={`h-16 rounded-lg bg-bg-surface shadow-${size} flex items-center justify-center`}
            >
              <span className="text-fg-secondary text-sm">{size}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  ),
};
