import type { HTMLAttributes, ReactNode } from "react";

export interface TabsProps {
  children: ReactNode;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

export type TabsListProps = HTMLAttributes<HTMLDivElement>;

export interface TabsTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  value: string;
  disabled?: boolean;
}

export interface TabsContentProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
}
