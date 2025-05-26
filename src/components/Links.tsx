"use client";
import { CloudDownload, Github, Gitlab, Instagram, Linkedin, Mail, MessageCircleCode, Phone } from "lucide-react";
import React, { useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/utils/cn";

const LINKS = [
  { title: "Mobile", href: "tel:+989126388852", icon: <Phone size={28} /> },
  { title: "Email", href: "mailto:vmehdev@gmail.com", icon: <Mail size={28} /> },
  { title: "GitLab", href: "https://gitlab.com/mvaezi", icon: <Gitlab size={28} /> },
  { title: "GitHub", href: "https://github.com/vmehdi", icon: <Github size={28} /> },
  { title: "Linkedin", href: "https://www.linkedin.com/in/vmehdi/", icon: <Linkedin size={28} /> },
  // {title: 'Instagram', href: "https://www.instagram.com/_mvaezi/", icon: <Instagram size={28} />},
  {
    title: "Whatsapp",
    href: "https://api.whatsapp.com/send?phone=16282454637&text=Hello%2C%20I%20am%20sending%20a%20message%20through%20your%20site",
    icon: <MessageCircleCode size="28" />
  },
  { title: "Resume-PDF", href: "/Mehdi_Vaezi-CV.pdf", icon: <CloudDownload size="28" />, className: "" }
];

export function FooterLinks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  // translate the tooltip
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      {LINKS.map((item, index) => (
        <div
          className={cn("group relative z-10", index + 1 === LINKS.length && "col-span-2")}
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === index && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10
                  }
                }}
                key={index}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap"
                }}
                className="absolute -top-10 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
              >
                <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
                <div className="relative z-30 text-base font-bold text-white">{item.title}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <a
            href={item.href}
            onMouseMove={handleMouseMove}
            className={cn(
              "group-hover:text-secondary group-hover:unicorn:bg-white/10 unicorn:border-white/20 relative flex flex-col items-center gap-2 rounded-xl border border-black/20 object-top py-2 transition duration-500 group-hover:z-30 group-hover:bg-white/10 sm:py-4 dark:border-white/20",
              item.className
            )}
          >
            <span className="transition group-hover:scale-120">{item.icon}</span>
            <small className="md:hidden">{item.title}</small>
          </a>
        </div>
      ))}
    </>
  );
}
