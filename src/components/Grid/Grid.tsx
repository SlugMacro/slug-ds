import { forwardRef, type ElementType, type ReactNode, type Ref } from "react";
import { cn } from "@/utils/cn";
import type { GridOwnProps } from "./Grid.types";
import { gridVariants } from "./Grid.variants";

const DEFAULT_ELEMENT = "div" satisfies ElementType;

function GridRender(
  {
    as,
    columns,
    rows,
    gap,
    gapX,
    gapY,
    alignItems,
    justifyItems,
    flow,
    className,
    children,
    ...rest
  }: GridOwnProps & {
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
        gridVariants({ columns, rows, alignItems, justifyItems, flow }),
        gap !== undefined && `gap-${gap}`,
        gapX !== undefined && `gap-x-${gapX}`,
        gapY !== undefined && `gap-y-${gapY}`,
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}

GridRender.displayName = "Grid";

export const Grid = forwardRef(GridRender) as <E extends ElementType = typeof DEFAULT_ELEMENT>(
  props: GridOwnProps & {
    as?: E;
    className?: string;
    children?: ReactNode;
    ref?: Ref<HTMLElement>;
  } & Omit<React.ComponentPropsWithoutRef<E>, keyof GridOwnProps | "as">,
) => ReactNode;
