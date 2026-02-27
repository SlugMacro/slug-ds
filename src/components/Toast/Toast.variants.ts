/**
 * Sonner classNames mapping to design tokens.
 * These override sonner's default styles with our token-based classes.
 */
export const toasterClassNames = {
  toast: "group border border-border-default bg-bg-base text-fg-primary rounded-lg shadow-lg",
  title: "text-sm font-medium text-fg-primary",
  description: "text-sm text-fg-secondary",
  actionButton:
    "bg-accent-primary text-fg-on-accent text-sm font-medium rounded-md px-3 py-1.5 hover:bg-accent-primary-hover",
  cancelButton:
    "bg-bg-surface text-fg-secondary text-sm font-medium rounded-md px-3 py-1.5 border border-border-default hover:bg-bg-surface-hover",
  closeButton: "border border-border-default bg-bg-base text-fg-secondary hover:text-fg-primary",
  success: "border-success/30 [&_[data-icon]]:text-success",
  error: "border-error/30 [&_[data-icon]]:text-error",
  warning: "border-warning/30 [&_[data-icon]]:text-warning",
  info: "border-info/30 [&_[data-icon]]:text-info",
} as const;
