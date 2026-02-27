import type { ElementType } from "react";
import type { PolymorphicPropsWithRef } from "@/types";
import type { SpacingScale } from "@/types/spacing";

export interface StackOwnProps {
  /** Flex direction */
  direction?: "row" | "column";
  /** Gap between items (Tailwind spacing scale) */
  gap?: SpacingScale;
  /** Align items along the cross axis */
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  /** Justify content along the main axis */
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  /** Whether items should wrap */
  wrap?: boolean;
}

export type StackProps<E extends ElementType = "div"> = PolymorphicPropsWithRef<E, StackOwnProps>;
