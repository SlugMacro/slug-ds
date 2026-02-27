import { forwardRef } from "react";
import { cn } from "@/utils/cn";
import type { ContainerProps } from "./Container.types";
import { containerVariants } from "./Container.variants";

export const Container = forwardRef<HTMLDivElement, ContainerProps>(function Container(
  { size = "lg", padding = true, className, children, ...rest },
  ref,
) {
  return (
    <div ref={ref} className={cn(containerVariants({ size, padding }), className)} {...rest}>
      {children}
    </div>
  );
});
