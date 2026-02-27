import { createContext, forwardRef, useContext, useId } from "react";
import * as RadixSelect from "@radix-ui/react-select";
import { cn } from "@/utils/cn";
import type {
  SelectProps,
  SelectTriggerProps,
  SelectContentProps,
  SelectItemProps,
  SelectGroupProps,
  SelectSeparatorProps,
} from "./Select.types";
import {
  selectTriggerVariants,
  selectContentVariants,
  selectItemVariants,
  selectLabelVariants,
  selectSeparatorVariants,
} from "./Select.variants";

import { CheckLine, DownSmallLine } from "@mingcute/react";

const SelectContext = createContext<{ labelId?: string; descriptionId?: string }>({});

function SelectRoot({
  children,
  label,
  helperText,
  error = false,
  errorMessage,
  placeholder,
  size,
  fullWidth,
  ...rest
}: SelectProps) {
  const groupId = useId();
  const labelId = label ? `${groupId}-label` : undefined;
  const descriptionId = `${groupId}-description`;
  const hasDescription = Boolean(error ? errorMessage : helperText);

  return (
    <SelectContext.Provider
      value={{ labelId, descriptionId: hasDescription ? descriptionId : undefined }}
    >
      <div className={cn("inline-flex flex-col gap-2", fullWidth && "w-full")}>
        {label && (
          <span id={labelId} className="text-sm font-medium text-fg-label">
            {label}
          </span>
        )}
        <RadixSelect.Root {...rest}>
          {children ?? (
            <SelectTrigger
              size={size}
              error={error}
              fullWidth={fullWidth}
              aria-invalid={error || undefined}
            >
              <RadixSelect.Value placeholder={placeholder} />
            </SelectTrigger>
          )}
        </RadixSelect.Root>
        {hasDescription && (
          <p
            id={descriptionId}
            className={cn("text-xs", error ? "text-fg-danger" : "text-fg-helper")}
          >
            {error ? errorMessage : helperText}
          </p>
        )}
      </div>
    </SelectContext.Provider>
  );
}

SelectRoot.displayName = "Select";

const SelectTrigger = forwardRef<HTMLButtonElement, SelectTriggerProps>(function SelectTrigger(
  { size, error, fullWidth, className, children, ...rest },
  ref,
) {
  const { labelId, descriptionId } = useContext(SelectContext);
  return (
    <RadixSelect.Trigger
      ref={ref}
      className={cn(selectTriggerVariants({ size, error, fullWidth }), className)}
      aria-labelledby={labelId}
      aria-describedby={descriptionId}
      {...rest}
    >
      {children}
      <RadixSelect.Icon>
        <DownSmallLine className="h-4 w-4 opacity-50" aria-hidden="true" />
      </RadixSelect.Icon>
    </RadixSelect.Trigger>
  );
});

const SelectContent = forwardRef<HTMLDivElement, SelectContentProps>(function SelectContent(
  { className, children, position = "popper", sideOffset = 4, ...rest },
  ref,
) {
  return (
    <RadixSelect.Portal>
      <RadixSelect.Content
        ref={ref}
        className={cn(selectContentVariants(), className)}
        position={position}
        sideOffset={sideOffset}
        {...rest}
      >
        <RadixSelect.Viewport
          className={cn(
            position === "popper" && "w-full min-w-[var(--radix-select-trigger-width)]",
          )}
        >
          {children}
        </RadixSelect.Viewport>
      </RadixSelect.Content>
    </RadixSelect.Portal>
  );
});

const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(function SelectItem(
  { className, children, ...rest },
  ref,
) {
  return (
    <RadixSelect.Item ref={ref} className={cn(selectItemVariants(), className)} {...rest}>
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <RadixSelect.ItemIndicator>
          <CheckLine className="h-4 w-4" aria-hidden="true" />
        </RadixSelect.ItemIndicator>
      </span>
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
    </RadixSelect.Item>
  );
});

function SelectGroup({ children, label }: SelectGroupProps) {
  return (
    <RadixSelect.Group>
      {label && <RadixSelect.Label className={selectLabelVariants()}>{label}</RadixSelect.Label>}
      {children}
    </RadixSelect.Group>
  );
}

SelectGroup.displayName = "Select.Group";

const SelectSeparator = forwardRef<HTMLDivElement, SelectSeparatorProps>(function SelectSeparator(
  { className, ...rest },
  ref,
) {
  return (
    <RadixSelect.Separator
      ref={ref}
      className={cn(selectSeparatorVariants(), className)}
      {...rest}
    />
  );
});

export const Select = Object.assign(SelectRoot, {
  Trigger: SelectTrigger,
  Content: SelectContent,
  Item: SelectItem,
  Group: SelectGroup,
  Separator: SelectSeparator,
});
