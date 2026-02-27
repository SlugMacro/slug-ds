import { forwardRef } from "react";
import { cn } from "@/utils/cn";
import { Spinner } from "@/components/Spinner";
import type { ButtonProps } from "./Button.types";
import { buttonVariants } from "./Button.variants";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      intent,
      size,
      fullWidth,
      loading = false,
      leftIcon,
      rightIcon,
      disabled,
      className,
      children,
      ...rest
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ intent, size, fullWidth }), className)}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        {...rest}
      >
        {loading ? <Spinner size="xs" /> : leftIcon}
        {children}
        {rightIcon}
      </button>
    );
  },
);

Button.displayName = "Button";
