import { cva } from "class-variance-authority";

export const dropdownMenuContentVariants = cva(
  "z-50 min-w-[8rem] overflow-hidden rounded-lg border border-border-default bg-bg-canvas p-1 shadow-lg data-[state=open]:animate-slide-in data-[state=closed]:animate-slide-out",
);

export const dropdownMenuItemVariants = cva(
  "relative flex cursor-pointer select-none items-center gap-2 rounded-md px-2 py-1.5 text-sm text-fg-primary outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[highlighted]:bg-bg-neutral-muted-hover focus:bg-bg-neutral-muted-hover",
);

export const dropdownMenuCheckboxItemVariants = cva(
  "relative flex cursor-pointer select-none items-center gap-2 rounded-md pl-8 pr-2 py-1.5 text-sm text-fg-primary outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[highlighted]:bg-bg-neutral-muted-hover focus:bg-bg-neutral-muted-hover",
);

export const dropdownMenuRadioItemVariants = cva(
  "relative flex cursor-pointer select-none items-center gap-2 rounded-md pl-8 pr-2 py-1.5 text-sm text-fg-primary outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[highlighted]:bg-bg-neutral-muted-hover focus:bg-bg-neutral-muted-hover",
);

export const dropdownMenuLabelVariants = cva("px-2 py-1.5 text-xs font-semibold text-fg-tertiary", {
  variants: {
    inset: {
      true: "pl-8",
      false: "",
    },
  },
  defaultVariants: {
    inset: false,
  },
});

export const dropdownMenuSeparatorVariants = cva("-mx-1 my-1 h-px bg-border-default");

export const dropdownMenuSubTriggerVariants = cva(
  "relative flex cursor-pointer select-none items-center gap-2 rounded-md px-2 py-1.5 text-sm text-fg-primary outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[highlighted]:bg-bg-neutral-muted-hover data-[state=open]:bg-bg-neutral-muted-hover focus:bg-bg-neutral-muted-hover",
  {
    variants: {
      inset: {
        true: "pl-8",
        false: "",
      },
    },
    defaultVariants: {
      inset: false,
    },
  },
);
