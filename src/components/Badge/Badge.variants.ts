import { cva } from "class-variance-authority";

export const badgeVariants = cva(
  "inline-flex items-center font-medium rounded-full whitespace-nowrap",
  {
    variants: {
      variant: {
        solid: "",
        subtle: "",
        outline: "border bg-transparent",
      },
      color: {
        default: "",
        accent: "",
        success: "",
        warning: "",
        error: "",
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-2.5 py-0.5 text-sm",
      },
    },
    compoundVariants: [
      // Solid variants
      { variant: "solid", color: "default", className: "bg-bg-neutral-subtle text-fg-primary" },
      { variant: "solid", color: "accent", className: "bg-bg-primary text-fg-on-dark" },
      { variant: "solid", color: "success", className: "bg-bg-success text-fg-on-dark" },
      { variant: "solid", color: "warning", className: "bg-bg-warning text-fg-on-dark" },
      { variant: "solid", color: "error", className: "bg-bg-danger text-fg-on-dark" },
      // Subtle variants
      {
        variant: "subtle",
        color: "default",
        className: "bg-bg-neutral-muted-hover text-fg-secondary",
      },
      { variant: "subtle", color: "accent", className: "bg-bg-primary-subtle text-fg-interactive" },
      { variant: "subtle", color: "success", className: "bg-bg-success-subtle text-fg-success" },
      { variant: "subtle", color: "warning", className: "bg-bg-warning-subtle text-fg-warning" },
      { variant: "subtle", color: "error", className: "bg-bg-danger-subtle text-fg-danger" },
      // Outline variants
      {
        variant: "outline",
        color: "default",
        className: "border-border-default text-fg-secondary",
      },
      {
        variant: "outline",
        color: "accent",
        className: "border-border-primary text-fg-interactive",
      },
      { variant: "outline", color: "success", className: "border-border-success text-fg-success" },
      { variant: "outline", color: "warning", className: "border-border-warning text-fg-warning" },
      { variant: "outline", color: "error", className: "border-border-danger text-fg-danger" },
    ],
    defaultVariants: {
      variant: "subtle",
      color: "default",
      size: "md",
    },
  },
);
