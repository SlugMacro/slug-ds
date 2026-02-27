import type { HTMLAttributes, ReactNode } from "react";

export interface DropdownMenuProps {
  children: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export interface DropdownMenuTriggerProps {
  children: ReactNode;
  asChild?: boolean;
}

export interface DropdownMenuContentProps extends HTMLAttributes<HTMLDivElement> {
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  sideOffset?: number;
}

export interface DropdownMenuItemProps extends Omit<HTMLAttributes<HTMLDivElement>, "onSelect"> {
  disabled?: boolean;
  onSelect?: (event: Event) => void;
  shortcut?: string;
}

export interface DropdownMenuCheckboxItemProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "onSelect"
> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
}

export interface DropdownMenuRadioGroupProps {
  children: ReactNode;
  value?: string;
  onValueChange?: (value: string) => void;
}

export interface DropdownMenuRadioItemProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "onSelect"
> {
  value: string;
  disabled?: boolean;
}

export interface DropdownMenuLabelProps extends HTMLAttributes<HTMLDivElement> {
  inset?: boolean;
}

export type DropdownMenuSeparatorProps = HTMLAttributes<HTMLDivElement>;

export interface DropdownMenuSubProps {
  children: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export interface DropdownMenuSubTriggerProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  inset?: boolean;
}

export type DropdownMenuSubContentProps = HTMLAttributes<HTMLDivElement>;
