import type { Preview } from "@storybook/react-vite";
import "@fontsource/geist-sans/latin.css";
import "@fontsource/geist-mono/latin.css";
import "../src/styles.css";
import "./preview.css";
import { TooltipProvider } from "../src/components/Tooltip";
import { Toaster } from "../src/components/Toast";
import theme from "./theme";

const preview: Preview = {
  parameters: {
    docs: { theme },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: { disable: true },
    layout: "centered",
    a11y: {
      test: "error",
    },
  },
  globalTypes: {
    theme: {
      description: "Theme for components",
      toolbar: {
        title: "Theme",
        icon: "paintbrush",
        items: [
          { value: "light", title: "Light", icon: "sun" },
          { value: "dark", title: "Dark", icon: "moon" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "dark",
  },
  decorators: [
    (Story, context) => {
      const theme = (context.globals.theme as string) || "dark";
      return (
        <TooltipProvider delayDuration={200}>
          <div
            data-theme={theme}
            className="font-sans bg-bg-base text-fg-primary p-8 min-h-[200px]"
          >
            <Story />
            <Toaster />
          </div>
        </TooltipProvider>
      );
    },
  ],
};

export default preview;
