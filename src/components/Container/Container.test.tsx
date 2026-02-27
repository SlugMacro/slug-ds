import { createRef } from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Container } from "./Container";

expect.extend(toHaveNoViolations);

describe("Container", () => {
  describe("Rendering", () => {
    it("renders with default props", () => {
      render(<Container data-testid="container">Content</Container>);
      const el = screen.getByTestId("container");
      expect(el).toBeInTheDocument();
      expect(el.tagName).toBe("DIV");
    });

    it("renders children", () => {
      render(<Container>Hello world</Container>);
      expect(screen.getByText("Hello world")).toBeInTheDocument();
    });
  });

  describe("Size", () => {
    it("applies max-w-screen-sm", () => {
      render(
        <Container size="sm" data-testid="container">
          Content
        </Container>,
      );
      expect(screen.getByTestId("container").className).toContain("max-w-screen-sm");
    });

    it("applies max-w-screen-md", () => {
      render(
        <Container size="md" data-testid="container">
          Content
        </Container>,
      );
      expect(screen.getByTestId("container").className).toContain("max-w-screen-md");
    });

    it("applies max-w-screen-lg by default", () => {
      render(<Container data-testid="container">Content</Container>);
      expect(screen.getByTestId("container").className).toContain("max-w-screen-lg");
    });

    it("applies max-w-screen-xl", () => {
      render(
        <Container size="xl" data-testid="container">
          Content
        </Container>,
      );
      expect(screen.getByTestId("container").className).toContain("max-w-screen-xl");
    });

    it("applies max-w-full", () => {
      render(
        <Container size="full" data-testid="container">
          Content
        </Container>,
      );
      expect(screen.getByTestId("container").className).toContain("max-w-full");
    });
  });

  describe("Padding", () => {
    it("applies padding by default", () => {
      render(<Container data-testid="container">Content</Container>);
      expect(screen.getByTestId("container").className).toContain("px-4");
    });

    it("removes padding when false", () => {
      render(
        <Container padding={false} data-testid="container">
          Content
        </Container>,
      );
      expect(screen.getByTestId("container").className).not.toContain("px-4");
    });
  });

  describe("Base classes", () => {
    it("applies mx-auto and w-full", () => {
      render(<Container data-testid="container">Content</Container>);
      const el = screen.getByTestId("container");
      expect(el.className).toContain("mx-auto");
      expect(el.className).toContain("w-full");
    });
  });

  describe("Class merging", () => {
    it("merges custom className", () => {
      render(
        <Container className="py-8" data-testid="container">
          Content
        </Container>,
      );
      const el = screen.getByTestId("container");
      expect(el.className).toContain("py-8");
      expect(el.className).toContain("mx-auto");
    });
  });

  describe("Ref forwarding", () => {
    it("forwards ref", () => {
      const ref = createRef<HTMLDivElement>();
      render(<Container ref={ref}>Content</Container>);
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
  });

  describe("Accessibility", () => {
    it("has no a11y violations", async () => {
      const { container } = render(
        <Container>
          <p>Content inside container</p>
        </Container>,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
