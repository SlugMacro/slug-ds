import { forwardRef } from "react";
import { cn } from "@/utils/cn";
import type { BadgeProps } from "./Badge.types";
import { badgeVariants } from "./Badge.variants";

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant, color, size, className, children, ...rest }, ref) => {
    return (
      <span ref={ref} className={cn(badgeVariants({ variant, color, size }), className)} {...rest}>
        {children}
      </span>
    );
  },
);

Badge.displayName = "Badge";
