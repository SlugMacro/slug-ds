import { cva } from "class-variance-authority";

export const labelVariants = cva("font-medium text-fg-primary", {
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
    },
    disabled: {
      true: "cursor-not-allowed opacity-50",
      false: "",
    },
  },
  defaultVariants: {
    size: "md",
    disabled: false,
  },
});
