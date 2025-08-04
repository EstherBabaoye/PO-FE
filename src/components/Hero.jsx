import { Link } from "react-router-dom";
import hireMeBadge from "../assets/Hire-me-badge.png";
import profileImg from "../assets/profile.png";
import AnimatedButtons from "./AnimatedButtons";
import { motion } from "framer-motion";
import AnimatedTitle from "./AnimatedTitle";

export default function Hero() {
  return (
    <section className="relative mt-24 bg-white min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Floating "Hire Me" Badge Image */}
      <div className="absolute top-4 right-4 sm:top-8 sm:right-24 w-24 h-24 sm:w-40 sm:h-40">
        <img
          src={hireMeBadge}
          alt="Hire Me Badge"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Intro Text */}
      <p className="text-lg sm:text-xl font-medium mb-1 sm:mb-2">
        <span className="text-[#8172b9]">—</span> Hello
      </p>
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold text-gray-900 leading-tight text-center z-10">
        I'm{" "}
        <span className="text-[#5840ba] underline decoration-[#5840ba] decoration-[3px] underline-offset-4">
          Praise,
        </span>{" "}
        <br />
        <AnimatedTitle />
      </h1>

      {/* Main Profile + Double Trapezium Blob */}
      <div className="relative w-[240px] sm:w-[280px] md:w-[320px] h-[420px] sm:h-[460px] md:h-[500px] mx-auto z-10 -mt-12 sm:-mt-20">
        <svg
          className="absolute bottom-0 right-3/4 translate-x-[50%] w-[260px] sm:w-[300px] md:w-[360px] h-[280px] sm:h-[320px] md:h-[340px] z-0"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,10 Q0,0 10,0 H90 Q100,0 100,10 L75,100 H25 L0,10"
            fill="#5840ba"
          />
        </svg>

        <svg
          className="absolute bottom-0 left-3/4 -translate-x-[50%] w-[220px] sm:w-[250px] md:w-[280px] h-[200px] sm:h-[225px] md:h-[245px] z-0"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,10 Q0,0 10,0 H90 Q100,0 100,10 L85,100 H15 L0,10"
            fill="#F0F0F0"
          />
        </svg>

        <img
          src={profileImg}
          alt="Praise Profile"
          className="w-full h-full object-cover relative z-10 filter grayscale hover:grayscale-0 transition"
        />

        {/* Buttons */}
       

        {/* Animated Buttons */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
          <AnimatedButtons />
        </div>
      </div>

      {/* Client Avatars */}
      <div className="absolute bottom-28 sm:bottom-36 left-4 sm:left-28 flex flex-col items-start gap-2">
        <div>
          <p className="text-sm font-bold text-gray-900">450+</p>
          <p className="text-xs text-gray-500">Happy Clients</p>
        </div>
        <div className="flex items-center -space-x-3">
          <img
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
            src="https://randomuser.me/api/portraits/women/1.jpg"
            alt=""
          />
          <img
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
            src="https://randomuser.me/api/portraits/men/2.jpg"
            alt=""
          />
          <img
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
            src="https://randomuser.me/api/portraits/women/3.jpg"
            alt=""
          />
          <img
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
            src="https://randomuser.me/api/portraits/women/3.jpg"
            alt=""
          />
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-gray-200 text-xs text-gray-600 flex items-center justify-center font-bold">
            +
          </div>
        </div>
      </div>
    </section>
  );
}
