"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";
import { GlassCard } from "./GlassCard";

export interface TimelineItem {
  date: string;
  title: string;
  subtitle?: string;
  description: ReactNode;
  icon?: ReactNode;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative space-y-8">
      {/* Vertical line */}
      <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 opacity-30 dark:opacity-50" />

      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative pl-8 md:pl-12"
        >
          {/* Timeline node */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
            className="absolute left-0 top-2 flex h-4 w-4 -translate-x-[7px] items-center justify-center"
          >
            <div className="h-3 w-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg" />
            <div className="absolute h-5 w-5 animate-ping rounded-full bg-blue-500 opacity-20" />
          </motion.div>

          <GlassCard variant="hover" className="p-6">
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between md:gap-4">
              <div className="flex-1">
                <div className="mb-1 flex items-center gap-2">
                  {item.icon && <span className="text-xl">{item.icon}</span>}
                  <h3 className="text-xl font-bold dark:text-white unicorn:text-white">{item.title}</h3>
                </div>
                {item.subtitle && <p className="mb-2 text-sm font-medium text-blue-600 dark:text-blue-400 unicorn:text-blue-300">{item.subtitle}</p>}
                <div className="text-gray-700 dark:text-gray-300 unicorn:text-gray-200">{item.description}</div>
              </div>
              <div className="shrink-0">
                <span className="inline-block rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 unicorn:text-blue-300 unicorn:bg-blue-500/20">
                  {item.date}
                </span>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  );
}
