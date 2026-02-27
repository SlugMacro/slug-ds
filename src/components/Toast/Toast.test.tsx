import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { Toaster } from "./Toast";
import { toast } from "sonner";

// sonner uses timers for showing/dismissing toasts
beforeEach(() => {
  vi.useRealTimers();
});

function renderToaster(props = {}) {
  return render(<Toaster duration={Infinity} {...props} />);
}

describe("Toast", () => {
  describe("Rendering", () => {
    it("renders toaster container", () => {
      renderToaster();
      // sonner renders an aria-live region for accessibility
      expect(screen.getByRole("region", { hidden: true })).toBeInTheDocument();
    });

    it("shows a toast message", async () => {
      renderToaster();
      toast("Hello world");
      await waitFor(() => {
        expect(screen.getByText("Hello world")).toBeInTheDocument();
      });
    });

    it("shows a toast with description", async () => {
      renderToaster();
      toast("Title", { description: "Description text" });
      await waitFor(() => {
        expect(screen.getByText("Title")).toBeInTheDocument();
        expect(screen.getByText("Description text")).toBeInTheDocument();
      });
    });
  });

  describe("Variants", () => {
    it("renders success toast", async () => {
      renderToaster();
      toast.success("Saved successfully");
      await waitFor(() => {
        expect(screen.getByText("Saved successfully")).toBeInTheDocument();
      });
    });

    it("renders error toast", async () => {
      renderToaster();
      toast.error("Something went wrong");
      await waitFor(() => {
        expect(screen.getByText("Something went wrong")).toBeInTheDocument();
      });
    });

    it("renders warning toast", async () => {
      renderToaster();
      toast.warning("Check your input");
      await waitFor(() => {
        expect(screen.getByText("Check your input")).toBeInTheDocument();
      });
    });

    it("renders info toast", async () => {
      renderToaster();
      toast.info("New update available");
      await waitFor(() => {
        expect(screen.getByText("New update available")).toBeInTheDocument();
      });
    });
  });

  describe("Interaction", () => {
    it("renders toast with action button", async () => {
      renderToaster();
      toast("File deleted", {
        action: { label: "Undo", onClick: vi.fn() },
      });
      await waitFor(() => {
        expect(screen.getByText("Undo")).toBeInTheDocument();
      });
    });

    it("shows close button when configured", async () => {
      renderToaster({ closeButton: true });
      toast("Closeable toast");
      await waitFor(() => {
        expect(screen.getByText("Closeable toast")).toBeInTheDocument();
      });
      // sonner renders a close button with aria-label
      const closeBtn = document.querySelector("[data-close-button]");
      expect(closeBtn).toBeInTheDocument();
    });

    it("dismisses toast programmatically", async () => {
      renderToaster();
      const id = toast("Will be dismissed");
      await waitFor(() => {
        expect(screen.getByText("Will be dismissed")).toBeInTheDocument();
      });
      toast.dismiss(id);
      await waitFor(() => {
        expect(screen.queryByText("Will be dismissed")).not.toBeInTheDocument();
      });
    });
  });

  describe("Configuration", () => {
    it("respects position prop", async () => {
      renderToaster({ position: "top-center" });
      toast("Position test");
      await waitFor(() => {
        expect(screen.getByText("Position test")).toBeInTheDocument();
      });
    });

    it("accepts all valid props without error", () => {
      expect(() =>
        render(
          <Toaster
            theme="dark"
            position="top-left"
            closeButton
            richColors
            visibleToasts={5}
            duration={3000}
            expand
          />,
        ),
      ).not.toThrow();
    });
  });
});
