import { addons } from "storybook/manager-api";
import "@fontsource/geist-sans/latin.css";
import "@fontsource/geist-mono/latin.css";
import "./manager.css";
import theme from "./theme";

addons.setConfig({ theme });

/* Replace the default component icon with mingcute ComponentsLine */
const COMPONENTS_LINE_PATH =
  "M10.94 2.454a1.5 1.5 0 0 1 2.12 0l2.83 2.828a1.5 1.5 0 0 1 0 2.122l-2.83 2.828a1.5 1.5 0 0 1-2.12 0L8.11 7.404a1.5 1.5 0 0 1 0-2.122zM12 4.222 9.879 6.343 12 8.464l2.121-2.12zm4.596 3.889a1.5 1.5 0 0 1 2.122 0l2.828 2.828a1.5 1.5 0 0 1 0 2.122l-2.828 2.828a1.5 1.5 0 0 1-2.122 0l-2.828-2.828a1.5 1.5 0 0 1 0-2.122zm1.06 1.768-2.12 2.12 2.12 2.122L19.779 12zM5.283 8.11a1.5 1.5 0 0 1 2.122 0l2.828 2.828a1.5 1.5 0 0 1 0 2.122l-2.828 2.828a1.5 1.5 0 0 1-2.122 0L2.455 13.06a1.5 1.5 0 0 1 0-2.122zm1.061 1.768-2.121 2.12 2.121 2.122L8.464 12zm4.596 3.889a1.5 1.5 0 0 1 2.122 0l2.828 2.828a1.5 1.5 0 0 1 0 2.121l-2.828 2.829a1.5 1.5 0 0 1-2.122 0l-2.828-2.829a1.5 1.5 0 0 1 0-2.12zM12 15.535l-2.121 2.122L12 19.778l2.121-2.121z";

function replaceComponentIcon() {
  const symbol = document.getElementById("icon--component");
  if (!symbol) return false;
  symbol.setAttribute("viewBox", "0 0 24 24");
  symbol.innerHTML = `<path fill="currentColor" d="${COMPONENTS_LINE_PATH}"/>`;
  return true;
}

/* Retry until the symbol is available (Storybook renders asynchronously) */
const interval = setInterval(() => {
  if (replaceComponentIcon()) clearInterval(interval);
}, 200);
setTimeout(() => clearInterval(interval), 10_000);
