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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Floating elements parallax
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
    worksFor: { "@type": "Organization", name: "Self" },
    sameAs: ["https://github.com/vmehdi", "https://gitlab.com/mvaezi", "https://www.linkedin.com/in/vmehdi/"]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left"
        style={{ scaleX: smoothProgress }}
      />

      <div ref={containerRef} className="relative">
        {/* Background with parallax */}
        <motion.div
          className="pointer-events-none fixed inset-0 -z-10"
          style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
        >
          <InteractiveGradient />
        </motion.div>

        {/* Floating decorative elements */}
        <motion.div style={{ y: floatY1 }} className="pointer-events-none fixed left-10 top-20 -z-5 h-64 w-64 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-3xl" />
        <motion.div style={{ y: floatY2 }} className="pointer-events-none fixed right-10 top-1/3 -z-5 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-400/20 to-pink-400/20 blur-3xl" />
        <motion.div style={{ y: floatY3 }} className="pointer-events-none fixed bottom-20 left-1/3 -z-5 h-80 w-80 rounded-full bg-gradient-to-br from-purple-400/20 to-blue-400/20 blur-3xl" />

        <div className="container relative z-10 mx-auto px-4">

          {/* HERO SECTION - Sticky wrapper (200vh = stays for 100vh of scroll) */}
          <div className="h-[200vh]">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="sticky top-0 flex flex-col items-center justify-center text-center min-h-screen"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Image className="relative animate-float drop-shadow-2xl" src="/logo.svg" alt="Mehdi Vaezi Logo" width={140} height={140} priority />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="heading-responsive mt-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text font-bold text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400"
              >
                Mehdi Vaezi
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-4 text-lg font-light text-gray-700 dark:text-gray-300 md:text-xl"
              >
                Full‑Stack Technical Architect & Product Engineer
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-4 h-8"
              >
                <TypeAnimation
                  className="text-responsive font-medium text-indigo-600 dark:text-indigo-400"
                  sequence={[
                    2000, "Building Real-Time Analytics Platforms", 4000,
                    "Frontend & UI Engineering Specialist", 3000,
                    "Node.js / Bun / Elysia Architecture", 3000,
                    "Distributed Systems & Kafka Pipelines", 3000,
                    "DevOps, Scalability & Security", 3000
                  ]}
                  speed={60}
                  deletionSpeed={80}
                  wrapper="h5"
                  repeat={Infinity}
                />
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                className="mt-8 grid w-full grid-cols-3 items-center justify-center gap-4 md:flex md:flex-wrap"
              >
                {[
                  { href: "https://github.com/vmehdi", icon: <Github className="mr-2 h-4 w-4" />, label: "GitHub" },
                  { href: "https://linkedin.com/in/vmehdi", icon: <Linkedin className="mr-2 h-4 w-4" />, label: "LinkedIn" },
                  { href: "mailto:vmehdev@gmail.com", icon: <Mail className="mr-2 h-4 w-4" />, label: "Contact" }
                ].map((link, i) => (
                  <motion.div
                    key={i}
                    variants={{ hidden: { opacity: 0, y: 20, scale: 0.8 }, visible: { opacity: 1, y: 0, scale: 1 } }}
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
          </div>

          {/* ABOUT SECTION - Sticky wrapper */}
          <div className="h-[200vh]">
            <motion.section
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
              className="sticky top-0 min-h-screen flex items-center justify-center"
            >
              <GlassCard variant="heavy" className="mx-auto max-w-4xl p-8 md:p-12">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6 }}
                  className="mb-6 flex items-center gap-3"
                >
                  <PencilLine className="h-6 w-6 text-indigo-600 dark:text-indigo-400 unicorn:text-indigo-300" />
                  <h2 className="text-3xl font-bold dark:text-white unicorn:text-white">About Me</h2>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                  className="space-y-4 text-gray-700 dark:text-gray-300 unicorn:text-gray-100"
                >
                  {[
                    <>I'm a <strong className="text-indigo-600 dark:text-indigo-400 unicorn:text-indigo-300">product-driven full-stack engineer</strong> with <strong>15+ years of experience</strong> — from the early days of HTML/CSS to building real-time, distributed analytics platforms.</>,
                    <>Rooted in <strong>front-end development</strong>, I've evolved into a <strong>systems architect</strong> who designs and delivers production-grade solutions across the stack. My recent work focuses on <strong className="text-indigo-600 dark:text-indigo-400 unicorn:text-indigo-300">high-throughput data pipelines</strong> and <strong>browser-based tracking engines</strong>, powering insights for modern SaaS products.</>,
                    <>I thrive at the intersection of <strong>product</strong>, <strong>infrastructure</strong>, and <strong>performance</strong> — always learning, always optimizing, always delivering.</>
                  ].map((text, i) => (
                    <motion.p key={i} variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }} className="text-lg leading-relaxed">
                      {text}
                    </motion.p>
                  ))}
                </motion.div>
              </GlassCard>
            </motion.section>
          </div>

          {/* SKILLS SECTION - Sticky wrapper */}
          <div className="h-[200vh]">
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="sticky top-0 min-h-screen flex flex-col items-center justify-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                className="mb-8 text-center"
              >
                <h2 className="heading-responsive mb-3 font-bold dark:text-white unicorn:text-white">Core Technical Skills</h2>
                <p className="text-gray-600 dark:text-gray-400 unicorn:text-gray-300">Building with modern technologies and best practices</p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                className="mx-auto max-w-5xl"
              >
                <SkillGrid skills={TOP_SKILLS} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 120 }}
                className="mt-8 text-center"
              >
                <Link href="/experience">
                  <MagneticButton size="md" className="group">
                    <Code2 className="mr-2 h-5 w-5" />
                    View All Skills & Experience
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </MagneticButton>
                </Link>
              </motion.div>
            </motion.section>
          </div>

          {/* CTA SECTION - Sticky wrapper */}
          <div className="h-[200vh]">
            <motion.section
              initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
              className="sticky top-0 min-h-screen flex items-center justify-center"
            >
              <GlassCard variant="heavy" className="mx-auto max-w-3xl p-8 text-center md:p-12">
                <motion.h2
                  initial={{ opacity: 0, y: -30, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 150 }}
                  className="heading-responsive mb-4 font-bold dark:text-white unicorn:text-white"
                >
                  Let's Build Something Great
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-8 text-lg text-gray-700 dark:text-gray-300 unicorn:text-gray-200"
                >
                  I'm always interested in discussing <strong>product architecture</strong>, <strong>real-time systems</strong>, and <strong>performance optimization</strong>.
                </motion.p>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                  className="flex flex-wrap items-center justify-center gap-4"
                >
                  <motion.div
                    variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link href="/projects">
                      <MagneticButton size="lg" className="group bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                        <Briefcase className="mr-2 h-5 w-5" />
                        View Projects
                      </MagneticButton>
                    </Link>
                  </motion.div>

                  <motion.div
                    variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link href="/contact">
                      <MagneticButton size="lg">
                        <Mail className="mr-2 h-5 w-5" />
                        Get in Touch
                      </MagneticButton>
                    </Link>
                  </motion.div>
                </motion.div>
              </GlassCard>
            </motion.section>
          </div>

        </div>
      </div>
    </>
  );
}
