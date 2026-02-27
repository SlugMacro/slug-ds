import { forwardRef } from "react";
import { cn } from "@/utils/cn";
import type { LinkProps } from "./Link.types";
import { linkVariants, linkIconVariants } from "./Link.variants";

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  {
    intent,
    emphasis,
    size,
    underline,
    disabled,
    external,
    leadingIcon,
    trailingIcon,
    className,
    children,
    ...rest
  },
  ref,
) {
  return (
    <a
      ref={ref}
      className={cn(
        linkVariants({ intent, emphasis, size, underline, disabled }),
        className,
      )}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : undefined}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {leadingIcon && (
        <span className={linkIconVariants({ size })} aria-hidden="true">
          {leadingIcon}
        </span>
      )}
      {children}
      {trailingIcon && (
        <span className={linkIconVariants({ size })} aria-hidden="true">
          {trailingIcon}
        </span>
      )}
    </a>
  );
});
