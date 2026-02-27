import * as RadixTooltip from "@radix-ui/react-tooltip";
import { cn } from "@/utils/cn";
import type { TooltipProps, TooltipProviderProps } from "./Tooltip.types";
import { tooltipContentVariants } from "./Tooltip.variants";

export function TooltipProvider({
  children,
  delayDuration = 400,
  skipDelayDuration = 300,
}: TooltipProviderProps) {
  return (
    <RadixTooltip.Provider delayDuration={delayDuration} skipDelayDuration={skipDelayDuration}>
      {children}
    </RadixTooltip.Provider>
  );
}

export function Tooltip({
  children,
  content,
  side = "top",
  align = "center",
  sideOffset = 4,
  delayDuration,
  open,
  defaultOpen,
  onOpenChange,
}: TooltipProps) {
  return (
    <RadixTooltip.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      delayDuration={delayDuration}
    >
      <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <RadixTooltip.Content
          side={side}
          align={align}
          sideOffset={sideOffset}
          className={cn(tooltipContentVariants())}
        >
          {content}
          <RadixTooltip.Arrow className="fill-bg-neutral" />
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  );
}
