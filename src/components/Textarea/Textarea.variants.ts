import { cva } from "class-variance-authority";

export const textareaWrapperVariants = cva("inline-flex", {
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

export const textareaVariants = cva(
  "w-full bg-bg-neutral-muted text-fg-primary border border-border-neutral-subtle placeholder:text-fg-placeholder transition-colors focus-visible:outline-none focus-visible:border-border-inverse focus-visible:ring-1 focus-visible:ring-border-inverse disabled:bg-bg-disabled disabled:text-fg-disabled disabled:border-transparent disabled:pointer-events-none",
  {
    variants: {
      size: {
        sm: "px-3 py-2 text-sm rounded-md",
        md: "px-4 py-2.5 text-base rounded-lg",
      },
      error: {
        true: "border-border-danger-subtle focus-visible:border-border-danger focus-visible:ring-border-danger",
        false: "",
      },
      resize: {
        none: "resize-none",
        vertical: "resize-y",
        horizontal: "resize-x",
        both: "resize",
      },
    },
    defaultVariants: {
      size: "md",
      error: false,
      resize: "vertical",
    },
  },
);
