import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AnimatedButtons() {
  const jelly = {
    whileHover: {
      scale: [1, 1.1, 0.9, 1.05, 0.97, 1],
      rotate: [0, 2, -2, 1, -1, 0],
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 items-center bg-white rounded-full px-2 py-2 sm:px-1 sm:py-1 shadow-md border border-gray-200 w-full sm:w-fit">
      {/* Portfolio Button */}
      <motion.div variants={jelly} whileHover="whileHover" className="w-full sm:w-40">
        <a
          href="#"
          className="inline-flex items-center justify-center gap-2 w-full rounded-full bg-[#5840ba] text-white px-4 py-3 text-base sm:text-lg font-semibold hover:bg-[#4835a0] transition"
        >
          Portfolio
          <span className="text-base sm:text-lg bg-[#a3db74] text-black rounded-full font-bold w-6 h-6 flex items-center justify-center">
            →
          </span>
        </a>
      </motion.div>

      {/* Hire Me Button */}
      <motion.div variants={jelly} whileHover="whileHover" className="w-full sm:w-40">
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-4 w-full rounded-full font-bold border-2 border-black text-black px-4 py-3 text-base sm:text-lg hover:bg-gray-100 transition bg-white"
        >
          Hire Me
        </Link>
      </motion.div>
    </div>
  );
}
