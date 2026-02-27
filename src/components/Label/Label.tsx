import { forwardRef } from "react";
import * as RadixLabel from "@radix-ui/react-label";
import { cn } from "@/utils/cn";
import type { LabelProps } from "./Label.types";
import { labelVariants } from "./Label.variants";

export const Label = forwardRef<HTMLLabelElement, LabelProps>(function Label(
  { size, required, disabled, className, children, ...rest },
  ref,
) {
  return (
    <RadixLabel.Root
      ref={ref}
      className={cn(labelVariants({ size, disabled }), className)}
      {...rest}
    >
      {children}
      {required && (
        <span className="text-error ml-0.5" aria-hidden="true">
          *
        </span>
      )}
    </RadixLabel.Root>
  );
});
