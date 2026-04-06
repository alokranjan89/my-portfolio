import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
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
    live: "https://smart-attendance-system32.vercel.app",
  },
  {
    id: 3,
    title: "QuickShow - Movie Ticket Booking",
    desc:
      "Full-stack MERN application for booking movie tickets with movie listings, seat selection, admin dashboard and secure REST APIs.",
    tags: ["React", "Node.js", "Express", "MongoDB", "MERN"],
    github: "https://github.com/alokranjan89/quickshow",
    live: "https://quickshow0.vercel.app",
  },
  {
    id: 5,
    title: "Nightshield",
    desc:
      "Security-focused web application for monitoring suspicious activity and improving incident response with a clean, real-time dashboard experience.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Security"],
    github: "https://github.com/alokranjan89/nightshield",
    live: "https://nightshield08.vercel.app",
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

const orderedProjects = [...projects].sort((a, b) => {
  const aHasLive = Boolean(a.live);
  const bHasLive = Boolean(b.live);
  if (aHasLive === bHasLive) return a.id - b.id;
  return bHasLive - aHasLive;
});

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-b from-black via-slate-900 to-black relative"
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-cyan-400">Projects</span>
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {orderedProjects.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-xl bg-neutral-900/70 border border-white/10 backdrop-blur-lg shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-400 transition-all"
            >

              {/* Title */}
              <h3 className="text-xl font-bold text-cyan-400">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-300 mt-3 text-sm leading-relaxed">
                {p.desc}
              </p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
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
              <div className="mt-5 flex gap-3 flex-wrap">
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
