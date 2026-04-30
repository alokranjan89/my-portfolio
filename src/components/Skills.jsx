import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaAws,
  FaCloud,
  FaCogs,
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaLock,
  FaNetworkWired,
  FaNodeJs,
  FaReact,
  FaServer,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiExpress,
  SiGithubactions,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNginx,
  SiPostman,
  SiPostgresql,
  SiPython,
  SiRedis,
  SiSocketdotio,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Languages",
    description: "Writing clean logic across core programming languages.",
    proof: "Used across coursework, full-stack projects, REST APIs, SQL databases, and the Smart Attendance Python/OpenCV project.",
    skills: [
      { name: "JavaScript", level: 85, icon: SiJavascript },
      { name: "Python", level: 80, icon: SiPython },
      { name: "C++", level: 78, icon: SiCplusplus },
      { name: "SQL", level: 76, icon: FaDatabase },
    ],
  },
  {
    title: "Frontend",
    description: "Building responsive and performant UI.",
    proof: "Used in NightShield, QuickShow, StyleHubs, dashboards, booking pages, and responsive portfolio/product UI.",
    skills: [
      { name: "React", level: 90, icon: FaReact },
      { name: "HTML", level: 92, icon: FaHtml5 },
      { name: "CSS", level: 88, icon: FaCss3Alt },
      { name: "JavaScript", level: 85, icon: SiJavascript },
      { name: "Tailwind", level: 88, icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend & APIs",
    description: "Designing scalable APIs and real-time services.",
    proof: "Practiced through SOS alerts, live updates, authentication, seat locking, API validation, and role-based flows.",
    skills: [
      { name: "Node.js", level: 85, icon: FaNodeJs },
      { name: "Express", level: 80, icon: SiExpress },
      { name: "REST APIs", level: 84, icon: FaNetworkWired },
      { name: "WebSockets", level: 78, icon: SiSocketdotio },
      { name: "JWT Auth", level: 78, icon: FaLock },
      { name: "Microservices", level: 72, icon: FaServer },
      { name: "Event-Driven", level: 74, icon: FaCogs },
    ],
  },
  {
    title: "Databases",
    description: "Handling structured and NoSQL data.",
    proof: "Used for project persistence, seat availability, MongoDB data models, PostgreSQL internship work, and Redis basics.",
    skills: [
      { name: "MongoDB", level: 82, icon: SiMongodb },
      { name: "PostgreSQL", level: 78, icon: SiPostgresql },
      { name: "MySQL", level: 75, icon: SiMysql },
      { name: "Redis", level: 68, icon: SiRedis },
      { name: "Data Modeling", level: 80, icon: FaDatabase },
    ],
  },
  {
    title: "DevOps & Tools",
    description: "Deploying, testing, and managing systems.",
    proof: "Practiced with Dockerized projects, API testing, Git workflows, GitHub Actions basics, Linux, and deployment tools.",
    skills: [
      { name: "Docker", level: 75, icon: FaDocker },
      { name: "Docker Compose", level: 72, icon: FaDocker },
      { name: "Git", level: 82, icon: FaGitAlt },
      { name: "CI/CD", level: 72, icon: FaCogs },
      { name: "GitHub Actions", level: 70, icon: SiGithubactions },
      { name: "Postman", level: 80, icon: SiPostman },
      { name: "Linux", level: 70, icon: SiLinux },
      { name: "Nginx", level: 66, icon: SiNginx },
    ],
  },
  {
    title: "Cloud",
    description: "Shipping apps on cloud and deployment platforms.",
    proof: "Used Vercel for project deployments and learned AWS fundamentals including EC2, S3, and IAM.",
    skills: [
      { name: "AWS", level: 70, icon: FaAws },
      { name: "EC2", level: 68, icon: FaServer },
      { name: "S3", level: 66, icon: FaCloud },
      { name: "IAM", level: 64, icon: FaLock },
      { name: "Vercel", level: 82, icon: SiVercel },
      { name: "API Integration", level: 80, icon: FaCode },
    ],
  },
];

export default function Skills() {
  const [active, setActive] = useState(0);
  const activeGroup = skillGroups[active];

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

          {/* RIGHT FLOATING SKILLS */}
          <div className="skills-stage relative min-h-[620px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl md:p-7">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(56,189,248,0.16),transparent_34%)]" />
            <div className="skills-orbit" />

            {activeGroup.skills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <motion.button
                  type="button"
                  key={`${activeGroup.title}-${skill.name}`}
                  initial={{ opacity: 0, y: 28, scale: 0.86 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 18, scale: 0.9 }}
                  whileHover={{ y: -10, scale: 1.06 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className={`floating-skill skill-float-${index + 1} border-sky-300/50 bg-sky-400/15 text-white shadow-[0_0_40px_rgba(56,189,248,0.2)]`}
                >
                  <Icon className="text-2xl" />
                  <span>{skill.name}</span>
                </motion.button>
              );
            })}

            <div className="skills-core-shell">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="skills-core"
              >
                <p className="text-sm uppercase tracking-widest text-sky-400">
                  {activeGroup.title}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {activeGroup.description}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {activeGroup.proof}
                </p>

                <div className="mt-7 space-y-5">
                  {activeGroup.skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <div key={skill.name}>
                        <div className="flex items-center justify-between gap-4 text-sm text-slate-300">
                          <span className="flex items-center gap-2">
                            <Icon className="text-sky-300" />
                            {skill.name}
                          </span>
                          <span>{skill.level}%</span>
                        </div>

                        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 0.8 }}
                            className="h-full rounded-full bg-gradient-to-r from-sky-400 to-lime-300"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
