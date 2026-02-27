import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { Tabs } from "./Tabs";

expect.extend(toHaveNoViolations);

function renderTabs(
  props: { onValueChange?: (value: string) => void; disablePassword?: boolean } = {},
) {
  return render(
    <Tabs defaultValue="account" onValueChange={props.onValueChange}>
      <Tabs.List>
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="password" disabled={props.disablePassword}>
          Password
        </Tabs.Trigger>
        <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="account">Account content</Tabs.Content>
      <Tabs.Content value="password">Password content</Tabs.Content>
      <Tabs.Content value="settings">Settings content</Tabs.Content>
    </Tabs>,
  );
}

describe("Tabs", () => {
  describe("Rendering", () => {
    it("renders tab triggers", () => {
      renderTabs();
      expect(screen.getByRole("tab", { name: "Account" })).toBeInTheDocument();
      expect(screen.getByRole("tab", { name: "Password" })).toBeInTheDocument();
      expect(screen.getByRole("tab", { name: "Settings" })).toBeInTheDocument();
    });

    it("renders default tab content", () => {
      renderTabs();
      expect(screen.getByText("Account content")).toBeInTheDocument();
    });

    it("does not render inactive tab content", () => {
      renderTabs();
      expect(screen.queryByText("Password content")).not.toBeInTheDocument();
      expect(screen.queryByText("Settings content")).not.toBeInTheDocument();
    });
  });

  describe("Interaction", () => {
    it("switches content on tab click", async () => {
      const user = userEvent.setup();
      renderTabs();

      await user.click(screen.getByRole("tab", { name: "Password" }));
      expect(screen.getByText("Password content")).toBeInTheDocument();
      expect(screen.queryByText("Account content")).not.toBeInTheDocument();
    });

    it("navigates with arrow keys", async () => {
      const user = userEvent.setup();
      renderTabs();

      // Focus the first tab
      await user.click(screen.getByRole("tab", { name: "Account" }));
      // Arrow right should move to next tab
      await user.keyboard("{ArrowRight}");
      expect(screen.getByRole("tab", { name: "Password" })).toHaveFocus();
    });

    it("calls onValueChange", async () => {
      const user = userEvent.setup();
      const onValueChange = vi.fn();
      renderTabs({ onValueChange });

      await user.click(screen.getByRole("tab", { name: "Settings" }));
      expect(onValueChange).toHaveBeenCalledWith("settings");
    });

    it("does not activate disabled tab", async () => {
      const user = userEvent.setup();
      const onValueChange = vi.fn();
      renderTabs({ disablePassword: true, onValueChange });

      await user.click(screen.getByRole("tab", { name: "Password" }));
      expect(onValueChange).not.toHaveBeenCalled();
      expect(screen.getByText("Account content")).toBeInTheDocument();
      expect(screen.queryByText("Password content")).not.toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("has no a11y violations", async () => {
      const { container } = renderTabs();
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("has tablist role", () => {
      renderTabs();
      expect(screen.getByRole("tablist")).toBeInTheDocument();
    });

    it("has tab role on triggers", () => {
      renderTabs();
      const tabs = screen.getAllByRole("tab");
      expect(tabs).toHaveLength(3);
    });
  });
});
