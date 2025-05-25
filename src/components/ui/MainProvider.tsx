"use client";
import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import React, { MouseEvent as ReactMouseEvent, useState } from "react";
import { HTMLAttributes, ReactNode } from "react";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";
import { cn } from "@/utils/cn";

interface MainProviderType extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export function MainProvider({ className, children }: MainProviderType) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  function handleMouseMove({ currentTarget, clientX, clientY }: ReactMouseEvent<HTMLDivElement>) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  return (
    <main
      className={cn('"group/spotlight dark:border-neutral-800" relative w-full rounded-md border border-neutral-800 bg-black p-10', className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px z-0 rounded-md opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          backgroundColor: "#262626",
          maskImage: useMotionTemplate`
            radial-gradient(
              ${350}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `
        }}
      >
        {isHovering && (
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-transparent absolute inset-0 pointer-events-none"
            colors={[
              [59, 130, 246],
              [139, 92, 246]
            ]}
            dotSize={3}
          />
        )}
      </motion.div>
      {children}
    </main>
  );
}
