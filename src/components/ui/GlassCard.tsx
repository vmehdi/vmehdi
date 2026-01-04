"use client";

import { cn } from "@/utils/cn";
import { ReactNode, HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "default" | "heavy" | "hover";
  className?: string;
}

export function GlassCard({ children, variant = "default", className, ...props }: GlassCardProps) {
  const variantClasses = {
    default: "glass",
    heavy: "glass-heavy",
    hover: "glass-hover"
  };

  return (
    <div className={cn(variantClasses[variant], "rounded-2xl", className)} {...props}>
      {children}
    </div>
  );
}
