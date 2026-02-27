import { createRef } from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { Checkbox } from "./Checkbox";

expect.extend(toHaveNoViolations);

describe("Checkbox", () => {
  describe("Rendering", () => {
    it("renders with default props", () => {
      render(<Checkbox aria-label="Accept" />);
      expect(screen.getByRole("checkbox")).toBeInTheDocument();
    });

    it("renders with label", () => {
      render(<Checkbox label="Accept terms" />);
      expect(screen.getByText("Accept terms")).toBeInTheDocument();
    });

    it("renders all size variants", () => {
      const sizes = ["sm", "md"] as const;
      const sizeClasses = { sm: "h-4", md: "h-5" };

      for (const size of sizes) {
        const { unmount } = render(<Checkbox size={size} aria-label="Test" />);
        expect(screen.getByRole("checkbox").className).toContain(sizeClasses[size]);
        unmount();
      }
    });

    it("renders disabled state", () => {
      render(<Checkbox disabled aria-label="Test" />);
      expect(screen.getByRole("checkbox")).toBeDisabled();
    });

    it("renders with description", () => {
      render(<Checkbox label="Terms" description="You must accept to continue" />);
      expect(screen.getByText("You must accept to continue")).toBeInTheDocument();
    });

    it("renders error state", () => {
      render(<Checkbox label="Terms" error errorMessage="Required" />);
      expect(screen.getByText("Required")).toBeInTheDocument();
    });

    it("shows error message over description", () => {
      render(<Checkbox label="Terms" error errorMessage="Required" description="Help text" />);
      expect(screen.getByText("Required")).toBeInTheDocument();
      expect(screen.queryByText("Help text")).not.toBeInTheDocument();
    });

    it("merges custom className", () => {
      render(<Checkbox className="mt-2" aria-label="Test" />);
      expect(screen.getByRole("checkbox").className).toContain("mt-2");
    });
  });

  describe("Interaction", () => {
    it("toggles on click", async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(<Checkbox onCheckedChange={onChange} aria-label="Test" />);
      await user.click(screen.getByRole("checkbox"));
      expect(onChange).toHaveBeenCalledWith(true);
    });

    it("toggles on Space key", async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(<Checkbox onCheckedChange={onChange} aria-label="Test" />);
      screen.getByRole("checkbox").focus();
      await user.keyboard(" ");
      expect(onChange).toHaveBeenCalledWith(true);
    });

    it("does not toggle when disabled", async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(<Checkbox disabled onCheckedChange={onChange} aria-label="Test" />);
      await user.click(screen.getByRole("checkbox"));
      expect(onChange).not.toHaveBeenCalled();
    });
  });

  describe("Checked states", () => {
    it("renders checked state", () => {
      render(<Checkbox checked aria-label="Test" />);
      expect(screen.getByRole("checkbox")).toHaveAttribute("data-state", "checked");
    });

    it("renders unchecked state", () => {
      render(<Checkbox checked={false} aria-label="Test" />);
      expect(screen.getByRole("checkbox")).toHaveAttribute("data-state", "unchecked");
    });

    it("renders indeterminate state", () => {
      render(<Checkbox checked="indeterminate" aria-label="Test" />);
      expect(screen.getByRole("checkbox")).toHaveAttribute("data-state", "indeterminate");
    });
  });

  describe("Ref forwarding", () => {
    it("forwards ref", () => {
      const ref = createRef<HTMLButtonElement>();
      render(<Checkbox ref={ref} aria-label="Test" />);
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });
  });

  describe("Accessibility", () => {
    it("has no a11y violations", async () => {
      const { container } = render(<Checkbox label="Accept terms" />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("has no a11y violations in error state", async () => {
      const { container } = render(<Checkbox label="Accept terms" error errorMessage="Required" />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("has checkbox role", () => {
      render(<Checkbox aria-label="Test" />);
      expect(screen.getByRole("checkbox")).toBeInTheDocument();
    });

    it("sets aria-invalid when error", () => {
      render(<Checkbox error aria-label="Test" />);
      expect(screen.getByRole("checkbox")).toHaveAttribute("aria-invalid", "true");
    });
  });
});
