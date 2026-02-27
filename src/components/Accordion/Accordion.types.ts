import type { HTMLAttributes, ReactNode } from "react";

export interface AccordionSingleProps {
  type: "single";
  children: ReactNode;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  collapsible?: boolean;
}

export interface AccordionMultipleProps {
  type: "multiple";
  children: ReactNode;
  defaultValue?: string[];
  value?: string[];
  onValueChange?: (value: string[]) => void;
}

export type AccordionProps = AccordionSingleProps | AccordionMultipleProps;

export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
}

export type AccordionTriggerProps = HTMLAttributes<HTMLButtonElement>;

export type AccordionContentProps = HTMLAttributes<HTMLDivElement>;
