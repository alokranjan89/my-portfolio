import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Github } from "lucide-react";

const projects = [
  {
    title: "NightShield",
    description:
      "Security dashboard for monitoring alerts and real-time system activity.",
    highlight:
      "Implemented WebSocket updates, location-aware alert handling, JWT/Clerk auth, and responder-focused dashboard flows.",
    details: [
      "Built a real-time SOS alert system with location-aware alert handling and responder-focused workflows.",
      "Used WebSockets for live status updates so critical activity appears without manual refresh.",
      "Added authentication and dashboard views for managing alerts, users, and system activity.",
    ],
    github: "https://github.com/alokranjan89/nightshield",
    live: "https://nightshield09.vercel.app",
    tech: ["React", "Node.js", "Express", "MongoDB", "WebSockets"],
  },
  {
    title: "QuickShow",
    description:
      "Movie booking platform with real-time seat locking and seamless user flow.",
    highlight:
      "Practiced real booking logic with seat locking, MongoDB persistence, REST APIs, validation, and Docker Compose setup.",
    details: [
      "Built a full booking flow where users can browse movies, choose shows, select seats, and complete reservations.",
      "Implemented real-time seat locking to reduce double-booking during concurrent booking sessions.",
      "Designed backend APIs for movies, shows, bookings, and seat availability with MongoDB persistence.",
    ],
    github: "https://github.com/alokranjan89/quickshow",
    live: "https://quickshow0.vercel.app",
    tech: ["React", "Node.js", "Express", "MongoDB", "Docker"],
  },
  {
    title: "StyleHubs",
    description:
      "Fashion storefront for browsing modern clothing collections and product categories.",
    highlight:
      "Built responsive ecommerce pages with product sections, category browsing, clear CTAs, and Vercel deployment.",
    details: [
      "Designed a clean shopping experience for fashion categories, featured products, and collection browsing.",
      "Built responsive product sections so visitors can explore clothing and accessories across screen sizes.",
      "Focused on polished ecommerce UI patterns such as product cards, category blocks, and clear call-to-action links.",
    ],
    live: "https://stylehubs.vercel.app/",
    tech: ["React", "Tailwind CSS", "Vercel"],
  },
  {
    title: "Smart Attendance",
    description:
      "AI-powered attendance system using computer vision and backend services.",
    highlight:
      "Explored Python, OpenCV, Flask, REST APIs, Docker, face recognition, and liveness detection in a practical workflow.",
    details: [
      "Created an attendance workflow that uses computer vision to identify users and mark attendance faster.",
      "Connected the recognition pipeline with backend routes for storing and retrieving attendance records.",
      "Focused on a practical dashboard-style experience for reviewing attendance activity and system results.",
    ],
    github: "https://github.com/alokranjan89/Smart-Attendance-System",
    live: "https://smart-attendance-system32.vercel.app",
    tech: ["Python", "OpenCV", "Flask"],
  },
];

export default function Projects() {
  const [active, setActive] = useState(0);

  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.08),transparent_42%)]" />

      <div className="mx-auto max-w-6xl">

        {/* HEADER */}
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-sky-400">
            Projects
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
            Projects where I practiced real product workflows
          </h2>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.2fr]">

          {/* LEFT LIST */}
          <div className="space-y-6">
            {projects.map((project, i) => (
              <button
                type="button"
                key={project.title}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`relative w-full cursor-pointer rounded-2xl border p-4 text-left transition ${
                  active === i
                    ? "border-sky-400/35 bg-sky-500/10"
                    : "border-white/10 bg-white/5 hover:bg-white/10"
                }`}
              >
                {/* ACTIVE LINE */}
                {active === i && (
                  <motion.div
                    layoutId="activeLine"
                    className="absolute -left-4 top-4 h-8 w-1 rounded-full bg-gradient-to-b from-sky-400 to-lime-300"
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
              </button>
            ))}

            <a
              href="https://github.com/alokranjan89"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-medium text-slate-300 transition hover:border-sky-400/35 hover:bg-sky-500/10 hover:text-white"
            >
              <Github size={18} />
              More projects on GitHub
              <ArrowUpRight size={16} />
            </a>
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

            <div className="mt-5 rounded-xl border border-sky-400/20 bg-sky-500/10 p-4">
              <p className="text-xs uppercase tracking-widest text-sky-300">
                Technical highlight
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-200">
                {projects[active].highlight}
              </p>
            </div>

            <div className="mt-6 space-y-3">
              {projects[active].details.map((detail) => (
                <div
                  key={detail}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-[#09090f]/40 p-4"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-1 shrink-0 text-lime-300"
                  />
                  <p className="text-sm leading-6 text-slate-300">{detail}</p>
                </div>
              ))}
            </div>

            {/* TECH */}
            <div className="mt-6 flex flex-wrap gap-2">
              {projects[active].tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-sky-500/10 px-3 py-1 text-xs text-sky-200"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* LINKS */}
            <div className="mt-6 flex gap-4">
              {projects[active].github && (
                <a
                  href={projects[active].github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition"
                >
                  <Github size={18} />
                  GitHub
                </a>
              )}

              {projects[active].live && (
                <a
                  href={projects[active].live}
                  target="_blank"
                  rel="noreferrer"
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
