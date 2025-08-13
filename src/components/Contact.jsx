// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaPhoneAlt, FaEnvelope, FaRegEdit } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="contact"
      className="max-w-[1040px] m-auto md:pl-20 p-4 py-16"
    >
      {/* Title Animation */}
      <motion.h1
        className="py-4 text-4xl font-bold text-center text-[#001b5e]"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h1>

      {/* Intro Text Animation */}
      <form>
        <motion.p
        className="text-center text-gray-600 mb-8 max-w-[600px] mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Got an idea, project, or collaboration in mind? 📩  
        Let’s make it happen! Fill in your details and I’ll get back to you as soon as possible.
      </motion.p>

      {/* Form Animation */}
      <motion.form
        action="https://getform.io/f/lbkmvkjb"
        method="POST"
        encType="multipart/form-data"
        className="space-y-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-2 gap-4 w-full">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2 flex items-center gap-2">
              <FaUser /> Name
            </label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300 focus:border-[#001b5e] outline-none transition-all duration-200"
              type="text"
              name="name"
              placeholder="John Doe"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2 flex items-center gap-2">
              <FaPhoneAlt /> Phone
            </label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300 focus:border-[#001b5e] outline-none transition-all duration-200"
              type="text"
              name="phone"
              placeholder="+234 800 000 0000"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="uppercase text-sm py-2 flex items-center gap-2">
            <FaEnvelope /> Email
          </label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300 focus:border-[#001b5e] outline-none transition-all duration-200"
            type="email"
            name="email"
            placeholder="you@example.com"
          />
        </div>

        <div className="flex flex-col">
          <label className="uppercase text-sm py-2 flex items-center gap-2">
            <FaRegEdit /> Subject
          </label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300 focus:border-[#001b5e] outline-none transition-all duration-200"
            type="text"
            name="subject"
            placeholder="Project idea, collaboration, etc."
          />
        </div>

        <div className="flex flex-col">
          <label className="uppercase text-sm py-2 flex items-center gap-2">
            <FaRegEdit /> Message
          </label>
          <textarea
            className="border-2 rounded-lg p-3 border-gray-300 focus:border-[#001b5e] outline-none transition-all duration-200"
            name="message"
            rows="10"
            placeholder="Tell me more about your idea..."
          ></textarea>
        </div>

        <motion.button
          className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg font-semibold hover:bg-gradient-to-r from-[#001b5e] to-[#003f9e] hover:scale-[1.02] transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Send Message 🚀
        </motion.button>
      </motion.form>
      </form>
    </div>
  );
};

export default Contact;
