import { createRef } from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Stack } from "./Stack";

expect.extend(toHaveNoViolations);

describe("Stack", () => {
  describe("Rendering", () => {
    it("renders with default props", () => {
      render(<Stack data-testid="stack">Content</Stack>);
      const el = screen.getByTestId("stack");
      expect(el).toBeInTheDocument();
      expect(el.className).toContain("flex");
      expect(el.className).toContain("flex-col");
    });

    it("renders children", () => {
      render(
        <Stack>
          <div>A</div>
          <div>B</div>
        </Stack>,
      );
      expect(screen.getByText("A")).toBeInTheDocument();
      expect(screen.getByText("B")).toBeInTheDocument();
    });

    it("renders as div by default", () => {
      render(<Stack data-testid="stack">Content</Stack>);
      expect(screen.getByTestId("stack").tagName).toBe("DIV");
    });
  });

  describe("Direction", () => {
    it("applies flex-col for column", () => {
      render(
        <Stack direction="column" data-testid="stack">
          Content
        </Stack>,
      );
      expect(screen.getByTestId("stack").className).toContain("flex-col");
    });

    it("applies flex-row for row", () => {
      render(
        <Stack direction="row" data-testid="stack">
          Content
        </Stack>,
      );
      expect(screen.getByTestId("stack").className).toContain("flex-row");
    });
  });

  describe("Gap", () => {
    it("applies gap-4 when gap={4}", () => {
      render(
        <Stack gap={4} data-testid="stack">
          Content
        </Stack>,
      );
      expect(screen.getByTestId("stack").className).toContain("gap-4");
    });

    it("applies gap-0 when gap={0}", () => {
      render(
        <Stack gap={0} data-testid="stack">
          Content
        </Stack>,
      );
      expect(screen.getByTestId("stack").className).toContain("gap-0");
    });

    it("does not apply gap class when undefined", () => {
      render(<Stack data-testid="stack">Content</Stack>);
      expect(screen.getByTestId("stack").className).not.toMatch(/gap-/);
    });
  });

  describe("Alignment", () => {
    it("applies items-center", () => {
      render(
        <Stack align="center" data-testid="stack">
          Content
        </Stack>,
      );
      expect(screen.getByTestId("stack").className).toContain("items-center");
    });

    it("applies items-start", () => {
      render(
        <Stack align="start" data-testid="stack">
          Content
        </Stack>,
      );
      expect(screen.getByTestId("stack").className).toContain("items-start");
    });

    it("applies items-baseline", () => {
      render(
        <Stack align="baseline" data-testid="stack">
          Content
        </Stack>,
      );
      expect(screen.getByTestId("stack").className).toContain("items-baseline");
    });
  });

  describe("Justification", () => {
    it("applies justify-center", () => {
      render(
        <Stack justify="center" data-testid="stack">
          Content
        </Stack>,
      );
      expect(screen.getByTestId("stack").className).toContain("justify-center");
    });

    it("applies justify-between", () => {
      render(
        <Stack justify="between" data-testid="stack">
          Content
        </Stack>,
      );
      expect(screen.getByTestId("stack").className).toContain("justify-between");
    });
  });

  describe("Wrap", () => {
    it("applies flex-wrap when true", () => {
      render(
        <Stack wrap data-testid="stack">
          Content
        </Stack>,
      );
      expect(screen.getByTestId("stack").className).toContain("flex-wrap");
    });

    it("does not apply flex-wrap when false", () => {
      render(
        <Stack wrap={false} data-testid="stack">
          Content
        </Stack>,
      );
      expect(screen.getByTestId("stack").className).not.toContain("flex-wrap");
    });
  });

  describe("Polymorphism", () => {
    it("renders as nav", () => {
      render(
        <Stack as="nav" aria-label="Nav" data-testid="stack">
          Content
        </Stack>,
      );
      expect(screen.getByTestId("stack").tagName).toBe("NAV");
    });

    it("renders as ul", () => {
      render(
        <Stack as="ul" data-testid="stack">
          <li>Item</li>
        </Stack>,
      );
      expect(screen.getByTestId("stack").tagName).toBe("UL");
    });
  });

  describe("Class merging", () => {
    it("merges custom className", () => {
      render(
        <Stack className="p-4" data-testid="stack">
          Content
        </Stack>,
      );
      expect(screen.getByTestId("stack").className).toContain("p-4");
      expect(screen.getByTestId("stack").className).toContain("flex");
    });
  });

  describe("Ref forwarding", () => {
    it("forwards ref", () => {
      const ref = createRef<HTMLDivElement>();
      render(<Stack ref={ref}>Content</Stack>);
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });

    it("forwards ref with polymorphic element", () => {
      const ref = createRef<HTMLElement>();
      render(
        <Stack as="section" ref={ref}>
          Content
        </Stack>,
      );
      expect(ref.current?.tagName).toBe("SECTION");
    });
  });

  describe("Accessibility", () => {
    it("has no a11y violations", async () => {
      const { container } = render(
        <Stack gap={4}>
          <div>A</div>
          <div>B</div>
        </Stack>,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("has no a11y violations as nav", async () => {
      const { container } = render(
        <Stack as="nav" aria-label="Navigation" gap={2}>
          <a href="#">Link</a>
        </Stack>,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
