import type { SVGAttributes } from "react";

export interface SpinnerProps extends SVGAttributes<SVGSVGElement> {
  /** @default "md" */
  size?: "xs" | "sm" | "md" | "lg";
  /** Screen reader label. @default "Loading" */
  label?: string;
}
