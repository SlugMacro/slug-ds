import { createRef } from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Separator } from "./Separator";

expect.extend(toHaveNoViolations);

describe("Separator", () => {
  describe("Rendering", () => {
    it("renders with default props", () => {
      render(<Separator data-testid="sep" />);
      const el = screen.getByTestId("sep");
      expect(el).toBeInTheDocument();
      expect(el.tagName).toBe("DIV");
    });

    it("renders as a div", () => {
      render(<Separator data-testid="sep" />);
      expect(screen.getByTestId("sep").tagName).toBe("DIV");
    });
  });

  describe("Orientation", () => {
    it("defaults to horizontal", () => {
      render(<Separator data-testid="sep" />);
      const el = screen.getByTestId("sep");
      expect(el.className).toContain("h-px");
      expect(el.className).toContain("w-full");
      expect(el).toHaveAttribute("aria-orientation", "horizontal");
    });

    it("renders vertical", () => {
      render(<Separator orientation="vertical" data-testid="sep" />);
      const el = screen.getByTestId("sep");
      expect(el.className).toContain("w-px");
      expect(el.className).toContain("h-full");
      expect(el).toHaveAttribute("aria-orientation", "vertical");
    });
  });

  describe("Decorative", () => {
    it("has role=separator by default", () => {
      render(<Separator data-testid="sep" />);
      expect(screen.getByTestId("sep")).toHaveAttribute("role", "separator");
    });

    it("has role=none when decorative", () => {
      render(<Separator decorative data-testid="sep" />);
      const el = screen.getByTestId("sep");
      expect(el).toHaveAttribute("role", "none");
      expect(el).not.toHaveAttribute("aria-orientation");
    });
  });

  describe("Styling", () => {
    it("applies base classes", () => {
      render(<Separator data-testid="sep" />);
      const el = screen.getByTestId("sep");
      expect(el.className).toContain("shrink-0");
      expect(el.className).toContain("bg-border-default");
    });

    it("merges custom className", () => {
      render(<Separator className="my-4" data-testid="sep" />);
      const el = screen.getByTestId("sep");
      expect(el.className).toContain("my-4");
      expect(el.className).toContain("shrink-0");
    });
  });

  describe("Ref forwarding", () => {
    it("forwards ref", () => {
      const ref = createRef<HTMLDivElement>();
      render(<Separator ref={ref} />);
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
  });

  describe("Accessibility", () => {
    it("has no a11y violations (horizontal)", async () => {
      const { container } = render(<Separator />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("has no a11y violations (vertical)", async () => {
      const { container } = render(<Separator orientation="vertical" />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("has no a11y violations (decorative)", async () => {
      const { container } = render(<Separator decorative />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
