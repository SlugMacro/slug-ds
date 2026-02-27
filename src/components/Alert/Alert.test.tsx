import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { Alert } from "./Alert";

expect.extend(toHaveNoViolations);

describe("Alert", () => {
  describe("Rendering", () => {
    it("renders with default props", () => {
      render(
        <Alert>
          <Alert.Title>Title</Alert.Title>
          <Alert.Description>Description</Alert.Description>
        </Alert>,
      );
      expect(screen.getByText("Title")).toBeInTheDocument();
      expect(screen.getByText("Description")).toBeInTheDocument();
    });

    it("renders all intent variants", () => {
      const intents = ["info", "success", "warning", "error"] as const;
      intents.forEach((intent) => {
        const { unmount } = render(
          <Alert intent={intent}>
            <Alert.Title>{intent}</Alert.Title>
          </Alert>,
        );
        expect(screen.getByRole("alert")).toBeInTheDocument();
        unmount();
      });
    });

    it("renders all variant styles", () => {
      const variants = ["subtle", "solid", "outline"] as const;
      variants.forEach((variant) => {
        const { unmount } = render(
          <Alert variant={variant}>
            <Alert.Title>{variant}</Alert.Title>
          </Alert>,
        );
        expect(screen.getByRole("alert")).toBeInTheDocument();
        unmount();
      });
    });

    it("renders with icon", () => {
      render(
        <Alert icon={<span data-testid="icon">!</span>}>
          <Alert.Title>With icon</Alert.Title>
        </Alert>,
      );
      expect(screen.getByTestId("icon")).toBeInTheDocument();
    });

    it("renders close button when onClose provided", () => {
      render(
        <Alert onClose={() => {}}>
          <Alert.Title>Dismissible</Alert.Title>
        </Alert>,
      );
      expect(screen.getByRole("button", { name: "Dismiss" })).toBeInTheDocument();
    });

    it("does not render close button without onClose", () => {
      render(
        <Alert>
          <Alert.Title>Non-dismissible</Alert.Title>
        </Alert>,
      );
      expect(screen.queryByRole("button", { name: "Dismiss" })).not.toBeInTheDocument();
    });

    it("merges custom className", () => {
      render(
        <Alert className="custom-class">
          <Alert.Title>Custom</Alert.Title>
        </Alert>,
      );
      expect(screen.getByRole("alert")).toHaveClass("custom-class");
    });
  });

  describe("Interaction", () => {
    it("calls onClose when dismiss button clicked", async () => {
      const user = userEvent.setup();
      const onClose = vi.fn();
      render(
        <Alert onClose={onClose}>
          <Alert.Title>Dismissible</Alert.Title>
        </Alert>,
      );
      await user.click(screen.getByRole("button", { name: "Dismiss" }));
      expect(onClose).toHaveBeenCalledOnce();
    });
  });

  describe("Accessibility", () => {
    it("has no a11y violations", async () => {
      const { container } = render(
        <Alert>
          <Alert.Title>Accessible Alert</Alert.Title>
          <Alert.Description>This is accessible.</Alert.Description>
        </Alert>,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("has alert role", () => {
      render(
        <Alert>
          <Alert.Title>Alert</Alert.Title>
        </Alert>,
      );
      expect(screen.getByRole("alert")).toBeInTheDocument();
    });

    it("dismiss button is keyboard accessible", async () => {
      const user = userEvent.setup();
      const onClose = vi.fn();
      render(
        <Alert onClose={onClose}>
          <Alert.Title>Dismissible</Alert.Title>
        </Alert>,
      );
      await user.tab();
      expect(screen.getByRole("button", { name: "Dismiss" })).toHaveFocus();
      await user.keyboard("{Enter}");
      expect(onClose).toHaveBeenCalledOnce();
    });
  });
});
