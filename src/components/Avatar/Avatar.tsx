import { forwardRef, useState } from "react";
import { User2Line } from "@mingcute/react";
import { cn } from "@/utils/cn";
import type { AvatarProps } from "./Avatar.types";
import { avatarVariants, avatarImageVariants, avatarFallbackVariants } from "./Avatar.variants";

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
          {fallback ? (
            typeof fallback === "string" ? (
              fallback
            ) : (
              fallback
            )
          ) : (
            <User2Line className="h-[60%] w-[60%]" aria-hidden="true" />
          )}
        </span>
      )}
    </span>
  );
});
