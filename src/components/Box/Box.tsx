import { forwardRef, type ElementType, type ReactNode, type Ref } from "react";
import { cn } from "@/utils/cn";
import type { BoxOwnProps } from "./Box.types";

const DEFAULT_ELEMENT = "div" satisfies ElementType;

function BoxRender(
  {
    as,
    className,
    children,
    ...rest
  }: BoxOwnProps & {
    as?: ElementType;
    className?: string;
    children?: ReactNode;
    [key: string]: unknown;
  },
  ref: Ref<HTMLElement>,
) {
  const Component = as ?? DEFAULT_ELEMENT;

  return (
    <Component ref={ref} className={cn(className)} {...rest}>
      {children}
    </Component>
  );
}

BoxRender.displayName = "Box";

export const Box = forwardRef(BoxRender) as <E extends ElementType = typeof DEFAULT_ELEMENT>(
  props: BoxOwnProps & {
    as?: E;
    className?: string;
    children?: ReactNode;
    ref?: Ref<HTMLElement>;
  } & Omit<React.ComponentPropsWithoutRef<E>, keyof BoxOwnProps | "as">,
) => ReactNode;
