import { createRef } from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Label } from "./Label";

expect.extend(toHaveNoViolations);

describe("Label", () => {
  describe("Rendering", () => {
    it("renders with default props", () => {
      render(<Label>Email</Label>);
      expect(screen.getByText("Email")).toBeInTheDocument();
    });

    it("renders as a label element", () => {
      render(<Label data-testid="label">Email</Label>);
      expect(screen.getByTestId("label").tagName).toBe("LABEL");
    });

    it("renders all size variants", () => {
      const sizes = ["sm", "md", "lg"] as const;
      const sizeClasses = { sm: "text-xs", md: "text-sm", lg: "text-base" };

      for (const size of sizes) {
        const { unmount } = render(
          <Label size={size} data-testid="label">
            Text
          </Label>,
        );
        expect(screen.getByTestId("label").className).toContain(sizeClasses[size]);
        unmount();
      }
    });
  });

  describe("Required", () => {
    it("shows asterisk when required", () => {
      render(<Label required>Email</Label>);
      expect(screen.getByText("*")).toBeInTheDocument();
    });

    it("hides asterisk from screen readers", () => {
      render(<Label required>Email</Label>);
      expect(screen.getByText("*")).toHaveAttribute("aria-hidden", "true");
    });

    it("does not show asterisk by default", () => {
      render(<Label>Email</Label>);
      expect(screen.queryByText("*")).not.toBeInTheDocument();
    });
  });

  describe("Disabled", () => {
    it("applies disabled styling", () => {
      render(
        <Label disabled data-testid="label">
          Email
        </Label>,
      );
      expect(screen.getByTestId("label").className).toContain("opacity-50");
    });
  });

  describe("Class merging", () => {
    it("merges custom className", () => {
      render(
        <Label className="mb-2" data-testid="label">
          Email
        </Label>,
      );
      const el = screen.getByTestId("label");
      expect(el.className).toContain("mb-2");
      expect(el.className).toContain("font-medium");
    });
  });

  describe("Ref forwarding", () => {
    it("forwards ref", () => {
      const ref = createRef<HTMLLabelElement>();
      render(<Label ref={ref}>Email</Label>);
      expect(ref.current).toBeInstanceOf(HTMLLabelElement);
    });
  });

  describe("Accessibility", () => {
    it("has no a11y violations", async () => {
      const { container } = render(
        <>
          <Label htmlFor="email-input">Email</Label>
          <input id="email-input" type="email" />
        </>,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("associates with input via htmlFor", () => {
      render(
        <>
          <Label htmlFor="test-input">Name</Label>
          <input id="test-input" />
        </>,
      );
      const label = screen.getByText("Name");
      expect(label).toHaveAttribute("for", "test-input");
    });
  });
});
