"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ReactNode, useRef } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "scale" | "rotate";
  delay?: number;
  duration?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = ""
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Transform based on direction
  const getTransforms = () => {
    switch (direction) {
      case "up":
        return {
          initial: { opacity: 0, y: 60 },
          animate: { opacity: 1, y: 0 }
        };
      case "down":
        return {
          initial: { opacity: 0, y: -60 },
          animate: { opacity: 1, y: 0 }
        };
      case "left":
        return {
          initial: { opacity: 0, x: -60 },
          animate: { opacity: 1, x: 0 }
        };
      case "right":
        return {
          initial: { opacity: 0, x: 60 },
          animate: { opacity: 1, x: 0 }
        };
      case "scale":
        return {
          initial: { opacity: 0, scale: 0.6 },
          animate: { opacity: 1, scale: 1 }
        };
      case "rotate":
        return {
          initial: { opacity: 0, rotate: -10, scale: 0.9 },
          animate: { opacity: 1, rotate: 0, scale: 1 }
        };
      default:
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 }
        };
    }
  };

  const transforms = getTransforms();

  return (
    <motion.div
      ref={ref}
      initial={transforms.initial}
      whileInView={transforms.animate}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration,
        delay,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ParallaxScrollProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxScroll({ children, speed = 0.5, className = "" }: ParallaxScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

interface ScrollScaleProps {
  children: ReactNode;
  scaleRange?: [number, number];
  className?: string;
}

export function ScrollScale({ children, scaleRange = [0.8, 1], className = "" }: ScrollScaleProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], scaleRange);

  return (
    <motion.div ref={ref} style={{ scale }} className={className}>
      {children}
    </motion.div>
  );
}
