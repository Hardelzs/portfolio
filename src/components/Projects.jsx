// eslint-disable-next-line no-unused-vars
import React from "react";
import ProjectsItem from "./ProjectsItem";
import mekin from "../assets/mekin.png";
import portfolio from "../assets/portfolio.png";
import harvic from "../assets/harvic.png";
import calculator from "../assets/calculator.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
         This are few of my project over the years, some are just html and css while some comprises some programming language for more information check my github page {/*"https://github.com/Hardelzs",*/} while some are complete and some are not complete. For full information follow me on {/* "twitter.com/hardex2325"*/} 
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectsItem img={calculator} title="calculator App" />
        <ProjectsItem img={harvic} title="News App" />
        <ProjectsItem img={mekin} title="Nation Solver App" />
        <ProjectsItem img={portfolio} title="My Portfolio App" />
      </div>
    </div>
  );
};

export default Projects;
