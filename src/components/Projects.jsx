import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Interviewly – AI Interview Generator",
    desc:
      "AI-based web app that generates personalized interview questions using Google Generative AI API. Built with Next.js, React, Tailwind CSS. Integrated React Hook Form + Zod.",
    tags: ["Next.js", "React", "Tailwind", "Google AI", "Zod"],
    github: "https://github.com/alokranjan89/interviewly",
    live: "",
  },
  {
    id: 2,
    title: "Smart Attendance System",
    desc:
      "AI-powered attendance system with liveness detection using Python, OpenCV, Flask. Microservice backend with Node.js, MongoDB, Docker + Kubernetes CI/CD.",
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
    title: "QuickShow – Movie Ticket Booking Platform",
    desc:
      "Full-stack MERN web application for booking movie tickets online. Features include movie listings, showtime management, seat selection, and admin dashboard for adding movies and shows. Built with React, Node.js, Express, and MongoDB with secure REST APIs.",
    tags: ["React", "Node.js", "Express", "MongoDB", "MERN", "Tailwind"],
    github: "https://github.com/alokranjan89/quickshow",
    live: "",
  },
  {
    id: 4,
    title: "Sweet Shop Management System",
    desc:
      "A full-stack web application designed to manage sweet shop inventory and operations. Features include adding, updating, deleting sweets, searching by category, price management, and stock tracking. Built using the MERN stack with RESTful APIs and a responsive UI.",
    tags: ["MERN Stack", "React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/alokranjan89/sweet-shop-management",
    live: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 bg-black relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <motion.h2
          className="text-5xl font-extrabold text-center mb-16 text-white drop-shadow-[0_0_15px_rgba(0,255,255,0.4)]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-7 rounded-2xl bg-neutral-900/60 border border-cyan-300/20 backdrop-blur-xl shadow-xl hover:shadow-cyan-500/20 hover:border-cyan-400 transition-all"
            >
              {/* Title */}
              <h3 className="text-2xl font-bold text-cyan-300">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-300 mt-3 leading-relaxed">
                {p.desc}
              </p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-300/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-6 flex gap-4 flex-wrap">
                
                {/* GitHub */}
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-black transition flex items-center gap-2"
                >
                  <FaGithub />
                  GitHub
                </a>

                {/* Live Demo */}
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-lg border border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-black transition flex items-center gap-2"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}

                {/* Contact */}
                <a
                  href="#contact"
                  className="px-4 py-2 rounded-lg border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-black transition flex items-center gap-2"
                >
                  Contact Me
                </a>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}