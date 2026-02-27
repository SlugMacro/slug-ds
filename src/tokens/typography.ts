export const fontFamily = {
  sans: '"Geist", ui-sans-serif, system-ui, sans-serif',
  mono: '"Geist Mono", ui-monospace, monospace',
} as const;

/** Font sizes in rem. Comfortable density (default). */
export const fontSize = {
  xs: "0.75rem",
  sm: "0.875rem",
  base: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "3.75rem",
  "7xl": "4.5rem",
  "8xl": "6rem",
  "9xl": "8rem",
} as const;

/** Line heights in px mapped to font-size scale. Comfortable density. */
export const lineHeightPx = {
  xs: "16px",
  sm: "20px",
  base: "24px",
  lg: "28px",
  xl: "28px",
  "2xl": "32px",
  "3xl": "36px",
  "4xl": "40px",
  "5xl": "48px",
  "6xl": "60px",
  "7xl": "72px",
  "8xl": "96px",
  "9xl": "128px",
} as const;

export const fontWeight = {
  thin: "100",
  extralight: "200",
  light: "300",
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
  black: "900",
} as const;

/** Named line-height ratios for Tailwind `leading-*` utilities. */
export const lineHeight = {
  none: "1",
  tight: "1.25",
  snug: "1.375",
  normal: "1.5",
  relaxed: "1.625",
  loose: "2",
} as const;

/** Letter spacing values. */
export const letterSpacing = {
  tighter: "-0.05em",
  tight: "-0.025em",
  normal: "0em",
  wide: "0.025em",
  wider: "0.05em",
  widest: "0.1em",
} as const;
