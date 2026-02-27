import { cva } from "class-variance-authority";

export const cardVariants = cva("rounded-lg overflow-hidden", {
  variants: {
    variant: {
      elevated: "bg-bg-surface border border-border-default shadow-md",
      outlined: "bg-bg-surface border border-border-default",
      filled: "bg-bg-surface",
    },
    padding: {
      none: "",
      sm: "p-3",
      md: "p-5",
      lg: "p-7",
    },
  },
  defaultVariants: {
    variant: "elevated",
    padding: "none",
  },
});
