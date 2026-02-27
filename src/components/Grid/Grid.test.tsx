import { createRef } from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Grid } from "./Grid";

expect.extend(toHaveNoViolations);

describe("Grid", () => {
  describe("Rendering", () => {
    it("renders with default props", () => {
      render(<Grid data-testid="grid">Content</Grid>);
      const el = screen.getByTestId("grid");
      expect(el).toBeInTheDocument();
      expect(el.className).toContain("grid");
      expect(el.className).toContain("grid-cols-1");
    });

    it("renders children", () => {
      render(
        <Grid columns={2}>
          <div>A</div>
          <div>B</div>
        </Grid>,
      );
      expect(screen.getByText("A")).toBeInTheDocument();
      expect(screen.getByText("B")).toBeInTheDocument();
    });

    it("renders as div by default", () => {
      render(<Grid data-testid="grid">Content</Grid>);
      expect(screen.getByTestId("grid").tagName).toBe("DIV");
    });
  });

  describe("Columns", () => {
    it("applies grid-cols-3", () => {
      render(
        <Grid columns={3} data-testid="grid">
          Content
        </Grid>,
      );
      expect(screen.getByTestId("grid").className).toContain("grid-cols-3");
    });

    it("applies grid-cols-12", () => {
      render(
        <Grid columns={12} data-testid="grid">
          Content
        </Grid>,
      );
      expect(screen.getByTestId("grid").className).toContain("grid-cols-12");
    });

    it("applies grid-cols-none", () => {
      render(
        <Grid columns="none" data-testid="grid">
          Content
        </Grid>,
      );
      expect(screen.getByTestId("grid").className).toContain("grid-cols-none");
    });
  });

  describe("Rows", () => {
    it("applies grid-rows-2", () => {
      render(
        <Grid rows={2} data-testid="grid">
          Content
        </Grid>,
      );
      expect(screen.getByTestId("grid").className).toContain("grid-rows-2");
    });

    it("applies grid-rows-none", () => {
      render(
        <Grid rows="none" data-testid="grid">
          Content
        </Grid>,
      );
      expect(screen.getByTestId("grid").className).toContain("grid-rows-none");
    });
  });

  describe("Gap", () => {
    it("applies gap-4", () => {
      render(
        <Grid gap={4} data-testid="grid">
          Content
        </Grid>,
      );
      expect(screen.getByTestId("grid").className).toContain("gap-4");
    });

    it("applies gap-x-4", () => {
      render(
        <Grid gapX={4} data-testid="grid">
          Content
        </Grid>,
      );
      expect(screen.getByTestId("grid").className).toContain("gap-x-4");
    });

    it("applies gap-y-2", () => {
      render(
        <Grid gapY={2} data-testid="grid">
          Content
        </Grid>,
      );
      expect(screen.getByTestId("grid").className).toContain("gap-y-2");
    });

    it("does not apply gap classes when undefined", () => {
      render(<Grid data-testid="grid">Content</Grid>);
      expect(screen.getByTestId("grid").className).not.toMatch(/gap-/);
    });
  });

  describe("Alignment", () => {
    it("applies items-center", () => {
      render(
        <Grid alignItems="center" data-testid="grid">
          Content
        </Grid>,
      );
      expect(screen.getByTestId("grid").className).toContain("items-center");
    });

    it("applies justify-items-center", () => {
      render(
        <Grid justifyItems="center" data-testid="grid">
          Content
        </Grid>,
      );
      expect(screen.getByTestId("grid").className).toContain("justify-items-center");
    });
  });

  describe("Flow", () => {
    it("applies grid-flow-row", () => {
      render(
        <Grid flow="row" data-testid="grid">
          Content
        </Grid>,
      );
      expect(screen.getByTestId("grid").className).toContain("grid-flow-row");
    });

    it("applies grid-flow-col", () => {
      render(
        <Grid flow="col" data-testid="grid">
          Content
        </Grid>,
      );
      expect(screen.getByTestId("grid").className).toContain("grid-flow-col");
    });

    it("applies grid-flow-dense", () => {
      render(
        <Grid flow="dense" data-testid="grid">
          Content
        </Grid>,
      );
      expect(screen.getByTestId("grid").className).toContain("grid-flow-dense");
    });
  });

  describe("Polymorphism", () => {
    it("renders as section", () => {
      render(
        <Grid as="section" data-testid="grid">
          Content
        </Grid>,
      );
      expect(screen.getByTestId("grid").tagName).toBe("SECTION");
    });

    it("renders as ul", () => {
      render(
        <Grid as="ul" data-testid="grid">
          <li>Item</li>
        </Grid>,
      );
      expect(screen.getByTestId("grid").tagName).toBe("UL");
    });
  });

  describe("Class merging", () => {
    it("merges custom className", () => {
      render(
        <Grid className="p-4" data-testid="grid">
          Content
        </Grid>,
      );
      expect(screen.getByTestId("grid").className).toContain("p-4");
      expect(screen.getByTestId("grid").className).toContain("grid");
    });
  });

  describe("Ref forwarding", () => {
    it("forwards ref", () => {
      const ref = createRef<HTMLDivElement>();
      render(<Grid ref={ref}>Content</Grid>);
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
  });

  describe("Accessibility", () => {
    it("has no a11y violations", async () => {
      const { container } = render(
        <Grid columns={3} gap={4}>
          <div>A</div>
          <div>B</div>
          <div>C</div>
        </Grid>,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
