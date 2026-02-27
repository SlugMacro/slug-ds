import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { Dialog } from "./Dialog";

expect.extend(toHaveNoViolations);

describe("Dialog", () => {
  describe("Rendering", () => {
    it("renders trigger", () => {
      render(
        <Dialog>
          <Dialog.Trigger>
            <button>Open</button>
          </Dialog.Trigger>
          <Dialog.Content>
            <Dialog.Title>Title</Dialog.Title>
          </Dialog.Content>
        </Dialog>,
      );
      expect(screen.getByRole("button", { name: "Open" })).toBeInTheDocument();
    });

    it("does not show dialog initially", () => {
      render(
        <Dialog>
          <Dialog.Trigger>
            <button>Open</button>
          </Dialog.Trigger>
          <Dialog.Content>
            <Dialog.Title>Title</Dialog.Title>
          </Dialog.Content>
        </Dialog>,
      );
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    it("opens dialog on trigger click", async () => {
      const user = userEvent.setup();
      render(
        <Dialog>
          <Dialog.Trigger>
            <button>Open</button>
          </Dialog.Trigger>
          <Dialog.Content>
            <Dialog.Title>Dialog Title</Dialog.Title>
          </Dialog.Content>
        </Dialog>,
      );
      await user.click(screen.getByRole("button", { name: "Open" }));
      expect(screen.getByRole("dialog")).toBeInTheDocument();
      expect(screen.getByText("Dialog Title")).toBeInTheDocument();
    });

    it("renders all size variants", async () => {
      const user = userEvent.setup();
      const { rerender } = render(
        <Dialog>
          <Dialog.Trigger>
            <button>Open</button>
          </Dialog.Trigger>
          <Dialog.Content size="sm">
            <Dialog.Title>Small</Dialog.Title>
          </Dialog.Content>
        </Dialog>,
      );
      await user.click(screen.getByRole("button"));
      expect(screen.getByRole("dialog").className).toContain("max-w-sm");

      rerender(
        <Dialog open>
          <Dialog.Content size="lg">
            <Dialog.Title>Large</Dialog.Title>
          </Dialog.Content>
        </Dialog>,
      );
      expect(screen.getByRole("dialog").className).toContain("max-w-lg");
    });

    it("renders with Header, Footer, Title, Description", async () => {
      render(
        <Dialog open>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Title</Dialog.Title>
              <Dialog.Description>Description text</Dialog.Description>
            </Dialog.Header>
            <p>Body content</p>
            <Dialog.Footer>
              <button>Cancel</button>
              <button>Confirm</button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog>,
      );
      expect(screen.getByText("Title")).toBeInTheDocument();
      expect(screen.getByText("Description text")).toBeInTheDocument();
      expect(screen.getByText("Body content")).toBeInTheDocument();
      expect(screen.getByText("Cancel")).toBeInTheDocument();
      expect(screen.getByText("Confirm")).toBeInTheDocument();
    });
  });

  describe("Interaction", () => {
    it("closes on close button click", async () => {
      const user = userEvent.setup();
      render(
        <Dialog>
          <Dialog.Trigger>
            <button>Open</button>
          </Dialog.Trigger>
          <Dialog.Content>
            <Dialog.Title>Title</Dialog.Title>
          </Dialog.Content>
        </Dialog>,
      );
      await user.click(screen.getByRole("button", { name: "Open" }));
      expect(screen.getByRole("dialog")).toBeInTheDocument();
      await user.click(screen.getByRole("button", { name: "Close" }));
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    it("closes on Escape key", async () => {
      const user = userEvent.setup();
      render(
        <Dialog>
          <Dialog.Trigger>
            <button>Open</button>
          </Dialog.Trigger>
          <Dialog.Content>
            <Dialog.Title>Title</Dialog.Title>
          </Dialog.Content>
        </Dialog>,
      );
      await user.click(screen.getByRole("button", { name: "Open" }));
      expect(screen.getByRole("dialog")).toBeInTheDocument();
      await user.keyboard("{Escape}");
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    it("calls onOpenChange", async () => {
      const user = userEvent.setup();
      const onOpenChange = vi.fn();
      render(
        <Dialog onOpenChange={onOpenChange}>
          <Dialog.Trigger>
            <button>Open</button>
          </Dialog.Trigger>
          <Dialog.Content>
            <Dialog.Title>Title</Dialog.Title>
          </Dialog.Content>
        </Dialog>,
      );
      await user.click(screen.getByRole("button", { name: "Open" }));
      expect(onOpenChange).toHaveBeenCalledWith(true);
    });

    it("hides close button when showClose is false", async () => {
      render(
        <Dialog open>
          <Dialog.Content showClose={false}>
            <Dialog.Title>No close</Dialog.Title>
          </Dialog.Content>
        </Dialog>,
      );
      expect(screen.queryByRole("button", { name: "Close" })).not.toBeInTheDocument();
    });

    it("closes via Dialog.Close wrapper", async () => {
      const user = userEvent.setup();
      render(
        <Dialog>
          <Dialog.Trigger>
            <button>Open</button>
          </Dialog.Trigger>
          <Dialog.Content showClose={false}>
            <Dialog.Title>Title</Dialog.Title>
            <Dialog.Close>
              <button>Close me</button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog>,
      );
      await user.click(screen.getByRole("button", { name: "Open" }));
      expect(screen.getByRole("dialog")).toBeInTheDocument();
      await user.click(screen.getByRole("button", { name: "Close me" }));
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("has no a11y violations", async () => {
      const { container } = render(
        <Dialog open>
          <Dialog.Content>
            <Dialog.Title>Accessible Dialog</Dialog.Title>
            <Dialog.Description>This dialog is accessible.</Dialog.Description>
          </Dialog.Content>
        </Dialog>,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("has dialog role", async () => {
      render(
        <Dialog open>
          <Dialog.Content>
            <Dialog.Title>Title</Dialog.Title>
          </Dialog.Content>
        </Dialog>,
      );
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });
  });
});
