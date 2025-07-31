// src/components/ProjectSection.jsx
import { Link } from "react-router-dom";
import { projects } from "../pages/Projects";

export default function ProjectSection() {
  const visibleProjects = projects.slice(0, 2);

  return (
    <section className="bg-[#6b55d9] text-white pt-20 pb-24 px-4 sm:px-6 md:px-16 lg:px-28 relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-14 gap-6">
        <div>
          <p className="text-white text-lg sm:text-xl font-medium mb-2">
            <span className="text-[#a3db74]">— </span>Projects
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
            My <span className="text-[#a3db74]">Latest Projects</span>
          </h2>
        </div>
        <Link to="/projects">
          <button className="flex items-center rounded-full bg-[#a3db74] text-black font-semibold shadow-md overflow-hidden group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white text-black flex items-center justify-center ml-[-6px] z-10 border-4 border-white rounded-full">
              →
            </div>
            <span className="px-3 py-2 sm:px-4">View All Projects</span>
          </button>
        </Link>
      </div>

      {/* Projects */}
      {visibleProjects.map((project, index) => (
        <div
          key={project.slug}
          className={`flex flex-col ${
            index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
          } bg-[#7b64dd] rounded-[30px] sm:rounded-[40px] overflow-hidden mb-10 md:mb-12 shadow-lg`}
        >
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center bg-[#7b64dd]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full max-h-80 sm:max-h-[400px] object-contain p-6 md:p-4 rounded-[30px] sm:rounded-[40px]"
            />
          </div>

          {/* Content */}
          <div className="p-6 sm:p-10 md:w-1/2 flex flex-col justify-center">
            <div className="flex gap-3 flex-wrap mb-3 sm:mb-4">
              {project.category && (
                <span className="bg-[#a3db74] text-black text-sm px-3 py-1 rounded-full">
                  {project.category}
                </span>
              )}
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {project.title}
            </h3>
            <Link to={`/projects/${project.slug}`}>
              <button className="flex items-center rounded-full bg-[#a3db74] text-black font-semibold shadow-md overflow-hidden group w-fit">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white text-black flex items-center justify-center ml-[-6px] z-10 border-4 border-white rounded-full">
                  →
                </div>
                <span className="px-3 py-2 sm:px-4">View Details</span>
              </button>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
