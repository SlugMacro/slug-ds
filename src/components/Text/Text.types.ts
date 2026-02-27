import type { ElementType } from "react";
import type { PolymorphicPropsWithRef } from "@/types";

export interface TextOwnProps {
  variant?: "body" | "caption" | "label" | "heading";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  weight?: "normal" | "medium" | "semibold" | "bold";
  color?: "primary" | "secondary" | "muted" | "accent" | "error" | "success";
  truncate?: boolean;
  align?: "left" | "center" | "right";
}

export type TextProps<E extends ElementType = "span"> = PolymorphicPropsWithRef<E, TextOwnProps>;
