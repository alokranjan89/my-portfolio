import React from "react";
import clsx from "clsx";
import profilePic from "../assets/profile.jpeg";

export default function Navbar({ theme, setTheme, active }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-glass border-b border-white/10">
      <div className="flex items-center justify-between px-12 py-4">

        {/* LEFT SIDE: PHOTO + LOGO */}
        <div className="flex items-center gap-4">
          <img
            src={profilePic}
            alt="Alok Ranjan"
            className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400 shadow-lg hover:scale-105 transition cursor-pointer"
          />

          <div className="text-white font-extrabold text-2xl cursor-pointer">
            Alok<span className="text-cyan-400">Dev</span>
          </div>
        </div>

        {/* RIGHT SIDE: NAV LINKS */}
        <div className="flex items-center gap-8">

          <a
            className="text-white hover:text-cyan-400 transition"
            href="#home"
          >
            Home
          </a>

          <a
            className="text-white hover:text-cyan-400 transition"
            href="#projects"
          >
            Projects
          </a>

          <a
            className="text-white hover:text-cyan-400 transition"
            href="#skills"
          >
            Skills
          </a>

          <a
            className="text-white hover:text-cyan-400 transition"
            href="#contact"
          >
            Contact
          </a>

          {/* RESUME BUTTON */}
          <a
            href="/Alok_Ranjan_Resume.pdf"
            download
            className="ml-4 px-5 py-2 rounded-lg bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition shadow-lg"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
