import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import profile from "../assets/profile.jpeg";

const sections = ["home", "about", "projects", "skills", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateActive = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.3;
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        if (scrollPosition >= section.offsetTop) {
          current = id;
        }
      });

      setActive(current);
      setScrolled(window.scrollY > 20);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    return () => window.removeEventListener("scroll", updateActive);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#09090f]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">

        {/* 🔥 LOGO */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative">
            <img
              src={profile}
              alt="Alok"
              className="h-10 w-10 rounded-xl object-cover border border-white/10 transition group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-xl bg-sky-400/20 opacity-0 group-hover:opacity-100 blur-md transition" />
          </div>

          <div className="leading-tight">
            <p className="text-sm font-semibold text-white">Alok Ranjan</p>
            <p className="text-xs text-slate-400">Software Engineer</p>
          </div>
        </a>

        {/* 🔥 NAV LINKS */}
        <nav className="hidden md:flex items-center gap-8">
          {sections.map((item) => {
            const label = item.charAt(0).toUpperCase() + item.slice(1);
            const isActive = active === item;

            return (
              <a
                key={item}
                href={`#${item}`}
                className="relative px-2 py-1 text-sm font-medium"
              >
                {/* TEXT */}
                <span
                  className={`transition ${
                    isActive
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {label}
                </span>

                {/* 🔥 ANIMATED UNDERLINE */}
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute left-0 right-0 -bottom-1 h-[2px] rounded-full bg-sky-400"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* 🔥 CTA */}
        <div className="hidden md:block">
          <a
            href="/Alok_Ranjan_Resume.pdf"
            download
            className="rounded-xl border border-white/15 px-4 py-2 text-sm text-white transition hover:bg-white/10"
          >
            Resume
          </a>
        </div>

        {/* 🔥 MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden rounded-xl border border-white/10 bg-white/5 p-2 transition hover:bg-white/10 active:scale-95"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* 🔥 MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-white/10 bg-[#09090f]/95 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {sections.map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setOpen(false)}
                  className={`text-base font-medium ${
                    active === item
                      ? "text-white"
                      : "text-slate-400"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}

              <a
                href="/Alok_Ranjan_Resume.pdf"
                download
                className="mt-4 rounded-xl border border-white/15 px-4 py-3 text-center text-white transition hover:bg-white/10"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}