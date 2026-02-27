import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip, TooltipProvider } from "./Tooltip";
import { Button } from "../Button";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <TooltipProvider delayDuration={200}>
        <Story />
      </TooltipProvider>
    ),
  ],
  argTypes: {
    side: { control: "select", options: ["top", "right", "bottom", "left"] },
    align: { control: "select", options: ["start", "center", "end"] },
    sideOffset: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Tooltip content="This is a tooltip">
      <Button>Hover me</Button>
    </Tooltip>
  ),
};

export const AllSides: Story = {
  render: () => (
    <div className="flex items-center gap-8 py-16">
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <Tooltip key={side} content={`Tooltip on ${side}`} side={side}>
          <Button intent="secondary">{side}</Button>
        </Tooltip>
      ))}
    </div>
  ),
};

export const WithRichContent: Story = {
  render: () => (
    <Tooltip
      content={
        <div className="flex flex-col gap-1">
          <span className="font-medium">Keyboard shortcut</span>
          <span className="opacity-75">Ctrl + S</span>
        </div>
      }
    >
      <Button>Save</Button>
    </Tooltip>
  ),
};
