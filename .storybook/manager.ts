import { addons } from "storybook/manager-api";
import "@fontsource/geist-sans/latin.css";
import "@fontsource/geist-mono/latin.css";
import "./manager.css";
import theme from "./theme";

addons.setConfig({ theme });

/* Replace the default component icon with mingcute ComponentsLine */
const COMPONENTS_LINE_PATH =
  "M10.94 2.454a1.5 1.5 0 0 1 2.12 0l2.83 2.828a1.5 1.5 0 0 1 0 2.122l-2.83 2.828a1.5 1.5 0 0 1-2.12 0L8.11 7.404a1.5 1.5 0 0 1 0-2.122zM12 4.222 9.879 6.343 12 8.464l2.121-2.12zm4.596 3.889a1.5 1.5 0 0 1 2.122 0l2.828 2.828a1.5 1.5 0 0 1 0 2.122l-2.828 2.828a1.5 1.5 0 0 1-2.122 0l-2.828-2.828a1.5 1.5 0 0 1 0-2.122zm1.06 1.768-2.12 2.12 2.12 2.122L19.779 12zM5.283 8.11a1.5 1.5 0 0 1 2.122 0l2.828 2.828a1.5 1.5 0 0 1 0 2.122l-2.828 2.828a1.5 1.5 0 0 1-2.122 0L2.455 13.06a1.5 1.5 0 0 1 0-2.122zm1.061 1.768-2.121 2.12 2.121 2.122L8.464 12zm4.596 3.889a1.5 1.5 0 0 1 2.122 0l2.828 2.828a1.5 1.5 0 0 1 0 2.121l-2.828 2.829a1.5 1.5 0 0 1-2.122 0l-2.828-2.829a1.5 1.5 0 0 1 0-2.12zM12 15.535l-2.121 2.122L12 19.778l2.121-2.121z";

/* mingcute GridLine — used for Foundation group (not component icon) */
const GRID_LINE_PATH =
  "M9 13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm10 0a2 2 0 0 1 1.995 1.85L21 15v4a2 2 0 0 1-1.85 1.995L19 21h-4a2 2 0 0 1-1.995-1.85L13 19v-4a2 2 0 0 1 1.85-1.995L15 13zM9 15H5v4h4zm10 0h-4v4h4zm0-12a2 2 0 0 1 1.995 1.85L21 5v4a2 2 0 0 1-1.85 1.995L19 11h-4a2 2 0 0 1-1.995-1.85L13 9V5a2 2 0 0 1 1.85-1.995L15 3zM9 3a2 2 0 0 1 1.995 1.85L11 5v4a2 2 0 0 1-1.85 1.995L9 11H5a2 2 0 0 1-1.995-1.85L3 9V5a2 2 0 0 1 1.85-1.995L5 3zm10 2h-4v4h4zM9 5H5v4h4z";

function replaceComponentIcon() {
  const symbol = document.getElementById("icon--component");
  if (!symbol) return false;
  symbol.setAttribute("viewBox", "0 0 24 24");
  symbol.innerHTML = `<path fill="currentColor" d="${COMPONENTS_LINE_PATH}"/>`;
  return true;
}

function injectFoundationSymbol() {
  /* Foundation items share icon--component. We inject a separate symbol and re-point their <use>. */
  const existing = document.getElementById("icon--foundation");
  if (existing) return true;
  const sprite = document.querySelector("svg");
  if (!sprite || !sprite.querySelector("symbol")) return false;
  const sym = document.createElementNS("http://www.w3.org/2000/svg", "symbol");
  sym.id = "icon--foundation";
  sym.setAttribute("viewBox", "0 0 24 24");
  sym.innerHTML = `<path fill="currentColor" d="${GRID_LINE_PATH}"/>`;
  sprite.appendChild(sym);
  return true;
}

function swapFoundationUseHrefs() {
  const items = document.querySelectorAll(
    '[data-item-id^="foundation-"]:not([data-item-id*="--"])',
  );
  let swapped = 0;
  items.forEach((el) => {
    const use = el.querySelector("svg use");
    if (!use) return;
    const href = use.getAttribute("href") || use.getAttribute("xlink:href");
    if (href === "#icon--component") {
      use.removeAttribute("xlink:href");
      use.setAttribute("href", "#icon--foundation");
      swapped++;
    }
  });
  return swapped > 0;
}

/* Retry until symbols are available (Storybook renders asynchronously) */
let componentDone = false;
let foundationSymbolDone = false;
let foundationSwapped = false;
const interval = setInterval(() => {
  if (!componentDone) componentDone = replaceComponentIcon();
  if (!foundationSymbolDone) foundationSymbolDone = injectFoundationSymbol();
  if (foundationSymbolDone && !foundationSwapped) foundationSwapped = swapFoundationUseHrefs();
  if (componentDone && foundationSwapped) clearInterval(interval);
}, 200);
setTimeout(() => clearInterval(interval), 10_000);

/* Also swap on sidebar mutations (expanding/collapsing re-renders items) */
const observer = new MutationObserver(() => {
  if (foundationSymbolDone) swapFoundationUseHrefs();
});
requestAnimationFrame(() => {
  const sidebar = document.getElementById("storybook-explorer-tree");
  if (sidebar) observer.observe(sidebar, { childList: true, subtree: true });
});
