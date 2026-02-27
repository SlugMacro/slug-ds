import type { ComponentPropsWithoutRef } from "react";
import type * as RadixCheckbox from "@radix-ui/react-checkbox";

export interface CheckboxProps extends ComponentPropsWithoutRef<typeof RadixCheckbox.Root> {
  size?: "sm" | "md";
  label?: string;
  description?: string;
  error?: boolean;
  errorMessage?: string;
}
