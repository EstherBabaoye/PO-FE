import { useEffect, useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import LoopingTextBanner from "../components/LoopingTextBanner";
import hireMeBadge from "../assets/Hire-me-badge.png";
import axios from "axios";

const csrfToken = document.querySelector('meta[name="csrf-token"]')?.content;

export default function Contact() {
    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: "", message: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => setStatus({ type: "", message: "" }), 5000);

        try {
            axios.post(`${import.meta.env.VITE_API_BASE}/send-contact`, data);


            setStatus({
                type: "success",
                message: "Message sent successfully!",
            });

            setForm({
                first_name: "",
                last_name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            setStatus({
                type: "error",
                message: "Failed to send message. Please try again.",
            });
            console.error("Submission error:", error);
        }

        setLoading(false);
    };

    useEffect(() => {
        document.title = "Contact | PO Portfolio";
    }, []);

    return (
        <>
            <section className="bg-[#6b55d9] text-white py-24 px-6 md:px-20">
                <div className="flex flex-col items-center justify-center text-center mb-12">
                    <p className="text-xl font-semibold mb-2">
                        <span className="text-[#a3db74]">—</span> Contact Us
                    </p>
                    <h2 className="text-5xl font-semibold leading-tight">
                        Let’s <span className="text-[#a3db74]">Connect</span> &{" "}
                        <span className="text-[#a3db74]">Collaborate</span>
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-12">
                    {/* Left Contact Info */}
                    <div className="md:w-1/2">
                        <p className="text-2xl text-white mb-10 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor
                        </p>

                        <ul className="space-y-6 text-white text-xl">
                            <li className="flex items-center gap-4">
                                <a
                                    href="http://wa.me/2348151118860"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white text-[#6B55D9] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                                >
                                    <FaPhoneAlt className="w-5 h-5" />
                                </a>
                                <a
                                    href="http://wa.me/2348151118860"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:scale-110 transition-transform"
                                >
                                    +234 815 111 8860
                                </a>
                            </li>

                            <li className="flex items-center gap-4">
                                <a
                                    href="mailto:stephenpraise4u@gmail.com"
                                    className="w-10 h-10 bg-white text-[#6B55D9] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                                >
                                    <FaEnvelope className="w-5 h-5" />
                                </a>
                                <a
                                    href="mailto:stephenpraise4u@gmail.com"
                                    className="hover:scale-110 transition-transform"
                                >
                                    stephenpraise4u@gmail.com
                                </a>
                            </li>

                            <li className="flex items-center gap-4">
                                <a
                                    href="https://www.upwork.com/freelancers/~011ee4ee90eb20a406"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white text-[#6B55D9] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
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
                                    className="hover:scale-110 transition-transform"
                                >
                                    Upwork Profile
                                </a>
                            </li>

                            <li className="flex items-center gap-4">
                                <a
                                    href="https://www.linkedin.com/in/praise-olaseni-80417a18b"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white text-[#6B55D9] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                                >
                                    <FaLinkedinIn className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/praise-olaseni-80417a18b"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:scale-110 transition-transform"
                                >
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Right Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="md:w-1/2 space-y-4"
                    >
                        {status.message && (
                            <div
                                className={`${
                                    status.type === "success"
                                        ? "bg-green-100 text-green-800"
                                        : "bg-red-100 text-red-800"
                                } px-4 py-3 rounded-md mb-6 text-sm font-medium border ${
                                    status.type === "success"
                                        ? "border-green-300"
                                        : "border-red-300"
                                }`}
                            >
                                {status.message}
                            </div>
                        )}
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                name="first_name"
                                type="text"
                                value={form.first_name}
                                onChange={handleChange}
                                placeholder="First Name *"
                                className="bg-[#7e66db] text-white placeholder-gray-300 w-full px-6 py-6 rounded-xl focus:outline-none focus:ring-2 focus:ring-white text-lg"
                            />
                            <input
                                name="last_name"
                                type="text"
                                value={form.last_name}
                                onChange={handleChange}
                                placeholder="Last Name *"
                                className="bg-[#7e66db] text-white placeholder-gray-300 w-full px-6 py-6 rounded-xl focus:outline-none focus:ring-2 focus:ring-white text-lg"
                            />
                        </div>

                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Email *"
                                className="bg-[#7e66db] text-white placeholder-gray-300 w-full px-6 py-6 rounded-xl focus:outline-none focus:ring-2 focus:ring-white text-lg"
                            />
                            <input
                                name="phone"
                                type="tel"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="Phone Number *"
                                className="bg-[#7e66db] text-white placeholder-gray-300 w-full px-6 py-6 rounded-xl focus:outline-none focus:ring-2 focus:ring-white text-lg"
                            />
                        </div>

                        <input
                            name="subject"
                            type="text"
                            value={form.subject}
                            onChange={handleChange}
                            placeholder="Subject *"
                            className="bg-[#7e66db] text-white placeholder-gray-300 w-full px-6 py-6 rounded-xl focus:outline-none focus:ring-2 focus:ring-white text-lg"
                        />

                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Message *"
                            className="bg-[#7e66db] text-white placeholder-gray-300 w-full px-6 pt-6 h-56 rounded-xl focus:outline-none focus:ring-2 focus:ring-white text-lg resize-none"
                        ></textarea>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`flex items-center mt-4 rounded-full ${
                                loading
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-[#a3db74]"
                            } text-black font-semibold shadow-md overflow-hidden group w-fit focus:outline-none focus:ring-2 focus:ring-white`}
                        >
                            <div className="w-10 h-10 bg-white text-black flex items-center justify-center ml-[-6px] z-10 border-4 border-white rounded-full">
                                →
                            </div>
                            <span className="px-5 py-2">
                                {loading ? "Sending..." : "Send Message"}
                            </span>
                        </button>
                    </form>
                </div>
            </section>

            <LoopingTextBanner />

            <section className="bg-white py-24 text-center px-6">
                <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-wide font-[acumin-pro] text-black">
                    Let’s Create an <br />
                    <span className="text-[#6b55d9]">Amazing Project</span>{" "}
                    <br />
                    Together!
                </h2>

                <div className="mt-12 flex justify-center items-center gap-4">
                    <img
                        src={hireMeBadge}
                        alt="Hire Me Badge"
                        className="w-48 h-48 object-contain"
                    />
                </div>
            </section>
        </>
    );
}
