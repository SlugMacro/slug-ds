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
  "w-full bg-bg-base text-fg-primary border border-border-default placeholder:text-fg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "px-3 py-2 text-sm rounded-md",
        md: "px-3 py-2 text-sm rounded-lg",
        lg: "px-4 py-3 text-base rounded-lg",
      },
      error: {
        true: "border-error focus-visible:ring-error",
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
