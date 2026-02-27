import { create } from "storybook/theming";

export default create({
  base: "dark",
  brandTitle: "slug-ds",

  // Typography — match DS tokens
  fontBase: '"Geist", ui-sans-serif, system-ui, sans-serif',
  fontCode: '"Geist Mono", ui-monospace, monospace',

  // DS dark theme colors
  colorPrimary: "#9ad81a",
  colorSecondary: "#9ad81a",

  // UI
  appBg: "#0a0a0a",
  appContentBg: "#000000",
  appPreviewBg: "#000000",
  appBorderColor: "#505050",
  appBorderRadius: 8,

  // Text
  textColor: "#fafafa",
  textInverseColor: "#0a0a0a",
  textMutedColor: "#aaaaaa",

  // Toolbar
  barTextColor: "#aaaaaa",
  barSelectedColor: "#9ad81a",
  barHoverColor: "#bcec54",
  barBg: "#0a0a0a",

  // Form
  inputBg: "#1e1e1e",
  inputBorder: "#505050",
  inputTextColor: "#fafafa",
  inputBorderRadius: 6,

  // Booleans
  booleanBg: "#1e1e1e",
  booleanSelectedBg: "#9ad81a",

  // Grid
  gridCellSize: 12,
});
