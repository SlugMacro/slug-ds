import { forwardRef, useId } from "react";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { cn } from "@/utils/cn";
import type { CheckboxProps } from "./Checkbox.types";
import { checkboxVariants, checkboxIndicatorVariants } from "./Checkbox.variants";

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const MinusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
  </svg>
);

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
          {checked === "indeterminate" ? <MinusIcon /> : <CheckIcon />}
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      {(label || hasDescription) && (
        <div className="flex flex-col gap-0.5">
          {label && (
            <label
              htmlFor={checkboxId}
              className="text-sm font-medium text-fg-primary leading-none"
            >
              {label}
            </label>
          )}
          {hasDescription && (
            <p id={descriptionId} className={cn("text-sm", error ? "text-error" : "text-fg-muted")}>
              {error ? errorMessage : description}
            </p>
          )}
        </div>
      )}
    </div>
  );
});
