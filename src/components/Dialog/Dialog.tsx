import { forwardRef } from "react";
import * as RadixDialog from "@radix-ui/react-dialog";
import { cn } from "@/utils/cn";
import type {
  DialogProps,
  DialogTriggerProps,
  DialogContentProps,
  DialogHeaderProps,
  DialogFooterProps,
  DialogTitleProps,
  DialogDescriptionProps,
  DialogCloseProps,
} from "./Dialog.types";
import { dialogOverlayVariants, dialogContentVariants } from "./Dialog.variants";

const CloseIcon = () => (
  <svg
    className="h-4 w-4"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

function DialogRoot({ children, open, defaultOpen, onOpenChange }: DialogProps) {
  return (
    <RadixDialog.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
      {children}
    </RadixDialog.Root>
  );
}

function DialogTrigger({ children, asChild = true }: DialogTriggerProps) {
  return <RadixDialog.Trigger asChild={asChild}>{children}</RadixDialog.Trigger>;
}

DialogTrigger.displayName = "Dialog.Trigger";

const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
  ({ size, showClose = true, className, children, ...rest }, ref) => {
    return (
      <RadixDialog.Portal>
        <RadixDialog.Overlay className={cn(dialogOverlayVariants())} />
        <RadixDialog.Content
          ref={ref}
          className={cn(dialogContentVariants({ size }), className)}
          {...rest}
        >
          {children}
          {showClose && (
            <RadixDialog.Close
              className="absolute right-4 top-4 rounded-sm text-fg-muted hover:text-fg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2"
              aria-label="Close"
            >
              <CloseIcon />
            </RadixDialog.Close>
          )}
        </RadixDialog.Content>
      </RadixDialog.Portal>
    );
  },
);

DialogContent.displayName = "Dialog.Content";

const DialogHeader = forwardRef<HTMLDivElement, DialogHeaderProps>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cn("px-6 py-4 border-b border-border-default", className)} {...rest}>
      {children}
    </div>
  ),
);

DialogHeader.displayName = "Dialog.Header";

const DialogFooter = forwardRef<HTMLDivElement, DialogFooterProps>(
  ({ className, children, ...rest }, ref) => (
    <div
      ref={ref}
      className={cn("flex justify-end gap-2 px-6 py-4 border-t border-border-default", className)}
      {...rest}
    >
      {children}
    </div>
  ),
);

DialogFooter.displayName = "Dialog.Footer";

const DialogTitle = forwardRef<HTMLHeadingElement, DialogTitleProps>(
  ({ className, children, ...rest }, ref) => (
    <RadixDialog.Title
      ref={ref}
      className={cn("text-lg font-semibold text-fg-primary", className)}
      {...rest}
    >
      {children}
    </RadixDialog.Title>
  ),
);

DialogTitle.displayName = "Dialog.Title";

const DialogDescription = forwardRef<HTMLParagraphElement, DialogDescriptionProps>(
  ({ className, children, ...rest }, ref) => (
    <RadixDialog.Description
      ref={ref}
      className={cn("text-sm text-fg-secondary", className)}
      {...rest}
    >
      {children}
    </RadixDialog.Description>
  ),
);

DialogDescription.displayName = "Dialog.Description";

function DialogClose({ children, asChild = true }: DialogCloseProps) {
  return <RadixDialog.Close asChild={asChild}>{children}</RadixDialog.Close>;
}

DialogClose.displayName = "Dialog.Close";

export const Dialog = Object.assign(DialogRoot, {
  Trigger: DialogTrigger,
  Content: DialogContent,
  Header: DialogHeader,
  Footer: DialogFooter,
  Title: DialogTitle,
  Description: DialogDescription,
  Close: DialogClose,
});
