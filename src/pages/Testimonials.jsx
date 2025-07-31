import { useEffect } from "react";
import { useState } from "react";
import myImg from "../assets/profile.jpg";

export const testimonials = [
  {
    image: myImg,
    name: "Bessie Cooper",
    role: "CEO, Software Company",
    rating: 4.8,
    review:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...",
  },
  {
    image: myImg,
    name: "John Doe",
    role: "Marketing Head",
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eaque laudantium...",
  },
  {
    image: myImg,
    name: "Jane Smith",
    role: "CTO, Fintech Startup",
    rating: 4.9,
    review:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam...",
  },
  {
    image: myImg,
    name: "Michael Scott",
    role: "Regional Manager",
    rating: 4.7,
    review:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit...",
  },
  {
    image: myImg,
    name: "Angela Yu",
    role: "Educator",
    rating: 2,
    review:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur...",
  },
];

export default function Testimonials() {
  useEffect(() => {
    document.title = "Testimonials | PO Portfolio";
  }, []);
  const [visibleCount, setVisibleCount] = useState(2);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 2);
  };

  return (
    <section className="bg-[#6b55d9] py-24 px-6 md:px-20">
      <div className="text-center mb-16">
        <p className="text-xl font-medium text-white">
          <span className="text-[#A3DB74]">—</span> Clients Testimonials
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Testimonials that
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-[#A3DB74] mt-2">
          Speaks to My Results
        </h3>
      </div>

      <div className="space-y-12">
        {testimonials.slice(0, visibleCount).map((item, i) => (
          <div
            key={i}
            className="bg-[#7b64dd] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg"
          >
            <div className="relative w-full md:w-1/2 flex justify-center">
              <div className="absolute top-10 pt-6 left-12 bg-[#A3DB74] w-16 h-16 rounded-full flex items-center justify-center text-black text-7xl font-bold shadow">
                “
              </div>
              <div className="bg-[#7b64dd] rounded-full overflow-hidden w-60 h-80 md:w-80 md:h-[24rem] flex items-center justify-center shadow-md">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="w-full md:w-2/3 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <div className="flex text-yellow-400 text-4xl">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>
                      {i < Math.round(item.rating) ? "★" : "☆"}
                    </span>
                  ))}
                </div>
                <span className="text-2xl font-medium text-white">
                  {item.rating}
                </span>
              </div>
              <p className="text-white text-2xl mb-6 leading-relaxed">
                {item.review}
              </p>
              <h4 className="text-2xl font-bold text-white">{item.name}</h4>
              <p className="text-lg font-semibold text-white">{item.role}</p>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < testimonials.length && (
        <div className="text-center mt-16">
          <button
            onClick={handleLoadMore}
            className="bg-[#a3db74] text-black font-semibold text-lg px-6 py-3 rounded-full hover:scale-105 transition"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}
