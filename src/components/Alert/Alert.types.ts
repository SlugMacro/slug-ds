import type { HTMLAttributes, ReactNode } from "react";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  intent?: "info" | "success" | "warning" | "error";
  variant?: "subtle" | "solid" | "outline";
  icon?: ReactNode;
  onClose?: () => void;
}

export type AlertTitleProps = HTMLAttributes<HTMLHeadingElement>;

export type AlertDescriptionProps = HTMLAttributes<HTMLParagraphElement>;
