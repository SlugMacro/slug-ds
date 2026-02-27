import { cva } from "class-variance-authority";

export const checkboxVariants = cva(
  "shrink-0 border border-border-neutral-subtle rounded bg-bg-neutral-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-bg-primary data-[state=checked]:border-bg-primary data-[state=checked]:text-fg-on-light data-[state=indeterminate]:bg-bg-primary data-[state=indeterminate]:border-bg-primary data-[state=indeterminate]:text-fg-on-light",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
      },
      error: {
        true: "border-border-danger-subtle data-[state=checked]:bg-bg-danger data-[state=checked]:border-border-danger data-[state=indeterminate]:bg-bg-danger data-[state=indeterminate]:border-border-danger data-[state=checked]:text-fg-on-dark data-[state=indeterminate]:text-fg-on-dark",
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
    },
  },
  defaultVariants: {
    size: "md",
  },
});
