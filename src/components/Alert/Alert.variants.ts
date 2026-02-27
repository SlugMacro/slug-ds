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
    { variant: "subtle", intent: "info", className: "bg-bg-info-subtle text-fg-info" },
    { variant: "subtle", intent: "success", className: "bg-bg-success-subtle text-fg-success" },
    { variant: "subtle", intent: "warning", className: "bg-bg-warning-subtle text-fg-warning" },
    { variant: "subtle", intent: "error", className: "bg-bg-danger-subtle text-fg-danger" },
    // Solid
    { variant: "solid", intent: "info", className: "bg-bg-info text-fg-on-dark" },
    { variant: "solid", intent: "success", className: "bg-bg-success text-fg-on-dark" },
    { variant: "solid", intent: "warning", className: "bg-bg-warning text-fg-on-dark" },
    { variant: "solid", intent: "error", className: "bg-bg-danger text-fg-on-dark" },
    // Outline
    { variant: "outline", intent: "info", className: "border-border-info text-fg-info" },
    { variant: "outline", intent: "success", className: "border-border-success text-fg-success" },
    { variant: "outline", intent: "warning", className: "border-border-warning text-fg-warning" },
    { variant: "outline", intent: "error", className: "border-border-danger text-fg-danger" },
  ],
  defaultVariants: {
    variant: "subtle",
    intent: "info",
  },
});
