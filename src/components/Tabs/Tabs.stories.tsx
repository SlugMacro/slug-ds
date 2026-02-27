import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs";
import { Button } from "../Button";
import { Input } from "../Input";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account">
      <Tabs.List>
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="password">Password</Tabs.Trigger>
        <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="account">
        <div className="space-y-4 p-4">
          <p className="text-sm text-fg-secondary">
            Make changes to your account here. Click save when you're done.
          </p>
          <Input label="Name" placeholder="Enter your name" fullWidth />
          <Input label="Email" placeholder="Enter your email" fullWidth />
          <Button>Save changes</Button>
        </div>
      </Tabs.Content>
      <Tabs.Content value="password">
        <div className="space-y-4 p-4">
          <p className="text-sm text-fg-secondary">
            Change your password here. After saving, you'll be logged out.
          </p>
          <Input label="Current password" type="password" fullWidth />
          <Input label="New password" type="password" fullWidth />
          <Button>Update password</Button>
        </div>
      </Tabs.Content>
      <Tabs.Content value="settings">
        <div className="space-y-4 p-4">
          <p className="text-sm text-fg-secondary">
            Manage your notification and display settings.
          </p>
          <Input label="Language" placeholder="English" fullWidth />
          <Button>Save settings</Button>
        </div>
      </Tabs.Content>
    </Tabs>
  ),
};

export const DisabledTab: Story = {
  render: () => (
    <Tabs defaultValue="account">
      <Tabs.List>
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="password" disabled>
          Password
        </Tabs.Trigger>
        <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="account">
        <div className="p-4">
          <p className="text-sm text-fg-secondary">Account settings content.</p>
        </div>
      </Tabs.Content>
      <Tabs.Content value="password">
        <div className="p-4">
          <p className="text-sm text-fg-secondary">Password content (unreachable).</p>
        </div>
      </Tabs.Content>
      <Tabs.Content value="settings">
        <div className="p-4">
          <p className="text-sm text-fg-secondary">Settings content.</p>
        </div>
      </Tabs.Content>
    </Tabs>
  ),
};

function ControlledTabs() {
  const [value, setValue] = useState("account");

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button intent="secondary" size="sm" onClick={() => setValue("account")}>
          Go to Account
        </Button>
        <Button intent="secondary" size="sm" onClick={() => setValue("password")}>
          Go to Password
        </Button>
        <Button intent="secondary" size="sm" onClick={() => setValue("settings")}>
          Go to Settings
        </Button>
      </div>
      <p className="text-sm text-fg-tertiary">
        Active tab: <strong className="text-fg-primary">{value}</strong>
      </p>
      <Tabs value={value} onValueChange={setValue}>
        <Tabs.List>
          <Tabs.Trigger value="account">Account</Tabs.Trigger>
          <Tabs.Trigger value="password">Password</Tabs.Trigger>
          <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="account">
          <div className="p-4">
            <p className="text-sm text-fg-secondary">Account tab content.</p>
          </div>
        </Tabs.Content>
        <Tabs.Content value="password">
          <div className="p-4">
            <p className="text-sm text-fg-secondary">Password tab content.</p>
          </div>
        </Tabs.Content>
        <Tabs.Content value="settings">
          <div className="p-4">
            <p className="text-sm text-fg-secondary">Settings tab content.</p>
          </div>
        </Tabs.Content>
      </Tabs>
    </div>
  );
}

export const Controlled: Story = {
  render: () => <ControlledTabs />,
};
