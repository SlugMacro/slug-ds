import type { ComponentPropsWithoutRef } from "react";
import type * as RadixRadioGroup from "@radix-ui/react-radio-group";

export interface RadioGroupProps extends ComponentPropsWithoutRef<typeof RadixRadioGroup.Root> {
  orientation?: "horizontal" | "vertical";
  label?: string;
  error?: boolean;
  errorMessage?: string;
}

export interface RadioItemProps extends ComponentPropsWithoutRef<typeof RadixRadioGroup.Item> {
  size?: "sm" | "md";
  label?: string;
  description?: string;
}
