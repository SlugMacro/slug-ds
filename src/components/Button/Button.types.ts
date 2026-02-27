import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Semantic color intent */
  intent?: "primary" | "neutral" | "success" | "danger";
  /** Visual style variant */
  variant?: "solid" | "subtle" | "outline" | "ghost";
  size?: "xs" | "sm" | "md" | "lg";
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
}
