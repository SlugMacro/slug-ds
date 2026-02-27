import type { TextareaHTMLAttributes } from "react";

export interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> {
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  label?: string;
  helperText?: string;
  error?: boolean;
  errorMessage?: string;
  fullWidth?: boolean;
  /** @default "vertical" */
  resize?: "none" | "vertical" | "horizontal" | "both";
}
