import type { ComponentPropsWithoutRef } from "react";
import type * as RadixSwitch from "@radix-ui/react-switch";

export interface SwitchProps extends ComponentPropsWithoutRef<typeof RadixSwitch.Root> {
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** Label text */
  label?: string;
  /** Description text below the label */
  description?: string;
}
