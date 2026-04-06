import React from "react";
import { motion } from "framer-motion";
import { 
  FaPython, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaAws 
} from "react-icons/fa";

import {
  SiMongodb,
  SiKubernetes,
  SiJavascript,
  SiMysql,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiGithubactions,
  SiSqlite
} from "react-icons/si";

const skills = [
  { name: "Python", icon: <FaPython size={26} /> },
  { name: "C++", icon: <SiCplusplus size={26} /> },
  { name: "JavaScript", icon: <SiJavascript size={26} /> },
  { name: "HTML", icon: <SiHtml5 size={26} /> },
  { name: "CSS", icon: <SiCss3 size={26} /> },
  { name: "SQL", icon: <SiSqlite size={26} /> },
  { name: "React", icon: <FaReact size={26} /> },
  { name: "Node.js", icon: <FaNodeJs size={26} /> },
  { name: "MySQL", icon: <SiMysql size={26} /> },
  { name: "MongoDB", icon: <SiMongodb size={26} /> },
  { name: "AWS", icon: <FaAws size={26} /> },
  { name: "Docker", icon: <FaDocker size={26} /> },
  { name: "Kubernetes", icon: <SiKubernetes size={26} /> },
  { name: "Git/GitHub", icon: <FaGitAlt size={26} /> },
  { name: "GitHub Actions", icon: <SiGithubactions size={26} /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-gradient-to-b from-black via-slate-900 to-black"
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-14 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-cyan-400">Skills</span>
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">

          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="p-6 rounded-xl bg-neutral-900 border border-white/10 text-neutral-200 shadow-lg hover:border-cyan-400 hover:shadow-cyan-500/20 transition-all flex flex-col items-center gap-3"
            >
              <div className="text-cyan-400">{skill.icon}</div>
              <p className="font-medium">{skill.name}</p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
