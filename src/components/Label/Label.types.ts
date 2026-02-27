import type { ComponentPropsWithoutRef } from "react";
import type * as RadixLabel from "@radix-ui/react-label";

export interface LabelProps extends ComponentPropsWithoutRef<typeof RadixLabel.Root> {
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** Show a required asterisk indicator */
  required?: boolean;
  /** Apply disabled styling */
  disabled?: boolean;
}
