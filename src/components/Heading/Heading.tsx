import { forwardRef } from "react";
import { cn } from "@/utils/cn";
import type { HeadingProps } from "./Heading.types";
import { headingVariants } from "./Heading.variants";

const LEVEL_SIZE_MAP: Record<number, HeadingProps["size"]> = {
  1: "3xl",
  2: "2xl",
  3: "xl",
  4: "lg",
  5: "md",
  6: "sm",
};

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level = 2, size, weight, color, truncate, className, children, ...rest }, ref) => {
    const Component = `h${level}` as const;
    const resolvedSize = size ?? LEVEL_SIZE_MAP[level];

    return (
      <Component
        ref={ref}
        className={cn(headingVariants({ size: resolvedSize, weight, color, truncate }), className)}
        {...rest}
      >
        {children}
      </Component>
    );
  },
);

Heading.displayName = "Heading";
