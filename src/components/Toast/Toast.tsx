import { Toaster as SonnerToaster } from "sonner";
import { cn } from "@/utils/cn";
import type { ToasterProps } from "./Toast.types";
import { toasterClassNames } from "./Toast.variants";

export function Toaster({
  position = "bottom-right",
  closeButton = false,
  richColors = false,
  visibleToasts = 3,
  duration = 4000,
  expand = false,
  theme = "system",
  className,
}: ToasterProps = {}) {
  return (
    <SonnerToaster
      position={position}
      closeButton={closeButton}
      richColors={richColors}
      visibleToasts={visibleToasts}
      duration={duration}
      expand={expand}
      theme={theme}
      className={cn(className)}
      toastOptions={{
        classNames: toasterClassNames,
      }}
    />
  );
}
