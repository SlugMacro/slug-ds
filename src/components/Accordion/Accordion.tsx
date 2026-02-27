import { forwardRef } from "react";
import * as RadixAccordion from "@radix-ui/react-accordion";
import { DownSmallLine } from "@mingcute/react";
import { cn } from "@/utils/cn";
import type {
  AccordionProps,
  AccordionItemProps,
  AccordionTriggerProps,
  AccordionContentProps,
} from "./Accordion.types";
import {
  accordionItemVariants,
  accordionTriggerVariants,
  accordionContentVariants,
} from "./Accordion.variants";

function AccordionRoot(props: AccordionProps) {
  if (props.type === "multiple") {
    const { children, ...rest } = props;
    return <RadixAccordion.Root {...rest}>{children}</RadixAccordion.Root>;
  }
  const { children, ...rest } = props;
  return <RadixAccordion.Root {...rest}>{children}</RadixAccordion.Root>;
}

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ value, className, children, ...rest }, ref) => (
    <RadixAccordion.Item
      ref={ref}
      value={value}
      className={cn(accordionItemVariants(), className)}
      {...rest}
    >
      {children}
    </RadixAccordion.Item>
  ),
);
AccordionItem.displayName = "Accordion.Item";

const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ className, children, ...rest }, ref) => (
    <RadixAccordion.Header className="flex">
      <RadixAccordion.Trigger
        ref={ref}
        className={cn(accordionTriggerVariants(), className)}
        {...rest}
      >
        {children}
        <DownSmallLine
          className="h-4 w-4 shrink-0 text-fg-tertiary transition-transform duration-200"
          aria-hidden="true"
        />
      </RadixAccordion.Trigger>
    </RadixAccordion.Header>
  ),
);
AccordionTrigger.displayName = "Accordion.Trigger";

const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, children, ...rest }, ref) => (
    <RadixAccordion.Content
      ref={ref}
      className={cn(accordionContentVariants(), className)}
      {...rest}
    >
      <div className="pb-4 pt-0">{children}</div>
    </RadixAccordion.Content>
  ),
);
AccordionContent.displayName = "Accordion.Content";

export const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
});
