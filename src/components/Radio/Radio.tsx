import { forwardRef, useId } from "react";
import * as RadixRadioGroup from "@radix-ui/react-radio-group";
import { cn } from "@/utils/cn";
import type { RadioGroupProps, RadioItemProps } from "./Radio.types";
import { radioGroupVariants, radioItemVariants, radioIndicatorVariants } from "./Radio.variants";

const RadioRoot = forwardRef<HTMLDivElement, RadioGroupProps>(function RadioRoot(
  { orientation = "vertical", label, error = false, errorMessage, className, children, ...rest },
  ref,
) {
  const groupId = useId();
  const errorId = `${groupId}-error`;
  const hasError = error && Boolean(errorMessage);

  const group = (
    <RadixRadioGroup.Root
      ref={ref}
      className={cn(radioGroupVariants({ orientation }), className)}
      aria-invalid={error || undefined}
      aria-describedby={hasError ? errorId : undefined}
      {...rest}
    >
      {children}
    </RadixRadioGroup.Root>
  );

  if (!label && !hasError) return group;

  return (
    <fieldset className="flex flex-col gap-2">
      {label && <legend className="text-sm font-medium text-fg-label">{label}</legend>}
      {group}
      {hasError && (
        <p id={errorId} className="text-xs text-fg-danger">
          {errorMessage}
        </p>
      )}
    </fieldset>
  );
});

const RadioItem = forwardRef<HTMLButtonElement, RadioItemProps>(function RadioItem(
  { size, label, description, className, id: idProp, ...rest },
  ref,
) {
  const autoId = useId();
  const itemId = idProp ?? autoId;

  return (
    <div className="flex gap-2">
      <RadixRadioGroup.Item
        ref={ref}
        id={itemId}
        className={cn(radioItemVariants({ size }), className)}
        {...rest}
      >
        <RadixRadioGroup.Indicator className={radioIndicatorVariants({ size })} />
      </RadixRadioGroup.Item>
      {(label || description) && (
        <div className="flex flex-col gap-0.5">
          {label && (
            <label htmlFor={itemId} className="text-sm font-medium text-fg-label leading-none">
              {label}
            </label>
          )}
          {description && <p className="text-xs text-fg-helper">{description}</p>}
        </div>
      )}
    </div>
  );
});

export const Radio = Object.assign(RadioRoot, {
  Item: RadioItem,
});
