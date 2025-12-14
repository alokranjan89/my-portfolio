import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const titles = [
    "Software Developer",
    "AI & Full-Stack Developer",
    "Machine Learning Engineer",
    "Cloud & DevOps Practitioner",
  ];

  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = titles[index];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentText.substring(0, displayText.length - 1)
          : currentText.substring(0, displayText.length + 1)
      );

      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % titles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center bg-black"
    >
      <div className="max-w-4xl px-6 text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold"
        >
          <span className="text-white">Hi, I'm</span>{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            Alok Ranjan
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-xl text-gray-300"
        >
          I build intelligent applications using{" "}
          <span className="text-cyan-400 font-semibold">
            {displayText}|
          </span>
        </motion.p>

        <motion.a
          href="#projects"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="inline-block mt-10 px-8 py-3 rounded-lg bg-cyan-400 text-black font-semibold hover:bg-cyan-300"
        >
          View My Work
        </motion.a>
      </div>
    </section>
  );
}
