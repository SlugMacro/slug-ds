import { cva } from "class-variance-authority";

export const selectTriggerVariants = cva(
  "inline-flex items-center justify-between bg-bg-neutral-muted border border-border-neutral-subtle text-fg-primary transition-colors focus-visible:outline-none focus-visible:border-border-inverse focus-visible:ring-1 focus-visible:ring-border-inverse disabled:bg-bg-disabled disabled:text-fg-disabled disabled:border-transparent disabled:pointer-events-none data-[placeholder]:text-fg-placeholder",
  {
    variants: {
      size: {
        sm: "h-9 px-3 text-sm rounded-md gap-1.5",
        md: "h-11 px-4 text-base rounded-lg gap-2",
      },
      error: {
        true: "border-border-danger-subtle focus-visible:border-border-danger focus-visible:ring-border-danger",
        false: "",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      error: false,
      fullWidth: false,
    },
  },
);

export const selectContentVariants = cva(
  "z-50 min-w-[8rem] overflow-hidden rounded-lg border border-border-neutral-subtle bg-bg-elevated p-1 shadow-lg data-[state=open]:animate-slide-in data-[state=closed]:animate-slide-out",
);

export const selectItemVariants = cva(
  "relative flex cursor-pointer select-none items-center rounded-md py-1.5 pl-8 pr-2 text-sm text-fg-primary outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:text-fg-disabled data-[highlighted]:bg-bg-neutral-muted-hover focus:bg-bg-neutral-muted-hover",
);

export const selectLabelVariants = cva("px-2 py-1.5 text-xs font-semibold text-fg-secondary");

export const selectSeparatorVariants = cva("-mx-1 my-1 h-px bg-border-subtle");
