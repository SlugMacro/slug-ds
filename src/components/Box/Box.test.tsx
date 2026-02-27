import { createRef } from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Box } from "./Box";

expect.extend(toHaveNoViolations);

describe("Box", () => {
  describe("Rendering", () => {
    it("renders with default props", () => {
      render(<Box data-testid="box">Content</Box>);
      expect(screen.getByTestId("box")).toBeInTheDocument();
    });

    it("renders children", () => {
      render(<Box>Hello</Box>);
      expect(screen.getByText("Hello")).toBeInTheDocument();
    });

    it("renders as div by default", () => {
      render(<Box data-testid="box">Content</Box>);
      expect(screen.getByTestId("box").tagName).toBe("DIV");
    });
  });

  describe("Polymorphism", () => {
    it("renders as section", () => {
      render(
        <Box as="section" data-testid="box">
          Content
        </Box>,
      );
      expect(screen.getByTestId("box").tagName).toBe("SECTION");
    });

    it("renders as nav", () => {
      render(
        <Box as="nav" aria-label="Main" data-testid="box">
          Content
        </Box>,
      );
      expect(screen.getByTestId("box").tagName).toBe("NAV");
    });

    it("renders as ul", () => {
      render(
        <Box as="ul" data-testid="box">
          <li>Item</li>
        </Box>,
      );
      expect(screen.getByTestId("box").tagName).toBe("UL");
    });

    it("renders as article", () => {
      render(
        <Box as="article" data-testid="box">
          Content
        </Box>,
      );
      expect(screen.getByTestId("box").tagName).toBe("ARTICLE");
    });

    it("passes through HTML attributes", () => {
      render(
        <Box role="banner" aria-label="Header" data-testid="box">
          Content
        </Box>,
      );
      const el = screen.getByTestId("box");
      expect(el).toHaveAttribute("role", "banner");
      expect(el).toHaveAttribute("aria-label", "Header");
    });
  });

  describe("Class merging", () => {
    it("merges custom className", () => {
      render(
        <Box className="p-4 bg-bg-surface" data-testid="box">
          Content
        </Box>,
      );
      expect(screen.getByTestId("box").className).toContain("p-4");
      expect(screen.getByTestId("box").className).toContain("bg-bg-surface");
    });
  });

  describe("Ref forwarding", () => {
    it("forwards ref to DOM element", () => {
      const ref = createRef<HTMLDivElement>();
      render(<Box ref={ref}>Content</Box>);
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it("forwards ref with polymorphic element", () => {
      const ref = createRef<HTMLElement>();
      render(
        <Box as="section" ref={ref}>
          Content
        </Box>,
      );
      expect(ref.current).toBeInstanceOf(HTMLElement);
      expect(ref.current?.tagName).toBe("SECTION");
    });
  });

  describe("Accessibility", () => {
    it("has no a11y violations", async () => {
      const { container } = render(<Box>Content</Box>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("has no a11y violations as nav", async () => {
      const { container } = render(
        <Box as="nav" aria-label="Navigation">
          Content
        </Box>,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
