import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative px-6 py-10">

      {/* 🔥 subtle background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.08),transparent_50%)]" />

      {/* 🔥 top border glow */}
      <div className="absolute top-0 left-1/2 h-[1px] w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">

        {/* LEFT TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-sm text-slate-500 text-center md:text-left"
        >
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">Alok Ranjan</span>.  
          Built with React, Tailwind & Framer Motion.
        </motion.p>

        {/* RIGHT ICONS */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="flex items-center gap-4"
        >
          {[
            {
              href: "mailto:alokr5393@gmail.com",
              icon: Mail,
            },
            {
              href: "https://github.com/alokranjan89",
              icon: Github,
            },
            {
              href: "https://www.linkedin.com/in/alok-ranjan89/",
              icon: Linkedin,
            },
          ].map(({ href, icon: Icon }, i) => (
            <motion.a
              key={i}
              href={href}
              target={href.includes("http") ? "_blank" : undefined}
              rel="noreferrer"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="group relative rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur transition"
            >
              {/* glow on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-sky-500/10 to-purple-500/10 blur-lg" />

              <Icon
                size={18}
                className="relative text-slate-400 transition group-hover:text-white"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}