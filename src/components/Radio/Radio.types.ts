import type { ComponentPropsWithoutRef } from "react";
import type * as RadixRadioGroup from "@radix-ui/react-radio-group";

export interface RadioGroupProps extends ComponentPropsWithoutRef<typeof RadixRadioGroup.Root> {
  /** @default "vertical" */
  orientation?: "horizontal" | "vertical";
  /** Label for the radio group */
  label?: string;
  error?: boolean;
  errorMessage?: string;
}

export interface RadioItemProps extends ComponentPropsWithoutRef<typeof RadixRadioGroup.Item> {
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** Label text for this option */
  label?: string;
  /** Description text below the label */
  description?: string;
}
