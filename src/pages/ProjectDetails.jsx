// ProjectDetails.jsx
import { Link } from "react-router-dom";
import Footer from "../components/Footer"; // assuming Footer is in components folder

const projects = [
  {
    title: "Yearbook",
    description:
      "A projecs that allow you to store your daily life in a row, amazings things or sad things . Just like a diary but helps you store it with emoji.",
    github: "https://github.com/Hardelzs/year-book",
    live: "https://year-book.vercel.app/",
  },
  {
    title: "Siralos",
    description:
      "A responsive website for laudry services that allow customer to book their laundry online and get it delivered to their doorstep.",
    github: "https://github.com/Hardelzs/Siralos",
    live: "https://siralos.netlify.app/",
  },
  {
    title: "Hair Salon App (HDR)",
    description:
      "A booking and service showcase platform for salons, featuring responsive UI and integrated contact forms.",
    github: "",
    live: "https://hdrsalon.netlify.app/",
  },
  {
    title: "Piano App (Keyaura)",
    description:
      "This is a piano app that allows users to play piano online with a beautiful UI and sound effects. And some shortcuts for easy navigation",
    github: "https://github.com/Hardelzs/virtualKey",
    live: "https://keyaura.vercel.app/", 
  },
  {
    title: "Typing Test(Keyrush)",
    description:
      "This is a typing test app that allows users to test their typing speed and accuracy with various difficulty levels and themes.",
    github: "https://github.com/Hardelzs/type0",
    live: "https://keyrush-kappa.vercel.app/", 
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
