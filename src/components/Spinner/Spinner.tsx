import { forwardRef } from "react";
import { cn } from "@/utils/cn";
import type { SpinnerProps } from "./Spinner.types";
import { spinnerVariants } from "./Spinner.variants";

export const Spinner = forwardRef<SVGSVGElement, SpinnerProps>(function Spinner(
  { size, label = "Loading", className, ...rest },
  ref,
) {
  return (
    <span role="status">
      <svg
        ref={ref}
        className={cn(spinnerVariants({ size }), className)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
        {...rest}
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      <span className="sr-only">{label}</span>
    </span>
  );
});
