import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-10 bg-black border-t border-neutral-800 text-center text-neutral-400 relative z-10">
      <p className="text-lg">© 2025 Alok Ranjan</p>
      <p className="text-sm mt-1">Built with React + Tailwind CSS + Framer Motion</p>

      <div className="flex justify-center gap-6 mt-4 text-neutral-300 text-xl">
        <a
          href="mailto:alokr5393@gmail.com"
          className="hover:text-cyan-400 transition"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/alokranjan89"
          target="_blank"
          className="hover:text-cyan-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/alok-ranjan"
          target="_blank"
          className="hover:text-cyan-400 transition"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}
