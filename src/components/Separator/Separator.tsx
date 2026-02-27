import { forwardRef } from "react";
import { cn } from "@/utils/cn";
import type { SeparatorProps } from "./Separator.types";
import { separatorVariants } from "./Separator.variants";

export const Separator = forwardRef<HTMLDivElement, SeparatorProps>(function Separator(
  { orientation = "horizontal", decorative = false, className, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      role={decorative ? "none" : "separator"}
      aria-orientation={decorative ? undefined : orientation}
      className={cn(separatorVariants({ orientation }), className)}
      {...rest}
    />
  );
});
