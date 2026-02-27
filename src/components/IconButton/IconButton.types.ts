import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Semantic color intent */
  intent?: "primary" | "neutral" | "success" | "danger";
  /** Visual style variant */
  variant?: "solid" | "subtle" | "outline" | "ghost";
  /** @default "md" */
  size?: "xs" | "sm" | "md" | "lg";
  /** The icon to render. Required. */
  icon: ReactNode;
  /** Required for accessibility. Describes the button action. */
  "aria-label": string;
  loading?: boolean;
}
