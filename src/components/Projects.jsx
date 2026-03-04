import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Interviewly – AI Interview Generator",
    desc:
      "AI-based web app that generates personalized interview questions using Google Generative AI API. Built with Next.js, React, Tailwind CSS with React Hook Form + Zod validation.",
    tags: ["Next.js", "React", "Tailwind", "Google AI", "Zod"],
    github: "https://github.com/alokranjan89/interviewly",
    live: "",
  },
  {
    id: 2,
    title: "Smart Attendance System",
    desc:
      "AI-powered attendance system with liveness detection using Python, OpenCV and Flask with Node.js microservices, MongoDB and Docker + Kubernetes CI/CD.",
    tags: [
      "Python",
      "OpenCV",
      "Flask",
      "Node.js",
      "MongoDB",
      "Docker",
      "Kubernetes",
    ],
    github: "https://github.com/alokranjan89/Smart-Attendance-System",
    live: "",
  },
  {
    id: 3,
    title: "QuickShow – Movie Ticket Booking",
    desc:
      "Full-stack MERN application for booking movie tickets with movie listings, seat selection, admin dashboard and secure REST APIs.",
    tags: ["React", "Node.js", "Express", "MongoDB", "MERN"],
    github: "https://github.com/alokranjan89/quickshow",
    live: "",
  },
  {
    id: 4,
    title: "Sweet Shop Management System",
    desc:
      "MERN stack application to manage sweet inventory with add/update/delete sweets, category search, price management and stock tracking.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/alokranjan89/sweet-shop-management",
    live: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 bg-black relative z-10">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.h2
          className="text-4xl font-extrabold text-center mb-10 text-white drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-5 rounded-xl bg-neutral-900/60 border border-cyan-300/20 backdrop-blur-xl shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-400 transition-all"
            >
              {/* Title */}
              <h3 className="text-xl font-bold text-cyan-300">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-300 mt-2 text-sm leading-relaxed">
                {p.desc}
              </p>

              {/* Tags */}
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-300/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-4 flex gap-3 flex-wrap">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 text-sm rounded-lg border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-black transition flex items-center gap-2"
                >
                  <FaGithub />
                  GitHub
                </a>

                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-2 text-sm rounded-lg border border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-black transition flex items-center gap-2"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}

                <a
                  href="#contact"
                  className="px-3 py-2 text-sm rounded-lg border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-black transition flex items-center gap-2"
                >
                  Contact
                </a>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}