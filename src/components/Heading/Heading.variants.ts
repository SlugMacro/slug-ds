import { cva } from "class-variance-authority";

export const headingVariants = cva("", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
    },
    weight: {
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    color: {
      primary: "text-fg-primary",
      secondary: "text-fg-secondary",
      muted: "text-fg-muted",
      accent: "text-accent-primary",
    },
    truncate: {
      true: "truncate",
      false: "",
    },
  },
  defaultVariants: {
    weight: "bold",
    color: "primary",
    truncate: false,
  },
});
