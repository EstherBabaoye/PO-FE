import { useParams } from "react-router-dom";
import jobImg from "../assets/job.png";
import profileImg from "../assets/profile.png";
import { testimonials } from "../pages/Testimonials";
import SingleTestimonial from "../components/SingleTestimonial";
import LoopingTextBanner from "./LoopingTextBanner";

const allProjects = [
    {
        slug: "podcast-mobile-app-solution",
        title: "Podcast Mobile App Solution",
        image: jobImg,
        category: "App Design",
        client: "Bessie Cooper",
        duration: "5 Months",
        country: "United States",
        challenge:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae libero viverra, posuere eros in, tempus nulla. Cras eu velit nec lorem facilisis sollicitudin.",
        solution: [
            "Lorem ipsum dolor",
            "Sed ut perspiciatis",
            "Vitae dicta sunt explicabo",
            "Veritatis et quasi architecto",
        ],
        impact: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim eros id velit dapibus, a volutpat leo pharetra.",
    },
    {
        slug: "podcast-landing-page-1",
        title: "Podcast - Podcast Mobile Application Landing Page",
        image: jobImg,
        category: "Web Design",
        client: "Bessie Cooper",
        duration: "5 Months",
        country: "United States",
        challenge:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae libero viverra, posuere eros in, tempus nulla. Cras eu velit nec lorem facilisis sollicitudin.",
        solution: [
            "Lorem ipsum dolor",
            "Sed ut perspiciatis",
            "Vitae dicta sunt explicabo",
            "Veritatis et quasi architecto",
        ],
        impact: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim eros id velit dapibus, a volutpat leo pharetra.",
    },
    {
        slug: "fitness-app",
        title: "Fitness App - Fitness and Workout App Solution",
        image: "/images/fitness-app.png",
        category: "App Design",
        client: "Bessie Cooper",
        duration: "5 Months",
        country: "United States",
        challenge:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae libero viverra, posuere eros in, tempus nulla. Cras eu velit nec lorem facilisis sollicitudin.",
        solution: [
            "Lorem ipsum dolor",
            "Sed ut perspiciatis",
            "Vitae dicta sunt explicabo",
            "Veritatis et quasi architecto",
        ],
        impact: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim eros id velit dapibus, a volutpat leo pharetra.",
    },
    {
        slug: "car-parking-app",
        title: "Car Parking App: Car Parking App Solution",
        image: "/images/car-parking-app.png",
        category: "App Design",
        client: "Bessie Cooper",
        duration: "5 Months",
        country: "United States",
        challenge:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae libero viverra, posuere eros in, tempus nulla. Cras eu velit nec lorem facilisis sollicitudin.",
        solution: [
            "Lorem ipsum dolor",
            "Sed ut perspiciatis",
            "Vitae dicta sunt explicabo",
            "Veritatis et quasi architecto",
        ],
        impact: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim eros id velit dapibus, a volutpat leo pharetra.",
    },
    // Add more projects here as needed
];

export default function ProjectDetails() {
    const { slug } = useParams();

    const project = allProjects.find((p) => p.slug === slug);
    const testimonial = testimonials.find((t) => t.name === project?.client);

    if (!project)
        return <div className="text-white p-10">Project not found</div>;

    return (
        <>
            <section className="bg-[#6b55d9] text-white px-4 py-16 sm:px-6 md:px-20 lg:px-28">
                {/* Project Summary Section */}
                <div className="flex flex-col md:flex-row bg-[#7b64dd] rounded-[30px] overflow-hidden shadow-lg mb-12">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full md:w-1/2 h-64 md:h-auto object-contain p-6"
                    />
                    <div className="p-6 md:w-1/2 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            {project.title}
                        </h2>
                        <p className="text-base md:text-lg leading-relaxed">
                            {project.challenge}
                        </p>
                        <div className="bg-[#a3db74] text-black p-4 rounded-xl space-y-2 w-full sm:w-fit">
                            <p>
                                <strong>Project Category:</strong>{" "}
                                {project.category}
                            </p>
                            <p>
                                <strong>Client:</strong> {project.client}
                            </p>
                            <p>
                                <strong>Duration:</strong> {project.duration}
                            </p>
                            <p>
                                <strong>Country:</strong> {project.country}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Solution Section */}
                <div className="mb-12">
                    <h3 className="text-xl md:text-2xl font-semibold mb-4">
                        The Solution
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 list-disc pl-5 text-base leading-relaxed">
                        {project.solution.map((point, i) => (
                            <li key={i}>{point}</li>
                        ))}
                    </ul>
                </div>

                {/* Impact Section */}
                <div className="mb-12">
                    <h3 className="text-xl md:text-2xl font-semibold mb-4">
                        The Impact
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed">
                        {project.impact}
                    </p>
                </div>

                {/* Testimonial Section */}
                {testimonial && <SingleTestimonial testimonial={testimonial} />}
            </section>

            <LoopingTextBanner />

            <section className="bg-[#7b64dd] pt-24 pb-16 relative overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 md:px-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
                    {/* Left - Profile & Blobs */}
                    <div className="relative w-[220px] sm:w-[280px] md:w-[320px] h-[420px] sm:h-[500px] mx-auto md:mx-0 z-10 -mt-6">
                        {/* Left Blob */}
                        <svg
                            className="absolute bottom-0 right-3/4 translate-x-[50%] w-[300px] sm:w-[360px] h-[280px] sm:h-[340px] z-0"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M0,10 Q0,0 10,0 H90 Q100,0 100,10 L75,100 H25 L0,10"
                                fill="#a3db74"
                            />
                        </svg>

                        {/* Right Blob */}
                        <svg
                            className="absolute bottom-0 left-3/4 -translate-x-[50%] w-[240px] sm:w-[280px] h-[200px] sm:h-[245px] z-0"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M0,10 Q0,0 10,0 H90 Q100,0 100,10 L85,100 H15 L0,10"
                                fill="#5840ba"
                            />
                        </svg>

                        {/* Profile Image */}
                        <img
                            src={profileImg}
                            alt="Praise Profile"
                            className="w-full h-full object-cover relative z-10 rounded-md filter grayscale hover:grayscale-0 transition duration-300"
                        />
                    </div>

                    {/* Right - Text */}
                    <div className="text-center md:text-left max-w-xl">
                        <p className="text-sm text-white mb-2 font-medium">
                            – Available For Projects
                        </p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            Have a{" "}
                            <span className="text-[#a3db74]">Project</span>{" "}
                            <span className="text-[#a3db74]">Idea</span> in
                            Mind?
                        </h2>
                        <p className="text-white mb-6 text-base sm:text-lg leading-relaxed">
                            Let’s bring your ideas to life. Whether it’s a
                            personal website, startup, or anything in between —
                            I’m ready to help you build something impactful.
                        </p>

                        <button className="bg-[#a3db74] text-black px-5 py-3 sm:px-6 font-semibold text-sm rounded-full flex items-center justify-center gap-2 hover:scale-105 transition">
                            <span className="bg-white w-6 h-6 rounded-full flex items-center justify-center text-[#7b64dd] font-bold text-lg">
                                →
                            </span>
                            Hire Me Now
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
