"use client";

import { motion } from "motion/react";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { InteractiveGradient } from "@/components/ui/InteractiveGradient";
import { ExternalLink, Github, Star, Code2 } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const PROJECTS: Project[] = [
  {
    title: "Segmentaim",
    description:
      "Comprehensive real-time analytics platform with event tracking, session replay, heatmaps, and A/B testing. Built with distributed architecture using Kafka, Flink, and QuestDB for processing millions of events daily.",
    tags: ["TypeScript", "Bun", "Elysia.js", "Kafka", "Flink", "QuestDB", "React", "Next.js", "WebSocket"],
    featured: true,
    liveUrl: "https://segmentaim.com"
  },
  {
    title: "Vaqto Datepicker",
    description:
      "Advanced datepicker library supporting both Jalali (Persian) and Gregorian calendars with full customization, responsive design, and accessibility features.",
    tags: ["TypeScript", "React", "Calendar", "i18n", "Accessibility"],
    githubUrl: "https://github.com/vmehdi/vaqto-datepicker"
  },
  {
    title: "Kamandar",
    description: "All-in-one trading platform with stocks, funds, options, social network, and market insights for making informed trading decisions.",
    tags: ["React", "Next.js", "Trading", "Real-Time", "Finance"],
    image: "/images/kamandar.jpg",
    liveUrl: "https://kamandar.ir",
    featured: true
  },
  {
    title: "Tarafdari",
    description: "Sports news and community platform with real-time updates, social features, and comprehensive sports coverage.",
    tags: ["Next.js", "Social", "Real-Time", "Sports"],
    image: "/images/tarafdari.jpg",
    liveUrl: "https://tarafdari.com"
  },
  {
    title: "Tazebar",
    description: "Fresh news aggregation platform delivering curated content with smart filtering and personalization features.",
    tags: ["React", "News", "Aggregation", "Content"],
    image: "/images/tazebar.jpg",
    liveUrl: "https://tazebar.com"
  },
  {
    title: "UNCE ERP System",
    description:
      "End-to-end accounting and resource management system for non-profit organizations. Features ledger management, donor tracking, warehouse operations, and role-based access control.",
    tags: ["Node.js", "PostgreSQL", "Vue.js", "ERP", "Accounting", "Reporting"]
  },
  {
    title: "CDN Version Manager",
    description:
      "Automated CDN deployment and versioning system for JavaScript libraries using jsDelivr and BunnyCDN with cache invalidation and rollback support.",
    tags: ["Node.js", "CDN", "CI/CD", "Automation"]
  }
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <GlassCard variant="hover" className={`group relative h-full overflow-hidden ${project.featured ? "md:col-span-2" : ""}`}>
        {project.featured && (
          <div className="absolute right-4 top-4 z-10">
            <div className="flex items-center gap-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
              <Star className="h-3 w-3 fill-current" />
              Featured
            </div>
          </div>
        )}

        {project.image && (
          <div className="relative h-48 w-full overflow-hidden md:h-64">
            <Image src={project.image} fill className="object-cover transition-transform duration-500 group-hover:scale-105" alt={project.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        )}

        <div className="p-6 md:p-8">
          <div className="mb-4 flex items-start justify-between gap-4">
            <h3 className="text-2xl font-bold dark:text-white">{project.title}</h3>
            <Code2 className="h-6 w-6 shrink-0 text-indigo-600 dark:text-indigo-400" />
          </div>

          <p className="mb-6 leading-relaxed text-gray-700 dark:text-gray-300">{project.description}</p>

          {/* Tags */}
          <div className="mb-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <MagneticButton href={project.liveUrl} size="sm" className="group">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </MagneticButton>
            )}
            {project.githubUrl && (
              <MagneticButton href={project.githubUrl} size="sm">
                <Github className="mr-2 h-4 w-4" />
                Source Code
              </MagneticButton>
            )}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen">
      {/* Interactive gradient background */}
      <InteractiveGradient className="pointer-events-none fixed inset-0 -z-10" />

      <div className="container relative z-10 mx-auto px-4 py-12 md:py-20">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="heading-responsive mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text font-bold text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
            Projects & Work
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            A selection of projects I've built — from analytics platforms to developer tools
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-3xl text-center"
        >
          <GlassCard variant="default" className="p-8">
            <p className="text-gray-700 dark:text-gray-300">
              Many of my projects are proprietary or client work. The projects shown here represent a small sample of my work.{" "}
              <a href="https://github.com/vmehdi" className="font-medium text-indigo-600 underline dark:text-indigo-400">
                Visit my GitHub
              </a>{" "}
              for more open-source contributions.
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
