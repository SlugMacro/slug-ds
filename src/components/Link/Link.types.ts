import type { AnchorHTMLAttributes, ReactNode } from "react";

export interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> {
  /** @default "primary" */
  intent?: "primary" | "neutral";
  /** @default "default" */
  emphasis?: "default" | "strong";
  /** @default "sm" */
  size?: "xs" | "sm" | "md";
  /** Show underline border-bottom @default true */
  underline?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Opens link in new tab with rel="noopener noreferrer" */
  external?: boolean;
  /** Optional leading icon */
  leadingIcon?: ReactNode;
  /** Optional trailing icon */
  trailingIcon?: ReactNode;
  /** Link content */
  children: ReactNode;
}
