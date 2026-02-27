import { cva } from "class-variance-authority";

export const textVariants = cva("", {
  variants: {
    variant: {
      body: "",
      caption: "",
      label: "uppercase tracking-wide",
      heading: "font-bold",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    color: {
      primary: "text-fg-primary",
      secondary: "text-fg-secondary",
      muted: "text-fg-muted",
      accent: "text-accent-primary",
      error: "text-error",
      success: "text-success",
    },
    truncate: {
      true: "truncate",
      false: "",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    variant: "body",
    size: "md",
    weight: "normal",
    color: "primary",
    truncate: false,
  },
});
