// eslint-disable-next-line no-unused-vars
import React from "react";
    // import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProjectsItem = ({ img, title }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#002685] animation-all">
      <img src={img} alt="/" className="rounded-xl group-hover:opacity-10"  />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">React Js</p>
        
        <p to="/MainProject">
          <p className="text-center p-3 rounded-lg bg:white text-gray-700 font-bold cursor-pointer text-lg">
            More Info
          </p>
        </p>
        
      </div>
    </div>
  );
};

export default ProjectsItem;
