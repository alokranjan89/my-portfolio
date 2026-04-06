import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import profile from "../assets/profile.jpeg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">

          <a href="#home">
            <img
              src={profile}
              alt="Alok Ranjan"
              className="w-10 h-10 rounded-full border-2 border-cyan-400 shrink-0 hover:scale-110 transition duration-300"
            />
          </a>

          <a
            href="#home"
            className="text-lg font-bold text-white whitespace-nowrap hover:text-cyan-400 transition duration-300"
          >
            Alok<span className="text-cyan-400">Dev</span>
          </a>

        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 text-gray-300 font-medium">

          {["Home","About","Projects","Skills","Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative hover:text-cyan-400 transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          ))}

          <a
            href="/Alok_Ranjan_Resume.pdf"
            download
            className="ml-4 px-5 py-2 rounded-lg bg-cyan-400 text-black font-semibold hover:bg-cyan-300 hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/30"
          >
            Resume
          </a>

        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="md:hidden text-white"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden bg-black/95 border-t border-white/10 px-6 py-6 space-y-5 text-center"
        >

          {["Home","About","Projects","Skills","Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block text-gray-300 hover:text-cyan-400 text-lg transition"
            >
              {item}
            </a>
          ))}

          <a
            href="/Alok_Ranjan_Resume.pdf"
            download
            onClick={() => setOpen(false)}
            className="block mt-4 px-5 py-2 rounded-lg bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition"
          >
            Download Resume
          </a>

        </div>
      )}
    </header>
  );
}
