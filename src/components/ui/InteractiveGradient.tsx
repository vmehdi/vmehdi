"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/utils/cn";

interface InteractiveGradientProps {
  className?: string;
}

export function InteractiveGradient({ className }: InteractiveGradientProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      container.style.setProperty("--mouse-x", `${x}%`);
      container.style.setProperty("--mouse-y", `${y}%`);
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("interactive-gradient", className)}
      style={{
        // @ts-ignore
        "--mouse-x": "50%",
        "--mouse-y": "50%"
      }}
    />
  );
}
