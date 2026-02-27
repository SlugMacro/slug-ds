import { createRef } from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { Textarea } from "./Textarea";

expect.extend(toHaveNoViolations);

describe("Textarea", () => {
  describe("Rendering", () => {
    it("renders with default props", () => {
      render(<Textarea aria-label="Message" />);
      expect(screen.getByRole("textbox")).toBeInTheDocument();
    });

    it("renders with label", () => {
      render(<Textarea label="Message" />);
      expect(screen.getByLabelText("Message")).toBeInTheDocument();
    });

    it("renders with placeholder", () => {
      render(<Textarea placeholder="Type here..." aria-label="Message" />);
      expect(screen.getByPlaceholderText("Type here...")).toBeInTheDocument();
    });

    it("renders with helper text", () => {
      render(<Textarea helperText="Max 500 characters" aria-label="Message" />);
      expect(screen.getByText("Max 500 characters")).toBeInTheDocument();
    });

    it("renders with error message", () => {
      render(<Textarea error errorMessage="Required field" aria-label="Message" />);
      expect(screen.getByText("Required field")).toBeInTheDocument();
    });

    it("shows error message over helper text", () => {
      render(
        <Textarea error errorMessage="Required" helperText="Optional help" aria-label="Message" />,
      );
      expect(screen.getByText("Required")).toBeInTheDocument();
      expect(screen.queryByText("Optional help")).not.toBeInTheDocument();
    });

    it("renders all size variants", () => {
      const sizes = ["sm", "md"] as const;
      const sizeClasses = { sm: "rounded-md", md: "rounded-lg" };

      for (const size of sizes) {
        const { unmount } = render(<Textarea size={size} aria-label="Message" />);
        expect(screen.getByRole("textbox").className).toContain(sizeClasses[size]);
        unmount();
      }
    });

    it("applies resize class", () => {
      render(<Textarea resize="none" aria-label="Message" />);
      expect(screen.getByRole("textbox").className).toContain("resize-none");
    });

    it("merges custom className", () => {
      render(<Textarea className="min-h-32" aria-label="Message" />);
      const el = screen.getByRole("textbox");
      expect(el.className).toContain("min-h-32");
    });
  });

  describe("Interaction", () => {
    it("accepts user input", async () => {
      const user = userEvent.setup();
      render(<Textarea aria-label="Message" />);
      const textarea = screen.getByRole("textbox");
      await user.type(textarea, "Hello world");
      expect(textarea).toHaveValue("Hello world");
    });

    it("is disabled when disabled prop set", () => {
      render(<Textarea disabled aria-label="Message" />);
      expect(screen.getByRole("textbox")).toBeDisabled();
    });
  });

  describe("Ref forwarding", () => {
    it("forwards ref to textarea element", () => {
      const ref = createRef<HTMLTextAreaElement>();
      render(<Textarea ref={ref} aria-label="Message" />);
      expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
    });
  });

  describe("Accessibility", () => {
    it("has no a11y violations with label", async () => {
      const { container } = render(<Textarea label="Message" />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("has no a11y violations with aria-label", async () => {
      const { container } = render(<Textarea aria-label="Message" />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("sets aria-invalid when error", () => {
      render(<Textarea error aria-label="Message" />);
      expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
    });

    it("links error message via aria-describedby", () => {
      render(<Textarea error errorMessage="Required" aria-label="Message" />);
      const textarea = screen.getByRole("textbox");
      const describedBy = textarea.getAttribute("aria-describedby");
      expect(describedBy).toBeTruthy();
      expect(document.getElementById(describedBy!)).toHaveTextContent("Required");
    });
  });
});
