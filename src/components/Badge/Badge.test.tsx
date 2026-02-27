import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { createRef } from "react";
import { Badge } from "./Badge";

expect.extend(toHaveNoViolations);

describe("Badge", () => {
  describe("Rendering", () => {
    it("renders with default props", () => {
      render(<Badge>New</Badge>);
      expect(screen.getByText("New")).toBeInTheDocument();
    });

    it("renders as span element", () => {
      render(<Badge>Tag</Badge>);
      expect(screen.getByText("Tag").tagName).toBe("SPAN");
    });

    it("applies solid variant classes", () => {
      render(
        <Badge variant="solid" color="accent">
          Solid
        </Badge>,
      );
      const el = screen.getByText("Solid");
      expect(el.className).toContain("bg-accent-primary");
      expect(el.className).toContain("text-fg-on-accent");
    });

    it("applies subtle variant classes", () => {
      render(
        <Badge variant="subtle" color="success">
          Subtle
        </Badge>,
      );
      const el = screen.getByText("Subtle");
      expect(el.className).toContain("text-success");
    });

    it("applies outline variant classes", () => {
      render(
        <Badge variant="outline" color="error">
          Outline
        </Badge>,
      );
      const el = screen.getByText("Outline");
      expect(el.className).toContain("border-error");
      expect(el.className).toContain("text-error");
    });

    it("applies size sm", () => {
      render(<Badge size="sm">Small</Badge>);
      expect(screen.getByText("Small").className).toContain("text-xs");
    });

    it("applies size md", () => {
      render(<Badge size="md">Medium</Badge>);
      expect(screen.getByText("Medium").className).toContain("text-sm");
    });

    it("merges custom className", () => {
      render(<Badge className="my-class">Custom</Badge>);
      expect(screen.getByText("Custom").className).toContain("my-class");
    });

    it("passes through HTML attributes", () => {
      render(<Badge data-testid="badge">Test</Badge>);
      expect(screen.getByTestId("badge")).toBeInTheDocument();
    });
  });

  describe("Ref forwarding", () => {
    it("forwards ref to span element", () => {
      const ref = createRef<HTMLSpanElement>();
      render(<Badge ref={ref}>Ref</Badge>);
      expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    });
  });

  describe("Accessibility", () => {
    it("has no a11y violations", async () => {
      const { container } = render(<Badge>Accessible</Badge>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
