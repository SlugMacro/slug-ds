import { forwardRef } from "react";
import { CloseLine } from "@mingcute/react";
import { cn } from "@/utils/cn";
import type { AlertProps, AlertTitleProps, AlertDescriptionProps } from "./Alert.types";
import { alertVariants } from "./Alert.variants";

const AlertRoot = forwardRef<HTMLDivElement, AlertProps>(
  ({ intent, variant, icon, onClose, className, children, ...rest }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ intent, variant }), className)}
      {...rest}
    >
      {icon && <span className="mt-0.5 shrink-0">{icon}</span>}
      <div className="flex-1">{children}</div>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="shrink-0 rounded-sm opacity-70 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-primary"
          aria-label="Dismiss"
        >
          <CloseLine className="h-4 w-4" aria-hidden="true" />
        </button>
      )}
    </div>
  ),
);
AlertRoot.displayName = "Alert";

const AlertTitle = forwardRef<HTMLHeadingElement, AlertTitleProps>(
  ({ className, children, ...rest }, ref) => (
    <h5 ref={ref} className={cn("mb-1 font-semibold leading-none", className)} {...rest}>
      {children}
    </h5>
  ),
);
AlertTitle.displayName = "Alert.Title";

const AlertDescription = forwardRef<HTMLParagraphElement, AlertDescriptionProps>(
  ({ className, children, ...rest }, ref) => (
    <p ref={ref} className={cn("text-sm opacity-90", className)} {...rest}>
      {children}
    </p>
  ),
);
AlertDescription.displayName = "Alert.Description";

export const Alert = Object.assign(AlertRoot, {
  Title: AlertTitle,
  Description: AlertDescription,
});
