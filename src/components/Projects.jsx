// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import ProjectsItem from "./ProjectsItem";
import yearbook from "../assets/yearbook.jpg";
import hdrsalon from "../assets/hdrsalon.png";
import siralos from "../assets/siralos.png";
import keyaura from "../assets/keyaura.jpg";
import keyrush from "../assets/keyrush.jpg";

const Projects = () => {
  // Animation variants for container and children
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // delay between items
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      id="projects"
      className="max-w-[1440px] m-auto md:pl-20 p-4 py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <div className="max-w-[1040px] mx-auto text-center">
        <motion.h1
          className="text-4xl font-bold text-center text-[#001b5e]"
          variants={item}
        >
          Projects
        </motion.h1>
        <motion.p
          className="text-center py-8"
          variants={item}
        >
          These are a few of my projects over the years, built with technologies
          such as HTML, CSS, JavaScript, React, Tailwind CSS, Flutter, Firebase,
          and Node.js. For more details, visit my{" "}
          <a
            href="https://github.com/Hardelzs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700"
          >
            GitHub
          </a>
          . For updates and more information, follow me on{" "}
          <a
            href="https://twitter.com/hardex2325"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700"
          >
            X
          </a>
          .
        </motion.p>
      </div>

      <motion.div variants={container}>
        {/* First row: 3 items */}
        <div className="grid sm:grid-cols-3 gap-12 mb-12">
          <motion.div variants={item}>
            <ProjectsItem img={yearbook} title="Matching App" />
          </motion.div>
          <motion.div variants={item}>
            <ProjectsItem img={siralos} title="News App" />
          </motion.div>
          <motion.div variants={item}>
            <ProjectsItem img={hdrsalon} title="Hair salon App" />
          </motion.div>
        </div>

        {/* Second row: 2 items centered */}
        <div className="md:flex justify-center gap-12 hidden max-w-[1040px] text-center ml-32">
          <motion.div variants={item}>
            <ProjectsItem img={keyaura} title="Laundry App" />
          </motion.div>
          <motion.div variants={item}>
            <ProjectsItem img={keyrush} title="Laundry App" />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
