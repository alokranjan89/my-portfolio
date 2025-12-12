import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ParticlesBg from "./ParticlesBg";

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

  // Typewriter effect logic
  useEffect(() => {
    const currentText = titles[index];
    let typingSpeed = isDeleting ? 50 : 100;

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
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, titles]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pb-40"
    >
      <ParticlesBg />

      <div className="container mx-auto px-8 text-center z-20">
        <motion.h1
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-6xl md:text-7xl font-extrabold"
        >
          <span className="text-white">Hi, I'm</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            Alok Ranjan
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
        >
          I build intelligent applications using{" "}
          <span className="text-cyan-300 font-semibold">
            {displayText}
            <span className="blinking-cursor">|</span>
          </span>
        </motion.h2>

        <motion.a
          href="#projects"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-10 inline-block btn-neon"
        >
          View My Work
        </motion.a>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 15 }}
        transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 text-cyan-300 text-lg cursor-pointer z-20"
      >
        ↓ Scroll Down
      </motion.div>
    </section>
  );
}
