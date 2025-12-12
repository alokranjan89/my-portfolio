import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-10 text-center bg-black text-gray-300 border-t border-gray-800 mt-20">
      <p className="text-lg font-semibold">© 2025 Alok Ranjan</p>
      <p className="text-sm mt-1">
        Built with React + Tailwind CSS + Framer Motion
      </p>

      <div className="flex justify-center gap-6 mt-5 text-2xl">
        {/* Email */}
        <a
          href="mailto:alokr5393@gmail.com"
          className="hover:text-cyan-400 transition"
        >
          <FaEnvelope />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/alokranjan89"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition"
        >
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/alokranjan89/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}
