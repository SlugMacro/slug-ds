import { forwardRef } from "react";
import { cn } from "@/utils/cn";
import { Spinner } from "@/components/Spinner";
import type { IconButtonProps } from "./IconButton.types";
import { iconButtonVariants } from "./IconButton.variants";

const spinnerSizeMap = { xs: "xs", sm: "sm", md: "md", lg: "md" } as const;

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { intent, variant, size = "md", icon, loading = false, disabled, className, ...rest },
  ref,
) {
  const isDisabled = disabled || loading;

  return (
    <button
      ref={ref}
      className={cn(iconButtonVariants({ intent, variant, size }), className)}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      {...rest}
    >
      {loading ? <Spinner size={spinnerSizeMap[size]} /> : icon}
    </button>
  );
});
