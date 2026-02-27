import { cva } from "class-variance-authority";

export const switchVariants = cva(
  "inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-bg-primary data-[state=unchecked]:bg-bg-neutral-subtle",
  {
    variants: {
      size: {
        sm: "h-5 w-9",
        md: "h-6 w-11",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export const switchThumbVariants = cva(
  "pointer-events-none block rounded-full bg-fg-on-dark shadow-sm transition-transform data-[state=unchecked]:translate-x-0",
  {
    variants: {
      size: {
        sm: "h-4 w-4 data-[state=checked]:translate-x-4",
        md: "h-5 w-5 data-[state=checked]:translate-x-5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);
