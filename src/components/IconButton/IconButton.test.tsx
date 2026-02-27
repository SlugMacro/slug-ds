import { createRef } from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { AddLine } from "@mingcute/react";
import { IconButton } from "./IconButton";

expect.extend(toHaveNoViolations);

describe("IconButton", () => {
  describe("Rendering", () => {
    it("renders with icon and aria-label", () => {
      render(<IconButton icon={<AddLine />} aria-label="Add item" />);
      expect(screen.getByRole("button", { name: "Add item" })).toBeInTheDocument();
    });

    it("renders all intent variants", () => {
      const intents = ["primary", "neutral", "success", "danger"] as const;
      for (const intent of intents) {
        const { unmount } = render(
          <IconButton icon={<AddLine />} aria-label="Add" intent={intent} />,
        );
        expect(screen.getByRole("button")).toBeInTheDocument();
        unmount();
      }
    });

    it("renders all variant styles", () => {
      const variants = ["solid", "subtle", "outline", "ghost"] as const;
      for (const variant of variants) {
        const { unmount } = render(
          <IconButton icon={<AddLine />} aria-label="Add" variant={variant} />,
        );
        expect(screen.getByRole("button")).toBeInTheDocument();
        unmount();
      }
    });

    it("renders all size variants", () => {
      const sizes = ["xs", "sm", "md", "lg"] as const;
      const sizeClasses = { xs: "h-7", sm: "h-9", md: "h-11", lg: "h-13" };

      for (const size of sizes) {
        const { unmount } = render(<IconButton icon={<AddLine />} aria-label="Add" size={size} />);
        expect(screen.getByRole("button").className).toContain(sizeClasses[size]);
        unmount();
      }
    });

    it("merges custom className", () => {
      render(<IconButton icon={<AddLine />} aria-label="Add" className="mt-2" />);
      expect(screen.getByRole("button").className).toContain("mt-2");
    });
  });

  describe("Interaction", () => {
    it("calls onClick", async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(<IconButton icon={<AddLine />} aria-label="Add" onClick={onClick} />);
      await user.click(screen.getByRole("button"));
      expect(onClick).toHaveBeenCalledOnce();
    });

    it("does not call onClick when disabled", async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(<IconButton icon={<AddLine />} aria-label="Add" onClick={onClick} disabled />);
      await user.click(screen.getByRole("button"));
      expect(onClick).not.toHaveBeenCalled();
    });

    it("does not call onClick when loading", async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(<IconButton icon={<AddLine />} aria-label="Add" onClick={onClick} loading />);
      await user.click(screen.getByRole("button"));
      expect(onClick).not.toHaveBeenCalled();
    });

    it("is keyboard accessible", async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(<IconButton icon={<AddLine />} aria-label="Add" onClick={onClick} />);
      screen.getByRole("button").focus();
      await user.keyboard("{Enter}");
      expect(onClick).toHaveBeenCalledOnce();
    });
  });

  describe("Loading state", () => {
    it("shows spinner when loading", () => {
      render(<IconButton icon={<AddLine />} aria-label="Add" loading />);
      expect(screen.getByRole("status")).toBeInTheDocument();
    });

    it("sets aria-busy when loading", () => {
      render(<IconButton icon={<AddLine />} aria-label="Add" loading />);
      expect(screen.getByRole("button")).toHaveAttribute("aria-busy", "true");
    });

    it("is disabled when loading", () => {
      render(<IconButton icon={<AddLine />} aria-label="Add" loading />);
      expect(screen.getByRole("button")).toBeDisabled();
    });
  });

  describe("Ref forwarding", () => {
    it("forwards ref", () => {
      const ref = createRef<HTMLButtonElement>();
      render(<IconButton ref={ref} icon={<AddLine />} aria-label="Add" />);
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });
  });

  describe("Accessibility", () => {
    it("has no a11y violations", async () => {
      const { container } = render(<IconButton icon={<AddLine />} aria-label="Add item" />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("has accessible name from aria-label", () => {
      render(<IconButton icon={<AddLine />} aria-label="Delete item" />);
      expect(screen.getByRole("button", { name: "Delete item" })).toBeInTheDocument();
    });
  });
});
