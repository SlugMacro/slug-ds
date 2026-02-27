import type { ComponentPropsWithoutRef } from "react";
import type * as RadixCheckbox from "@radix-ui/react-checkbox";

export interface CheckboxProps extends ComponentPropsWithoutRef<typeof RadixCheckbox.Root> {
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** Label text displayed next to the checkbox */
  label?: string;
  /** Helper text below the label */
  description?: string;
  /** Error state */
  error?: boolean;
  /** Error message */
  errorMessage?: string;
}
