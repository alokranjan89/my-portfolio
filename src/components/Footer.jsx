import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 bg-black text-white text-center border-t border-white/10">
      <p className="mb-4 text-lg font-semibold">Connect with me</p>

      <div className="flex justify-center gap-6">
        
        {/* GitHub */}
        <a
          href="https://github.com/alokranjan89"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400"
        >
          GitHub
        </a>

        {/* LinkedIn — FIXED */}
        <a
          href="https://www.linkedin.com/in/alokranjan89/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400"
        >
          LinkedIn
        </a>
      </div>

      <p className="mt-4 text-sm text-white/60">
        © {new Date().getFullYear()} Alok Ranjan — All Rights Reserved.
      </p>
    </footer>
  );
}
