import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { Accordion } from "./Accordion";

expect.extend(toHaveNoViolations);

function renderSingleAccordion(props: { collapsible?: boolean; defaultValue?: string } = {}) {
  return render(
    <Accordion type="single" collapsible={props.collapsible} defaultValue={props.defaultValue}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Section One</Accordion.Trigger>
        <Accordion.Content>Content One</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Section Two</Accordion.Trigger>
        <Accordion.Content>Content Two</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>Section Three</Accordion.Trigger>
        <Accordion.Content>Content Three</Accordion.Content>
      </Accordion.Item>
    </Accordion>,
  );
}

function renderMultipleAccordion(props: { defaultValue?: string[] } = {}) {
  return render(
    <Accordion type="multiple" defaultValue={props.defaultValue}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Section One</Accordion.Trigger>
        <Accordion.Content>Content One</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Section Two</Accordion.Trigger>
        <Accordion.Content>Content Two</Accordion.Content>
      </Accordion.Item>
    </Accordion>,
  );
}

/**
 * Asserts that the accordion trigger is collapsed (aria-expanded="false").
 * Radix removes content children from the DOM when collapsed, so we verify
 * via the trigger's aria-expanded attribute instead.
 */
function expectTriggerCollapsed(triggerText: string) {
  const trigger = screen.getByText(triggerText).closest("button");
  expect(trigger).toHaveAttribute("aria-expanded", "false");
}

/** Asserts that the accordion trigger is expanded and its content is visible. */
function expectTriggerExpanded(triggerText: string) {
  const trigger = screen.getByText(triggerText).closest("button");
  expect(trigger).toHaveAttribute("aria-expanded", "true");
}

describe("Accordion", () => {
  describe("Rendering", () => {
    it("renders all triggers", () => {
      renderSingleAccordion();
      expect(screen.getByText("Section One")).toBeInTheDocument();
      expect(screen.getByText("Section Two")).toBeInTheDocument();
      expect(screen.getByText("Section Three")).toBeInTheDocument();
    });

    it("hides content by default", () => {
      renderSingleAccordion();
      expectTriggerCollapsed("Section One");
      expectTriggerCollapsed("Section Two");
      expectTriggerCollapsed("Section Three");
    });

    it("shows default open item", () => {
      renderSingleAccordion({ defaultValue: "item-2" });
      expectTriggerExpanded("Section Two");
      expect(screen.getByText("Content Two")).toBeVisible();
      expectTriggerCollapsed("Section One");
    });
  });

  describe("Interaction", () => {
    it("expands item on click", async () => {
      const user = userEvent.setup();
      renderSingleAccordion();

      await user.click(screen.getByText("Section One"));
      expectTriggerExpanded("Section One");
      expect(screen.getByText("Content One")).toBeVisible();
    });

    it("collapses item on second click when collapsible", async () => {
      const user = userEvent.setup();
      renderSingleAccordion({ collapsible: true });

      await user.click(screen.getByText("Section One"));
      expectTriggerExpanded("Section One");
      expect(screen.getByText("Content One")).toBeVisible();

      await user.click(screen.getByText("Section One"));
      expectTriggerCollapsed("Section One");
    });

    it("only allows one open at a time in single mode", async () => {
      const user = userEvent.setup();
      renderSingleAccordion();

      await user.click(screen.getByText("Section One"));
      expectTriggerExpanded("Section One");

      await user.click(screen.getByText("Section Two"));
      expectTriggerExpanded("Section Two");
      expect(screen.getByText("Content Two")).toBeVisible();
      expectTriggerCollapsed("Section One");
    });

    it("allows multiple open in multiple mode", async () => {
      const user = userEvent.setup();
      renderMultipleAccordion();

      await user.click(screen.getByText("Section One"));
      await user.click(screen.getByText("Section Two"));

      expectTriggerExpanded("Section One");
      expectTriggerExpanded("Section Two");
      expect(screen.getByText("Content One")).toBeVisible();
      expect(screen.getByText("Content Two")).toBeVisible();
    });

    it("calls onValueChange", async () => {
      const user = userEvent.setup();
      const onValueChange = vi.fn();
      render(
        <Accordion type="single" collapsible onValueChange={onValueChange}>
          <Accordion.Item value="item-1">
            <Accordion.Trigger>Section One</Accordion.Trigger>
            <Accordion.Content>Content One</Accordion.Content>
          </Accordion.Item>
        </Accordion>,
      );

      await user.click(screen.getByText("Section One"));
      expect(onValueChange).toHaveBeenCalledWith("item-1");
    });
  });

  describe("Accessibility", () => {
    it("has no a11y violations", async () => {
      const { container } = renderSingleAccordion({ defaultValue: "item-1" });
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("triggers are keyboard accessible", async () => {
      const user = userEvent.setup();
      renderSingleAccordion({ collapsible: true });

      await user.tab();
      expect(screen.getByText("Section One").closest("button")).toHaveFocus();

      await user.keyboard("{Enter}");
      expectTriggerExpanded("Section One");
      expect(screen.getByText("Content One")).toBeVisible();

      await user.tab();
      expect(screen.getByText("Section Two").closest("button")).toHaveFocus();

      await user.keyboard(" ");
      expectTriggerExpanded("Section Two");
      expect(screen.getByText("Content Two")).toBeVisible();
      // In single mode, opening Section Two closes Section One
      expectTriggerCollapsed("Section One");
    });
  });
});
