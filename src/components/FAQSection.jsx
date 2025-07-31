import { useState } from "react";

const faqs = [
  {
    question: "What industries have you worked in as a product designer?",
    answer: "I've worked in fintech, healthcare, and education—building user-first solutions for web and mobile platforms.",
  },
  {
    question: "Can I download your resume/CV for information?",
    answer:
      "Certainly! You can download my resume/CV directly from my website. It provides a comprehensive overview of my education, work experience, and design achievements.",
  },
  {
    question: "Are you available for freelance design work?",
    answer: "Yes, I'm open to freelance opportunities. Feel free to contact me with project details.",
  },
  {
    question: "What tools do you use for your design work?",
    answer: "My toolkit includes Figma, Adobe XD, Sketch, Illustrator, and Notion for project management.",
  },
  {
    question: "How do I navigate through your portfolio projects?",
    answer: "Simply head to the Projects section and click on any project card to view detailed case studies.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#5A3FD1] py-20 px-4 sm:px-6 md:px-12 lg:px-24 text-white font-sans">
      <div className="text-center mb-12">
        <p className="uppercase text-base sm:text-lg font-semibold tracking-widest">
          <span className="text-[#A3DB74]">—</span> FAQs
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
          Questions? <span className="text-[#A3DB74]">Look here.</span>
        </h2>
      </div>

      <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-2xl px-4 sm:px-6 py-5 sm:py-6 transition-all duration-300 ease-in-out ${
                isOpen ? "bg-[#A3DB74] text-black" : "bg-[#7A5DF3]"
              }`}
            >
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-base sm:text-lg md:text-xl font-semibold sm:font-bold">
                  {faq.question}
                </h3>
                <span className="text-xl sm:text-2xl font-bold">
                  {isOpen ? "−" : "+"}
                </span>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-96 mt-3" : "max-h-0"
                }`}
              >
                <p className={`text-sm sm:text-base leading-relaxed ${isOpen ? "text-gray-800" : "hidden"}`}>
                  {faq.answer || "Answer coming soon!"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
