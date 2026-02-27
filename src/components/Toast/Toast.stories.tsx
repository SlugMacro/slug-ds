import type { Meta, StoryObj } from "@storybook/react";
import { Toaster } from "./Toast";
import { toast } from "sonner";
import { Button } from "../Button";

const meta: Meta<typeof Toaster> = {
  title: "Components/Toast",
  component: Toaster,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  render: () => <Button onClick={() => toast("Event has been created")}>Show Toast</Button>,
};

export const WithDescription: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast("Event created", {
          description: "Monday, January 3rd at 6:00 PM",
        })
      }
    >
      With Description
    </Button>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button intent="secondary" onClick={() => toast("Default notification")}>
        Default
      </Button>
      <Button intent="secondary" onClick={() => toast.success("Changes saved successfully")}>
        Success
      </Button>
      <Button intent="secondary" onClick={() => toast.error("Failed to save changes")}>
        Error
      </Button>
      <Button intent="secondary" onClick={() => toast.warning("Storage almost full")}>
        Warning
      </Button>
      <Button intent="secondary" onClick={() => toast.info("New version available")}>
        Info
      </Button>
    </div>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast("File deleted", {
          action: {
            label: "Undo",
            onClick: () => toast("File restored"),
          },
        })
      }
    >
      With Action
    </Button>
  ),
};

export const WithPromise: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast.promise(new Promise((resolve) => setTimeout(resolve, 2000)), {
          loading: "Saving...",
          success: "Saved!",
          error: "Failed to save",
        })
      }
    >
      With Promise
    </Button>
  ),
};
