// eslint-disable-next-line no-unused-vars
import React from "react";
import ProjectsItem from "./ProjectsItem";
import harvic from "../assets/harvic.png";
import lume from "../assets/lume.png";
import hdrsalon from "../assets/hdrsalon.png";
import siralos from "../assets/siralos.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
<p className="text-center py-8">
  These are a few of my projects over the years, built with technologies such as 
  HTML, CSS, JavaScript, React, Tailwind CSS, Flutter, Firebase, and Node.js. 
  For more details, visit my{" "}
  <a
    href="https://github.com/Hardelzs"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-500 underline hover:text-blue-700"
  >
    GitHub
  </a>
  . 
  For updates and more information, follow me on{" "}
  <a
    href="https://twitter.com/hardex2325"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-500 underline hover:text-blue-700"
  >
    Twitter
  </a>
  .
</p>

      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectsItem img={lume} title="Matching App"/>
        <ProjectsItem img={harvic} title="News App" />
        <ProjectsItem img={hdrsalon} title="Hair salon App" />
        <ProjectsItem img={siralos} title="Laundy App" />
      </div>
    </div>
  );
};

export default Projects;
