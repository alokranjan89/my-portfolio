import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Interviewly – AI Interview Generator",
    desc:
      "AI-based web app that generates personalized interview questions using Google Generative AI API. Built with Next.js, React, Tailwind CSS. Integrated React Hook Form + Zod.",
    tags: ["Next.js", "React", "Tailwind", "Google AI", "Zod"],
    link: "https://github.com/alokranjan89/interviewly",
  },
  {
    title: "Smart Attendance System",
    desc:
      "AI-powered attendance system with liveness detection using Python, OpenCV, Flask. Microservice backend with Node.js, MongoDB, Docker + Kubernetes CI/CD.",
    tags: ["Python", "OpenCV", "Flask", "Node.js", "MongoDB", "Docker", "Kubernetes"],
    link: "https://github.com/alokranjan89/Smart-Attendance-System",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 bg-black relative z-10">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          className="text-5xl font-extrabold text-center mb-16 text-white drop-shadow-[0_0_15px_rgba(0,255,255,0.4)]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="p-7 rounded-2xl bg-neutral-900/60 border border-cyan-300/20 backdrop-blur-xl shadow-xl hover:shadow-cyan-500/20 hover:border-cyan-400 transition-all"
            >
              <h3 className="text-2xl font-bold text-cyan-300">{p.title}</h3>
              <p className="text-neutral-300 mt-3 leading-relaxed">{p.desc}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-300/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-4">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-black transition flex items-center gap-2"
                >
                  <FaGithub /> GitHub
                </a>

                <a
                  href="#contact"
                  className="px-4 py-2 rounded-lg btn-neon flex items-center gap-2"
                >
                  Contact Me <FaExternalLinkAlt />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
