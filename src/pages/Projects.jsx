import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import jobImg from "../assets/job.png";
import profileImg from "../assets/profile.png";
import LoopingTextBanner from "../components/LoopingTextBanner";

export const projects = [
  {
    slug: "podcast-mobile-app-solution",
    title: "Podcast Mobile App Solution",
    image: jobImg,
    category: "App Design",
    description:
      "An all-in-one mobile solution for podcast streaming, favorites, and user profiles.",
    tags: ["App Design", "UI/UX", "React Native"],
    reverse: false,
  },
  {
    slug: "podcast-landing-page-1",
    title: "Podcast - Podcast Mobile Application Landing Page",
    image: jobImg,
    category: "Web Design",
    description:
      "Landing page for a podcast application, optimized for conversions and mobile responsiveness.",
    tags: ["Landing Page", "Figma", "Tailwind CSS"],
    reverse: true,
  },
  {
    slug: "fitness-app",
    title: "Fitness App - Fitness and Workout App Solution",
    image: "/images/fitness-app.png",
    category: "App Design",
  },
  {
    slug: "car-parking-app",
    title: "Car Parking App: Car Parking App Solution",
    image: "/images/car-parking-app.png",
    category: "App Design",
  },
  // Add more if needed...
];

export default function Projects() {
  useEffect(() => {
    document.title = "Projects| PO Portfolio";
  }, []);
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <>
      <section className="px-6 pt-24 pb-8 md:px-28 bg-white text-center">
        {/* Heading */}
        <div className="mb-12">
          <p className="text-[#6b55d9] text-base font-medium mb-1">
            — My Projects
          </p>
          <h2 className="text-4xl font-bold text-black">
            All <span className="text-[#7b64dd]"> Projects</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, visibleCount).map((project) => (
            <Link
              to={`/projects/${project.slug}`}
              key={project.slug}
              className="group"
            >
              <div className="rounded-[32px] overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[260px] object-cover"
                />
              </div>
              <div className="mt-4 text-left px-2">
                <span className="bg-[#a3db74] text-black px-3 py-1 text-sm font-semibold rounded-full">
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold mt-3 text-black group-hover:text-[#7b64dd] transition">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < projects.length && (
          <div className="text-center mt-12">
            <button
              onClick={handleLoadMore}
              className="bg-[#a3db74] text-black font-semibold text-lg px-6 py-3 rounded-full hover:scale-105 transition"
            >
              Load More Projects
            </button>
          </div>
        )}
      </section>

      <LoopingTextBanner />

      {/* Hire Me Section */}
      <section className="bg-[#5840ba] pt-24 relative overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div className="relative w-[280px] sm:w-[320px] h-[500px] mx-auto z-10 -mt-6">
            <svg
              className="absolute bottom-0 right-3/4 translate-x-[50%] w-[360px] h-[340px] z-0"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M0,10 Q0,0 10,0 H90 Q100,0 100,10 L75,100 H25 L0,10"
                fill="#a3db74"
              />
            </svg>
            <svg
              className="absolute bottom-0 left-3/4 -translate-x-[50%] w-[280px] h-[245px] z-0"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M0,10 Q0,0 10,0 H90 Q100,0 100,10 L85,100 H15 L0,10"
                fill="#7b64dd"
              />
            </svg>
            <img
              src={profileImg}
              alt="Praise Profile"
              className="w-full h-full object-cover relative z-10 filter grayscale hover:grayscale-0 transition"
            />
          </div>

          <div className="text-center md:text-left max-w-xl">
            <p className="text-sm text-white mb-2 font-medium">
              – Available For Projects
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Have a <span className="text-[#a3db74]">Project</span>{" "}
              <span className="text-[#a3db74]">Idea</span> in Mind?
            </h2>
            <p className="text-white mb-6 text-base md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
            <Link to="/contact">
              <button className="bg-[#a3db74] text-black px-6 py-3 font-semibold text-sm rounded-full flex items-center justify-center gap-2 hover:scale-105 transition">
                <span className="bg-white w-6 h-6 rounded-full flex items-center justify-center text-[#7b64dd] font-bold text-lg">
                  →
                </span>
                Hire Me Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      <LoopingTextBanner />
    </>
  );
}
