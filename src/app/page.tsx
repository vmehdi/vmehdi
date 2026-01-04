"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { InteractiveGradient } from "@/components/ui/InteractiveGradient";
import { SkillGrid, Skill } from "@/components/ui/SkillCard";
import { Github, Linkedin, Mail, ArrowRight, Briefcase, Code2, PencilLine } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import Link from "next/link";

const TOP_SKILLS: Skill[] = [
  { name: "TypeScript / JavaScript", level: 99, icon: "⚡" },
  { name: "React / Next.js / UI", level: 96, icon: "⚛️" },
  { name: "Node.js / Bun / Elysia", level: 95, icon: "🚀" },
  { name: "Real-Time / Kafka / Redis", level: 94, icon: "📡" },
  { name: "Product Architecture", level: 92, icon: "🏗️" },
  { name: "DevOps / Docker / CI", level: 88, icon: "🐳" }
];

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position for parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll progress tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth spring animation for scroll
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Background Parallax
  const floatY1 = useTransform(smoothProgress, [0, 1], [0, -400]);
  const floatY2 = useTransform(smoothProgress, [0, 1], [0, -200]);
  const floatY3 = useTransform(smoothProgress, [0, 1], [0, -500]);

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: "Mehdi Vaezi",
    url: "https://vmehdi.com/",
    image: "https://vmehdi.com/logo.svg",
    jobTitle: "Full‑Stack Technical Architect & Product Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Self"
    },
    sameAs: ["https://github.com/vmehdi", "https://gitlab.com/mvaezi", "https://www.linkedin.com/in/vmehdi/"]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left"
        style={{ scaleX: smoothProgress }}
      />

      {/* Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        >
          <InteractiveGradient />
        </motion.div>

        {/* Floating decorative elements */}
        <motion.div
          style={{ y: floatY1 }}
          className="absolute left-10 top-20 h-64 w-64 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-3xl opacity-50"
        />
        <motion.div
          style={{ y: floatY2 }}
          className="absolute right-10 top-1/3 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-400/20 to-pink-400/20 blur-3xl opacity-50"
        />
        <motion.div
          style={{ y: floatY3 }}
          className="absolute bottom-20 left-1/3 h-80 w-80 rounded-full bg-gradient-to-br from-purple-400/20 to-blue-400/20 blur-3xl opacity-50"
        />
      </div>

      {/* Main Scroll Container */}
      <div ref={containerRef} className="relative h-[500vh] z-10 w-full">

        {/* Sticky Viewport */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">

          {/* --- SECTION 1: HERO --- */}
          <motion.section
            style={{
              opacity: useTransform(smoothProgress, [0.15, 0.2], [1, 0]),
              scale: useTransform(smoothProgress, [0.15, 0.2], [1, 0.5]),
              filter: useTransform(smoothProgress, [0.15, 0.2], ["blur(0px)", "blur(10px)"]),
              pointerEvents: useTransform(smoothProgress, (v) => v > 0.2 ? "none" : "auto")
            }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 w-full h-full"
          >
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                className="relative animate-float drop-shadow-2xl"
                src="/logo.svg"
                alt="Mehdi Vaezi Logo"
                width={140}
                height={140}
                priority
              />
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="heading-responsive mt-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text font-bold text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400"
            >
              Mehdi Vaezi
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-4 text-lg font-light text-gray-700 dark:text-gray-300 md:text-xl"
            >
              Full‑Stack Technical Architect & Product Engineer
            </motion.h2>

            {/* Type Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-4 h-8"
            >
              <TypeAnimation
                className="text-responsive font-medium text-indigo-600 dark:text-indigo-400"
                sequence={[
                  2000,
                  "Building Real-Time Analytics Platforms",
                  4000,
                  "Frontend & UI Engineering Specialist",
                  3000,
                  "Node.js / Bun / Elysia Architecture",
                  3000,
                  "Distributed Systems & Kafka Pipelines",
                  3000,
                  "DevOps, Scalability & Security",
                  3000
                ]}
                speed={60}
                deletionSpeed={80}
                wrapper="h5"
                repeat={Infinity}
              />
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.15 } }
              }}
              className="mt-8 grid w-full grid-cols-3 items-center justify-center gap-4 md:flex md:flex-wrap"
            >
              {[
                { href: "https://github.com/vmehdi", icon: <Github className="mr-2 h-4 w-4" />, label: "GitHub" },
                { href: "https://linkedin.com/in/vmehdi", icon: <Linkedin className="mr-2 h-4 w-4" />, label: "LinkedIn" },
                { href: "mailto:vmehdev@gmail.com", icon: <Mail className="mr-2 h-4 w-4" />, label: "Contact" }
              ].map((link, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.8 },
                    visible: { opacity: 1, y: 0, scale: 1 }
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <MagneticButton href={link.href} className="group">
                    {link.icon}
                    {link.label}
                  </MagneticButton>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>


          {/* --- SECTION 2: ABOUT --- */}
          <motion.section
            style={{
              scale: useTransform(smoothProgress, [0.18, 0.22], [0.8, 1]), // Fast enter
              opacity: useTransform(smoothProgress, [0.18, 0.22, 0.45, 0.5], [0, 1, 1, 0]),
              x: useTransform(smoothProgress, [0.45, 0.5], ["0%", "100%"]), // Exit right
              filter: useTransform(smoothProgress, [0.45, 0.5], ["blur(0px)", "blur(10px)"]),
              pointerEvents: useTransform(smoothProgress, (v) => (v >= 0.22 && v < 0.5) ? "auto" : "none"),
              display: useTransform(smoothProgress, (v) => (v >= 0.15) ? "flex" : "none")
            }}
            className="absolute inset-0 flex items-center justify-center p-4 w-full h-full"
          >
            <GlassCard variant="heavy" className="mx-auto max-w-4xl p-8 md:p-12">
              <div className="mb-6 flex items-center gap-3">
                <PencilLine className="h-6 w-6 text-indigo-600 dark:text-indigo-400 unicorn:text-indigo-300" />
                <h2 className="text-3xl font-bold dark:text-white unicorn:text-white">About Me</h2>
              </div>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 unicorn:text-gray-100">
                <p className="text-lg leading-relaxed">
                  I'm a <strong className="text-indigo-600 dark:text-indigo-400 unicorn:text-indigo-300">product-driven full-stack engineer</strong> with{" "}
                  <strong>15+ years of experience</strong> — from the early days of HTML/CSS to building real-time, distributed analytics platforms.
                </p>
                <p className="text-lg leading-relaxed">
                  Rooted in <strong>front-end development</strong>, I've evolved into a <strong>systems architect</strong> who designs and delivers
                  production-grade solutions across the stack. My recent work focuses on{" "}
                  <strong className="text-indigo-600 dark:text-indigo-400 unicorn:text-indigo-300">high-throughput data pipelines</strong> and{" "}
                  <strong>browser-based tracking engines</strong>, powering insights for modern SaaS products.
                </p>
                <p className="text-lg leading-relaxed">
                  I thrive at the intersection of <strong>product</strong>, <strong>infrastructure</strong>, and <strong>performance</strong> — always
                  learning, always optimizing, always delivering.
                </p>
              </div>
            </GlassCard>
          </motion.section>


          {/* --- SECTION 3: SKILLS --- */}
          <motion.section
            style={{
              x: useTransform(smoothProgress, [0.45, 0.5], ["-100%", "0%"]), // Enter Left
              opacity: useTransform(smoothProgress, [0.45, 0.5, 0.7, 0.75], [0, 1, 1, 0]),
              y: useTransform(smoothProgress, [0.7, 0.75], ["0%", "-100%"]), // Exit Up
              pointerEvents: useTransform(smoothProgress, (v) => (v >= 0.5 && v < 0.75) ? "auto" : "none"),
              display: useTransform(smoothProgress, (v) => (v >= 0.4) ? "flex" : "none")
            }}
            className="absolute inset-0 flex flex-col items-center justify-center p-4 w-full h-full"
          >
            <div className="mb-8 text-center">
              <h2 className="heading-responsive mb-3 font-bold dark:text-white unicorn:text-white">Core Technical Skills</h2>
              <p className="text-gray-600 dark:text-gray-400 unicorn:text-gray-300">Building with modern technologies and best practices</p>
            </div>

            <div className="mx-auto max-w-5xl">
              <SkillGrid skills={TOP_SKILLS} />
            </div>

            <div className="mt-8 text-center">
              <Link href="/experience">
                <MagneticButton size="md" className="group">
                  <Code2 className="mr-2 h-5 w-5" />
                  View All Skills & Experience
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </MagneticButton>
              </Link>
            </div>
          </motion.section>


          {/* --- SECTION 4: CTA --- */}
          <motion.section
            style={{
              y: useTransform(smoothProgress, [0.7, 0.75], ["100%", "0%"]), // Enter Bottom
              opacity: useTransform(smoothProgress, [0.7, 0.75], [0, 1]),
              pointerEvents: useTransform(smoothProgress, (v) => v >= 0.75 ? "auto" : "none"),
              display: useTransform(smoothProgress, (v) => (v >= 0.65) ? "flex" : "none")
            }}
            className="absolute inset-0 flex items-center justify-center p-4 w-full h-full"
          >
            <GlassCard variant="heavy" className="mx-auto max-w-3xl p-8 text-center md:p-12">
              <h2 className="heading-responsive mb-4 font-bold dark:text-white unicorn:text-white">
                Let's Build Something Great
              </h2>
              <p className="mb-8 text-lg text-gray-700 dark:text-gray-300 unicorn:text-gray-200">
                I'm always interested in discussing <strong>product architecture</strong>, <strong>real-time systems</strong>, and{" "}
                <strong>performance optimization</strong>.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/projects">
                  <MagneticButton size="lg" className="group bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                    <Briefcase className="mr-2 h-5 w-5" />
                    View Projects
                  </MagneticButton>
                </Link>
                <Link href="/contact">
                  <MagneticButton size="lg">
                    <Mail className="mr-2 h-5 w-5" />
                    Get in Touch
                  </MagneticButton>
                </Link>
              </div>
            </GlassCard>
          </motion.section>

        </div>
      </div>
    </>
  );
}
