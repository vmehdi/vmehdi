"use client";

import { motion } from "motion/react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Timeline, TimelineItem } from "@/components/ui/Timeline";
import { SkillGrid, Skill } from "@/components/ui/SkillCard";
import { Canvas, useFrame } from "@react-three/fiber";
import { Group } from "three";
import { useMemo, useRef } from "react";
import { Briefcase, Award, Code } from "lucide-react";

const LANGUAGES_CORE: Skill[] = [
  { name: "JavaScript / TypeScript", level: 99, icon: "⚡" },
  { name: "HTML5 / CSS3 / SCSS", level: 98, icon: "🎨" },
  { name: "SQL (Postgres / QuestDB)", level: 92, icon: "💾" },
  { name: "NoSQL (Redis / Mongo)", level: 90, icon: "🍃" },
  { name: "WebAssembly / JSON Schema", level: 80, icon: "⚙️" }
];

const FRONTEND_SKILLS: Skill[] = [
  { name: "React / Next.js / React Native", level: 96, icon: "⚛️" },
  { name: "Vue.js / Nuxt.js", level: 94, icon: "💚" },
  { name: "Tailwind / ShadCN / Chakra", level: 98, icon: "💅" },
  { name: "Custom Dashboards / UI Systems", level: 95, icon: "📊" },
  { name: "Jotai / Pinia / TanStack", level: 92, icon: "🧩" }
];

const BACKEND_SKILLS: Skill[] = [
  { name: "Node.js / Bun / Elysia", level: 95, icon: "🚀" },
  { name: "WebSocket / SSE / RT Streams", level: 94, icon: "📡" },
  { name: "Kafka / Redis PubSub", level: 88, icon: "📨" },
  { name: "GraphQL / REST APIs", level: 92, icon: "🔌" },
  { name: "Prisma / Sequel / Mongoose", level: 90, icon: "🛠️" }
];

const DEVOPS_SKILLS: Skill[] = [
  { name: "Docker / Compose", level: 88, icon: "🐳" },
  { name: "CI/CD (GitLab / GitHub)", level: 85, icon: "🔄" },
  { name: "Nginx / Reverse Proxy", level: 90, icon: "🛡️" },
  { name: "Linux Security / Bash Scripting", level: 82, icon: "🐧" },
  { name: "CDN Strategy / Cloudflare", level: 85, icon: "🌍" }
];

const REALTIME_ANALYTICS: Skill[] = [
  { name: "Custom Tracking SDKs", level: 95, icon: "🎯" },
  { name: "Heatmaps / Session Recording", level: 90, icon: "📹" },
  { name: "A/B Testing Engines", level: 88, icon: "⚖️" },
  { name: "High-Throughput Ingestion", level: 92, icon: "🌪️" }
];

const ARCHITECTURE_PRODUCT: Skill[] = [
  { name: "Microservices / Monoliths", level: 90, icon: "🏗️" },
  { name: "Multi-tenant SaaS", level: 92, icon: "🏢" },
  { name: "Billing / Licensing Systems", level: 89, icon: "💳" },
  { name: "Persian Date/Time Systems", level: 98, icon: "📅" }
];

const SPECIALIZED_TECH: Skill[] = [
  { name: "Accounting / ERP Logic", level: 94, icon: "💰" },
  { name: "Web3 / DeFi (Experimental)", level: 70, icon: "🪙" },
  { name: "Mentoring & Leadership", level: 90, icon: "👨‍🏫" }
];

// ... (Timeline data remains mostly valid, but we will leave it as is or update if needed. The instruction focuses on skills mainly, but I will include the Timeline update if I was doing the whole file. For now, since replace_file_content is for a block, I will stick to the skills constants and grid.)
// Actually, I need to replace the `EXPERIENCE` constant too if I want it to be part of the contiguous block, or I can just focus on the constants at the top first.
// Wait, the tool requires a SINGLE CONTIGUOUS block. The constants are at lines 12-35. The rendering is at 177-190.
// I can't do both in one `replace_file_content` if they are far apart.
// I will use `multi_replace_file_content` to handle both the constants and the rendering logic in one go.

// Re-evaluating strategy: Use `multi_replace_file_content`.


