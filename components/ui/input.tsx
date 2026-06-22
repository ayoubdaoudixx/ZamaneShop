"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "h-12 w-full rounded-full border border-cognac/20 bg-cream px-5 text-sm text-walnut",
          "placeholder:text-taupe shadow-warm-sm transition-colors duration-200",
          "focus-visible:outline-none focus-visible:border-cognac focus-visible:ring-2 focus-visible:ring-ochre/40",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
