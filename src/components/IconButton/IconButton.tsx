import { forwardRef } from "react";
import { cn } from "@/utils/cn";
import { Spinner } from "@/components/Spinner";
import type { IconButtonProps } from "./IconButton.types";
import { iconButtonVariants } from "./IconButton.variants";

const spinnerSizeMap = { sm: "xs", md: "sm", lg: "sm" } as const;

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { intent, size = "md", icon, loading = false, disabled, className, ...rest },
  ref,
) {
  const isDisabled = disabled || loading;

  return (
    <button
      ref={ref}
      className={cn(iconButtonVariants({ intent, size }), className)}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      {...rest}
    >
      {loading ? <Spinner size={spinnerSizeMap[size]} /> : icon}
    </button>
  );
});
