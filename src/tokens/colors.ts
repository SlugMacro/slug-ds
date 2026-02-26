export const colors = {
  fg: {
    primary: "var(--color-fg-primary)",
    secondary: "var(--color-fg-secondary)",
    muted: "var(--color-fg-muted)",
    onAccent: "var(--color-fg-on-accent)",
  },
  bg: {
    base: "var(--color-bg-base)",
    surface: "var(--color-bg-surface)",
    surfaceHover: "var(--color-bg-surface-hover)",
  },
  border: {
    default: "var(--color-border-default)",
  },
  accent: {
    primary: "var(--color-accent-primary)",
    primaryHover: "var(--color-accent-primary-hover)",
  },
  error: "var(--color-error)",
  errorHover: "var(--color-error-hover)",
  success: "var(--color-success)",
  warning: "var(--color-warning)",
} as const;

export const lightTheme = {
  fg: { primary: "#111827", secondary: "#6b7280", muted: "#9ca3af", onAccent: "#ffffff" },
  bg: { base: "#ffffff", surface: "#f9fafb", surfaceHover: "#f3f4f6" },
  border: { default: "#e5e7eb" },
  accent: { primary: "#7c3aed", primaryHover: "#6d28d9" },
  error: "#ef4444",
  errorHover: "#dc2626",
  success: "#22c55e",
  warning: "#f59e0b",
} as const;

export const darkTheme = {
  fg: { primary: "#f9fafb", secondary: "#9ca3af", muted: "#6b7280", onAccent: "#ffffff" },
  bg: { base: "#111827", surface: "#1f2937", surfaceHover: "#374151" },
  border: { default: "#374151" },
  accent: { primary: "#a78bfa", primaryHover: "#8b5cf6" },
  error: "#f87171",
  errorHover: "#ef4444",
  success: "#4ade80",
  warning: "#fbbf24",
} as const;
