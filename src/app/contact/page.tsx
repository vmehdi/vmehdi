"use client";

import { motion } from "motion/react";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { InteractiveGradient } from "@/components/ui/InteractiveGradient";
import { Mail, Github, Linkedin, MessageCircle, Send, MapPin } from "lucide-react";

export default function ContactPage() {
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
            Get in Touch
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Let's discuss your project, collaboration opportunities, or just have a technical chat
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <GlassCard variant="heavy" className="p-8">
              <h2 className="mb-6 text-2xl font-bold dark:text-white">Contact Information</h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-indigo-500/10 p-3 dark:bg-indigo-500/20">
                    <Mail className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold dark:text-white">Email</h3>
                    <a href="mailto:vmehdev@gmail.com" className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">
                      vmehdev@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-indigo-500/10 p-3 dark:bg-indigo-500/20">
                    <MapPin className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold dark:text-white">Location</h3>
                    <p className="text-gray-700 dark:text-gray-300">Available for remote work worldwide</p>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-indigo-500/10 p-3 dark:bg-indigo-500/20">
                    <MessageCircle className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold dark:text-white">Availability</h3>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                      <span className="text-gray-700 dark:text-gray-300">Open to new opportunities</span>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Social Links */}
            <GlassCard variant="heavy" className="p-8">
              <h2 className="mb-6 text-2xl font-bold dark:text-white">Connect With Me</h2>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <MagneticButton href="https://github.com/vmehdi" size="md" className="w-full justify-center">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </MagneticButton>
                <MagneticButton href="https://linkedin.com/in/vmehdi" size="md" className="w-full justify-center">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </MagneticButton>
                <MagneticButton href="https://dev.to/vmehdi" size="md" className="w-full justify-center sm:col-span-2">
                  <Send className="mr-2 h-5 w-5" />
                  Dev.to
                </MagneticButton>
              </div>
            </GlassCard>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            <GlassCard variant="heavy" className="h-full p-8">
              <h2 className="mb-6 text-2xl font-bold dark:text-white">Send a Message</h2>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block font-medium dark:text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-lg border border-gray-300 bg-white/50 px-4 py-3 backdrop-blur-sm transition-all focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:border-gray-600 dark:bg-white/10 dark:text-white"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block font-medium dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-lg border border-gray-300 bg-white/50 px-4 py-3 backdrop-blur-sm transition-all focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:border-gray-600 dark:bg-white/10 dark:text-white"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block font-medium dark:text-white">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full rounded-lg border border-gray-300 bg-white/50 px-4 py-3 backdrop-blur-sm transition-all focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:border-gray-600 dark:bg-white/10 dark:text-white"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block font-medium dark:text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full resize-none rounded-lg border border-gray-300 bg-white/50 px-4 py-3 backdrop-blur-sm transition-all focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:border-gray-600 dark:bg-white/10 dark:text-white"
                    placeholder="Your message..."
                  />
                </div>

                <MagneticButton size="lg" className="w-full justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </MagneticButton>
              </form>
            </GlassCard>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-3xl text-center"
        >
          <GlassCard variant="default" className="p-8">
            <h3 className="mb-4 text-xl font-bold dark:text-white">What I'm Looking For</h3>
            <p className="text-gray-700 dark:text-gray-300">
              I'm particularly interested in <strong>product architecture</strong> roles, <strong>real-time systems</strong> challenges,{" "}
              <strong>distributed systems</strong> design, and <strong>performance optimization</strong> projects. Feel free to reach out for collaboration,
              consulting, or technical discussions.
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
