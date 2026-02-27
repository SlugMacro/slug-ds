import { createRef } from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { IconButton } from "./IconButton";

expect.extend(toHaveNoViolations);

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

describe("IconButton", () => {
  describe("Rendering", () => {
    it("renders with icon and aria-label", () => {
      render(<IconButton icon={<PlusIcon />} aria-label="Add item" />);
      expect(screen.getByRole("button", { name: "Add item" })).toBeInTheDocument();
    });

    it("renders all intent variants", () => {
      const intents = ["primary", "secondary", "ghost", "danger"] as const;
      for (const intent of intents) {
        const { unmount } = render(
          <IconButton icon={<PlusIcon />} aria-label="Add" intent={intent} />,
        );
        expect(screen.getByRole("button")).toBeInTheDocument();
        unmount();
      }
    });

    it("renders all size variants", () => {
      const sizes = ["sm", "md", "lg"] as const;
      const sizeClasses = { sm: "h-8", md: "h-10", lg: "h-12" };

      for (const size of sizes) {
        const { unmount } = render(<IconButton icon={<PlusIcon />} aria-label="Add" size={size} />);
        expect(screen.getByRole("button").className).toContain(sizeClasses[size]);
        unmount();
      }
    });

    it("merges custom className", () => {
      render(<IconButton icon={<PlusIcon />} aria-label="Add" className="mt-2" />);
      expect(screen.getByRole("button").className).toContain("mt-2");
    });
  });

  describe("Interaction", () => {
    it("calls onClick", async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(<IconButton icon={<PlusIcon />} aria-label="Add" onClick={onClick} />);
      await user.click(screen.getByRole("button"));
      expect(onClick).toHaveBeenCalledOnce();
    });

    it("does not call onClick when disabled", async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(<IconButton icon={<PlusIcon />} aria-label="Add" onClick={onClick} disabled />);
      await user.click(screen.getByRole("button"));
      expect(onClick).not.toHaveBeenCalled();
    });

    it("does not call onClick when loading", async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(<IconButton icon={<PlusIcon />} aria-label="Add" onClick={onClick} loading />);
      await user.click(screen.getByRole("button"));
      expect(onClick).not.toHaveBeenCalled();
    });

    it("is keyboard accessible", async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();
      render(<IconButton icon={<PlusIcon />} aria-label="Add" onClick={onClick} />);
      screen.getByRole("button").focus();
      await user.keyboard("{Enter}");
      expect(onClick).toHaveBeenCalledOnce();
    });
  });

  describe("Loading state", () => {
    it("shows spinner when loading", () => {
      render(<IconButton icon={<PlusIcon />} aria-label="Add" loading />);
      expect(screen.getByRole("status")).toBeInTheDocument();
    });

    it("sets aria-busy when loading", () => {
      render(<IconButton icon={<PlusIcon />} aria-label="Add" loading />);
      expect(screen.getByRole("button")).toHaveAttribute("aria-busy", "true");
    });

    it("is disabled when loading", () => {
      render(<IconButton icon={<PlusIcon />} aria-label="Add" loading />);
      expect(screen.getByRole("button")).toBeDisabled();
    });
  });

  describe("Ref forwarding", () => {
    it("forwards ref", () => {
      const ref = createRef<HTMLButtonElement>();
      render(<IconButton ref={ref} icon={<PlusIcon />} aria-label="Add" />);
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });
  });

  describe("Accessibility", () => {
    it("has no a11y violations", async () => {
      const { container } = render(<IconButton icon={<PlusIcon />} aria-label="Add item" />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("has accessible name from aria-label", () => {
      render(<IconButton icon={<PlusIcon />} aria-label="Delete item" />);
      expect(screen.getByRole("button", { name: "Delete item" })).toBeInTheDocument();
    });
  });
});
