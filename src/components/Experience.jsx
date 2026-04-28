import React from "react";
import { motion } from "framer-motion";
import { BriefcaseBusiness, CalendarDays, CheckCircle2, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "Universal Fortune Group",
    location: "Remote",
    period: "August 2025 - March 2026",
    tech: ["React.js", "Node.js", "REST APIs", "PostgreSQL"],
    highlights: [
      "Developed and optimized frontend features using React.js, improving application performance and user experience.",
      "Built and integrated RESTful APIs with Node.js to improve communication between frontend and backend systems.",
      "Worked with PostgreSQL for efficient data storage, querying, and optimization.",
      "Debugged and resolved UI and API issues, improving application stability and reliability.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_25%,rgba(163,230,53,0.08),transparent_42%)]" />

      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-sky-400">
            Experience
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
            Practical work on real product systems
          </h2>
        </div>

        <div className="mt-14 space-y-8">
          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.role}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-8"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-sky-400 to-lime-300" />

              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.3fr]">
                <div>
                  <div className="inline-flex rounded-xl bg-sky-500/10 p-3 text-sky-300">
                    <BriefcaseBusiness size={24} />
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold text-white">
                    {experience.role}
                  </h3>
                  <p className="mt-2 text-lg text-slate-300">
                    {experience.company}
                  </p>

                  <div className="mt-6 space-y-3 text-sm text-slate-400">
                    <div className="flex items-center gap-3">
                      <CalendarDays size={17} className="text-sky-300" />
                      <span>{experience.period}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin size={17} className="text-sky-300" />
                      <span>{experience.location}</span>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {experience.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  {experience.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-4 rounded-xl border border-white/10 bg-[#09090f]/40 p-4"
                    >
                      <CheckCircle2
                        size={20}
                        className="mt-1 shrink-0 text-lime-300"
                      />
                      <p className="leading-7 text-slate-300">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
