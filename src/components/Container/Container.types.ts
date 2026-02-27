import type { HTMLAttributes } from "react";

export interface ContainerOwnProps {
  /** @default "lg" */
  size?: "sm" | "md" | "lg" | "xl" | "full";
  /** Whether to apply responsive horizontal padding. @default true */
  padding?: boolean;
}

export interface ContainerProps
  extends ContainerOwnProps, Omit<HTMLAttributes<HTMLDivElement>, keyof ContainerOwnProps> {}
