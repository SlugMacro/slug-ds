import { createRef } from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe, toHaveNoViolations } from "jest-axe";
import { Radio } from "./Radio";

expect.extend(toHaveNoViolations);

describe("Radio", () => {
  const renderRadio = (groupProps = {}, items = ["Option A", "Option B", "Option C"]) =>
    render(
      <Radio {...groupProps}>
        {items.map((item) => (
          <Radio.Item key={item} value={item} label={item} />
        ))}
      </Radio>,
    );

  describe("Rendering", () => {
    it("renders group with items", () => {
      renderRadio();
      expect(screen.getByRole("radiogroup")).toBeInTheDocument();
      expect(screen.getAllByRole("radio")).toHaveLength(3);
    });

    it("renders with group label", () => {
      renderRadio({ label: "Choose one" });
      expect(screen.getByText("Choose one")).toBeInTheDocument();
    });

    it("renders with item descriptions", () => {
      render(
        <Radio>
          <Radio.Item value="a" label="Option A" description="Description A" />
        </Radio>,
      );
      expect(screen.getByText("Description A")).toBeInTheDocument();
    });

    it("renders horizontal layout", () => {
      renderRadio({ orientation: "horizontal" });
      expect(screen.getByRole("radiogroup").className).toContain("flex-row");
    });

    it("renders vertical layout by default", () => {
      renderRadio();
      expect(screen.getByRole("radiogroup").className).toContain("flex-col");
    });

    it("renders error state", () => {
      renderRadio({ error: true, errorMessage: "Please select one", label: "Options" });
      expect(screen.getByText("Please select one")).toBeInTheDocument();
    });

    it("renders disabled items", () => {
      render(
        <Radio>
          <Radio.Item value="a" label="A" disabled />
        </Radio>,
      );
      expect(screen.getByRole("radio")).toBeDisabled();
    });
  });

  describe("Interaction", () => {
    it("selects item on click", async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      renderRadio({ onValueChange: onChange });
      await user.click(screen.getByText("Option B"));
      expect(onChange).toHaveBeenCalledWith("Option B");
    });

    it("does not select disabled items", async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(
        <Radio onValueChange={onChange}>
          <Radio.Item value="a" label="A" disabled />
          <Radio.Item value="b" label="B" />
        </Radio>,
      );
      await user.click(screen.getByText("A"));
      expect(onChange).not.toHaveBeenCalled();
    });
  });

  describe("Ref forwarding", () => {
    it("forwards ref to group", () => {
      const ref = createRef<HTMLDivElement>();
      render(
        <Radio ref={ref}>
          <Radio.Item value="a" label="A" />
        </Radio>,
      );
      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
  });

  describe("Accessibility", () => {
    it("has no a11y violations", async () => {
      const { container } = renderRadio({ label: "Options" });
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it("has radiogroup role", () => {
      renderRadio();
      expect(screen.getByRole("radiogroup")).toBeInTheDocument();
    });

    it("has radio roles on items", () => {
      renderRadio();
      expect(screen.getAllByRole("radio")).toHaveLength(3);
    });
  });
});
