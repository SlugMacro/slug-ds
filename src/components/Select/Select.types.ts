import type { ComponentPropsWithoutRef, ReactNode } from "react";
import type * as RadixSelect from "@radix-ui/react-select";

export interface SelectProps {
  children: ReactNode;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  label?: string;
  helperText?: string;
  error?: boolean;
  errorMessage?: string;
  placeholder?: string;
  size?: "sm" | "md";
  fullWidth?: boolean;
}

export interface SelectTriggerProps extends Omit<
  ComponentPropsWithoutRef<typeof RadixSelect.Trigger>,
  "size"
> {
  size?: "sm" | "md";
  error?: boolean;
  fullWidth?: boolean;
}

export type SelectContentProps = ComponentPropsWithoutRef<typeof RadixSelect.Content>;

export type SelectItemProps = ComponentPropsWithoutRef<typeof RadixSelect.Item>;

export interface SelectGroupProps {
  children: ReactNode;
  label?: string;
}

export type SelectSeparatorProps = ComponentPropsWithoutRef<typeof RadixSelect.Separator>;
