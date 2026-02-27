import { forwardRef } from "react";
import * as RadixPopover from "@radix-ui/react-popover";
import { cn } from "@/utils/cn";
import type {
  PopoverProps,
  PopoverTriggerProps,
  PopoverContentProps,
  PopoverCloseProps,
} from "./Popover.types";
import { popoverContentVariants } from "./Popover.variants";

function PopoverRoot({ children, open, defaultOpen, onOpenChange }: PopoverProps) {
  return (
    <RadixPopover.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
      {children}
    </RadixPopover.Root>
  );
}

function PopoverTrigger({ children, asChild = true }: PopoverTriggerProps) {
  return <RadixPopover.Trigger asChild={asChild}>{children}</RadixPopover.Trigger>;
}

PopoverTrigger.displayName = "Popover.Trigger";

const PopoverContent = forwardRef<HTMLDivElement, PopoverContentProps>(
  ({ side = "bottom", sideOffset = 4, align = "center", className, children, ...rest }, ref) => (
    <RadixPopover.Portal>
      <RadixPopover.Content
        ref={ref}
        side={side}
        sideOffset={sideOffset}
        align={align}
        className={cn(popoverContentVariants(), className)}
        {...rest}
      >
        {children}
      </RadixPopover.Content>
    </RadixPopover.Portal>
  ),
);

PopoverContent.displayName = "Popover.Content";

function PopoverClose({ children, asChild = true }: PopoverCloseProps) {
  return <RadixPopover.Close asChild={asChild}>{children}</RadixPopover.Close>;
}

PopoverClose.displayName = "Popover.Close";

export const Popover = Object.assign(PopoverRoot, {
  Trigger: PopoverTrigger,
  Content: PopoverContent,
  Close: PopoverClose,
});
