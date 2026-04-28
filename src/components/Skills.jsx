import React, { useState } from "react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    description: "Building responsive and performant UI.",
    skills: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Tailwind", level: 88 },
    ],
  },
  {
    title: "Backend",
    description: "Designing scalable APIs and services.",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "Auth", level: 78 },
    ],
  },
  {
    title: "Database",
    description: "Handling structured and NoSQL data.",
    skills: [
      { name: "MongoDB", level: 82 },
      { name: "MySQL", level: 75 },
      { name: "Data Modeling", level: 80 },
    ],
  },
  {
    title: "DevOps",
    description: "Deploying and managing systems.",
    skills: [
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "CI/CD", level: 72 },
    ],
  },
];

export default function Skills() {
  const [active, setActive] = useState(0);

  return (
    <section id="skills" className="relative px-6 py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_30%,rgba(163,230,53,0.07),transparent_42%)]" />

      <div className="mx-auto max-w-6xl">

        {/* HEADER */}
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-sky-400">
            Skills
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
            My technical capabilities
          </h2>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.2fr]">

          {/* LEFT LIST */}
          <div className="space-y-6">
            {skillGroups.map((group, i) => (
              <button
                type="button"
                key={group.title}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`w-full cursor-pointer rounded-2xl border p-4 text-left transition ${
                  active === i
                    ? "border-sky-400/35 bg-sky-500/10 text-white"
                    : "border-white/10 bg-white/5 text-slate-400 hover:bg-white/10"
                }`}
              >
                <h3 className="text-lg font-semibold">{group.title}</h3>
                <p className="text-sm">{group.description}</p>
              </button>
            ))}
          </div>

          {/* RIGHT PANEL */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{
              rotateX: 3,
              rotateY: -3,
              scale: 1.02,
            }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl perspective-1000"
          >
            <h3 className="text-xl font-semibold text-white">
              {skillGroups[active].title}
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              {skillGroups[active].description}
            </p>

            {/* SKILL BARS */}
            <div className="mt-6 space-y-5">
              {skillGroups[active].skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm text-slate-300">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>

                  <div className="mt-2 h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8 }}
                      className="h-full rounded-full bg-gradient-to-r from-sky-400 to-lime-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
