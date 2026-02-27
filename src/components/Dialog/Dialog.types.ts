import type { HTMLAttributes, ReactNode } from "react";

export interface DialogProps {
  children: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export interface DialogTriggerProps {
  children: ReactNode;
  asChild?: boolean;
}

export interface DialogContentProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full";
  showClose?: boolean;
}

export type DialogHeaderProps = HTMLAttributes<HTMLDivElement>;

export type DialogFooterProps = HTMLAttributes<HTMLDivElement>;

export type DialogTitleProps = HTMLAttributes<HTMLHeadingElement>;

export type DialogDescriptionProps = HTMLAttributes<HTMLParagraphElement>;

export interface DialogCloseProps {
  children: ReactNode;
  asChild?: boolean;
}
