// import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaArrowUp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const socials = [
    { icon: <FaGithub size={20} />, link: "https://github.com/Hardelzs" },
    { icon: <FaTwitter size={20} />, link: "https://twitter.com/hardex2325" },
    { icon: <FaEnvelope size={20} />, link: "mailto:hardelz@gmail.com" },
  ];

  return (
    <motion.footer
      id="footer"
      className="bg-[#001b5e] text-white py-8 mt-16 relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Summary text */}
      <div className="text-center px-4">
        <p className="text-lg font-semibold">
          Thanks for visiting my portfolio! 🚀
        </p>
        <p className="text-sm text-gray-300 mt-1">
          Built with React, Tailwind CSS, Framer Motion, and lots of ☕.
          Explore my work, connect with me, or scroll back up for another tour!
        </p>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-4">
        {socials.map((social, idx) => (
          <motion.a
            key={idx}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white text-[#001b5e] p-2 rounded-full shadow-md hover:shadow-lg transition"
          >
            {social.icon}
          </motion.a>
        ))}
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute right-6 bottom-6 bg-white text-[#001b5e] p-3 rounded-full shadow-lg hover:shadow-xl"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaArrowUp size={20} />
      </motion.button>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-300 mt-6">
        © {new Date().getFullYear()} Hardelz. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
