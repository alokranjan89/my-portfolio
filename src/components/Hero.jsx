import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const badges = ["React", "Node.js", "WebSockets", "MongoDB", "PostgreSQL", "Docker"];

export default function Hero() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <section
      id="home"
      onMouseMove={(e) => {
        const { clientX, clientY } = e;
        setPos({ x: clientX, y: clientY });
      }}
      className="relative overflow-hidden px-6 pb-20 pt-32 md:pt-40"
    >

      {/* 🔥 MOUSE SPOTLIGHT */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(600px at ${pos.x}px ${pos.y}px, rgba(56,189,248,0.15), transparent 40%)`,
        }}
      />

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#0b0d14] to-[#09090f]" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm tracking-widest text-sky-400 uppercase">
            Fresher Full-Stack Developer | MERN | APIs
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight text-white">
            I build practical{" "}
            <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
              full-stack projects
            </span>{" "}
            with clean UI and backend logic.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-400">
            I am a fresher focused on React, Node.js, Express, and databases,
            with hands-on projects in booking flows, alert dashboards,
            authentication, REST APIs, WebSockets, and Docker basics.
          </p>

          {/* BADGES */}
          <div className="mt-8 flex flex-wrap gap-3">
            {badges.map((b) => (
              <span
                key={b}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur hover:bg-white/10 transition"
              >
                {b}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 font-medium text-white transition hover:bg-sky-400 hover:shadow-xl hover:shadow-sky-500/30"
            >
              View Projects
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </a>

            <a
              href="/Alok_Ranjan_Resume.pdf"
              download
              className="group flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-white transition hover:bg-white/10"
            >
              Download Resume
              <Download size={18} className="group-hover:scale-110" />
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >

          {/* glow */}
          <div className="absolute inset-0 rounded-[30px] bg-gradient-to-r from-sky-500/20 to-purple-500/20 blur-xl" />

          <div className="relative rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

            {/* dots */}
            <div className="flex gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
            </div>

            <div className="mt-6 space-y-4">

              <div className="rounded-xl bg-black/40 p-5">
                <p className="text-xs text-sky-400 uppercase">Focus</p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  Full-stack project development
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  React interfaces, Node.js APIs, authentication, database models, and deployment practice.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-black/30 p-4">
                  <p className="text-xs text-slate-500">Goal</p>
                  <p className="text-white font-semibold mt-1">
                    SDE / Internship
                  </p>
                </div>

                <div className="rounded-xl bg-black/30 p-4">
                  <p className="text-xs text-slate-500">Strength</p>
                  <p className="text-white font-semibold mt-1">
                    MERN + APIs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
