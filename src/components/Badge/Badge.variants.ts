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
      { variant: "solid", color: "default", className: "bg-fg-muted/20 text-fg-primary" },
      { variant: "solid", color: "accent", className: "bg-accent-primary text-fg-on-accent" },
      { variant: "solid", color: "success", className: "bg-success text-fg-on-accent" },
      { variant: "solid", color: "warning", className: "bg-warning text-fg-on-accent" },
      { variant: "solid", color: "error", className: "bg-error text-fg-on-accent" },
      // Subtle variants
      { variant: "subtle", color: "default", className: "bg-fg-muted/10 text-fg-secondary" },
      { variant: "subtle", color: "accent", className: "bg-accent-primary/10 text-accent-primary" },
      { variant: "subtle", color: "success", className: "bg-success/10 text-success" },
      { variant: "subtle", color: "warning", className: "bg-warning/10 text-warning" },
      { variant: "subtle", color: "error", className: "bg-error/10 text-error" },
      // Outline variants
      {
        variant: "outline",
        color: "default",
        className: "border-border-default text-fg-secondary",
      },
      {
        variant: "outline",
        color: "accent",
        className: "border-accent-primary text-accent-primary",
      },
      { variant: "outline", color: "success", className: "border-success text-success" },
      { variant: "outline", color: "warning", className: "border-warning text-warning" },
      { variant: "outline", color: "error", className: "border-error text-error" },
    ],
    defaultVariants: {
      variant: "subtle",
      color: "default",
      size: "md",
    },
  },
);
