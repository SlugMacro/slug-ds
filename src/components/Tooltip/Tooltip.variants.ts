import { cva } from "class-variance-authority";

export const tooltipContentVariants = cva(
  "z-50 overflow-hidden rounded-md bg-fg-primary text-bg-base px-3 py-1.5 text-sm shadow-md data-[state=delayed-open]:animate-slide-in data-[state=closed]:animate-slide-out",
);
