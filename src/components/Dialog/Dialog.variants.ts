import { cva } from "class-variance-authority";

export const dialogOverlayVariants = cva(
  "fixed inset-0 z-50 bg-bg-backdrop data-[state=open]:animate-overlay-in data-[state=closed]:animate-overlay-out",
);

export const dialogContentVariants = cva(
  "fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 bg-bg-canvas border border-border-default rounded-xl shadow-xl focus-visible:outline-none data-[state=open]:animate-content-in data-[state=closed]:animate-content-out",
  {
    variants: {
      size: {
        sm: "w-full max-w-sm",
        md: "w-full max-w-md",
        lg: "w-full max-w-lg",
        xl: "w-full max-w-xl",
        full: "w-[calc(100vw-2rem)] h-[calc(100vh-2rem)]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);
