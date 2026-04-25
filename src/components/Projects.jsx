import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "QuickShow",
    description:
      "Movie booking platform with real-time seat locking and seamless user flow.",
    github: "https://github.com/alokranjan89/quickshow",
    live: "https://quickshow0.vercel.app",
    tech: ["React", "Node", "MongoDB", "Docker"],
  },
  {
    title: "Smart Attendance",
    description:
      "AI-powered attendance system using computer vision and backend services.",
    github: "https://github.com/alokranjan89/Smart-Attendance-System",
    live: "https://smart-attendance-system32.vercel.app",
    tech: ["Python", "OpenCV", "Flask"],
  },
  {
    title: "NightShield",
    description:
      "Security dashboard for monitoring alerts and real-time system activity.",
    github: "https://github.com/alokranjan89/nightshield",
    live: "https://nightshield09.vercel.app",
    tech: ["React", "Node"],
  },
  {
    title: "Sweet Shop",
    description:
      "Inventory management system for tracking stock and operations.",
    github: "https://github.com/alokranjan89/sweet-shop-management",
    tech: ["MERN"],
  },
];

export default function Projects() {
  const [active, setActive] = useState(0);

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">

        {/* HEADER */}
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-sky-400">
            Projects
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
            Work that reflects how I build products
          </h2>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.2fr]">

          {/* LEFT LIST */}
          <div className="space-y-6">
            {projects.map((project, i) => (
              <div
                key={project.title}
                onMouseEnter={() => setActive(i)}
                className="relative cursor-pointer"
              >
                {/* ACTIVE LINE */}
                {active === i && (
                  <motion.div
                    layoutId="activeLine"
                    className="absolute -left-4 top-1 h-6 w-1 rounded-full bg-sky-400"
                  />
                )}

                <h3
                  className={`text-lg font-semibold transition ${
                    active === i
                      ? "text-white"
                      : "text-slate-500 hover:text-white"
                  }`}
                >
                  {project.title}
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  {project.description}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT PANEL */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-semibold text-white">
              {projects[active].title}
            </h3>

            <p className="mt-3 text-slate-400 leading-7">
              {projects[active].description}
            </p>

            {/* TECH */}
            <div className="mt-5 flex flex-wrap gap-2">
              {projects[active].tech.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-white/10 px-3 py-1 rounded-full text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* LINKS */}
            <div className="mt-6 flex gap-4">
              <a
                href={projects[active].github}
                target="_blank"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition"
              >
                <Github size={18} />
                GitHub
              </a>

              {projects[active].live && (
                <a
                  href={projects[active].live}
                  target="_blank"
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition"
                >
                  <ArrowUpRight size={18} />
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}