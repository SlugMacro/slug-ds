import type { HTMLAttributes } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "solid" | "subtle" | "outline";
  color?: "default" | "accent" | "success" | "warning" | "error";
  size?: "sm" | "md";
}
