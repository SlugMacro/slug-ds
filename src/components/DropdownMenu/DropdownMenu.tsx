import { forwardRef } from "react";
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import { cn } from "@/utils/cn";
import type {
  DropdownMenuProps,
  DropdownMenuTriggerProps,
  DropdownMenuContentProps,
  DropdownMenuItemProps,
  DropdownMenuCheckboxItemProps,
  DropdownMenuRadioGroupProps,
  DropdownMenuRadioItemProps,
  DropdownMenuLabelProps,
  DropdownMenuSeparatorProps,
  DropdownMenuSubProps,
  DropdownMenuSubTriggerProps,
  DropdownMenuSubContentProps,
} from "./DropdownMenu.types";
import {
  dropdownMenuContentVariants,
  dropdownMenuItemVariants,
  dropdownMenuCheckboxItemVariants,
  dropdownMenuRadioItemVariants,
  dropdownMenuLabelVariants,
  dropdownMenuSeparatorVariants,
  dropdownMenuSubTriggerVariants,
} from "./DropdownMenu.variants";

const CheckIcon = () => (
  <svg
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const DotIcon = () => (
  <svg className="h-2 w-2 fill-current" viewBox="0 0 8 8" aria-hidden="true">
    <circle cx="4" cy="4" r="4" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    className="ml-auto h-4 w-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

function DropdownMenuRoot({ children, open, defaultOpen, onOpenChange }: DropdownMenuProps) {
  return (
    <RadixDropdownMenu.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
      {children}
    </RadixDropdownMenu.Root>
  );
}

function DropdownMenuTrigger({ children, asChild = true }: DropdownMenuTriggerProps) {
  return <RadixDropdownMenu.Trigger asChild={asChild}>{children}</RadixDropdownMenu.Trigger>;
}

DropdownMenuTrigger.displayName = "DropdownMenu.Trigger";

const DropdownMenuContent = forwardRef<HTMLDivElement, DropdownMenuContentProps>(
  ({ side = "bottom", align = "start", sideOffset = 4, className, children, ...rest }, ref) => (
    <RadixDropdownMenu.Portal>
      <RadixDropdownMenu.Content
        ref={ref}
        side={side}
        align={align}
        sideOffset={sideOffset}
        className={cn(dropdownMenuContentVariants(), className)}
        {...rest}
      >
        {children}
      </RadixDropdownMenu.Content>
    </RadixDropdownMenu.Portal>
  ),
);

DropdownMenuContent.displayName = "DropdownMenu.Content";

const DropdownMenuItem = forwardRef<HTMLDivElement, DropdownMenuItemProps>(
  ({ disabled, onSelect, shortcut, className, children, ...rest }, ref) => (
    <RadixDropdownMenu.Item
      ref={ref}
      disabled={disabled}
      onSelect={onSelect}
      className={cn(dropdownMenuItemVariants(), className)}
      {...rest}
    >
      {children}
      {shortcut && (
        <span className="ml-auto text-xs text-fg-tertiary tracking-widest">{shortcut}</span>
      )}
    </RadixDropdownMenu.Item>
  ),
);

DropdownMenuItem.displayName = "DropdownMenu.Item";

const DropdownMenuCheckboxItem = forwardRef<HTMLDivElement, DropdownMenuCheckboxItemProps>(
  ({ checked, onCheckedChange, disabled, className, children, ...rest }, ref) => (
    <RadixDropdownMenu.CheckboxItem
      ref={ref}
      checked={checked}
      onCheckedChange={onCheckedChange}
      disabled={disabled}
      className={cn(dropdownMenuCheckboxItemVariants(), className)}
      {...rest}
    >
      <span className="absolute left-2 flex h-4 w-4 items-center justify-center">
        <RadixDropdownMenu.ItemIndicator>
          <CheckIcon />
        </RadixDropdownMenu.ItemIndicator>
      </span>
      {children}
    </RadixDropdownMenu.CheckboxItem>
  ),
);

DropdownMenuCheckboxItem.displayName = "DropdownMenu.CheckboxItem";

function DropdownMenuRadioGroup({ children, value, onValueChange }: DropdownMenuRadioGroupProps) {
  return (
    <RadixDropdownMenu.RadioGroup value={value} onValueChange={onValueChange}>
      {children}
    </RadixDropdownMenu.RadioGroup>
  );
}

DropdownMenuRadioGroup.displayName = "DropdownMenu.RadioGroup";

const DropdownMenuRadioItem = forwardRef<HTMLDivElement, DropdownMenuRadioItemProps>(
  ({ value, disabled, className, children, ...rest }, ref) => (
    <RadixDropdownMenu.RadioItem
      ref={ref}
      value={value}
      disabled={disabled}
      className={cn(dropdownMenuRadioItemVariants(), className)}
      {...rest}
    >
      <span className="absolute left-2 flex h-4 w-4 items-center justify-center">
        <RadixDropdownMenu.ItemIndicator>
          <DotIcon />
        </RadixDropdownMenu.ItemIndicator>
      </span>
      {children}
    </RadixDropdownMenu.RadioItem>
  ),
);

DropdownMenuRadioItem.displayName = "DropdownMenu.RadioItem";

const DropdownMenuLabel = forwardRef<HTMLDivElement, DropdownMenuLabelProps>(
  ({ inset, className, children, ...rest }, ref) => (
    <RadixDropdownMenu.Label
      ref={ref}
      className={cn(dropdownMenuLabelVariants({ inset }), className)}
      {...rest}
    >
      {children}
    </RadixDropdownMenu.Label>
  ),
);

DropdownMenuLabel.displayName = "DropdownMenu.Label";

const DropdownMenuSeparator = forwardRef<HTMLDivElement, DropdownMenuSeparatorProps>(
  ({ className, ...rest }, ref) => (
    <RadixDropdownMenu.Separator
      ref={ref}
      className={cn(dropdownMenuSeparatorVariants(), className)}
      {...rest}
    />
  ),
);

DropdownMenuSeparator.displayName = "DropdownMenu.Separator";

function DropdownMenuSub({ children, open, defaultOpen, onOpenChange }: DropdownMenuSubProps) {
  return (
    <RadixDropdownMenu.Sub open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
      {children}
    </RadixDropdownMenu.Sub>
  );
}

DropdownMenuSub.displayName = "DropdownMenu.Sub";

const DropdownMenuSubTrigger = forwardRef<HTMLDivElement, DropdownMenuSubTriggerProps>(
  ({ disabled, inset, className, children, ...rest }, ref) => (
    <RadixDropdownMenu.SubTrigger
      ref={ref}
      disabled={disabled}
      className={cn(dropdownMenuSubTriggerVariants({ inset }), className)}
      {...rest}
    >
      {children}
      <ChevronRightIcon />
    </RadixDropdownMenu.SubTrigger>
  ),
);

DropdownMenuSubTrigger.displayName = "DropdownMenu.SubTrigger";

const DropdownMenuSubContent = forwardRef<HTMLDivElement, DropdownMenuSubContentProps>(
  ({ className, children, ...rest }, ref) => (
    <RadixDropdownMenu.Portal>
      <RadixDropdownMenu.SubContent
        ref={ref}
        className={cn(dropdownMenuContentVariants(), className)}
        {...rest}
      >
        {children}
      </RadixDropdownMenu.SubContent>
    </RadixDropdownMenu.Portal>
  ),
);

DropdownMenuSubContent.displayName = "DropdownMenu.SubContent";

export const DropdownMenu = Object.assign(DropdownMenuRoot, {
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
  CheckboxItem: DropdownMenuCheckboxItem,
  RadioGroup: DropdownMenuRadioGroup,
  RadioItem: DropdownMenuRadioItem,
  Label: DropdownMenuLabel,
  Separator: DropdownMenuSeparator,
  Sub: DropdownMenuSub,
  SubTrigger: DropdownMenuSubTrigger,
  SubContent: DropdownMenuSubContent,
});
