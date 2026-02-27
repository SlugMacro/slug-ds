import { createRef } from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Spinner } from "./Spinner";

expect.extend(toHaveNoViolations);

describe("Spinner", () => {
  describe("Rendering", () => {
    it("renders with default props", () => {
      render(<Spinner />);
      expect(screen.getByRole("status")).toBeInTheDocument();
    });

    it("renders SVG element", () => {
      const { container } = render(<Spinner />);
      expect(container.querySelector("svg")).toBeInTheDocument();
    });

    it("renders all size variants", () => {
      const sizes = ["xs", "sm", "md", "lg"] as const;
      const sizeClasses = { xs: "h-3", sm: "h-4", md: "h-5", lg: "h-8" };

      for (const size of sizes) {
        const { container } = render(<Spinner size={size} />);
        const svg = container.querySelector("svg");
        // SVG elements use SVGAnimatedString for className — use getAttribute
        expect(svg?.getAttribute("class")).toContain(sizeClasses[size]);
      }
    });

    it("merges custom className", () => {
      const { container } = render(<Spinner className="text-error" />);
      const svg = container.querySelector("svg");
      expect(svg?.getAttribute("class")).toContain("text-error");
      expect(svg?.getAttribute("class")).toContain("animate-spin");
    });
  });

  describe("Accessibility", () => {
    it("has role=status", () => {
      render(<Spinner />);
      expect(screen.getByRole("status")).toBeInTheDocument();
    });

    it("has default accessible label", () => {
      render(<Spinner />);
      expect(screen.getByText("Loading")).toBeInTheDocument();
    });

    it("accepts custom label", () => {
      render(<Spinner label="Saving" />);
      expect(screen.getByText("Saving")).toBeInTheDocument();
    });

    it("hides SVG from screen readers", () => {
      const { container } = render(<Spinner />);
      const svg = container.querySelector("svg");
      expect(svg).toHaveAttribute("aria-hidden", "true");
    });

    it("has no a11y violations", async () => {
      const { container } = render(<Spinner />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe("Ref forwarding", () => {
    it("forwards ref to SVG element", () => {
      const ref = createRef<SVGSVGElement>();
      render(<Spinner ref={ref} />);
      expect(ref.current).toBeInstanceOf(SVGSVGElement);
    });
  });
});
