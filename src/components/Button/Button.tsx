import { forwardRef } from "react";
import { cn } from "@/utils/cn";
import { Spinner } from "@/components/Spinner";
import type { ButtonProps } from "./Button.types";
import { buttonVariants } from "./Button.variants";

const spinnerSizeMap = {
  xs: "xs",
  sm: "sm",
  md: "md",
  lg: "md",
} as const;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      intent,
      variant,
      size = "md",
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
        className={cn(buttonVariants({ intent, variant, size, fullWidth }), className)}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        {...rest}
      >
        {loading ? <Spinner size={spinnerSizeMap[size]} /> : leftIcon}
        {children}
        {rightIcon}
      </button>
    );
  },
);

Button.displayName = "Button";
