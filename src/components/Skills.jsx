import React from "react";
import { motion } from "framer-motion";
import { 
  FaPython, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaAws 
} from "react-icons/fa";
import { SiMongodb, SiKubernetes, SiJavascript, SiMysql, SiCplusplus, SiHtml5, SiCss3, SiGithubactions, SiSqlite } from "react-icons/si";

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
  { name: "AWS (S3, EC2, IAM)", icon: <FaAws size={26} /> },
  { name: "Docker", icon: <FaDocker size={26} /> },
  { name: "Kubernetes", icon: <SiKubernetes size={26} /> },
  { name: "Git/GitHub", icon: <FaGitAlt size={26} /> },
  { name: "GitHub Actions (CI/CD)", icon: <SiGithubactions size={26} /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 px-6 bg-black bg-[radial-gradient(circle_at_center,rgba(0,217,255,0.06),transparent_70%)] relative z-10"
    >
      <div className="max-w-6xl mx-auto text-center">
        
        <motion.h2
          className="text-5xl font-extrabold mb-14 text-white drop-shadow-[0_0_15px_rgba(0,255,255,0.4)]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.08, boxShadow: "0 0 25px rgba(0,255,255,0.3)" }}
              transition={{ duration: 0.3 }}
              className="p-5 rounded-xl bg-neutral-900/60 border border-cyan-400/20 text-neutral-200 shadow-lg backdrop-blur-md flex flex-col items-center gap-3"
            >
              <div className="text-cyan-300">{skill.icon}</div>
              <p className="font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
