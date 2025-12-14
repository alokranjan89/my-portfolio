import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left text */}
        <p className="text-sm text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="text-cyan-400 font-medium">Alok Ranjan</span>.  
          All rights reserved.
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-6">
          <a
            href="mailto:alokr5393@gmail.com"
            aria-label="Email"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            <Mail size={20} />
          </a>

          <a
            href="https://github.com/alokranjan89"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            <Github size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/alok-ranjan89/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
