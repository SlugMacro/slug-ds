import { cva } from "class-variance-authority";

export const tabsListVariants = cva(
  "inline-flex items-center gap-1 rounded-lg bg-bg-surface p-1 border border-border-default",
  {
    variants: {
      size: {
        sm: "h-9",
        md: "h-10",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export const tabsTriggerVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-primary disabled:pointer-events-none disabled:opacity-50 text-fg-secondary data-[state=active]:bg-bg-canvas data-[state=active]:text-fg-primary data-[state=active]:shadow-sm",
);

export const tabsContentVariants = cva(
  "mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-primary",
);
