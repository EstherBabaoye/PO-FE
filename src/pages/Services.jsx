import { useEffect } from "react";
import LoopingTextBanner from "../components/LoopingTextBanner";
import hireMeBadge from "../assets/Hire-me-badge.png";
import { FaLinkedinIn, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, "-");

const Services = () => {
  useEffect(() => {
    document.title = "Services | PO Portfolio";
    window.scrollTo(0, 0);
  }, []);

  const services = [
    { title: "YouTube Scriptwriting" },
    { title: "Ghost Writing" },
    { title: "Copy Writing" },
    { title: "UI/UX Design" },
    { title: "Design System" },
    { title: "Wireframing" },
  ];

  return (
    <>
      <section className="bg-[#5840ba] py-20 px-20 text-white relative">
        {/* Header */}
        <div className="text-center mb-20 z-10 relative">
          <p className="text-xl text-[#a3db74] font-medium">
            — <span className="text-white">Services</span>
          </p>
          <h2 className="text-5xl font-semibold">
            My <span className="text-[#a3db74]">Services</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 z-10 relative">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#6b55d9] rounded-full w-72 h-96 flex flex-col items-center justify-center text-center p-6 shadow-md transition hover:scale-105 group hover:bg-[#f2f2fc] hover:text-black"
            >
              <div className="bg-[#866ce6] rounded-full w-20 h-20 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-white transition group-hover:text-black">
                  UX
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-black transition">
                {service.title}
              </h3>
              <p className="text-sm text-gray-200 group-hover:text-black mb-4 transition">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <Link to={`/services/${slugify(service.title)}`}>
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <LoopingTextBanner />

      {/* Call To Action Section */}
      <section className="bg-white py-24 text-center px-6">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-wide font-[acumin-pro] text-black">
          Let’s Create an <br />
          <span className="text-[#6b55d9]">Amazing Project</span> <br />
          Together!
        </h2>

        <div className="mt-12 flex justify-center items-center gap-4">
          {/* Hire Me Badge */}
          <img
            src={hireMeBadge}
            alt="Hire Me Badge"
            className="w-48 h-48 object-contain"
          />
        </div>
      </section>

      <LoopingTextBanner />

      <section className="bg-[#6b55d9] text-white py-24 px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Left Contact Info */}
          <div className="md:w-1/2">
            <p className="text-xl font-semibold mb-2">
              <span className="text-[#a3db74]">—</span> Contact Us
            </p>
            <h2 className="text-5xl font-semibold leading-tight mb-6">
              Let’s <span className="text-[#a3db74]">Connect</span> &{" "}
              <span className="text-[#a3db74]">Collaborate</span>
            </h2>
            <p className="text-2xl text-white mb-10 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>

            <ul className="space-y-6 text-white text-xl">
              {/* Phone */}
              <li className="flex items-center gap-4">
                <a
                  href="http://wa.me/2348151118860"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white text-[#6B55D9] rounded-full flex items-center justify-center transition-transform duration-200 ease-in-out hover:scale-110"
                >
                  <FaPhoneAlt className="w-5 h-5" />
                </a>
                <a
                  href="http://wa.me/2348151118860"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-200 ease-in-out hover:scale-110"
                >
                  +234 815 111 8860
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-4">
                <a
                  href="mailto:stephenpraise4u@gmail.com"
                  className="w-10 h-10 bg-white text-[#6B55D9] rounded-full flex items-center justify-center transition-transform duration-200 ease-in-out hover:scale-110"
                >
                  <FaEnvelope className="w-5 h-5" />
                </a>
                <a
                  href="mailto:stephenpraise4u@gmail.com"
                  className="transition-transform duration-200 ease-in-out hover:scale-110"
                >
                  stephenpraise4u@gmail.com
                </a>
              </li>

              {/* Upwork */}
              <li className="flex items-center gap-4">
                <a
                  href="https://www.upwork.com/freelancers/~011ee4ee90eb20a406"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white text-[#6B55D9] rounded-full flex items-center justify-center transition-transform duration-200 ease-in-out hover:scale-110"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
                  </svg>
                </a>
                <a
                  href="https://www.upwork.com/freelancers/~011ee4ee90eb20a406"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-200 ease-in-out hover:scale-110"
                >
                  Upwork Profile
                </a>
              </li>

              {/* LinkedIn */}
              <li className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/praise-olaseni-80417a18b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white text-[#6B55D9] rounded-full flex items-center justify-center transition-transform duration-200 ease-in-out hover:scale-110"
                >
                  <FaLinkedinIn className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/praise-olaseni-80417a18b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-200 ease-in-out hover:scale-110"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Right Form */}
          <form className="md:w-1/2 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name *"
                className="bg-[#7e66db] text-white placeholder-gray-300 w-full px-6 py-6 rounded-xl focus:outline-none focus:ring-2 focus:ring-white text-lg"
              />
              <input
                type="text"
                placeholder="Last Name *"
                className="bg-[#7e66db] text-white placeholder-gray-300 w-full px-6 py-6 rounded-xl focus:outline-none focus:ring-2 focus:ring-white text-lg"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Email *"
                className="bg-[#7e66db] text-white placeholder-gray-300 w-full px-6 py-6 rounded-xl focus:outline-none focus:ring-2 focus:ring-white text-lg"
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                className="bg-[#7e66db] text-white placeholder-gray-300 w-full px-6 py-6 rounded-xl focus:outline-none focus:ring-2 focus:ring-white text-lg"
              />
            </div>

            <input
              type="text"
              placeholder="Subject *"
              className="bg-[#7e66db] text-white placeholder-gray-300 w-full px-6 py-6 rounded-xl focus:outline-none focus:ring-2 focus:ring-white text-lg"
            />

            <textarea
              placeholder="Message *"
              className="bg-[#7e66db] text-white placeholder-gray-300 w-full px-6 pt-6 h-56 rounded-xl focus:outline-none focus:ring-2 focus:ring-white text-lg resize-none"
            ></textarea>

            <button
              type="submit"
              className="flex items-center mt-4 rounded-full bg-[#a3db74] text-black font-semibold shadow-md overflow-hidden group w-fit focus:outline-none focus:ring-2 focus:ring-white"
            >
              <div className="w-10 h-10 bg-white text-black flex items-center justify-center ml-[-6px] z-10 border-4 border-white rounded-full">
                →
              </div>
              <span className="px-5 py-2">Send Message</span>
            </button>
          </form>
        </div>
      </section>

      <LoopingTextBanner />
    </>
  );
};

export default Services;
