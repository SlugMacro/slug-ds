import { forwardRef, useId } from "react";
import * as RadixSwitch from "@radix-ui/react-switch";
import { cn } from "@/utils/cn";
import type { SwitchProps } from "./Switch.types";
import { switchVariants, switchThumbVariants } from "./Switch.variants";

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(function Switch(
  { size, label, description, className, id: idProp, ...rest },
  ref,
) {
  const autoId = useId();
  const switchId = idProp ?? autoId;

  return (
    <div className="flex items-center gap-2">
      <RadixSwitch.Root
        ref={ref}
        id={switchId}
        className={cn(switchVariants({ size }), className)}
        {...rest}
      >
        <RadixSwitch.Thumb className={switchThumbVariants({ size })} />
      </RadixSwitch.Root>
      {(label || description) && (
        <div className="flex flex-col gap-0.5">
          {label && (
            <label htmlFor={switchId} className="text-sm font-medium text-fg-primary leading-none">
              {label}
            </label>
          )}
          {description && <p className="text-sm text-fg-muted">{description}</p>}
        </div>
      )}
    </div>
  );
});
