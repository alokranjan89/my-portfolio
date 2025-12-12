import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import profilePic from "../assets/profile.jpeg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/20 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">

        {/* Logo + Profile */}
        <div className="flex items-center gap-2">
          <img src={profilePic} className="h-10 w-10 rounded-full border border-cyan-400" />
          <h1 className="text-xl font-bold text-white">
            Alok<span className="text-cyan-400">Dev</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-white">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="hover:text-cyan-400 transition"
            >
              {item.name}
            </a>
          ))}

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-4 py-2 bg-cyan-400 text-black rounded-lg font-semibold"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-black/80 border-t border-white/10 px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setOpen(false)}
              className="block text-white text-lg hover:text-cyan-400"
            >
              {item.name}
            </a>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            className="block w-full text-center px-4 py-2 bg-cyan-400 text-black rounded-lg font-semibold"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
