import { cva } from "class-variance-authority";

export const checkboxVariants = cva(
  "shrink-0 border border-border-default rounded bg-bg-canvas transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-bg-neutral data-[state=checked]:border-bg-neutral data-[state=checked]:text-fg-inverse data-[state=indeterminate]:bg-bg-neutral data-[state=indeterminate]:border-bg-neutral data-[state=indeterminate]:text-fg-inverse",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },
      error: {
        true: "border-border-danger data-[state=checked]:bg-bg-danger data-[state=checked]:border-border-danger data-[state=indeterminate]:bg-bg-danger data-[state=indeterminate]:border-border-danger",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      error: false,
    },
  },
);

export const checkboxIndicatorVariants = cva("flex items-center justify-center text-current", {
  variants: {
    size: {
      sm: "[&>svg]:h-3 [&>svg]:w-3",
      md: "[&>svg]:h-3.5 [&>svg]:w-3.5",
      lg: "[&>svg]:h-4 [&>svg]:w-4",
    },
  },
  defaultVariants: {
    size: "md",
  },
});
