import { forwardRef } from "react";
import { cn } from "@/utils/cn";
import type { CardProps, CardHeaderProps, CardBodyProps, CardFooterProps } from "./Card.types";
import { cardVariants } from "./Card.variants";

const CardRoot = forwardRef<HTMLDivElement, CardProps>(
  ({ variant, padding, className, children, ...rest }, ref) => {
    return (
      <div ref={ref} className={cn(cardVariants({ variant, padding }), className)} {...rest}>
        {children}
      </div>
    );
  },
);

CardRoot.displayName = "Card";

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("px-5 py-4 border-b border-border-neutral-subtle", className)}
        {...rest}
      >
        {children}
      </div>
    );
  },
);

CardHeader.displayName = "Card.Header";

const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div ref={ref} className={cn("px-5 py-4", className)} {...rest}>
        {children}
      </div>
    );
  },
);

CardBody.displayName = "Card.Body";

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("px-5 py-4 border-t border-border-neutral-subtle", className)}
        {...rest}
      >
        {children}
      </div>
    );
  },
);

CardFooter.displayName = "Card.Footer";

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});
