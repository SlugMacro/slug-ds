import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { createRef } from "react";
import { Button } from "./Button";

expect.extend(toHaveNoViolations);

describe("Button", () => {
  describe("Rendering", () => {
    it("renders with default props", () => {
      render(<Button>Click me</Button>);
      expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
    });

    it("renders all intent variants", () => {
      const { container } = render(
        <>
          <Button intent="primary">Primary</Button>
          <Button intent="neutral">Neutral</Button>
          <Button intent="success">Success</Button>
          <Button intent="danger">Danger</Button>
        </>,
      );
      expect(container.querySelectorAll("button")).toHaveLength(4);
    });

    it("renders all variant styles", () => {
      const { container } = render(
        <>
          <Button variant="solid">Solid</Button>
          <Button variant="subtle">Subtle</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </>,
      );
      expect(container.querySelectorAll("button")).toHaveLength(4);
    });

    it("renders all size variants", () => {
      render(
        <>
          <Button size="xs">XS</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </>,
      );
      expect(screen.getByText("XS").className).toContain("h-7");
      expect(screen.getByText("Small").className).toContain("h-9");
      expect(screen.getByText("Medium").className).toContain("h-11");
      expect(screen.getByText("Large").className).toContain("h-13");
    });

    it("renders fullWidth", () => {
      render(<Button fullWidth>Full</Button>);
      expect(screen.getByText("Full").className).toContain("w-full");
    });

    it("renders with left icon", () => {
      render(<Button leftIcon={<span data-testid="left-icon">L</span>}>With Icon</Button>);
      expect(screen.getByTestId("left-icon")).toBeInTheDocument();
    });

    it("renders with right icon", () => {
      render(<Button rightIcon={<span data-testid="right-icon">R</span>}>With Icon</Button>);
      expect(screen.getByTestId("right-icon")).toBeInTheDocument();
    });

    it("merges custom className", () => {
      render(<Button className="custom">Custom</Button>);
      expect(screen.getByText("Custom").className).toContain("custom");
    });

    it("applies compound variant classes for intent × variant", () => {
      render(
        <Button intent="danger" variant="outline">
          Danger Outline
        </Button>,
      );
      const btn = screen.getByText("Danger Outline");
      expect(btn.className).toContain("border");
    });
  });

  describe("Interaction", () => {
    it("calls onClick when clicked", async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(<Button onClick={onClick}>Click</Button>);
      await user.click(screen.getByRole("button"));
      expect(onClick).toHaveBeenCalledOnce();
    });

    it("does not call onClick when disabled", async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(
        <Button onClick={onClick} disabled>
          Disabled
        </Button>,
      );
      await user.click(screen.getByRole("button"));
      expect(onClick).not.toHaveBeenCalled();
    });

    it("does not call onClick when loading", async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(
        <Button onClick={onClick} loading>
          Loading
        </Button>,
      );
      await user.click(screen.getByRole("button"));
      expect(onClick).not.toHaveBeenCalled();
    });

    it("is keyboard accessible", async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(<Button onClick={onClick}>Press</Button>);
      await user.tab();
      expect(screen.getByRole("button")).toHaveFocus();
      await user.keyboard("{Enter}");
      expect(onClick).toHaveBeenCalledOnce();
    });
  });

  describe("Loading state", () => {
    it("shows spinner when loading", () => {
      render(<Button loading>Loading</Button>);
      const button = screen.getByRole("button");
      expect(button.querySelector("svg")).toBeInTheDocument();
    });

    it("sets aria-busy when loading", () => {
      render(<Button loading>Loading</Button>);
      expect(screen.getByRole("button")).toHaveAttribute("aria-busy", "true");
    });

    it("is disabled when loading", () => {
      render(<Button loading>Loading</Button>);
      expect(screen.getByRole("button")).toBeDisabled();
    });

    it("replaces left icon with spinner when loading", () => {
      render(
        <Button loading leftIcon={<span data-testid="left-icon">L</span>}>
          Loading
        </Button>,
      );
      expect(screen.queryByTestId("left-icon")).not.toBeInTheDocument();
      expect(screen.getByRole("button").querySelector("svg")).toBeInTheDocument();
    });
  });

  describe("Ref forwarding", () => {
    it("forwards ref to button element", () => {
      const ref = createRef<HTMLButtonElement>();
      render(<Button ref={ref}>Ref</Button>);
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });
  });

  describe("Accessibility", () => {
    it("has no a11y violations", async () => {
      const { container } = render(<Button>Accessible</Button>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("has no a11y violations when disabled", async () => {
      const { container } = render(<Button disabled>Disabled</Button>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("has no a11y violations when loading", async () => {
      const { container } = render(<Button loading>Loading</Button>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
