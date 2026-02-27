import { forwardRef, useState } from "react";
import { cn } from "@/utils/cn";
import type { AvatarProps } from "./Avatar.types";
import { avatarVariants, avatarImageVariants, avatarFallbackVariants } from "./Avatar.variants";

const UserIcon = () => (
  <svg
    className="h-[60%] w-[60%]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0"
    />
  </svg>
);

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(function Avatar(
  { size, src, alt, fallback, className, ...rest },
  ref,
) {
  const [imageError, setImageError] = useState(false);
  const showImage = src && !imageError;

  return (
    <span
      ref={ref}
      role="img"
      aria-label={alt}
      className={cn(avatarVariants({ size }), className)}
      {...rest}
    >
      {showImage ? (
        <img
          src={src}
          alt={alt ?? ""}
          className={avatarImageVariants()}
          onError={() => setImageError(true)}
        />
      ) : (
        <span className={avatarFallbackVariants()}>
          {fallback ? typeof fallback === "string" ? fallback : fallback : <UserIcon />}
        </span>
      )}
    </span>
  );
});
