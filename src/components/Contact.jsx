import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6 bg-black bg-[radial-gradient(circle_at_top,rgba(124,44,255,0.15),transparent_70%)] relative z-10"
    >
      <div className="max-w-3xl mx-auto text-center">

        <motion.h2
          className="text-5xl font-extrabold mb-10 text-white drop-shadow-[0_0_15px_rgba(124,44,255,0.6)]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h2>

        <motion.p
          className="text-neutral-300 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Feel free to reach out for collaboration, job opportunities, or project discussions.
        </motion.p>

        <div className="mt-10 flex flex-col gap-4 items-center">
          
          <a
            href="mailto:alokr5393@gmail.com"
            className="flex items-center gap-3 px-6 py-3 bg-neutral-900/70 rounded-xl border border-purple-500/30 backdrop-blur-md hover:border-purple-400 transition-all text-neutral-200"
          >
            <FaEnvelope size={20} className="text-purple-300" />
            alokr5393@gmail.com
          </a>

          <a
            href="https://github.com/alokranjan89"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-neutral-900/70 rounded-xl border border-cyan-500/30 backdrop-blur-md hover:border-cyan-400 transition-all text-neutral-200"
          >
            <FaGithub size={20} className="text-cyan-300" />
            GitHub Profile
          </a>

          <a
            href="https://www.linkedin.com/in/alok-ranjan89/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-neutral-900/70 rounded-xl border border-blue-500/30 backdrop-blur-md hover:border-blue-400 transition-all text-neutral-200"
          >
            <FaLinkedin size={20} className="text-blue-400" />
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
}
