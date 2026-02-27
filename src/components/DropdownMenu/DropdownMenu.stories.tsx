import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { DropdownMenu } from "./DropdownMenu";
import { Button } from "../Button";

const meta: Meta<typeof DropdownMenu> = {
  title: "Components/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenu.Trigger>
        <Button intent="secondary">Actions</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Label>File</DropdownMenu.Label>
        <DropdownMenu.Item shortcut="Ctrl+N">New File</DropdownMenu.Item>
        <DropdownMenu.Item shortcut="Ctrl+O">Open</DropdownMenu.Item>
        <DropdownMenu.Item shortcut="Ctrl+S">Save</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>Export</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item disabled>Delete</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  ),
};

export const WithCheckboxItems: Story = {
  render: function CheckboxExample() {
    const [showGrid, setShowGrid] = useState(true);
    const [showRulers, setShowRulers] = useState(false);
    return (
      <DropdownMenu>
        <DropdownMenu.Trigger>
          <Button intent="secondary">View</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Label>Display</DropdownMenu.Label>
          <DropdownMenu.CheckboxItem checked={showGrid} onCheckedChange={setShowGrid}>
            Show Grid
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem checked={showRulers} onCheckedChange={setShowRulers}>
            Show Rulers
          </DropdownMenu.CheckboxItem>
        </DropdownMenu.Content>
      </DropdownMenu>
    );
  },
};

export const WithRadioGroup: Story = {
  render: function RadioExample() {
    const [theme, setTheme] = useState("system");
    return (
      <DropdownMenu>
        <DropdownMenu.Trigger>
          <Button intent="secondary">Theme</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Label>Theme</DropdownMenu.Label>
          <DropdownMenu.RadioGroup value={theme} onValueChange={setTheme}>
            <DropdownMenu.RadioItem value="light">Light</DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem value="dark">Dark</DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem value="system">System</DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu>
    );
  },
};

export const WithSubMenu: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenu.Trigger>
        <Button intent="secondary">Options</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>Undo</DropdownMenu.Item>
        <DropdownMenu.Item>Redo</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger>Share</DropdownMenu.SubTrigger>
          <DropdownMenu.SubContent>
            <DropdownMenu.Item>Email</DropdownMenu.Item>
            <DropdownMenu.Item>Slack</DropdownMenu.Item>
            <DropdownMenu.Item>Copy Link</DropdownMenu.Item>
          </DropdownMenu.SubContent>
        </DropdownMenu.Sub>
        <DropdownMenu.Separator />
        <DropdownMenu.Item disabled>Archive</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  ),
};
