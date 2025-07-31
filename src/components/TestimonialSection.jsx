import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { testimonials } from "../pages/Testimonials"; // Make sure the path is correct

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[index];

  return (
    <section className="bg-white py-24 px-6 md:px-20">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-xl font-medium">
          <span className="text-[#6B55D9]">—</span> Clients Testimonials
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Testimonials that
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-[#6B55D9] mt-2">
          Speaks to My Results
        </h3>
      </div>

      {/* Testimonial Card with Arrows */}
      <div className="relative">
        <div className="bg-[#f7f7f7] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg transition-all duration-300">
          {/* Left - Image with Quote */}
          <div className="relative w-full md:w-1/2 flex justify-center">
            <div className="absolute top-10 pt-6 left-12 bg-[#A3DB74] w-16 h-16 rounded-full flex items-center justify-center text-black text-7xl font-bold shadow">
              “
            </div>

            <div className="bg-white rounded-full overflow-hidden w-60 h-80 md:w-80 md:h-[24rem] flex items-center justify-center shadow-md">
              <img
                src={current.image}
                alt={current.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Text */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="flex text-yellow-400 text-4xl">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>
                    {i < Math.round(current.rating) ? "★" : "☆"}
                  </span>
                ))}
              </div>
              <span className="text-2xl font-medium text-gray-700">
                {current.rating}
              </span>
            </div>
            <p className="text-gray-700 text-2xl mb-6 leading-relaxed">
              {current.review}
            </p>
            <h4 className="text-2xl font-bold text-gray-900">{current.name}</h4>
            <p className="text-lg font-semibold text-gray-600">{current.role}</p>
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-black text-white p-6 rounded-full hover:bg-gray-800 z-10"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={next}
          className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-[#6B55D9] text-white p-6 rounded-full hover:bg-[#5a47b0] z-10"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}
