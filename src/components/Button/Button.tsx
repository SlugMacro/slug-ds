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

/**
 * Reduce icon-side padding so it matches the vertical space,
 * creating equal visual weight around the icon.
 *
 * Vertical space per size: xs=6px, sm=8px, md=10px, lg=12px.
 */
const iconPadding = {
  xs: { left: "pl-1.5", right: "pr-1.5" },
  sm: { left: "pl-2", right: "pr-2" },
  md: { left: "pl-2.5", right: "pr-2.5" },
  lg: { left: "pl-3", right: "pr-3" },
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
    const hasLeft = Boolean(loading || leftIcon);
    const hasRight = Boolean(rightIcon);

    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({ intent, variant, size, fullWidth }),
          hasLeft && iconPadding[size].left,
          hasRight && iconPadding[size].right,
          className,
        )}
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