const EXPERIENCE: TimelineItem[] = [
  {
    date: "2023 - Present",
    title: "Full-Stack Architect",
    subtitle: "Segmentaim - Real-Time Analytics Platform",
    icon: <Briefcase className="h-5 w-5" />,
    description: (
      <div className="space-y-2">
        <p>Building a comprehensive real-time analytics and user behavior tracking platform from the ground up.</p>
        <ul className="ml-4 list-disc space-y-1 text-sm">
          <li>Architected event tracking SDK with browser fingerprinting and session replay</li>
          <li>Built high-throughput data pipeline processing millions of events daily</li>
          <li>Implemented real-time analytics dashboard with WebSocket updates</li>
          <li>Designed distributed system using Kafka, Flink, QuestDB, and PostgreSQL</li>
        </ul>
      </div>
    )
  },
  {
    date: "2015 - 2023",
    title: "Senior Full-Stack Developer",
    subtitle: "Various Projects & Clients",
    icon: <Code className="h-5 w-5" />,
    description: (
      <div className="space-y-2">
        <p>Led development of complex web applications and SPAs for diverse clients.</p>
        <ul className="ml-4 list-disc space-y-1 text-sm">
          <li>Built modern SPAs using React, Vue, Next.js, and Nuxt</li>
          <li>Developed scalable backends with Node.js and various databases</li>
          <li>Implemented CI/CD workflows and cloud deployment strategies</li>
          <li>Architected microservices and real-time communication systems</li>
        </ul>
      </div>
    )
  },
  {
    date: "2008 - 2015",
    title: "Frontend Developer & Designer",
    subtitle: "Web Development & UI/UX",
    icon: <Award className="h-5 w-5" />,
    description: (
      <div className="space-y-2">
        <p>Started career focused on frontend development and user interface design.</p>
        <ul className="ml-4 list-disc space-y-1 text-sm">
          <li>Mastered HTML, CSS, JavaScript, and jQuery fundamentals</li>
          <li>Created responsive designs and interactive web experiences</li>
          <li>Learned UI/UX principles using Photoshop, Illustrator, and Sketch</li>
          <li>Transitioned into modern JavaScript frameworks and tools</li>
        </ul>
      </div>
    )
  }
];

function FloatingParticles({ count = 220 }: { count?: number }) {
  const groupRef = useRef<Group>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      arr[i3 + 0] = (Math.random() - 0.5) * 6;
      arr[i3 + 1] = (Math.random() - 0.5) * 3;
      arr[i3 + 2] = (Math.random() - 0.5) * 2;
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.02} color="#6366f1" opacity={0.25} transparent />
      </points>
    </group>
  );
}

export default function ExperiencePage() {
  return (
    <div className="relative min-h-screen">
      {/* 3D Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-40">
        <Canvas camera={{ position: [0, 0, 3.5], fov: 60 }} dpr={[1, 2]}>
          <ambientLight intensity={0.4} />
          <FloatingParticles />
        </Canvas>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-12 md:py-20">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="heading-responsive mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text font-bold text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
            Experience & Skills
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            15+ years of building exceptional software — from frontend to infrastructure
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <GlassCard variant="heavy" className="mx-auto max-w-4xl p-8 md:p-12">
            <h2 className="mb-8 text-2xl font-bold dark:text-white md:text-3xl">Professional Experience</h2>
            <Timeline items={EXPERIENCE} />
          </GlassCard>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="mx-auto max-w-6xl space-y-12">
            <div className="text-center">
              <h2 className="heading-responsive mb-3 font-bold dark:text-white">Technical Proficiency</h2>
              <p className="text-gray-600 dark:text-gray-400">Core skills and technologies I work with daily</p>
            </div>

            {/* Languages & Core */}
            <GlassCard variant="hover" className="p-8">
              <SkillGrid title="🧠 Languages & Core Technologies" skills={LANGUAGES_CORE} />
            </GlassCard>

            {/* Frontend Skills */}
            <GlassCard variant="hover" className="p-8">
              <SkillGrid title="🎨 Frontend & UI Engineering" skills={FRONTEND_SKILLS} />
            </GlassCard>

            {/* Backend Skills */}
            <GlassCard variant="hover" className="p-8">
              <SkillGrid title="⚙️ Backend & API Engineering" skills={BACKEND_SKILLS} />
            </GlassCard>

            {/* DevOps Skills */}
            <GlassCard variant="hover" className="p-8">
              <SkillGrid title="🚀 DevOps & Infrastructure" skills={DEVOPS_SKILLS} />
            </GlassCard>

            {/* Real-Time & Analytics */}
            <GlassCard variant="hover" className="p-8">
              <SkillGrid title="📡 Real-Time & Analytics Systems" skills={REALTIME_ANALYTICS} />
            </GlassCard>

            {/* Architecture & Product */}
            <GlassCard variant="hover" className="p-8">
              <SkillGrid title="🧱 Product Architecture & System Design" skills={ARCHITECTURE_PRODUCT} />
            </GlassCard>

            {/* Specialized Tech */}
            <GlassCard variant="hover" className="p-8">
              <SkillGrid title="🧩 Specialized & Methodologies" skills={SPECIALIZED_TECH} />
            </GlassCard>
          </div>
        </motion.section>

        {/* Proficiency Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <GlassCard variant="default" className="p-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <strong>Proficiency Scale:</strong> 90-100 (Expert) • 70-89 (Advanced) • 50-69 (Intermediate) • Below 50 (Learning)
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
