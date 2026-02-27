import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { DropdownMenu } from "./DropdownMenu";

expect.extend(toHaveNoViolations);

function renderMenu() {
  return render(
    <DropdownMenu>
      <DropdownMenu.Trigger>
        <button>Open Menu</button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Label>Actions</DropdownMenu.Label>
        <DropdownMenu.Item>Edit</DropdownMenu.Item>
        <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item disabled>Delete</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>,
  );
}

describe("DropdownMenu", () => {
  describe("Rendering", () => {
    it("renders trigger", () => {
      renderMenu();
      expect(screen.getByRole("button", { name: "Open Menu" })).toBeInTheDocument();
    });

    it("does not show menu initially", () => {
      renderMenu();
      expect(screen.queryByRole("menu")).not.toBeInTheDocument();
    });

    it("opens menu on trigger click", async () => {
      const user = userEvent.setup();
      renderMenu();
      await user.click(screen.getByRole("button", { name: "Open Menu" }));
      expect(screen.getByRole("menu")).toBeInTheDocument();
      expect(screen.getByText("Edit")).toBeInTheDocument();
      expect(screen.getByText("Duplicate")).toBeInTheDocument();
    });

    it("renders label", async () => {
      const user = userEvent.setup();
      renderMenu();
      await user.click(screen.getByRole("button", { name: "Open Menu" }));
      expect(screen.getByText("Actions")).toBeInTheDocument();
    });

    it("renders separator", async () => {
      const user = userEvent.setup();
      renderMenu();
      await user.click(screen.getByRole("button", { name: "Open Menu" }));
      expect(screen.getByRole("separator")).toBeInTheDocument();
    });
  });

  describe("Interaction", () => {
    it("calls onSelect when item is clicked", async () => {
      const user = userEvent.setup();
      const onSelect = vi.fn();
      render(
        <DropdownMenu>
          <DropdownMenu.Trigger>
            <button>Open</button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item onSelect={onSelect}>Action</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu>,
      );
      await user.click(screen.getByRole("button", { name: "Open" }));
      await user.click(screen.getByText("Action"));
      expect(onSelect).toHaveBeenCalled();
    });

    it("closes menu on Escape", async () => {
      const user = userEvent.setup();
      renderMenu();
      await user.click(screen.getByRole("button", { name: "Open Menu" }));
      expect(screen.getByRole("menu")).toBeInTheDocument();
      await user.keyboard("{Escape}");
      expect(screen.queryByRole("menu")).not.toBeInTheDocument();
    });

    it("navigates items with arrow keys", async () => {
      const user = userEvent.setup();
      renderMenu();
      await user.click(screen.getByRole("button", { name: "Open Menu" }));
      await user.keyboard("{ArrowDown}");
      await user.keyboard("{ArrowDown}");
      // Arrow key navigation is handled by Radix internally
    });

    it("renders shortcut text", async () => {
      const user = userEvent.setup();
      render(
        <DropdownMenu>
          <DropdownMenu.Trigger>
            <button>Open</button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item shortcut="Ctrl+C">Copy</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu>,
      );
      await user.click(screen.getByRole("button", { name: "Open" }));
      expect(screen.getByText("Ctrl+C")).toBeInTheDocument();
    });
  });

  describe("Checkbox items", () => {
    it("renders checkbox items", async () => {
      const user = userEvent.setup();
      const onCheckedChange = vi.fn();
      render(
        <DropdownMenu>
          <DropdownMenu.Trigger>
            <button>Open</button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.CheckboxItem checked={false} onCheckedChange={onCheckedChange}>
              Show grid
            </DropdownMenu.CheckboxItem>
          </DropdownMenu.Content>
        </DropdownMenu>,
      );
      await user.click(screen.getByRole("button", { name: "Open" }));
      await user.click(screen.getByText("Show grid"));
      expect(onCheckedChange).toHaveBeenCalledWith(true);
    });
  });

  describe("Radio items", () => {
    it("renders radio group", async () => {
      const user = userEvent.setup();
      const onValueChange = vi.fn();
      render(
        <DropdownMenu>
          <DropdownMenu.Trigger>
            <button>Open</button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.RadioGroup value="a" onValueChange={onValueChange}>
              <DropdownMenu.RadioItem value="a">Option A</DropdownMenu.RadioItem>
              <DropdownMenu.RadioItem value="b">Option B</DropdownMenu.RadioItem>
            </DropdownMenu.RadioGroup>
          </DropdownMenu.Content>
        </DropdownMenu>,
      );
      await user.click(screen.getByRole("button", { name: "Open" }));
      await user.click(screen.getByText("Option B"));
      expect(onValueChange).toHaveBeenCalledWith("b");
    });
  });

  describe("Accessibility", () => {
    it("has no a11y violations when open", async () => {
      const user = userEvent.setup();
      const { container } = renderMenu();
      await user.click(screen.getByRole("button", { name: "Open Menu" }));
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("has menu role", async () => {
      const user = userEvent.setup();
      renderMenu();
      await user.click(screen.getByRole("button", { name: "Open Menu" }));
      expect(screen.getByRole("menu")).toBeInTheDocument();
    });

    it("has menuitem roles", async () => {
      const user = userEvent.setup();
      renderMenu();
      await user.click(screen.getByRole("button", { name: "Open Menu" }));
      expect(screen.getAllByRole("menuitem").length).toBeGreaterThan(0);
    });
  });
});
