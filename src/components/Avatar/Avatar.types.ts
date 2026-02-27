import type { HTMLAttributes, ReactNode } from "react";

export interface AvatarProps extends Omit<HTMLAttributes<HTMLSpanElement>, "size"> {
  /** @default "md" */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** Image source URL */
  src?: string;
  /** Alt text for the image */
  alt?: string;
  /** Fallback content: string for initials, ReactNode for custom icon */
  fallback?: string | ReactNode;
}
