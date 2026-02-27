import { createRef } from "react";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Avatar } from "./Avatar";

expect.extend(toHaveNoViolations);

describe("Avatar", () => {
  describe("Rendering", () => {
    it("renders with image", () => {
      render(<Avatar src="https://example.com/avatar.jpg" alt="John Doe" />);
      // Both <span role="img"> and <img> match role "img" — use getByAltText for the <img>
      expect(screen.getByAltText("John Doe")).toBeInTheDocument();
      expect(screen.getAllByRole("img")).toHaveLength(2);
    });

    it("renders with fallback initials", () => {
      render(<Avatar fallback="JD" alt="John Doe" />);
      expect(screen.getByText("JD")).toBeInTheDocument();
    });

    it("renders with fallback icon", () => {
      render(<Avatar fallback={<span data-testid="custom-icon">icon</span>} alt="User" />);
      expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
    });

    it("renders default user icon when no src or fallback", () => {
      const { container } = render(<Avatar alt="User" />);
      expect(container.querySelector("svg")).toBeInTheDocument();
    });

    it("renders all size variants", () => {
      const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
      const sizeClasses = { xs: "h-6", sm: "h-8", md: "h-10", lg: "h-12", xl: "h-16" };

      for (const size of sizes) {
        const { unmount } = render(<Avatar size={size} alt="User" />);
        expect(screen.getByRole("img").className).toContain(sizeClasses[size]);
        unmount();
      }
    });

    it("merges custom className", () => {
      render(<Avatar className="ring-2" alt="User" />);
      expect(screen.getByRole("img").className).toContain("ring-2");
    });
  });

  describe("Image error", () => {
    it("shows fallback on image load error", () => {
      render(<Avatar src="broken.jpg" fallback="JD" alt="John Doe" />);
      const img = screen.getByAltText("John Doe");
      fireEvent.error(img);
      expect(screen.getByText("JD")).toBeInTheDocument();
    });

    it("shows default icon on image error without fallback", () => {
      render(<Avatar src="broken.jpg" alt="User" />);
      const img = screen.getByAltText("User");
      fireEvent.error(img);
      const { container } = render(<Avatar alt="User" />);
      expect(container.querySelector("svg")).toBeInTheDocument();
    });
  });

  describe("Ref forwarding", () => {
    it("forwards ref", () => {
      const ref = createRef<HTMLSpanElement>();
      render(<Avatar ref={ref} alt="User" />);
      expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    });
  });

  describe("Accessibility", () => {
    it("has no a11y violations with image", async () => {
      const { container } = render(<Avatar src="https://example.com/avatar.jpg" alt="John Doe" />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("has no a11y violations with fallback", async () => {
      const { container } = render(<Avatar fallback="JD" alt="John Doe" />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("has img role", () => {
      render(<Avatar alt="John Doe" />);
      expect(screen.getByRole("img")).toBeInTheDocument();
    });

    it("has accessible name", () => {
      render(<Avatar alt="John Doe" />);
      expect(screen.getByRole("img", { name: "John Doe" })).toBeInTheDocument();
    });
  });
});
