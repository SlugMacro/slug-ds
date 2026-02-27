import { cva } from "class-variance-authority";

export const inputWrapperVariants = cva("inline-flex", {
  variants: {
    fullWidth: {
      true: "w-full",
      false: "",
    },
  },
  defaultVariants: {
    fullWidth: false,
  },
});

export const inputVariants = cva(
  "w-full bg-bg-canvas text-fg-primary border border-border-default placeholder:text-fg-tertiary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "h-8 px-3 text-sm rounded-md",
        md: "h-10 px-3 text-sm rounded-lg",
        lg: "h-12 px-4 text-base rounded-lg",
      },
      error: {
        true: "border-border-danger focus-visible:ring-ring-danger",
        false: "",
      },
      hasLeftAddon: {
        true: "rounded-l-none",
        false: "",
      },
      hasRightAddon: {
        true: "rounded-r-none",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      error: false,
      hasLeftAddon: false,
      hasRightAddon: false,
    },
  },
);

export const addonVariants = cva(
  "inline-flex items-center border border-border-default bg-bg-surface text-fg-secondary",
  {
    variants: {
      size: {
        sm: "px-3 text-sm",
        md: "px-3 text-sm",
        lg: "px-4 text-base",
      },
      position: {
        left: "rounded-l-lg border-r-0",
        right: "rounded-r-lg border-l-0",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);
