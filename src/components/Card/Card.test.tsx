import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { createRef } from "react";
import { Card } from "./Card";

expect.extend(toHaveNoViolations);

describe("Card", () => {
  describe("Rendering", () => {
    it("renders with default props", () => {
      render(<Card data-testid="card">Content</Card>);
      expect(screen.getByTestId("card")).toBeInTheDocument();
      expect(screen.getByText("Content")).toBeInTheDocument();
    });

    it("renders elevated variant", () => {
      render(
        <Card variant="elevated" data-testid="card">
          Content
        </Card>,
      );
      const el = screen.getByTestId("card");
      expect(el.className).toContain("shadow-md");
      expect(el.className).toContain("border");
    });

    it("renders outlined variant", () => {
      render(
        <Card variant="outlined" data-testid="card">
          Content
        </Card>,
      );
      const el = screen.getByTestId("card");
      expect(el.className).toContain("border");
      expect(el.className).not.toContain("shadow-md");
    });

    it("renders filled variant", () => {
      render(
        <Card variant="filled" data-testid="card">
          Content
        </Card>,
      );
      const el = screen.getByTestId("card");
      expect(el.className).not.toContain("border");
      expect(el.className).not.toContain("shadow");
    });

    it("applies padding variants", () => {
      render(
        <Card padding="md" data-testid="card">
          Content
        </Card>,
      );
      expect(screen.getByTestId("card").className).toContain("p-5");
    });

    it("merges custom className", () => {
      render(
        <Card className="my-card" data-testid="card">
          Content
        </Card>,
      );
      expect(screen.getByTestId("card").className).toContain("my-card");
    });
  });

  describe("Compound components", () => {
    it("renders Card.Header", () => {
      render(
        <Card>
          <Card.Header data-testid="header">Header</Card.Header>
        </Card>,
      );
      const header = screen.getByTestId("header");
      expect(header).toBeInTheDocument();
      expect(header.className).toContain("border-b");
    });

    it("renders Card.Body", () => {
      render(
        <Card>
          <Card.Body data-testid="body">Body</Card.Body>
        </Card>,
      );
      expect(screen.getByTestId("body")).toBeInTheDocument();
    });

    it("renders Card.Footer", () => {
      render(
        <Card>
          <Card.Footer data-testid="footer">Footer</Card.Footer>
        </Card>,
      );
      const footer = screen.getByTestId("footer");
      expect(footer).toBeInTheDocument();
      expect(footer.className).toContain("border-t");
    });

    it("renders full compound structure", () => {
      render(
        <Card data-testid="card">
          <Card.Header data-testid="header">Header</Card.Header>
          <Card.Body data-testid="body">Body content</Card.Body>
          <Card.Footer data-testid="footer">Footer</Card.Footer>
        </Card>,
      );
      expect(screen.getByTestId("card")).toBeInTheDocument();
      expect(screen.getByTestId("header")).toBeInTheDocument();
      expect(screen.getByTestId("body")).toBeInTheDocument();
      expect(screen.getByTestId("footer")).toBeInTheDocument();
    });

    it("sub-components merge custom className", () => {
      render(
        <Card>
          <Card.Header className="custom-header" data-testid="header">
            H
          </Card.Header>
          <Card.Body className="custom-body" data-testid="body">
            B
          </Card.Body>
          <Card.Footer className="custom-footer" data-testid="footer">
            F
          </Card.Footer>
        </Card>,
      );
      expect(screen.getByTestId("header").className).toContain("custom-header");
      expect(screen.getByTestId("body").className).toContain("custom-body");
      expect(screen.getByTestId("footer").className).toContain("custom-footer");
    });
  });

  describe("Ref forwarding", () => {
    it("forwards ref on Card", () => {
      const ref = createRef<HTMLDivElement>();
      render(<Card ref={ref}>Content</Card>);
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it("forwards ref on Card.Header", () => {
      const ref = createRef<HTMLDivElement>();
      render(
        <Card>
          <Card.Header ref={ref}>Header</Card.Header>
        </Card>,
      );
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it("forwards ref on Card.Body", () => {
      const ref = createRef<HTMLDivElement>();
      render(
        <Card>
          <Card.Body ref={ref}>Body</Card.Body>
        </Card>,
      );
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it("forwards ref on Card.Footer", () => {
      const ref = createRef<HTMLDivElement>();
      render(
        <Card>
          <Card.Footer ref={ref}>Footer</Card.Footer>
        </Card>,
      );
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
  });

  describe("Accessibility", () => {
    it("has no a11y violations", async () => {
      const { container } = render(
        <Card>
          <Card.Header>Title</Card.Header>
          <Card.Body>Content goes here</Card.Body>
          <Card.Footer>Actions</Card.Footer>
        </Card>,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
