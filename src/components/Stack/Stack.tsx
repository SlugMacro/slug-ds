import { forwardRef, type ElementType, type ReactNode, type Ref } from "react";
import { cn } from "@/utils/cn";
import type { StackOwnProps } from "./Stack.types";
import { stackVariants } from "./Stack.variants";

const DEFAULT_ELEMENT = "div" satisfies ElementType;

function StackRender(
  {
    as,
    direction,
    gap,
    align,
    justify,
    wrap,
    className,
    children,
    ...rest
  }: StackOwnProps & {
    as?: ElementType;
    className?: string;
    children?: ReactNode;
    [key: string]: unknown;
  },
  ref: Ref<HTMLElement>,
) {
  const Component = as ?? DEFAULT_ELEMENT;

  return (
    <Component
      ref={ref}
      className={cn(
        stackVariants({ direction, align, justify, wrap }),
        gap !== undefined && `gap-${gap}`,
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}

StackRender.displayName = "Stack";

export const Stack = forwardRef(StackRender) as <E extends ElementType = typeof DEFAULT_ELEMENT>(
  props: StackOwnProps & {
    as?: E;
    className?: string;
    children?: ReactNode;
    ref?: Ref<HTMLElement>;
  } & Omit<React.ComponentPropsWithoutRef<E>, keyof StackOwnProps | "as">,
) => ReactNode;
