// eslint-disable-next-line no-unused-vars
import React from "react";
// import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { TypeAnimation } from "react-type-animation";
import { FaXTwitter } from "react-icons/fa6";
import back from "../assets/back.webp"

import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Main = () => {
  // const [login, register] = useKindeAuth();
  return (
    <div id="main">
            {" "}
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src={back}
        alt=""
      />
        {" "}
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
           {" "}
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
              {" "}
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800 font-mono">
                  I&apos;m Hardelz {" "}
          </h1>
              {" "}
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800 font-mono">
                  I&apos;m a {" "}
            <TypeAnimation
              sequence={[
                "Developer",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Coder",
                2000,
                "Tech Enthusiast",
                2000,
                "Coffee Lover",
                2000,
              ]}
              wrapper="div"
              speed={50}
              cursor={true}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
                {" "}
          </h2>
              {" "}
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
                  <FaXTwitter className="cursor-pointer" size={20} />
                  <FaFacebook className="cursor-pointer" size={20} />
                  <FaInstagram className="cursor-pointer" size={20} />
                  <FaLinkedinIn className="cursor-pointer" size={20} /> 
              {" "}
          </div>
             {" "}
        </div>
          {" "}
      </div>
       {" "}
    </div>
  );
};

export default Main;
