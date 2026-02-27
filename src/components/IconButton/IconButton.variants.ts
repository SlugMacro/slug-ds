import { cva } from "class-variance-authority";

export const iconButtonVariants = cva(
  "inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-primary focus-visible:ring-offset-2 disabled:bg-bg-disabled disabled:text-fg-disabled disabled:border-transparent disabled:pointer-events-none disabled:shadow-none",
  {
    variants: {
      intent: {
        primary: "",
        neutral: "",
        success: "",
        danger: "",
      },
      variant: {
        solid: "",
        subtle: "",
        outline: "border",
        ghost: "",
      },
      size: {
        xs: "h-7 w-7 rounded-sm [&>svg]:size-4",
        sm: "h-9 w-9 rounded-md [&>svg]:size-5",
        md: "h-11 w-11 rounded-lg [&>svg]:size-6",
        lg: "h-13 w-13 rounded-xl [&>svg]:size-7",
      },
    },
    compoundVariants: [
      // ── SOLID ──────────────────────────────────────────────
      {
        intent: "primary",
        variant: "solid",
        class:
          "bg-bg-primary text-fg-on-light hover:bg-bg-primary-hover active:bg-bg-primary-active",
      },
      {
        intent: "neutral",
        variant: "solid",
        class:
          "bg-bg-neutral text-fg-inverse hover:bg-bg-neutral-hover active:bg-bg-neutral-active",
      },
      {
        intent: "success",
        variant: "solid",
        class:
          "bg-bg-success text-fg-on-dark hover:bg-bg-success-hover active:bg-bg-success-active",
      },
      {
        intent: "danger",
        variant: "solid",
        class: "bg-bg-danger text-fg-on-dark hover:bg-bg-danger-hover active:bg-bg-danger-active",
      },

      // ── SUBTLE ─────────────────────────────────────────────
      {
        intent: "primary",
        variant: "subtle",
        class:
          "bg-bg-primary-subtle text-fg-interactive hover:bg-bg-primary-subtle-hover active:bg-bg-primary-subtle-active",
      },
      {
        intent: "neutral",
        variant: "subtle",
        class:
          "bg-bg-neutral-subtle text-fg-primary hover:bg-bg-neutral-subtle-hover active:bg-bg-neutral-subtle-active",
      },
      {
        intent: "success",
        variant: "subtle",
        class:
          "bg-bg-success-subtle text-fg-success hover:bg-bg-success-subtle-hover active:bg-bg-success-subtle-active",
      },
      {
        intent: "danger",
        variant: "subtle",
        class:
          "bg-bg-danger-subtle text-fg-danger hover:bg-bg-danger-subtle-hover active:bg-bg-danger-subtle-active",
      },

      // ── OUTLINE ────────────────────────────────────────────
      {
        intent: "primary",
        variant: "outline",
        class:
          "border-border-primary-subtle text-fg-interactive hover:bg-bg-primary-subtle active:bg-bg-primary-subtle-hover",
      },
      {
        intent: "neutral",
        variant: "outline",
        class:
          "border-border-neutral-subtle text-fg-primary hover:bg-bg-neutral-subtle active:bg-bg-neutral-subtle-hover",
      },
      {
        intent: "success",
        variant: "outline",
        class:
          "border-border-success-subtle text-fg-success hover:bg-bg-success-subtle active:bg-bg-success-subtle-hover",
      },
      {
        intent: "danger",
        variant: "outline",
        class:
          "border-border-danger-subtle text-fg-danger hover:bg-bg-danger-subtle active:bg-bg-danger-subtle-hover",
      },

      // ── GHOST ──────────────────────────────────────────────
      {
        intent: "primary",
        variant: "ghost",
        class: "text-fg-interactive hover:bg-bg-primary-subtle active:bg-bg-primary-subtle-hover",
      },
      {
        intent: "neutral",
        variant: "ghost",
        class: "text-fg-primary hover:bg-bg-neutral-subtle active:bg-bg-neutral-subtle-hover",
      },
      {
        intent: "success",
        variant: "ghost",
        class: "text-fg-success hover:bg-bg-success-subtle active:bg-bg-success-subtle-hover",
      },
      {
        intent: "danger",
        variant: "ghost",
        class: "text-fg-danger hover:bg-bg-danger-subtle active:bg-bg-danger-subtle-hover",
      },
    ],
    defaultVariants: {
      intent: "primary",
      variant: "solid",
      size: "md",
    },
  },
);
