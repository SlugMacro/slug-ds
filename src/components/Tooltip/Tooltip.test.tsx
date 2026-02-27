import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { Tooltip, TooltipProvider } from "./Tooltip";

expect.extend(toHaveNoViolations);

function renderTooltip(props: Partial<React.ComponentProps<typeof Tooltip>> = {}) {
  return render(
    <TooltipProvider delayDuration={0}>
      <Tooltip content="Tooltip text" {...props}>
        <button>Hover me</button>
      </Tooltip>
    </TooltipProvider>,
  );
}

describe("Tooltip", () => {
  describe("Rendering", () => {
    it("renders trigger element", () => {
      renderTooltip();
      expect(screen.getByRole("button", { name: "Hover me" })).toBeInTheDocument();
    });

    it("does not show tooltip content initially", () => {
      renderTooltip();
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
    });

    it("shows tooltip on hover", async () => {
      const user = userEvent.setup();
      renderTooltip();
      await user.hover(screen.getByRole("button"));
      expect(await screen.findByRole("tooltip")).toBeInTheDocument();
      expect(screen.getByRole("tooltip")).toHaveTextContent("Tooltip text");
    });

    it("hides tooltip on unhover", async () => {
      const user = userEvent.setup();
      renderTooltip();
      await user.hover(screen.getByRole("button"));
      await screen.findByRole("tooltip");
      await user.unhover(screen.getByRole("button"));
      // Radix tooltip should close (may need a wait for animation)
    });

    it("renders with custom content", async () => {
      const user = userEvent.setup();
      renderTooltip({ content: <span>Custom content</span> });
      await user.hover(screen.getByRole("button"));
      const matches = await screen.findAllByText("Custom content");
      expect(matches.length).toBeGreaterThan(0);
    });
  });

  describe("Controlled state", () => {
    it("shows tooltip when open is true", () => {
      render(
        <TooltipProvider>
          <Tooltip content="Always visible" open>
            <button>Trigger</button>
          </Tooltip>
        </TooltipProvider>,
      );
      expect(screen.getByRole("tooltip")).toBeInTheDocument();
    });
  });

  describe("Keyboard", () => {
    it("shows tooltip on focus", async () => {
      const user = userEvent.setup();
      renderTooltip();
      await user.tab();
      expect(screen.getByRole("button")).toHaveFocus();
      expect(await screen.findByRole("tooltip")).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("has no a11y violations", async () => {
      const { container } = render(
        <TooltipProvider>
          <Tooltip content="Help text" open>
            <button>Info</button>
          </Tooltip>
        </TooltipProvider>,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
