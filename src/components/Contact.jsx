import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const contactItems = [
  {
    label: "Email",
    value: "alokr5393@gmail.com",
    href: "mailto:alokr5393@gmail.com",
    icon: Mail,
    primary: true,
  },
  {
    label: "GitHub",
    value: "github.com/alokranjan89",
    href: "https://github.com/alokranjan89",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/alok-ranjan89",
    href: "https://www.linkedin.com/in/alok-ranjan89/",
    icon: Linkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24">

      {/* 🔥 Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_20%,rgba(56,189,248,0.12),transparent_50%)]" />

      <div className="mx-auto max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-[32px] border border-white/10 bg-white/5 px-6 py-12 text-center backdrop-blur-xl md:px-10"
        >
          <span className="text-sm uppercase tracking-widest text-sky-400">
            Contact
          </span>

          {/* 🔥 STRONG CTA */}
          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-white leading-tight">
            Let's build something{" "}
            <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
              impactful
            </span>{" "}
            together.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Open to internships and SDE roles where I can contribute to real
            products and grow fast as an engineer.
          </p>

          {/* 🔥 CONTACT GRID */}
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {contactItems.map(({ label, value, href, icon: Icon, primary }, index) => (
              <motion.a
                key={label}
                href={href}
                target={label === "Email" ? undefined : "_blank"}
                rel={label === "Email" ? undefined : "noreferrer"}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative flex items-center justify-between rounded-2xl border p-5 transition-all ${
                  primary
                    ? "border-sky-400/40 bg-sky-500/10"
                    : "border-white/10 bg-white/5 hover:bg-white/10"
                }`}
              >
                {/* Glow hover effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-sky-500/10 to-purple-500/10 blur-xl" />

                <div className="relative flex items-center gap-3">
                  <div className={`rounded-xl p-2 ${
                    primary
                      ? "bg-sky-500/20 text-sky-300"
                      : "bg-white/5 text-slate-300"
                  }`}>
                    <Icon size={18} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">{label}</p>
                    <p className="text-sm font-medium text-white">{value}</p>
                  </div>
                </div>

                <ArrowUpRight
                  size={18}
                  className="relative text-slate-500 transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
