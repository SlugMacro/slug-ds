import type { ElementType } from "react";
import type { PolymorphicPropsWithRef } from "@/types";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type -- Box has no own props; exists for polymorphic pattern
export interface BoxOwnProps {}

export type BoxProps<E extends ElementType = "div"> = PolymorphicPropsWithRef<E, BoxOwnProps>;
