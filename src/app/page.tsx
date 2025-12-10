"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { ColourfulText } from "@/components/ui/ColourfulText";

export default function HomePage() {
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
      <div className="container">
        <section className="flex h-full items-center justify-center pt-8">
          <div className="relative z-10 flex h-full flex-col items-center justify-center">
            <Image className="relative" src="/logo.svg" alt="Mehdi Vaezi Logo" width={180} height={180} priority />
            <h1 className="mt-8 text-4xl font-bold">
              <ColourfulText text="Mehdi Vaezi" />
            </h1>
            <h2 className="mb-2 text-xl font-light">Full‑Stack Technical Architect & Product Engineer</h2>
            <TypeAnimation
              className="text-xl"
              sequence={[
                2000,
                "Javascript Engineer",
                4000,
                "React/Next (Full Stack) Developer",
                5000,
                "Backend (Node.js, Bun, Elysia) Developer",
                3000,
                "Frontend (React, Vue, Svelte) Developer",
                3000,
                "devOps (Docker, CI/CD) Engineer"
              ]}
              speed={60}
              deletionSpeed={80}
              wrapper={"h5"}
              repeat={Infinity}
            />
            <article className="mt-6 flex max-w-2xl flex-col gap-2 text-center md:text-left">
              <p>
                I’m a product‑driven software engineer with 15+ years of experience — starting from the early days of HTML/CSS, and evolving into building
                scalable, distributed analytics platforms.
              </p>
              <p>
                Originally rooted in front‑end engineering, I’ve grown into a full‑stack architect who designs and delivers production-grade systems. I’ve led
                complex projects involving:
              </p>
              <ul className="list-inside list-disc">
                <li>Modern JavaScript frameworks (React, Vue, Next.js, Nuxt)</li>
                <li>Back-end architecture using Node.js, Bun, and Elysia.js</li>
                <li>Real-time infrastructure with WebSocket, Kafka, Redis, and QuestDB</li>
                <li>Distributed system design, config/versioning/CDN strategies</li>
                <li>CI/CD pipelines, Docker, DevOps, and server security (UFW, RAID, Nginx, TLS)</li>
              </ul>
              <p className="mt-2">
                I enjoy turning abstract ideas into working systems — from tracking scripts used across production websites, to building backends that handle
                millions of events per day.
              </p>
              {/* <p className="mt-2">
                My recent work includes building an advanced user behavior tracking platform similar to Hotjar/Segment, with real‑time A/B testing, heatmaps,
                session replays, and a custom analytics pipeline using Kafka + Flink + Postgres/QuestDB — fully containerized and cloud‑ready.
              </p> */}
              <p className="mt-2">
                I thrive at the intersection of product, engineering, and infrastructure — and I’m always learning, optimizing, and mentoring.
              </p>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}
