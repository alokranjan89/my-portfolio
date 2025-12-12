import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full border border-cyan-400"
          />
          <h1 className="text-xl font-semibold text-white">
            Alok<span className="text-cyan-400">Dev</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          <li><a href="#home" className="hover:text-cyan-400">Home</a></li>
          <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
          <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
          <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>

          {/* RESUME BUTTON FIXED */}
          <li>
            <a
              href="/Alok_Ranjan_Resume.pdf"
              download="Alok_Ranjan_Resume.pdf"
              className="px-4 py-2 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-300 transition"
            >
              Resume
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
}
