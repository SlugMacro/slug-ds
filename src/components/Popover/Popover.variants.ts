import { cva } from "class-variance-authority";

export const popoverContentVariants = cva(
  "z-50 w-72 rounded-xl border border-border-default bg-bg-canvas p-4 shadow-lg focus-visible:outline-none data-[state=open]:animate-slide-in data-[state=closed]:animate-slide-out",
);
