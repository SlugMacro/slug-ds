import { cva } from "class-variance-authority";

export const accordionItemVariants = cva("border-b border-border-default");

export const accordionTriggerVariants = cva(
  "flex w-full items-center justify-between py-4 text-sm font-medium text-fg-primary transition-colors hover:text-fg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-primary [&[data-state=open]>svg]:rotate-180",
);

export const accordionContentVariants = cva(
  "overflow-hidden text-sm text-fg-secondary data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up",
);
