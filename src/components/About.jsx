import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpeg";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-gradient-to-b from-black via-[#0a0a12] to-black"
    >
      {/* Soft spotlight background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-[600px] h-[600px] bg-purple-600/20 blur-[180px] rounded-full mx-auto opacity-40"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT — IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={profilePic}
            alt="Profile"
            className="
              w-64 h-64 object-cover rounded-full
              border-4 border-cyan-400/40 shadow-lg
              shadow-purple-500/30 hover:scale-105 transition-all duration-300
            "
          />
        </motion.div>

        {/* RIGHT — TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-md">
            About Me
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg mb-4">
            Hi, I'm <span className="text-cyan-300 font-semibold">Alok Ranjan</span>, 
            a passionate Software Developer specializing in 
            <span className="text-purple-400 font-semibold"> AI</span>,{" "}
            <span className="text-purple-400 font-semibold">Full-Stack Development</span>, and{" "}
            <span className="text-purple-400 font-semibold">Cloud/DevOps</span>.
          </p>

          <p className="text-gray-400 leading-relaxed text-lg mb-4">
            I enjoy solving real-world problems through scalable systems, intelligent
            models, and modern infrastructure automation. My goal is to build meaningful 
            digital products that create real impact.
          </p>

          <p className="text-gray-400 leading-relaxed text-lg">
            I’m constantly learning and experimenting with technologies that power the 
            future of software — from microservices to machine learning workflows.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
