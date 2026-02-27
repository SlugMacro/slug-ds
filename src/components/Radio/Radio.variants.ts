import { cva } from "class-variance-authority";

export const radioGroupVariants = cva("flex", {
  variants: {
    orientation: {
      vertical: "flex-col gap-2",
      horizontal: "flex-row gap-4",
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
});

export const radioItemVariants = cva(
  "aspect-square shrink-0 rounded-full border border-border-default bg-bg-canvas transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-bg-neutral",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export const radioIndicatorVariants = cva(
  "flex items-center justify-center after:block after:rounded-full after:bg-bg-neutral",
  {
    variants: {
      size: {
        sm: "after:h-2 after:w-2",
        md: "after:h-2.5 after:w-2.5",
        lg: "after:h-3 after:w-3",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);
