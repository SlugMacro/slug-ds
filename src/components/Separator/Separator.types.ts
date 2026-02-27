import type { HTMLAttributes } from "react";

export interface SeparatorOwnProps {
  /** @default "horizontal" */
  orientation?: "horizontal" | "vertical";
  /** When true, renders with role="none" instead of role="separator" */
  decorative?: boolean;
}

export interface SeparatorProps
  extends SeparatorOwnProps, Omit<HTMLAttributes<HTMLDivElement>, keyof SeparatorOwnProps> {}
