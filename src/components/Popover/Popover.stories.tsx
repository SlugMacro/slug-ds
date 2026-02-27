import type { Meta, StoryObj } from "@storybook/react";
import { Popover } from "./Popover";
import { Button } from "../Button";
import { Input } from "../Input";
import { Label } from "../Label";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center justify-center p-24">
      <Popover>
        <Popover.Trigger>
          <Button intent="secondary">Edit dimensions</Button>
        </Popover.Trigger>
        <Popover.Content>
          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-fg-primary">Dimensions</h4>
              <p className="text-sm text-fg-muted">Set the dimensions for the layer.</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="width">Width</Label>
              <Input id="width" placeholder="100%" fullWidth />
            </div>
            <div className="space-y-2">
              <Label htmlFor="height">Height</Label>
              <Input id="height" placeholder="25px" fullWidth />
            </div>
          </div>
        </Popover.Content>
      </Popover>
    </div>
  ),
};

export const Placement: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-4 p-32">
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <Popover key={side}>
          <Popover.Trigger>
            <Button intent="secondary">{side}</Button>
          </Popover.Trigger>
          <Popover.Content side={side}>
            <p className="text-sm text-fg-secondary">Popover on the {side}.</p>
          </Popover.Content>
        </Popover>
      ))}
    </div>
  ),
};

export const WithCloseButton: Story = {
  render: () => (
    <div className="flex items-center justify-center p-24">
      <Popover>
        <Popover.Trigger>
          <Button>Open Popover</Button>
        </Popover.Trigger>
        <Popover.Content>
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <h4 className="text-sm font-medium text-fg-primary">Notification settings</h4>
                <p className="text-sm text-fg-muted">Choose what you want to be notified about.</p>
              </div>
              <Popover.Close>
                <button
                  className="rounded-sm text-fg-muted hover:text-fg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
                  aria-label="Close"
                >
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </Popover.Close>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email-notif">Email</Label>
              <Input id="email-notif" placeholder="you@example.com" fullWidth />
            </div>
          </div>
        </Popover.Content>
      </Popover>
    </div>
  ),
};
