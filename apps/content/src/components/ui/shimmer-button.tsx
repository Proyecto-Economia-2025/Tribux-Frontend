import React, { ComponentPropsWithoutRef } from "react"

import { cn } from "@/lib/utils"

export interface ShimmerButtonProps extends ComponentPropsWithoutRef<"button"> {
  shimmerColor?: string
  className?: string
  children?: React.ReactNode
  variant?: 'default' | 'ghost'
}

export const ShimmerButton = React.forwardRef<
  HTMLButtonElement,
  ShimmerButtonProps
>(
  (
    {
      shimmerColor = "#ffffff",
      className,
      children,
      variant = 'default',
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cn(
          'group relative overflow-hidden rounded-lg px-6 py-3 transition-all duration-300 ease-in-out active:scale-[0.98]',
          variant === 'default'
            ? 'border border-white/20 bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg hover:shadow-xl hover:shadow-primary/25'
            : 'border border-primary/20 bg-transparent text-primary shadow-sm hover:bg-primary hover:text-primary-foreground',
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </div>

        {/* Simple shimmer effect */}
        {variant === 'default' && (
          <div
            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full"
            style={{ backgroundColor: shimmerColor }}
          />
        )}
      </button>
    )
  }
)

ShimmerButton.displayName = "ShimmerButton"