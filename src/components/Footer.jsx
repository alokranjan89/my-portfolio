import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-10 text-center bg-black text-gray-300 border-t border-gray-800 mt-20">
      <p className="text-lg font-semibold">© 2025 Alok Ranjan</p>
      <p className="text-sm mt-1">
        Built with React + Tailwind CSS + Framer Motion
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-5 text-2xl">
        
        {/* Email */}
        <a
          href="mailto:alokr5393@gmail.com"
          className="hover:text-cyan-400 transition"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/alokranjan89"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        {/* LinkedIn — FIXED */}
        <a
          href="https://www.linkedin.com/in/alok-ranjan89/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

      </div>
    </footer>
  );
}
