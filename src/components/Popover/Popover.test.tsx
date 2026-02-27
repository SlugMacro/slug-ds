import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { Popover } from "./Popover";

expect.extend(toHaveNoViolations);

describe("Popover", () => {
  describe("Rendering", () => {
    it("renders trigger", () => {
      render(
        <Popover>
          <Popover.Trigger>
            <button>Open</button>
          </Popover.Trigger>
          <Popover.Content>
            <p>Popover content</p>
          </Popover.Content>
        </Popover>,
      );
      expect(screen.getByRole("button", { name: "Open" })).toBeInTheDocument();
    });

    it("does not show popover initially", () => {
      render(
        <Popover>
          <Popover.Trigger>
            <button>Open</button>
          </Popover.Trigger>
          <Popover.Content>
            <p>Popover content</p>
          </Popover.Content>
        </Popover>,
      );
      expect(screen.queryByText("Popover content")).not.toBeInTheDocument();
    });

    it("opens popover on trigger click", async () => {
      const user = userEvent.setup();
      render(
        <Popover>
          <Popover.Trigger>
            <button>Open</button>
          </Popover.Trigger>
          <Popover.Content>
            <p>Popover content</p>
          </Popover.Content>
        </Popover>,
      );
      await user.click(screen.getByRole("button", { name: "Open" }));
      expect(screen.getByText("Popover content")).toBeInTheDocument();
    });
  });

  describe("Interaction", () => {
    it("closes on Escape key", async () => {
      const user = userEvent.setup();
      render(
        <Popover>
          <Popover.Trigger>
            <button>Open</button>
          </Popover.Trigger>
          <Popover.Content>
            <p>Popover content</p>
          </Popover.Content>
        </Popover>,
      );
      await user.click(screen.getByRole("button", { name: "Open" }));
      expect(screen.getByText("Popover content")).toBeInTheDocument();
      await user.keyboard("{Escape}");
      expect(screen.queryByText("Popover content")).not.toBeInTheDocument();
    });

    it("calls onOpenChange", async () => {
      const user = userEvent.setup();
      const onOpenChange = vi.fn();
      render(
        <Popover onOpenChange={onOpenChange}>
          <Popover.Trigger>
            <button>Open</button>
          </Popover.Trigger>
          <Popover.Content>
            <p>Popover content</p>
          </Popover.Content>
        </Popover>,
      );
      await user.click(screen.getByRole("button", { name: "Open" }));
      expect(onOpenChange).toHaveBeenCalledWith(true);
    });

    it("closes via Popover.Close", async () => {
      const user = userEvent.setup();
      render(
        <Popover>
          <Popover.Trigger>
            <button>Open</button>
          </Popover.Trigger>
          <Popover.Content>
            <p>Popover content</p>
            <Popover.Close>
              <button>Close me</button>
            </Popover.Close>
          </Popover.Content>
        </Popover>,
      );
      await user.click(screen.getByRole("button", { name: "Open" }));
      expect(screen.getByText("Popover content")).toBeInTheDocument();
      await user.click(screen.getByRole("button", { name: "Close me" }));
      expect(screen.queryByText("Popover content")).not.toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("has no a11y violations", async () => {
      const { container } = render(
        <Popover open>
          <Popover.Trigger>
            <button>Open</button>
          </Popover.Trigger>
          <Popover.Content>
            <p>Popover content</p>
          </Popover.Content>
        </Popover>,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
