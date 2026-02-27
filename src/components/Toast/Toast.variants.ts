/**
 * Sonner classNames mapping to design tokens.
 * These override sonner's default styles with our token-based classes.
 */
export const toasterClassNames = {
  toast: "group border border-border-default bg-bg-canvas text-fg-primary rounded-lg shadow-lg",
  title: "text-sm font-medium text-fg-primary",
  description: "text-sm text-fg-secondary",
  actionButton:
    "bg-bg-primary text-fg-on-dark text-sm font-medium rounded-md px-3 py-1.5 hover:bg-bg-primary-hover",
  cancelButton:
    "bg-bg-surface text-fg-secondary text-sm font-medium rounded-md px-3 py-1.5 border border-border-default hover:bg-bg-neutral-muted-hover",
  closeButton: "border border-border-default bg-bg-canvas text-fg-secondary hover:text-fg-primary",
  success: "border-border-success-subtle [&_[data-icon]]:text-fg-success",
  error: "border-border-danger-subtle [&_[data-icon]]:text-fg-danger",
  warning: "border-border-warning-subtle [&_[data-icon]]:text-fg-warning",
  info: "border-border-info-subtle [&_[data-icon]]:text-fg-info",
} as const;
