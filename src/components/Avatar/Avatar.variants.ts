import { cva } from "class-variance-authority";

export const avatarVariants = cva(
  "relative inline-flex items-center justify-center overflow-hidden rounded-full bg-bg-surface border border-border-default",
  {
    variants: {
      size: {
        xs: "h-6 w-6 text-xs",
        sm: "h-8 w-8 text-sm",
        md: "h-10 w-10 text-sm",
        lg: "h-12 w-12 text-base",
        xl: "h-16 w-16 text-lg",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export const avatarImageVariants = cva("h-full w-full object-cover");

export const avatarFallbackVariants = cva(
  "flex h-full w-full items-center justify-center font-medium text-fg-secondary",
);
