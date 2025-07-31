// src/pages/ServiceDetails.jsx
import { useParams } from "react-router-dom";
import LoopingTextBanner from "./LoopingTextBanner";

const serviceData = {
  "youtube-scriptwriting": {
    title: "YouTube Scriptwriting",
    description: "We write high-retention YouTube scripts...",
    includes: [
      "Engaging hooks and intros",
      "Viewer retention strategy",
      "Optimized for voiceover pacing",
      "SEO-friendly formatting",
    ],
    benefits: [
      "Save time while growing your channel",
      "Boost audience engagement",
      "Increase watch time and monetization",
    ],
    videoThumb: "/assets/video-thumb.png",
    extraImages: ["/assets/image1.png", "/assets/image2.png"],
  },
  "uiux-design": {
    title: "UI/UX Design",
    description: "Beautiful, functional user interfaces and experiences...",
    includes: [
      "Wireframes & mockups",
      "Responsive design",
      "Interactive prototypes",
    ],
    benefits: [
      "Faster product development",
      "Improved user satisfaction",
      "Better conversion rates",
    ],
    videoThumb: "/assets/uiux-video.png",
    extraImages: ["/assets/uiux-1.png", "/assets/uiux-2.png"],
  },
  // Add other services here...
};

const ServiceDetails = () => {
  const { slug } = useParams();
  const service = serviceData[slug];

  if (!service) return <div className="text-white p-20">Service not found</div>;

  return (
    <>
      <section className="bg-[#5840ba] text-white px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
        {/* Video/Thumb */}
        <div className="mb-10 flex justify-center">
          <img
            src={service.videoThumb}
            alt="Service preview"
            className="rounded-xl w-full max-w-4xl object-cover"
          />
        </div>

        {/* Main Description */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center sm:text-left">
            {service.title}
          </h2>
          <p className="text-base sm:text-lg mb-8 text-center sm:text-left">
            {service.description}
          </p>

          {/* Service Includes */}
          <h3 className="text-2xl font-semibold mb-4">Services Include:</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-disc pl-5 mb-10">
            {service.includes.map((item, idx) => (
              <li key={idx} className="text-green-300">{item}</li>
            ))}
          </ul>

          {/* Extra Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {service.extraImages.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt=""
                className="rounded-xl w-full object-cover"
              />
            ))}
          </div>

          {/* Benefits */}
          <h3 className="text-2xl font-semibold mb-4">Service Benefits:</h3>
          <ul className="space-y-4 list-disc pl-5">
            {service.benefits.map((benefit, idx) => (
              <li key={idx} className="text-green-300">{benefit}</li>
            ))}
          </ul>
        </div>
      </section>

      <LoopingTextBanner />
    </>
  );
};

export default ServiceDetails;
