import type { Meta, StoryObj } from "@storybook/react";
import { ArrowRightLine, CodeLine } from "@mingcute/react";
import { Link } from "./Link";

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
  tags: ["autodocs"],
  argTypes: {
    intent: { control: "select", options: ["primary", "neutral"] },
    emphasis: { control: "select", options: ["default", "strong"] },
    size: { control: "select", options: ["xs", "sm", "md"] },
    underline: { control: "boolean" },
    disabled: { control: "boolean" },
    external: { control: "boolean" },
    leadingIcon: { table: { disable: true } },
    trailingIcon: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    href: "#",
    children: "Sample Link",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      {(["xs", "sm", "md"] as const).map((size) => (
        <Link key={size} href="#" size={size}>
          Link ({size})
        </Link>
      ))}
    </div>
  ),
};

export const Intents: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Link href="#" intent="primary">
        Primary Link
      </Link>
      <Link href="#" intent="neutral">
        Neutral Link
      </Link>
    </div>
  ),
};

export const Emphasis: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Link href="#" emphasis="default">
        Default emphasis
      </Link>
      <Link href="#" emphasis="strong">
        Strong emphasis
      </Link>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Link href="#" leadingIcon={<CodeLine />} trailingIcon={<ArrowRightLine />}>
        With both icons
      </Link>
      <Link href="#" leadingIcon={<CodeLine />}>
        Leading icon only
      </Link>
      <Link href="#" trailingIcon={<ArrowRightLine />}>
        Trailing icon only
      </Link>
    </div>
  ),
};

export const NoUnderline: Story = {
  args: {
    href: "#",
    children: "No underline",
    underline: false,
  },
};

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Link href="#" disabled>
        Disabled primary
      </Link>
      <Link href="#" intent="neutral" disabled>
        Disabled neutral
      </Link>
    </div>
  ),
};

export const External: Story = {
  args: {
    href: "https://example.com",
    children: "External Link",
    external: true,
    trailingIcon: <ArrowRightLine />,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8">
      {(["primary", "neutral"] as const).map((intent) => (
        <div key={intent}>
          <p className="text-sm text-fg-tertiary mb-3 capitalize">{intent}</p>
          <div className="space-y-4">
            {(["xs", "sm", "md"] as const).map((size) => (
              <div key={size} className="flex items-center gap-6">
                <Link
                  href="#"
                  intent={intent}
                  size={size}
                  leadingIcon={<CodeLine />}
                  trailingIcon={<ArrowRightLine />}
                >
                  Default
                </Link>
                <Link
                  href="#"
                  intent={intent}
                  size={size}
                  emphasis="strong"
                  leadingIcon={<CodeLine />}
                  trailingIcon={<ArrowRightLine />}
                >
                  Strong
                </Link>
                <Link
                  href="#"
                  intent={intent}
                  size={size}
                  disabled
                  leadingIcon={<CodeLine />}
                  trailingIcon={<ArrowRightLine />}
                >
                  Disabled
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};
