import { createRef } from "react";
import { describe, it, expect, vi, beforeAll } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Select } from "./Select";

expect.extend(toHaveNoViolations);

// Radix Select uses Pointer Capture API which jsdom doesn't implement
beforeAll(() => {
  HTMLElement.prototype.hasPointerCapture = vi.fn().mockReturnValue(false);
  HTMLElement.prototype.setPointerCapture = vi.fn();
  HTMLElement.prototype.releasePointerCapture = vi.fn();
  HTMLElement.prototype.scrollIntoView = vi.fn();
});

const renderSelect = (props: Record<string, unknown> = {}) =>
  render(
    <Select placeholder="Select a fruit" label="Fruit" {...props}>
      <Select.Trigger>
        <span>Select a fruit</span>
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="banana">Banana</Select.Item>
        <Select.Item value="cherry">Cherry</Select.Item>
      </Select.Content>
    </Select>,
  );

describe("Select", () => {
  describe("Rendering", () => {
    it("renders trigger", () => {
      renderSelect();
      expect(screen.getByRole("combobox")).toBeInTheDocument();
    });

    it("renders with label", () => {
      renderSelect();
      expect(screen.getByText("Fruit")).toBeInTheDocument();
    });

    it("renders with helper text", () => {
      renderSelect({ helperText: "Pick your favorite" });
      expect(screen.getByText("Pick your favorite")).toBeInTheDocument();
    });

    it("renders error state", () => {
      renderSelect({ error: true, errorMessage: "Required" });
      expect(screen.getByText("Required")).toBeInTheDocument();
    });

    it("shows error over helper text", () => {
      renderSelect({ error: true, errorMessage: "Required", helperText: "Help" });
      expect(screen.getByText("Required")).toBeInTheDocument();
      expect(screen.queryByText("Help")).not.toBeInTheDocument();
    });

    it("renders disabled", () => {
      renderSelect({ disabled: true });
      expect(screen.getByRole("combobox")).toBeDisabled();
    });
  });

  describe("Interaction", () => {
    it("renders content when defaultOpen", () => {
      renderSelect({ defaultOpen: true });
      expect(screen.getByRole("listbox")).toBeInTheDocument();
    });

    it("renders items when open", () => {
      renderSelect({ defaultOpen: true });
      expect(screen.getByText("Apple")).toBeInTheDocument();
      expect(screen.getByText("Banana")).toBeInTheDocument();
      expect(screen.getByText("Cherry")).toBeInTheDocument();
    });

    it("shows placeholder text", () => {
      renderSelect();
      expect(screen.getByText("Select a fruit")).toBeInTheDocument();
    });
  });

  describe("Groups", () => {
    it("renders items in groups", () => {
      render(
        <Select label="Food" defaultOpen>
          <Select.Trigger>
            <span>Select food</span>
          </Select.Trigger>
          <Select.Content>
            <Select.Group label="Fruits">
              <Select.Item value="apple">Apple</Select.Item>
            </Select.Group>
            <Select.Separator />
            <Select.Group label="Vegetables">
              <Select.Item value="carrot">Carrot</Select.Item>
            </Select.Group>
          </Select.Content>
        </Select>,
      );
      expect(screen.getByText("Fruits")).toBeInTheDocument();
      expect(screen.getByText("Vegetables")).toBeInTheDocument();
    });
  });

  describe("Ref forwarding", () => {
    it("forwards ref to trigger", () => {
      const ref = createRef<HTMLButtonElement>();
      render(
        <Select label="Test">
          <Select.Trigger ref={ref}>
            <span>Pick</span>
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="a">A</Select.Item>
          </Select.Content>
        </Select>,
      );
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });
  });

  describe("Accessibility", () => {
    it("has no a11y violations when closed", async () => {
      const { container } = renderSelect();
      const results = await axe(container, {
        rules: {
          // Radix sets aria-controls pointing to portal content not yet in DOM
          "aria-valid-attr-value": { enabled: false },
        },
      });
      expect(results).toHaveNoViolations();
    });

    it("has combobox role on trigger", () => {
      renderSelect();
      expect(screen.getByRole("combobox")).toBeInTheDocument();
    });

    it("has listbox role when open", () => {
      renderSelect({ defaultOpen: true });
      expect(screen.getByRole("listbox")).toBeInTheDocument();
    });

    it("has option roles on items", () => {
      renderSelect({ defaultOpen: true });
      expect(screen.getAllByRole("option")).toHaveLength(3);
    });

    it("trigger has aria-expanded", () => {
      renderSelect();
      expect(screen.getByRole("combobox")).toHaveAttribute("aria-expanded", "false");
    });
  });
});
