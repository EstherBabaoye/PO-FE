// src/components/SingleTestimonial.jsx
export default function SingleTestimonial({ testimonial }) {
  return (
    <section className="mt-20">
      <div className="text-center mb-12">
        <p className="text-xl font-medium text-white">
          <span className="text-[#a3db74]">—</span> Client Testimonial
        </p>
        <h2 className="text-4xl font-bold text-white">
          Words from <span className="text-[#a3db74]">My Client</span>
        </h2>
      </div>

      <div className="bg-[#7b64dd] rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-md transition-all duration-300">
        {/* Left - Image with Quote */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          {/* Quote mark */}
          <div className="absolute top-4 left-16 bg-[#A3DB74] w-16 h-16 rounded-full flex items-center justify-center text-black text-6xl font-bold shadow">
            “
          </div>

          {/* Profile Image */}
          <div className="bg-white rounded-full overflow-hidden w-48 h-64 md:w-60 md:h-80 flex items-center justify-center shadow-md">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right - Text Content */}
        <div className="w-full md:w-2/3 text-center md:text-left text-white">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
            <div className="text-yellow-400 text-3xl">★★★★★</div>
            <span className="text-xl font-medium text-white">
              {testimonial.rating.toFixed(1)}
            </span>
          </div>
          <p className="text-lg md:text-xl italic mb-6 leading-relaxed">
            "{testimonial.review}"
          </p>
          <h4 className="text-2xl font-bold">{testimonial.name}</h4>
          <p className="text-base font-medium text-gray-200">{testimonial.role}</p>
        </div>
      </div>
    </section>
  );
}
