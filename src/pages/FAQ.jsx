import { useEffect } from "react";
import FAQSection from "../components/FAQSection";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function FAQ() {
  useEffect(() => {
    document.title = "FAQ | PO Portfolio";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <FAQSection />

      {/* Contact CTA Section */}
      <section className="bg-[#5A3FD1] text-white text-center py-20 px-6">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8">
          Still have a question?
        </h2>

        <Link
          to="/contact"
          className="inline-flex items-center rounded-full overflow-hidden shadow-md transition-transform hover:scale-105"
        >
          {/* Left Circle */}
          <div className="bg-white w-14 h-14 flex items-center justify-center text-[#6b55d9]">
            <FaArrowRight className="text-xl" />
          </div>

          {/* Right Text */}
          <span className="bg-[#a3db74] text-black h-14 px-6 py-4 font-semibold">
            Contact Us
          </span>
        </Link>
      </section>
    </>
  );
}
