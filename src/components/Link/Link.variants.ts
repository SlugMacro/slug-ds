import { cva } from "class-variance-authority";

export const linkVariants = cva(
  "inline-flex items-center gap-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-primary focus-visible:ring-offset-2 rounded-sm",
  {
    variants: {
      intent: {
        primary: "text-fg-interactive hover:text-fg-interactive-hover",
        neutral: "text-fg-primary",
      },
      emphasis: {
        default: "font-normal",
        strong: "font-medium",
      },
      size: {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-base",
      },
      underline: {
        true: "border-b",
        false: "",
      },
      disabled: {
        true: "text-fg-disabled pointer-events-none",
        false: "",
      },
    },
    compoundVariants: [
      // Primary underline (not disabled)
      {
        intent: "primary",
        underline: true,
        disabled: false,
        className: "border-border-primary-subtle hover:border-fg-interactive-hover",
      },
      // Neutral underline (not disabled)
      {
        intent: "neutral",
        underline: true,
        disabled: false,
        className: "border-border-primary-subtle hover:border-fg-interactive-hover",
      },
      // Disabled underline
      {
        underline: true,
        disabled: true,
        className: "border-border-disabled",
      },
    ],
    defaultVariants: {
      intent: "primary",
      emphasis: "default",
      size: "sm",
      underline: true,
      disabled: false,
    },
  },
);

export const linkIconVariants = cva("shrink-0", {
  variants: {
    size: {
      xs: "size-3",
      sm: "size-4",
      md: "size-5",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});
