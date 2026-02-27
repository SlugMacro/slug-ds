import { cva } from "class-variance-authority";

export const spinnerVariants = cva("animate-spin text-current", {
  variants: {
    size: {
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-8 w-8",
    },
  },
  defaultVariants: {
    size: "md",
  },
});
