import type { ComponentPropsWithoutRef } from "react";
import type * as RadixSwitch from "@radix-ui/react-switch";

export interface SwitchProps extends ComponentPropsWithoutRef<typeof RadixSwitch.Root> {
  size?: "sm" | "md";
  label?: string;
  description?: string;
}
