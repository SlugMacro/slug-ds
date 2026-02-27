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
  "w-full bg-bg-neutral-muted text-fg-primary border border-border-neutral-subtle placeholder:text-fg-placeholder transition-colors focus-visible:outline-none focus-visible:border-border-inverse focus-visible:ring-1 focus-visible:ring-border-inverse disabled:bg-bg-disabled disabled:text-fg-disabled disabled:border-transparent disabled:pointer-events-none",
  {
    variants: {
      size: {
        sm: "h-9 px-3 text-sm rounded-md",
        md: "h-11 px-4 text-base rounded-lg",
      },
      error: {
        true: "border-border-danger-subtle focus-visible:border-border-danger focus-visible:ring-border-danger",
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
  "inline-flex items-center border border-border-neutral-subtle bg-bg-neutral-muted text-fg-secondary",
  {
    variants: {
      size: {
        sm: "px-3 text-sm",
        md: "px-4 text-base",
      },
      position: {
        left: "rounded-l-md border-r-0",
        right: "rounded-r-md border-l-0",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);
