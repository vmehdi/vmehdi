"use client";

import { motion } from "motion/react";
import { GlassCard } from "./GlassCard";

export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

interface SkillCardProps {
  skill: Skill;
  index?: number;
}

export function SkillCard({ skill, index = 0 }: SkillCardProps) {
  // Determine animation direction based on card position
  const isEven = index % 2 === 0;
  const initialX = isEven ? -60 : 60;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: initialX,
        y: 30,
        rotateY: isEven ? -15 : 15,
        scale: 0.9
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        rotateY: 0,
        scale: 1
      }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{
        scale: 1.08,
        rotateY: 5,
        z: 50,
        transition: { duration: 0.3 }
      }}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d"
      }}
    >
      <GlassCard variant="hover" className="group relative overflow-hidden p-4 transition-all duration-300">
        {/* Animated background gradient on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0"
          whileHover={{
            background: "linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(168, 85, 247, 0.15))"
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Glow effect on hover */}
        <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-30" />

        <div className="relative z-10">
          <motion.div
            className="mb-3 flex items-center justify-between"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: index * 0.08 + 0.1 }}
          >
            <span className="font-semibold dark:text-white unicorn:text-white">{skill.name}</span>
            {skill.icon && (
              <motion.span
                className="text-2xl"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: false }}
                transition={{
                  delay: index * 0.08 + 0.2,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{
                  scale: 1.3,
                  rotate: 360,
                  transition: { duration: 0.5 }
                }}
              >
                {skill.icon}
              </motion.span>
            )}
          </motion.div>

          {/* Progress bar with glow */}
          <div className="relative h-2 overflow-hidden rounded-full bg-gray-200/80 dark:bg-gray-700/40">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-lg shadow-indigo-500/50"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: `${skill.level}%`, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 1.2,
                delay: index * 0.08 + 0.3,
                ease: "easeOut"
              }}
            >
              {/* Shimmer effect */}
              <motion.div
                className="h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  delay: index * 0.08 + 1,
                  ease: "linear"
                }}
              />
            </motion.div>
          </div>

          {/* Level indicator with bounce */}
          <motion.div
            className="mt-2 text-right text-xs font-medium text-gray-600 dark:text-gray-400 unicorn:text-gray-300"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.5,
              delay: index * 0.08 + 0.5,
              type: "spring",
              stiffness: 200
            }}
          >
            {skill.level}%
          </motion.div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

interface SkillGridProps {
  skills: Skill[];
  title?: string;
}

export function SkillGrid({ skills, title }: SkillGridProps) {
  return (
    <div className="space-y-6">
      {title && (
        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-2xl font-bold dark:text-white unicorn:text-white"
        >
          {title}
        </motion.h3>
      )}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
}
