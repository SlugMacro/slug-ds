import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { createRef } from "react";
import { Text } from "./Text";

expect.extend(toHaveNoViolations);

describe("Text", () => {
  describe("Rendering", () => {
    it("renders with default props", () => {
      render(<Text>Hello</Text>);
      expect(screen.getByText("Hello")).toBeInTheDocument();
    });

    it("renders as span by default", () => {
      render(<Text>Hello</Text>);
      expect(screen.getByText("Hello").tagName).toBe("SPAN");
    });

    it("renders with polymorphic as prop", () => {
      render(<Text as="h1">Heading</Text>);
      expect(screen.getByText("Heading").tagName).toBe("H1");
    });

    it("renders as paragraph", () => {
      render(<Text as="p">Paragraph</Text>);
      expect(screen.getByText("Paragraph").tagName).toBe("P");
    });

    it("applies variant classes", () => {
      render(<Text variant="label">Label</Text>);
      const el = screen.getByText("Label");
      expect(el.className).toContain("uppercase");
      expect(el.className).toContain("tracking-wide");
    });

    it("applies size classes", () => {
      render(<Text size="lg">Large</Text>);
      expect(screen.getByText("Large").className).toContain("text-lg");
    });

    it("applies weight classes", () => {
      render(<Text weight="bold">Bold</Text>);
      expect(screen.getByText("Bold").className).toContain("font-bold");
    });

    it("applies color classes", () => {
      render(<Text color="error">Error</Text>);
      expect(screen.getByText("Error").className).toContain("text-error");
    });

    it("applies truncate class", () => {
      render(<Text truncate>Truncated text</Text>);
      expect(screen.getByText("Truncated text").className).toContain("truncate");
    });

    it("applies align classes", () => {
      render(<Text align="center">Centered</Text>);
      expect(screen.getByText("Centered").className).toContain("text-center");
    });

    it("merges custom className", () => {
      render(<Text className="custom-class">Text</Text>);
      expect(screen.getByText("Text").className).toContain("custom-class");
    });

    it("passes through HTML attributes", () => {
      render(<Text data-testid="custom">Text</Text>);
      expect(screen.getByTestId("custom")).toBeInTheDocument();
    });
  });

  describe("Ref forwarding", () => {
    it("forwards ref to DOM element", () => {
      const ref = createRef<HTMLSpanElement>();
      render(<Text ref={ref}>Text</Text>);
      expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    });

    it("forwards ref with polymorphic element", () => {
      const ref = createRef<HTMLHeadingElement>();
      render(
        <Text as="h2" ref={ref}>
          Heading
        </Text>,
      );
      expect(ref.current).toBeInstanceOf(HTMLHeadingElement);
    });
  });

  describe("Accessibility", () => {
    it("has no a11y violations", async () => {
      const { container } = render(<Text>Accessible text</Text>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("has no a11y violations as heading", async () => {
      const { container } = render(
        <main>
          <Text as="h1">Heading</Text>
        </main>,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
