"use client";
import React, { ReactNode, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { cn } from "@/utils/cn";
import { ThemeChanger } from "@/components/ThemeChanger";
import { GlowingEffect } from "@/components/ui/GlowingEffect";

export const FloatingNav = ({
  navItems,
  className
}: {
  navItems: {
    name: string;
    href: string;
    icon?: ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    let direction = current! - scrollYProgress.getPrevious()!;
    if (current === 1) {
      setVisible(true);
    } else if (direction < 0) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -120
        }}
        animate={{
          y: visible ? 0 : -120,
          opacity: visible ? 1 : 0
        }}
        transition={{
          duration: 0.2
        }}
        className={cn(
          "unicorn:bg-black/10 unicorn:border-white/10 fixed inset-x-4 top-8 z-50 mx-auto flex h-20 max-w-2xl items-center justify-center space-x-8 rounded-full border bg-white/10 px-8 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-sm dark:border-white/[0.2] dark:bg-white/10",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <a
            key={`link=${idx}`}
            href={navItem.href}
            className={cn("hover:text-primary unicorn:text-secondary text-primary-dark relative flex items-center space-x-1 dark:text-neutral-50")}
          >
            <span className="block">{navItem.icon}</span>
            <span className="hidden text-sm sm:block">{navItem.name}</span>
          </a>
        ))}
        <ThemeChanger />
      </motion.div>
    </AnimatePresence>
  );
};
