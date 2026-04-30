import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import profilePic from "../assets/profile.jpeg";

const points = [
  "Built project features using WebSockets for SOS alerts, live updates, and booking-related workflows.",
  "Created REST APIs with authentication, validation, error handling, and database persistence.",
  "Practiced with MongoDB, PostgreSQL, MySQL, Redis, Docker, and deployment tools through projects and internship work.",
  "Looking for SDE / internship roles where I can contribute, learn fast, and grow as a full-stack developer.",
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24">

      {/* 🔥 Background subtle gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.08),transparent_40%)]" />

      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.8fr_1.2fr] items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative group">
            
            {/* Glow behind image */}
            <div className="absolute inset-0 rounded-[28px] bg-gradient-to-r from-sky-500/20 to-purple-500/20 blur-2xl opacity-60 group-hover:opacity-100 transition" />

            <img
              src={profilePic}
              alt="Alok Ranjan"
              className="relative h-[340px] w-[280px] md:h-[380px] md:w-[300px] rounded-[24px] object-cover border border-white/10 shadow-xl transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <span className="text-sm uppercase tracking-widest text-sky-400">
            About Me
          </span>

          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-white leading-tight">
            I enjoy building useful apps with{" "}
            <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
              clean interfaces and solid backend basics
            </span>
          </h2>

          {/* 🔥 Quick highlights (NEW - important) */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <p className="text-xs text-slate-500">Focus</p>
              <p className="text-white font-semibold mt-1">MERN Projects</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <p className="text-xs text-slate-500">Goal</p>
              <p className="text-white font-semibold mt-1">SDE / Internship</p>
            </div>
          </div>

          {/* 🔥 Points */}
          <div className="mt-10 space-y-4">
            {points.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur hover:bg-white/10 transition"
              >
                <CheckCircle2 className="text-sky-400 mt-1 shrink-0" size={20} />
                <p className="text-slate-300 leading-7">{point}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
