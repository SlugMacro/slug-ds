import type { HTMLAttributes, ReactNode } from "react";

export interface PopoverProps {
  children: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export interface PopoverTriggerProps {
  children: ReactNode;
  asChild?: boolean;
}

export interface PopoverContentProps extends HTMLAttributes<HTMLDivElement> {
  side?: "top" | "right" | "bottom" | "left";
  sideOffset?: number;
  align?: "start" | "center" | "end";
}

export interface PopoverCloseProps {
  children: ReactNode;
  asChild?: boolean;
}
