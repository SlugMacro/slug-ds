import { forwardRef, useId } from "react";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { CheckLine, MinimizeLine } from "@mingcute/react";
import { cn } from "@/utils/cn";
import type { CheckboxProps } from "./Checkbox.types";
import { checkboxVariants, checkboxIndicatorVariants } from "./Checkbox.variants";

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(function Checkbox(
  {
    size,
    label,
    description,
    error = false,
    errorMessage,
    className,
    id: idProp,
    checked,
    ...rest
  },
  ref,
) {
  const autoId = useId();
  const checkboxId = idProp ?? autoId;
  const descriptionId = `${checkboxId}-description`;
  const hasDescription = Boolean(error ? errorMessage : description);

  return (
    <div className="flex gap-2">
      <RadixCheckbox.Root
        ref={ref}
        id={checkboxId}
        checked={checked}
        className={cn(checkboxVariants({ size, error }), className)}
        aria-invalid={error || undefined}
        aria-describedby={hasDescription ? descriptionId : undefined}
        {...rest}
      >
        <RadixCheckbox.Indicator className={checkboxIndicatorVariants({ size })}>
          {checked === "indeterminate" ? (
            <MinimizeLine aria-hidden="true" />
          ) : (
            <CheckLine aria-hidden="true" />
          )}
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      {(label || hasDescription) && (
        <div className="flex flex-col gap-0.5">
          {label && (
            <label htmlFor={checkboxId} className="text-sm font-medium text-fg-label leading-none">
              {label}
            </label>
          )}
          {hasDescription && (
            <p
              id={descriptionId}
              className={cn("text-xs", error ? "text-fg-danger" : "text-fg-helper")}
            >
              {error ? errorMessage : description}
            </p>
          )}
        </div>
      )}
    </div>
  );
});
