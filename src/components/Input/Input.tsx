import { forwardRef, useId } from "react";
import { cn } from "@/utils/cn";
import type { InputProps } from "./Input.types";
import { inputVariants, inputWrapperVariants, addonVariants } from "./Input.variants";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size,
      label,
      helperText,
      error = false,
      errorMessage,
      leftAddon,
      rightAddon,
      fullWidth,
      className,
      id: idProp,
      ...rest
    },
    ref,
  ) => {
    const autoId = useId();
    const inputId = idProp ?? autoId;
    const descriptionId = `${inputId}-description`;
    const hasDescription = Boolean(error ? errorMessage : helperText);

    return (
      <div className={cn(inputWrapperVariants({ fullWidth }), "flex-col gap-1.5")}>
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-fg-primary">
            {label}
          </label>
        )}
        <div className="flex">
          {leftAddon && (
            <div className={addonVariants({ size, position: "left" })}>{leftAddon}</div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              inputVariants({
                size,
                error,
                hasLeftAddon: Boolean(leftAddon),
                hasRightAddon: Boolean(rightAddon),
              }),
              className,
            )}
            aria-invalid={error || undefined}
            aria-describedby={hasDescription ? descriptionId : undefined}
            {...rest}
          />
          {rightAddon && (
            <div className={addonVariants({ size, position: "right" })}>{rightAddon}</div>
          )}
        </div>
        {hasDescription && (
          <p
            id={descriptionId}
            className={cn("text-sm", error ? "text-fg-danger" : "text-fg-tertiary")}
          >
            {error ? errorMessage : helperText}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
