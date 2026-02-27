import type { ToasterProps as SonnerToasterProps } from "sonner";

export interface ToasterProps {
  /** Position of the toast stack */
  position?: SonnerToasterProps["position"];
  /** Whether to show the close button on toasts */
  closeButton?: boolean;
  /** Whether toasts are rich (have colored backgrounds per type) */
  richColors?: boolean;
  /** Maximum number of visible toasts */
  visibleToasts?: number;
  /** Duration in ms before auto-dismiss. 0 = no auto-dismiss */
  duration?: number;
  /** Expand toasts on hover */
  expand?: boolean;
  /** Theme override — syncs with data-theme by default */
  theme?: "light" | "dark" | "system";
  /** Additional CSS class for the toaster container */
  className?: string;
}
