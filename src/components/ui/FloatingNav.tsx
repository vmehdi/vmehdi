"use client";
import React, { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { cn } from "@/utils/cn";
import { ThemeChanger } from "@/components/ThemeChanger";

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
  const pathname = usePathname();

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
          " fixed inset-x-4 top-8 z-50 mx-auto flex h-20 max-w-fit items-center before:absolute before:border before:mask-linear-20 before:mask-linear-to-30% before:rounded-full before:inset-0 gap-4 sm:gap-10 rounded-full border border-black/5 bg-white/10 px-6 sm:px-10 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-md dark:border-white/20 before:content-[''] before:-z-10 before:dark:border-white dark:bg-white/10",
          className
        )}
      >
        <nav className="flex items-center gap-4 sm:gap-8">
          {navItems.map((navItem: any, idx: number) => {
            const isActive = pathname === navItem.href;
            return (
              <a
                key={`link-${idx}`}
                href={navItem.href}
                className={cn(
                  "hover:text-primary unicorn:text-secondary text-primary-dark relative flex items-center gap-2 transition-all duration-300 dark:text-neutral-50",
                  isActive && "scale-110 font-bold text-blue-600 dark:text-blue-400"
                )}
              >
                <span className={cn("block transform transition-transform active:scale-95", isActive && "text-blue-600 dark:text-blue-400")}>
                  {navItem.icon}
                </span>
                <span className={cn("text-sm transition-all sm:block", isActive ? "block" : "hidden")}>{navItem.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 rounded-full bg-blue-600 dark:bg-blue-400"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>
        <div className="ml-4 border-l border-black/10 pl-4 dark:border-white/10">
          <ThemeChanger />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
