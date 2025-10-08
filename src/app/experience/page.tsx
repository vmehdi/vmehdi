"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3dCard";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { __DEV__ } from "@/utils/helper";
import { UnderConstruction } from "@/components/ui/UnderConstruction";
import { motion } from "motion/react";
import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Group } from "three";

type Skill = { label: string; value: number };

const SKILLS: Skill[] = [
  { label: "JavaScript / TypeScript", value: 98 },
  { label: "React / Next.js", value: 95 },
  { label: "Vue / Nuxt", value: 90 },
  { label: "Node.js / Bun / Elysia.js", value: 90 },
  { label: "WebSocket & Real-Time Systems", value: 93 },
  { label: "Kafka / Flink / QuestDB", value: 76 },
  { label: "Redis / PostgreSQL / Prisma", value: 80 },
  { label: "Docker / Docker Compose / CI/CD", value: 79 },
  { label: "Nginx / TLS / UFW / Server Security", value: 86 },
  { label: "CDN / jsDelivr / BunnyCDN / Versioning", value: 90 },
  { label: "System Architecture & Infra Planning", value: 85 }
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

export default function ProjectsPage() {
  return (
    <div className="relative mx-auto max-w-4xl px-4 py-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 3.5], fov: 60 }} dpr={[1, 2]}>
          <ambientLight intensity={0.4} />
          <FloatingParticles />
        </Canvas>
      </div>

      <div className="mb-6">
        <h3 className="mb-2 text-2xl font-semibold">🔧 Experience & Technical Proficiency</h3>
        <h4 className="text-xl font-bold">Core Technical Skills — Proficiency Overview</h4>
      </div>

      <div className="rounded-xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
        {SKILLS.map((item) => (
          <div key={item.label} className="mb-4">
            <div className="mb-1 flex items-center justify-between text-sm">
              <span className="text-gray-800 dark:text-gray-100">{item.label}</span>
              <motion.span
                className="text-gray-600 tabular-nums dark:text-gray-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {item.value}
              </motion.span>
            </div>
            <div className="relative h-3 w-full overflow-hidden rounded bg-gray-200/80 dark:bg-gray-700/40">
              <motion.div
                className="h-full rounded-r bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400"
                initial={{ width: 0 }}
                whileInView={{ width: `${item.value}%` }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 1.1, ease: "easeOut" }}
                aria-valuenow={item.value}
                aria-valuemin={0}
                aria-valuemax={100}
                role="progressbar"
              />
            </div>
          </div>
        ))}
        <p className="mt-2 text-xs text-gray-600 dark:text-gray-300">Scale: 0–100 (Expert = 100, Advanced = 70–90, Intermediate = 40–60)</p>
      </div>
    </div>
  );
}
