import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  intent?: "primary" | "secondary" | "ghost" | "danger";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** The icon to render. Required. */
  icon: ReactNode;
  /** Required for accessibility. Describes the button action. */
  "aria-label": string;
  loading?: boolean;
}
