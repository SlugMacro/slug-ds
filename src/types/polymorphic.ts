import type { ComponentPropsWithoutRef, ComponentPropsWithRef, ElementType } from "react";

type Merge<P1, P2> = Omit<P2, keyof P1> & P1;

export type PolymorphicProps<E extends ElementType, P = object> = Merge<
  P & { as?: E },
  ComponentPropsWithoutRef<E>
>;

export type PolymorphicPropsWithRef<E extends ElementType, P = object> = Merge<
  P & { as?: E },
  ComponentPropsWithRef<E>
>;

export type PolymorphicRef<E extends ElementType> = ComponentPropsWithRef<E>["ref"];
