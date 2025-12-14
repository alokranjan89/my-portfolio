import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import profile from "../assets/profile.jpeg"; // adjust if png/jpg

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src={profile}
            alt="Alok Ranjan"
            className="w-10 h-10 rounded-full border-2 border-cyan-400 shrink-0"
          />
          <span className="text-lg font-bold text-white whitespace-nowrap">
            Alok<span className="text-cyan-400">Dev</span>
          </span>
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 text-gray-300">
          <a href="#home" className="hover:text-cyan-400">Home</a>
          <a href="#projects" className="hover:text-cyan-400">Projects</a>
          <a href="#skills" className="hover:text-cyan-400">Skills</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>

          <a
            href="/Alok_Ranjan_Resume.pdf"
            download
            className="ml-4 px-5 py-2 rounded-lg bg-cyan-400 text-black font-semibold hover:bg-cyan-300"
          >
            Resume
          </a>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden bg-black/95 border-t border-white/10 px-6 py-6 space-y-4">
          <a href="#home" onClick={() => setOpen(false)} className="block text-gray-300 hover:text-cyan-400">Home</a>
          <a href="#projects" onClick={() => setOpen(false)} className="block text-gray-300 hover:text-cyan-400">Projects</a>
          <a href="#skills" onClick={() => setOpen(false)} className="block text-gray-300 hover:text-cyan-400">Skills</a>
          <a href="#contact" onClick={() => setOpen(false)} className="block text-gray-300 hover:text-cyan-400">Contact</a>

          <a
            href="/Alok_Ranjan_Resume.pdf"
            download
            className="block text-center mt-4 px-4 py-2 rounded-lg bg-cyan-400 text-black font-semibold"
          >
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}
