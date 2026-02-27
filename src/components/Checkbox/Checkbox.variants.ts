import { cva } from "class-variance-authority";

export const checkboxVariants = cva(
  "shrink-0 border border-border-default rounded bg-bg-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-accent-primary data-[state=checked]:border-accent-primary data-[state=checked]:text-fg-on-accent data-[state=indeterminate]:bg-accent-primary data-[state=indeterminate]:border-accent-primary data-[state=indeterminate]:text-fg-on-accent",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },
      error: {
        true: "border-error data-[state=checked]:bg-error data-[state=checked]:border-error data-[state=indeterminate]:bg-error data-[state=indeterminate]:border-error",
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
