import { cva } from "class-variance-authority";

export const selectTriggerVariants = cva(
  "inline-flex items-center justify-between bg-bg-canvas border border-border-default text-fg-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[placeholder]:text-fg-tertiary",
  {
    variants: {
      size: {
        sm: "h-8 px-3 text-sm rounded-md gap-1.5",
        md: "h-10 px-3 text-sm rounded-lg gap-2",
        lg: "h-12 px-4 text-base rounded-lg gap-2.5",
      },
      error: {
        true: "border-border-danger focus-visible:ring-ring-danger",
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
  "z-50 min-w-[8rem] overflow-hidden rounded-lg border border-border-default bg-bg-canvas p-1 shadow-lg data-[state=open]:animate-slide-in data-[state=closed]:animate-slide-out",
);

export const selectItemVariants = cva(
  "relative flex cursor-pointer select-none items-center rounded-md py-1.5 pl-8 pr-2 text-sm text-fg-primary outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[highlighted]:bg-bg-neutral-muted-hover focus:bg-bg-neutral-muted-hover",
);

export const selectLabelVariants = cva("px-2 py-1.5 text-xs font-semibold text-fg-tertiary");

export const selectSeparatorVariants = cva("-mx-1 my-1 h-px bg-border-default");
