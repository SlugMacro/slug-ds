import { cva } from "class-variance-authority";

export const alertVariants = cva("relative flex w-full gap-3 rounded-lg p-4 text-sm", {
  variants: {
    variant: {
      subtle: "",
      solid: "",
      outline: "border bg-transparent",
    },
    intent: {
      info: "",
      success: "",
      warning: "",
      error: "",
    },
  },
  compoundVariants: [
    // Subtle
    { variant: "subtle", intent: "info", className: "bg-info/10 text-info" },
    { variant: "subtle", intent: "success", className: "bg-success/10 text-success" },
    { variant: "subtle", intent: "warning", className: "bg-warning/10 text-warning" },
    { variant: "subtle", intent: "error", className: "bg-error/10 text-error" },
    // Solid
    { variant: "solid", intent: "info", className: "bg-info text-fg-on-accent" },
    { variant: "solid", intent: "success", className: "bg-success text-fg-on-accent" },
    { variant: "solid", intent: "warning", className: "bg-warning text-fg-on-accent" },
    { variant: "solid", intent: "error", className: "bg-error text-fg-on-accent" },
    // Outline
    { variant: "outline", intent: "info", className: "border-info text-info" },
    { variant: "outline", intent: "success", className: "border-success text-success" },
    { variant: "outline", intent: "warning", className: "border-warning text-warning" },
    { variant: "outline", intent: "error", className: "border-error text-error" },
  ],
  defaultVariants: {
    variant: "subtle",
    intent: "info",
  },
});
