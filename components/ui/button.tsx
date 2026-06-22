"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "terracotta" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide " +
  "transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 " +
  "focus-visible:ring-ochre focus-visible:ring-offset-2 focus-visible:ring-offset-parchment " +
  "disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] cursor-pointer select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-cognac text-cream shadow-warm-sm hover:bg-espresso hover:shadow-warm",
  terracotta:
    "bg-terracotta text-cream shadow-warm-sm hover:brightness-95 hover:shadow-warm",
  outline:
    "border border-cognac/40 text-espresso bg-transparent hover:bg-cognac/10 hover:border-cognac",
  ghost: "text-espresso hover:bg-espresso/5",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-9 text-base",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
