import { forwardRef, type ElementType, type ReactNode, type Ref } from "react";
import { cn } from "@/utils/cn";
import type { TextOwnProps } from "./Text.types";
import { textVariants } from "./Text.variants";

const DEFAULT_ELEMENT = "span" satisfies ElementType;

function TextRender(
  {
    as,
    variant,
    size,
    weight,
    color,
    truncate,
    align,
    className,
    children,
    ...rest
  }: TextOwnProps & {
    as?: ElementType;
    className?: string;
    children?: ReactNode;
    [key: string]: unknown;
  },
  ref: Ref<HTMLElement>,
) {
  const Component = as ?? DEFAULT_ELEMENT;

  return (
    <Component
      ref={ref}
      className={cn(textVariants({ variant, size, weight, color, truncate, align }), className)}
      {...rest}
    >
      {children}
    </Component>
  );
}

TextRender.displayName = "Text";

export const Text = forwardRef(TextRender) as <E extends ElementType = typeof DEFAULT_ELEMENT>(
  props: TextOwnProps & {
    as?: E;
    className?: string;
    children?: ReactNode;
    ref?: Ref<HTMLElement>;
  } & Omit<React.ComponentPropsWithoutRef<E>, keyof TextOwnProps | "as">,
) => ReactNode;
