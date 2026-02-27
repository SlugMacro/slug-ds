import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { createRef } from "react";
import { Input } from "./Input";

expect.extend(toHaveNoViolations);

describe("Input", () => {
  describe("Rendering", () => {
    it("renders with default props", () => {
      render(<Input aria-label="Test input" />);
      expect(screen.getByRole("textbox")).toBeInTheDocument();
    });

    it("renders with label", () => {
      render(<Input label="Email" />);
      expect(screen.getByLabelText("Email")).toBeInTheDocument();
    });

    it("renders with placeholder", () => {
      render(<Input aria-label="Test" placeholder="Enter text..." />);
      expect(screen.getByPlaceholderText("Enter text...")).toBeInTheDocument();
    });

    it("renders with helper text", () => {
      render(<Input label="Email" helperText="We'll never share your email" />);
      expect(screen.getByText("We'll never share your email")).toBeInTheDocument();
    });

    it("renders with error message", () => {
      render(<Input label="Email" error errorMessage="Email is required" />);
      expect(screen.getByText("Email is required")).toBeInTheDocument();
    });

    it("shows error message over helper text when error is true", () => {
      render(
        <Input
          label="Email"
          helperText="Enter your email"
          error
          errorMessage="Email is required"
        />,
      );
      expect(screen.getByText("Email is required")).toBeInTheDocument();
      expect(screen.queryByText("Enter your email")).not.toBeInTheDocument();
    });

    it("renders with left addon", () => {
      render(<Input aria-label="URL" leftAddon={<span>https://</span>} />);
      expect(screen.getByText("https://")).toBeInTheDocument();
    });

    it("renders with right addon", () => {
      render(<Input aria-label="Email" rightAddon={<span>@gmail.com</span>} />);
      expect(screen.getByText("@gmail.com")).toBeInTheDocument();
    });

    it("renders all size variants", () => {
      const sizes = ["sm", "md"] as const;
      const sizeClasses = { sm: "h-9", md: "h-11" };

      for (const size of sizes) {
        const { unmount } = render(<Input aria-label="Test" size={size} />);
        expect(screen.getByRole("textbox").className).toContain(sizeClasses[size]);
        unmount();
      }
    });

    it("merges custom className", () => {
      render(<Input aria-label="Custom" className="my-input" />);
      expect(screen.getByRole("textbox").className).toContain("my-input");
    });
  });

  describe("Interaction", () => {
    it("accepts user input", async () => {
      const user = userEvent.setup();
      render(<Input label="Name" />);
      const input = screen.getByLabelText("Name");
      await user.type(input, "John");
      expect(input).toHaveValue("John");
    });

    it("calls onChange when typing", async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(<Input label="Name" onChange={onChange} />);
      await user.type(screen.getByLabelText("Name"), "a");
      expect(onChange).toHaveBeenCalled();
    });

    it("is disabled when disabled prop is set", () => {
      render(<Input label="Disabled" disabled />);
      expect(screen.getByLabelText("Disabled")).toBeDisabled();
    });

    it("is keyboard accessible", async () => {
      const user = userEvent.setup();
      render(<Input label="Focus me" />);
      await user.tab();
      expect(screen.getByLabelText("Focus me")).toHaveFocus();
    });
  });

  describe("Ref forwarding", () => {
    it("forwards ref to input element", () => {
      const ref = createRef<HTMLInputElement>();
      render(<Input ref={ref} aria-label="Ref" />);
      expect(ref.current).toBeInstanceOf(HTMLInputElement);
    });
  });

  describe("Accessibility", () => {
    it("has no a11y violations with label", async () => {
      const { container } = render(<Input label="Email" />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("has no a11y violations with aria-label", async () => {
      const { container } = render(<Input aria-label="Search" />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("sets aria-invalid when error", () => {
      render(<Input label="Email" error errorMessage="Required" />);
      expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
    });

    it("links error message via aria-describedby", () => {
      render(<Input label="Email" error errorMessage="Required" />);
      const input = screen.getByRole("textbox");
      const describedBy = input.getAttribute("aria-describedby");
      expect(describedBy).toBeTruthy();
      const description = document.getElementById(describedBy!);
      expect(description?.textContent).toBe("Required");
    });

    it("links helper text via aria-describedby", () => {
      render(<Input label="Email" helperText="Enter your email" />);
      const input = screen.getByRole("textbox");
      const describedBy = input.getAttribute("aria-describedby");
      expect(describedBy).toBeTruthy();
      const description = document.getElementById(describedBy!);
      expect(description?.textContent).toBe("Enter your email");
    });

    it("has no a11y violations in error state", async () => {
      const { container } = render(<Input label="Email" error errorMessage="Email is required" />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
