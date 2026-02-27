import type { ElementType } from "react";
import type { PolymorphicPropsWithRef } from "@/types";
import type { SpacingScale } from "@/types/spacing";

export interface GridOwnProps {
  /** Number of columns (1-12) or "none" */
  columns?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "none";
  /** Number of rows (1-6) or "none" */
  rows?: 1 | 2 | 3 | 4 | 5 | 6 | "none";
  /** Gap between items (Tailwind spacing scale) */
  gap?: SpacingScale;
  /** Horizontal gap (Tailwind spacing scale) */
  gapX?: SpacingScale;
  /** Vertical gap (Tailwind spacing scale) */
  gapY?: SpacingScale;
  /** Align items along the block axis */
  alignItems?: "start" | "center" | "end" | "stretch" | "baseline";
  /** Justify items along the inline axis */
  justifyItems?: "start" | "center" | "end" | "stretch";
  /** Grid auto flow */
  flow?: "row" | "col" | "dense" | "row-dense" | "col-dense";
}

export type GridProps<E extends ElementType = "div"> = PolymorphicPropsWithRef<E, GridOwnProps>;
