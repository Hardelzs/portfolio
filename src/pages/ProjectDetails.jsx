// ProjectDetails.jsx
import { Link } from "react-router-dom";
import Footer from "../components/Footer"; // assuming Footer is in components folder

const projects = [
  {
    title: "Matching App (Yearbook Nation)",
    description:
      "A matching platform designed for schools and events to connect people with similar interests. Built with React and Tailwind CSS.",
    github: "",
    live: "",
  },
  {
    title: "News App (Siralos)",
    description:
      "A responsive news application fetching live articles and categorizing them for easy reading.",
    github: "",
    live: "",
  },
  {
    title: "Hair Salon App (HDR Salon)",
    description:
      "A booking and service showcase platform for salons, featuring responsive UI and integrated contact forms.",
    github: "",
    live: "",
  },
  {
    title: "Laundry App (Keyaura)",
    description:
      "A Flutter mobile app for on-demand laundry services with order tracking and Firebase backend.",
    github: "",
    live: "#", // replace with actual link
  },
  {
    title: "Laundry App (Keyrush)",
    description:
      "A variation of the Keyaura laundry concept with enhanced UI and scheduling features.",
    github: "",
    live: "#", // replace with actual link
  },
];

const ProjectDetails = () => {
  return (
    <>
      <div className="max-w-6xl h-screen mx-auto p-6 mt-10 bg-white rounded-xl shadow-lg">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-block px-4 py-2 bg-[#001b5e] text-white rounded-lg font-semibold hover:bg-[#003f9e] transition-all"
          >
            ← Back to Projects
          </Link>
        </div>

        {/* Page Title */}
        <h1 className="text-3xl font-bold text-[#001b5e] mb-8 text-center">
          Project Details
        </h1>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-[#001b5e] mb-2">
                {project.title}
              </h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-gray-800 text-white rounded hover:bg-black transition-colors"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-800 transition-colors"
                >
                  Live Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default ProjectDetails;
