import { Link } from "react-router-dom";
import hireMeBadge from "../assets/Hire-me-badge.png";
import profileImg from "../assets/profile.png";
import AnimatedButtons from "./AnimatedButtons";
import { motion } from "framer-motion";
import AnimatedTitle from "./AnimatedTitle";

export default function Hero() {
    return (
        <section className="relative mt-24 bg-white min-h-screen flex flex-col items-center justify-center px-6  overflow-hidden">
            {/* Floating "Hire Me" Badge Image */}
            <div className="absolute top-8 right-24 w-40 h-40">
                <img
                    src={hireMeBadge}
                    alt="Hire Me Badge"
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Intro Text */}
            <p className="text-xl  font-medium ">
                <span className="text-[#8172b9]">—</span> Hello
            </p>
            <h1 className="text-6xl sm:text-7xl font-semibold text-gray-900 leading-tight text-center z-10">
                I'm{" "}
                <span className="text-[#5840ba] underline decoration-[#5840ba] decoration-[3px] underline-offset-4">
                    Praise,
                </span>{" "}
                <br />
                <AnimatedTitle />
            </h1>

            {/* Main Profile + Double Trapezium Blob */}
            <div className="relative  w-[280px] sm:w-[320px] h-[500px] mx-auto z-10 -mt-20">
                <svg
                    className="absolute bottom-0 right-3/4 translate-x-[50%] w-[360px] h-[340px] z-0"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,10 Q0,0 10,0 H90 Q100,0 100,10 L75,100 H25 L0,10"
                        fill="#5840ba"
                    />
                </svg>

                {/* Right Half Blob with smooth rounded corners */}
                <svg
                    className="absolute bottom-0 left-3/4 -translate-x-[50%] w-[280px] h-[245px] z-0"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,10 Q0,0 10,0 H90 Q100,0 100,10 L85,100 H15 L0,10"
                        fill="#F0F0F0"
                    />
                </svg>

                {/* Profile Image */}
                <img
                    src={profileImg}
                    alt="Praise Profile"
                    className="w-full h-full object-cover relative z-10  filter grayscale hover:grayscale-0 transition"
                />

                {/* Buttons */}
                {/* <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20"> */}
                <div className="flex gap-2 items-center bg-white rounded-full px-1 py-1 shadow-md border border-gray-200">
                    {/* Portfolio Button */}
                    <a
                        href="#"
                        className="inline-flex items-center justify-center w-40 gap-2 rounded-full bg-[#5840ba] text-white px-3 py-2 text-lg font-semibold hover:bg-[#4835a0] transition"
                    >
                        Portfolio
                        <span className="text-lg bg-[#a3db74] text-black rounded-full font-bold w-6 h-6 flex items-center justify-center">
                            →
                        </span>
                    </a>

                    {/* Hire Me Button */}
                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center gap-8 rounded-full w-40 font-bold border-2 border-black text-black px-3 py-2 text-lg hover:bg-gray-100 transition bg-white"
                    >
                        Hire Me
                    </Link>
                </div>
                {/* </div> */}
                {/* Animated Buttons */}
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20">
                    <AnimatedButtons />
                </div>
            </div>

            {/* Client Avatars */}
            <div className="absolute bottom-36 left-28 flex flex-col items-start gap-2">
                {/* Text on top */}
                <div>
                    <p className="text-sm font-bold text-gray-900">450+</p>
                    <p className="text-xs text-gray-500">Happy Clients</p>
                </div>

                {/* Avatar Group */}
                <div className="flex items-center -space-x-3">
                    <img
                        className="w-10 h-10 rounded-full border-2 border-white"
                        src="https://randomuser.me/api/portraits/women/1.jpg"
                        alt=""
                    />
                    <img
                        className="w-10 h-10 rounded-full border-2 border-white"
                        src="https://randomuser.me/api/portraits/men/2.jpg"
                        alt=""
                    />
                    <img
                        className="w-10 h-10 rounded-full border-2 border-white"
                        src="https://randomuser.me/api/portraits/women/3.jpg"
                        alt=""
                    />
                    <img
                        className="w-10 h-10 rounded-full border-2 border-white"
                        src="https://randomuser.me/api/portraits/women/3.jpg"
                        alt=""
                    />
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 text-xs text-gray-600 flex items-center justify-center font-bold">
                        +
                    </div>
                </div>
            </div>
        </section>
    );
}
