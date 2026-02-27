import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { createRef } from "react";
import { Heading } from "./Heading";

expect.extend(toHaveNoViolations);

describe("Heading", () => {
  describe("Rendering", () => {
    it("renders with default props", () => {
      render(<Heading>Hello</Heading>);
      expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Hello");
    });

    it("renders all heading levels", () => {
      const { rerender } = render(<Heading level={1}>H1</Heading>);
      expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();

      rerender(<Heading level={3}>H3</Heading>);
      expect(screen.getByRole("heading", { level: 3 })).toBeInTheDocument();

      rerender(<Heading level={6}>H6</Heading>);
      expect(screen.getByRole("heading", { level: 6 })).toBeInTheDocument();
    });

    it("maps level to default size", () => {
      const { container } = render(<Heading level={1}>H1</Heading>);
      expect(container.firstChild).toHaveClass("text-3xl");
    });

    it("allows size override", () => {
      const { container } = render(
        <Heading level={1} size="sm">
          Small H1
        </Heading>,
      );
      expect(container.firstChild).toHaveClass("text-sm");
      expect(container.firstChild).not.toHaveClass("text-3xl");
    });

    it("renders all weight variants", () => {
      const { container, rerender } = render(<Heading weight="medium">M</Heading>);
      expect(container.firstChild).toHaveClass("font-medium");

      rerender(<Heading weight="semibold">S</Heading>);
      expect(container.firstChild).toHaveClass("font-semibold");

      rerender(<Heading weight="bold">B</Heading>);
      expect(container.firstChild).toHaveClass("font-bold");
    });

    it("renders all color variants", () => {
      const { container } = render(<Heading color="accent">Accent</Heading>);
      expect(container.firstChild).toHaveClass("text-accent-primary");
    });

    it("applies truncate", () => {
      const { container } = render(<Heading truncate>Long text</Heading>);
      expect(container.firstChild).toHaveClass("truncate");
    });

    it("merges custom className", () => {
      const { container } = render(<Heading className="custom-class">Hello</Heading>);
      expect(container.firstChild).toHaveClass("custom-class");
    });

    it("passes through HTML attributes", () => {
      render(<Heading data-testid="heading">Test</Heading>);
      expect(screen.getByTestId("heading")).toBeInTheDocument();
    });
  });

  describe("Ref forwarding", () => {
    it("forwards ref to heading element", () => {
      const ref = createRef<HTMLHeadingElement>();
      render(<Heading ref={ref}>Ref</Heading>);
      expect(ref.current).toBeInstanceOf(HTMLHeadingElement);
      expect(ref.current?.tagName).toBe("H2");
    });
  });

  describe("Accessibility", () => {
    it("has no a11y violations", async () => {
      const { container } = render(<Heading>Accessible Heading</Heading>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("has heading role", () => {
      render(<Heading>Hello</Heading>);
      expect(screen.getByRole("heading")).toBeInTheDocument();
    });
  });
});
