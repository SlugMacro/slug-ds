import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { axe, toHaveNoViolations } from "jest-axe";
import { Link } from "./Link";

expect.extend(toHaveNoViolations);

describe("Link", () => {
  describe("Rendering", () => {
    it("renders with default props", () => {
      render(<Link href="/test">Click me</Link>);
      const link = screen.getByRole("link", { name: "Click me" });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "/test");
    });

    it("renders all intent variants", () => {
      const intents = ["primary", "neutral"] as const;
      const intentClasses = {
        primary: "text-fg-interactive",
        neutral: "text-fg-primary",
      };
      for (const intent of intents) {
        const { unmount } = render(
          <Link href="#" intent={intent}>
            Link
          </Link>,
        );
        expect(screen.getByRole("link").className).toContain(intentClasses[intent]);
        unmount();
      }
    });

    it("renders all size variants", () => {
      const sizes = ["xs", "sm", "md"] as const;
      const sizeClasses = { xs: "text-xs", sm: "text-sm", md: "text-base" };
      for (const size of sizes) {
        const { unmount } = render(
          <Link href="#" size={size}>
            Link
          </Link>,
        );
        expect(screen.getByRole("link").className).toContain(sizeClasses[size]);
        unmount();
      }
    });

    it("renders with strong emphasis", () => {
      render(
        <Link href="#" emphasis="strong">
          Strong
        </Link>,
      );
      expect(screen.getByRole("link").className).toContain("font-medium");
    });

    it("renders with underline by default", () => {
      render(<Link href="#">Link</Link>);
      expect(screen.getByRole("link").className).toContain("border-b");
    });

    it("renders without underline when disabled", () => {
      render(
        <Link href="#" underline={false}>
          Link
        </Link>,
      );
      expect(screen.getByRole("link").className).not.toContain("border-b");
    });

    it("renders leading and trailing icons", () => {
      render(
        <Link
          href="#"
          leadingIcon={<span data-testid="lead">L</span>}
          trailingIcon={<span data-testid="trail">T</span>}
        >
          Link
        </Link>,
      );
      expect(screen.getByTestId("lead")).toBeInTheDocument();
      expect(screen.getByTestId("trail")).toBeInTheDocument();
    });

    it("applies custom className", () => {
      render(
        <Link href="#" className="custom-class">
          Link
        </Link>,
      );
      expect(screen.getByRole("link").className).toContain("custom-class");
    });
  });

  describe("Interaction", () => {
    it("handles disabled state", () => {
      render(
        <Link href="#" disabled>
          Disabled
        </Link>,
      );
      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("aria-disabled", "true");
      expect(link).toHaveAttribute("tabIndex", "-1");
      expect(link.className).toContain("pointer-events-none");
    });

    it("sets external link attributes", () => {
      render(
        <Link href="https://example.com" external>
          External
        </Link>,
      );
      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });

    it("does not set external attributes by default", () => {
      render(<Link href="#">Link</Link>);
      const link = screen.getByRole("link");
      expect(link).not.toHaveAttribute("target");
      expect(link).not.toHaveAttribute("rel");
    });
  });

  describe("Accessibility", () => {
    it("has no a11y violations", async () => {
      const { container } = render(<Link href="#">Accessible link</Link>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("has no a11y violations when disabled", async () => {
      const { container } = render(
        <Link href="#" disabled>
          Disabled link
        </Link>,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("icons are hidden from screen readers", () => {
      render(
        <Link
          href="#"
          leadingIcon={<span>icon</span>}
          trailingIcon={<span>icon</span>}
        >
          Link
        </Link>,
      );
      const hiddenElements = document.querySelectorAll("[aria-hidden='true']");
      expect(hiddenElements.length).toBe(2);
    });
  });
});
