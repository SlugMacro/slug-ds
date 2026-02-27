import { cva } from "class-variance-authority";

export const iconButtonVariants = cva(
  "inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      intent: {
        primary: "bg-accent-primary text-fg-on-accent hover:bg-accent-primary-hover",
        secondary:
          "bg-bg-surface border border-border-default text-fg-primary hover:bg-bg-surface-hover",
        ghost: "text-fg-primary hover:bg-bg-surface-hover",
        danger: "bg-error text-fg-on-accent hover:bg-error-hover",
      },
      size: {
        sm: "h-8 w-8 rounded-md [&>svg]:h-4 [&>svg]:w-4",
        md: "h-10 w-10 rounded-lg [&>svg]:h-5 [&>svg]:w-5",
        lg: "h-12 w-12 rounded-lg [&>svg]:h-6 [&>svg]:w-6",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
    },
  },
);
