import { cva } from "class-variance-authority";

export const separatorVariants = cva("shrink-0 bg-border-default", {
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "w-px h-full",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});
