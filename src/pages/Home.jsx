import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import LoopingTextBanner from "../components/LoopingTextBanner";
import TestimonialSection from "../components/TestimonialSection";
import FAQSection from "../components/FAQSection";
import { Link } from "react-router-dom";
import ContactSection from "../components/ContactSection";
import ProjectSection from "../components/ProjectSection";
import { services } from "./Services";

const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "");

export default function Home() {
  useEffect(() => {
    document.title = "Home | PO Portfolio";
  }, []);

  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div>
      <Hero />
      <LoopingTextBanner />
      <section className="bg-[#5840ba] py-20 text-white relative">
        {/* Header */}
        <div className="left-28 mb-16 relative z-10">
          <p className="text-xl text-[#a3db74] font-medium">
            — <span className="text-white">Services</span>
          </p>
          <h2 className="text-5xl font-medium">
            My <span className="text-[#a3db74]">Services</span>
          </h2>
        </div>

        {/* View All Services Button */}
        <div className="absolute top-28 right-28 z-10">
          <Link to="/services">
            <button className="flex items-center gap-2 bg-[#a3db74] text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#a3db74] transition">
              <span className="inline-flex items-center justify-center w-5 h-5 bg-white rounded-full text-[#5840ba] font-bold">
                +
              </span>
              View All Services
            </button>
          </Link>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-16 z-10 relative flex-wrap">
          {services.slice(0, 3).map((service, index) => (
            <div
              key={index}
              className="bg-[#6b55d9] rounded-full w-72 h-96 flex flex-col items-center justify-center text-center p-6 shadow-md transition hover:scale-105 group hover:bg-[#f2f2fc] hover:text-black relative overflow-hidden"
            >
              <div className="bg-[#866ce6] rounded-full w-20 h-20 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-white transition group-hover:text-black">
                  {service.label}
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-black transition">
                {service.title}
              </h3>

              <p className="text-sm text-gray-200 group-hover:text-black mb-2 transition">
                {service.description}
              </p>

              <button
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                className="text-sm text-white group-hover:text-black font-semibold transition hover:underline focus:outline-none mb-2"
              >
                {expandedIndex === index ? "Show less ↑" : "Learn more →"}
              </button>

              {/* Expandable Reveal */}
              <div
                className={`absolute left-0 right-0 bottom-0 px-6 pb-6 text-sm transition-all duration-300 ease-in-out ${
                  expandedIndex === index ? "h-24 opacity-100" : "h-0 opacity-0"
                } overflow-hidden text-white group-hover:text-black`}
              >
                <ul className="space-y-1">
                  {service.more.map((point, i) => (
                    <li key={i} className="text-left">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-white pt-20 pb-16 text-black relative px-6 md:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Purple Box */}
          <div className="bg-[#6b55d9] left-16 text-white rounded-tr-[20px] rounded-bl-[20px] w-full md:w-[350px] h-[500px] flex flex-col items-center justify-center relative">
            {/* Large 6 */}
            <div className="absolute text-[500px] font-bold leading-none text-white top-48 left-36  -translate-y-1/2 z-0">
              6
            </div>

            {/* Vertical Name */}
            <div className="absolute -right-32 top-56 h-full flex items-center">
              <p className="text-white font-semibold text-6xl tracking-widest rotate-[-90deg] origin-left whitespace-nowrap">
                STORY TELLER
              </p>
            </div>

            {/* Subtitle */}
            <div className="absolute bottom-4 left-[80%] -translate-x-1/2 text-white font-semibold z-10 text-2xl text-center">
              Years of <br /> Experience
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-">
            <p className="text-xl text-[#6b55d9] font-semibold mb-2">
              — <span className="text-black">About Me</span>
            </p>
            <h2 className="text-5xl font-bold mb-4">
              Who is{" "}
              <span className=" text-[#6b55d9]">
                Praise <br /> Olaseni?
              </span>
            </h2>
            <p className="text-gray-600 text-md max-w-xl mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* Stats */}
            <div className="flex gap-48 mb-6">
              <div>
                <p className="text-2xl font-bold">600+</p>
                <p className="text-xl text-gray-600">Project Completed</p>
              </div>
              <div>
                <p className="text-2xl font-bold">50+</p>
                <p className="text-xl text-gray-600">Industry Covered</p>
              </div>
            </div>

            {/* Download Button + Signature */}
            <div className="flex items-center gap-32">
              <button className="flex items-center rounded-full bg-[#a3db74] shadow-md overflow-hidden group">
                {/* Black Left Circle */}
                <div className="w-16 h-12 bg-black px-2 flex items-center justify-center  ml-[-6px] z-10 border-4 border-black">
                  <div className="w-12 h-8 bg-white text-black flex items-center justify-center rounded-full text-lg font-bold">
                    →
                  </div>
                </div>

                {/* Text */}
                <span className="px-4 py-2 font-semibold rounded-full text-black">
                  Download CV
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <ProjectSection />
      <LoopingTextBanner />
      <ContactSection />
      <LoopingTextBanner />
      <TestimonialSection />
      <FAQSection />
      <LoopingTextBanner />
    </div>
  );
}
