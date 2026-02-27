import { forwardRef, useId } from "react";
import { cn } from "@/utils/cn";
import type { TextareaProps } from "./Textarea.types";
import { textareaVariants, textareaWrapperVariants } from "./Textarea.variants";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  {
    size,
    label,
    helperText,
    error = false,
    errorMessage,
    fullWidth,
    resize,
    className,
    id: idProp,
    ...rest
  },
  ref,
) {
  const autoId = useId();
  const textareaId = idProp ?? autoId;
  const descriptionId = `${textareaId}-description`;
  const hasDescription = Boolean(error ? errorMessage : helperText);

  return (
    <div className={cn(textareaWrapperVariants({ fullWidth }), "flex-col gap-2")}>
      {label && (
        <label htmlFor={textareaId} className="text-sm font-medium text-fg-label">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        id={textareaId}
        className={cn(textareaVariants({ size, error, resize }), className)}
        aria-invalid={error || undefined}
        aria-describedby={hasDescription ? descriptionId : undefined}
        {...rest}
      />
      {hasDescription && (
        <p
          id={descriptionId}
          className={cn("text-xs", error ? "text-fg-danger" : "text-fg-helper")}
        >
          {error ? errorMessage : helperText}
        </p>
      )}
    </div>
  );
});
