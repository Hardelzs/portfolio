// import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiFlutter, SiFirebase } from "react-icons/si";

const skills = [
  { icon: <FaHtml5 size={40} className="text-orange-500" />, name: "HTML5" },
  { icon: <FaCss3Alt size={40} className="text-blue-500" />, name: "CSS3" },
  { icon: <FaJsSquare size={40} className="text-yellow-400" />, name: "JavaScript" },
  { icon: <FaReact size={40} className="text-blue-400" />, name: "React" },
  { icon: <SiTailwindcss size={40} className="text-teal-400" />, name: "Tailwind CSS" },
  { icon: <FaNodeJs size={40} className="text-green-500" />, name: "Node.js" },
  { icon: <SiFlutter size={40} className="text-sky-400" />, name: "Flutter" },
  { icon: <SiFirebase size={40} className="text-yellow-500" />, name: "Firebase" },
  { icon: <FaGitAlt size={40} className="text-orange-600" />, name: "Git" },
];

const certifications = [
  { year: 2022, title: "Frontend Development Certification", issuer: "FreeCodeCamp" },
  { year: 2023, title: "JavaScript Algorithms & Data Structures", issuer: "FreeCodeCamp" },
  { year: 2024, title: "Flutter App Development", issuer: "Udemy" },
];

const Personal = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      id="personal"
      className="max-w-[1040px] m-auto md:pl-20 p-4 py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      {/* Title */}
      <motion.h1
        className="text-4xl font-bold text-center text-[#001b5e]"
        variants={item}
      >
        Resume
      </motion.h1>

      {/* Skills Section */}
      <motion.h2
        className="text-2xl font-bold text-[#001b5e] mt-8 mb-4"
        variants={item}
      >
        MyWeapons
      </motion.h2>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        variants={container}
      >
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300"
            variants={item}
          >
            {skill.icon}
            <p className="mt-2 font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Certifications Section */}
      <motion.h2
        className="text-2xl font-bold text-[#001b5e] mt-12 mb-4"
        variants={item}
      >
        Certifications
      </motion.h2>
      <motion.ul className="space-y-4" variants={container}>
        {certifications.map((cert, idx) => (
          <motion.li
            key={idx}
            className="bg-gray-100 p-4 rounded-lg shadow-sm border-l-4 border-[#001b5e]"
            variants={item}
          >
            <p className="font-bold">{cert.title}</p>
            <p className="text-sm text-gray-600">
              {cert.issuer} • {cert.year}
            </p>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Personal;
