// eslint-disable-next-line no-unused-vars
import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2020,
    title: "Yearbook Project",
    details:
      "A digital yearbook platform designed to allow students to create, save, and revisit their yearbook entries. Features authentication, user profiles, and a clean, accessible interface for a personalized experience.",
  },
  {
    year: 2021,
    title: "Flutter Fitness Gym App",
    details:
      "A mobile fitness application built with Flutter, providing workout plans, progress tracking, and a user-friendly interface for both beginners and advanced users. Focused on cross-platform compatibility and smooth navigation.",
  },
  {
    year: 2022,
    title: "OANLs Truck Listing Platform",
    details:
      "A web application for uploading and managing truck listings, with functionality to add and delete sold trucks. Designed for a client, ensuring a smooth and intuitive interface for their business operations.",
  },
  {
    year: 2023,
    title: "Online Dry Cleaning Service",
    details:
      "A complete service platform allowing customers to schedule pickups, check prices, and receive email confirmations. Implemented with a focus on accessibility, user-friendly design, and smooth booking flow.",
  },
  {
    year: 2024,
    title: "School Gadget Registration App",
    details:
      "A device registration system with Firebase backend for cross-device data access, image uploads, and semester-based filtering. Designed with React Router and integrated CRUD functionalities.",
  },
  {
    year: 2025,
    title: "Keyaura",
    details:
      "An advanced web platform aimed at delivering seamless digital experiences through AI-powered features, real-time data integration, and a highly interactive user interface.",
  }
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
