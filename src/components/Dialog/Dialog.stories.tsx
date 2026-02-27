import type { Meta, StoryObj } from "@storybook/react";
import { Dialog } from "./Dialog";
import { Button } from "../Button";
import { Input } from "../Input";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <Dialog.Trigger>
        <Button>Open Dialog</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Edit Profile</Dialog.Title>
          <Dialog.Description>Make changes to your profile here.</Dialog.Description>
        </Dialog.Header>
        <div className="px-6 py-4">
          <Input label="Name" placeholder="Enter your name" fullWidth />
        </div>
        <Dialog.Footer>
          <Dialog.Close>
            <Button intent="ghost">Cancel</Button>
          </Dialog.Close>
          <Button>Save changes</Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      {(["sm", "md", "lg", "xl"] as const).map((size) => (
        <Dialog key={size}>
          <Dialog.Trigger>
            <Button intent="secondary">{size}</Button>
          </Dialog.Trigger>
          <Dialog.Content size={size}>
            <Dialog.Header>
              <Dialog.Title>Size: {size}</Dialog.Title>
            </Dialog.Header>
            <div className="px-6 py-4">
              <p className="text-fg-secondary text-sm">Dialog content with size="{size}"</p>
            </div>
          </Dialog.Content>
        </Dialog>
      ))}
    </div>
  ),
};

export const WithoutCloseButton: Story = {
  render: () => (
    <Dialog>
      <Dialog.Trigger>
        <Button>Open</Button>
      </Dialog.Trigger>
      <Dialog.Content showClose={false}>
        <Dialog.Header>
          <Dialog.Title>Confirm Action</Dialog.Title>
          <Dialog.Description>Are you sure you want to proceed?</Dialog.Description>
        </Dialog.Header>
        <Dialog.Footer>
          <Dialog.Close>
            <Button intent="ghost">Cancel</Button>
          </Dialog.Close>
          <Button intent="danger">Delete</Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  ),
};

export const ScrollableContent: Story = {
  render: () => (
    <Dialog>
      <Dialog.Trigger>
        <Button>Open Scrollable</Button>
      </Dialog.Trigger>
      <Dialog.Content size="md" className="max-h-[80vh] overflow-y-auto">
        <Dialog.Header>
          <Dialog.Title>Terms of Service</Dialog.Title>
        </Dialog.Header>
        <div className="px-6 py-4 space-y-4">
          {Array.from({ length: 20 }, (_, i) => (
            <p key={i} className="text-sm text-fg-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Paragraph {i + 1}.
            </p>
          ))}
        </div>
        <Dialog.Footer>
          <Dialog.Close>
            <Button intent="ghost">Decline</Button>
          </Dialog.Close>
          <Button>Accept</Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  ),
};
