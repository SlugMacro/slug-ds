import { createRef } from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { Switch } from "./Switch";

expect.extend(toHaveNoViolations);

describe("Switch", () => {
  describe("Rendering", () => {
    it("renders with default props", () => {
      render(<Switch aria-label="Toggle" />);
      expect(screen.getByRole("switch")).toBeInTheDocument();
    });

    it("renders with label", () => {
      render(<Switch label="Dark mode" />);
      expect(screen.getByText("Dark mode")).toBeInTheDocument();
    });

    it("renders with description", () => {
      render(<Switch label="Notifications" description="Receive push notifications" />);
      expect(screen.getByText("Receive push notifications")).toBeInTheDocument();
    });

    it("renders all size variants", () => {
      const sizes = ["sm", "md"] as const;
      const sizeClasses = { sm: "h-5", md: "h-6" };

      for (const size of sizes) {
        const { unmount } = render(<Switch size={size} aria-label="Toggle" />);
        expect(screen.getByRole("switch").className).toContain(sizeClasses[size]);
        unmount();
      }
    });

    it("renders checked state", () => {
      render(<Switch checked aria-label="Toggle" />);
      expect(screen.getByRole("switch")).toHaveAttribute("data-state", "checked");
    });

    it("renders disabled state", () => {
      render(<Switch disabled aria-label="Toggle" />);
      expect(screen.getByRole("switch")).toBeDisabled();
    });

    it("merges custom className", () => {
      render(<Switch className="mt-2" aria-label="Toggle" />);
      expect(screen.getByRole("switch").className).toContain("mt-2");
    });
  });

  describe("Interaction", () => {
    it("toggles on click", async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(<Switch onCheckedChange={onChange} aria-label="Toggle" />);
      await user.click(screen.getByRole("switch"));
      expect(onChange).toHaveBeenCalledWith(true);
    });

    it("toggles on Space key", async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(<Switch onCheckedChange={onChange} aria-label="Toggle" />);
      screen.getByRole("switch").focus();
      await user.keyboard(" ");
      expect(onChange).toHaveBeenCalledWith(true);
    });

    it("does not toggle when disabled", async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(<Switch disabled onCheckedChange={onChange} aria-label="Toggle" />);
      await user.click(screen.getByRole("switch"));
      expect(onChange).not.toHaveBeenCalled();
    });
  });

  describe("Ref forwarding", () => {
    it("forwards ref", () => {
      const ref = createRef<HTMLButtonElement>();
      render(<Switch ref={ref} aria-label="Toggle" />);
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });
  });

  describe("Accessibility", () => {
    it("has no a11y violations", async () => {
      const { container } = render(<Switch label="Dark mode" />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("has switch role", () => {
      render(<Switch aria-label="Toggle" />);
      expect(screen.getByRole("switch")).toBeInTheDocument();
    });
  });
});
