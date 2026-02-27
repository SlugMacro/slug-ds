import { forwardRef } from "react";
import * as RadixTabs from "@radix-ui/react-tabs";
import { cn } from "@/utils/cn";
import type { TabsProps, TabsListProps, TabsTriggerProps, TabsContentProps } from "./Tabs.types";
import { tabsListVariants, tabsTriggerVariants, tabsContentVariants } from "./Tabs.variants";

function TabsRoot({ children, defaultValue, value, onValueChange }: TabsProps) {
  return (
    <RadixTabs.Root defaultValue={defaultValue} value={value} onValueChange={onValueChange}>
      {children}
    </RadixTabs.Root>
  );
}

const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, children, ...rest }, ref) => (
    <RadixTabs.List ref={ref} className={cn(tabsListVariants(), className)} {...rest}>
      {children}
    </RadixTabs.List>
  ),
);

TabsList.displayName = "Tabs.List";

const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ value, disabled, className, children, ...rest }, ref) => (
    <RadixTabs.Trigger
      ref={ref}
      value={value}
      disabled={disabled}
      className={cn(tabsTriggerVariants(), className)}
      {...rest}
    >
      {children}
    </RadixTabs.Trigger>
  ),
);

TabsTrigger.displayName = "Tabs.Trigger";

const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(
  ({ value, className, children, ...rest }, ref) => (
    <RadixTabs.Content
      ref={ref}
      value={value}
      className={cn(tabsContentVariants(), className)}
      {...rest}
    >
      {children}
    </RadixTabs.Content>
  ),
);

TabsContent.displayName = "Tabs.Content";

export const Tabs = Object.assign(TabsRoot, {
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
});
