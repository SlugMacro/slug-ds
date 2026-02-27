import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      intent: {
        primary: "bg-bg-primary text-fg-on-dark hover:bg-bg-primary-hover",
        secondary:
          "bg-bg-surface border border-border-default text-fg-primary hover:bg-bg-neutral-muted-hover",
        ghost: "text-fg-primary hover:bg-bg-neutral-muted-hover",
        danger: "bg-bg-danger text-fg-on-dark hover:bg-bg-danger-hover",
      },
      size: {
        sm: "h-8 px-3 text-sm rounded-md gap-1.5",
        md: "h-10 px-4 text-sm rounded-lg gap-2",
        lg: "h-12 px-6 text-base rounded-lg gap-2.5",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
      fullWidth: false,
    },
  },
);
