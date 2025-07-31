import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import axios from "axios";

const csrfToken = document.querySelector('meta[name="csrf-token"]')?.content;

export default function ContactSection() {
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
        setStatus({ type: "", message: "" });

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
                message: "Failed to send message. Try again.",
            });
            console.error("Contact error:", error);
        }

        setLoading(false);
    };

    return (
        <section className="bg-[#6b55d9] text-white py-20 px-6 sm:px-10 md:px-20">
            <div className="flex flex-col lg:flex-row justify-between gap-12">
                {/* Contact Info */}
                <div className="lg:w-1/2">
                    <p className="text-xl font-semibold mb-2">
                        <span className="text-[#a3db74]">—</span> Contact Us
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-semibold leading-tight mb-6">
                        Let’s <span className="text-[#a3db74]">Connect</span> &{" "}
                        <span className="text-[#a3db74]">Collaborate</span>
                    </h2>
                    <p className="text-lg sm:text-2xl mb-10 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <FaPhoneAlt className="text-2xl" />
                            <span>+234 123 456 7890</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaEnvelope className="text-2xl" />
                            <span>info@example.com</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaLinkedinIn className="text-2xl" />
                            <span>linkedin.com/company/example</span>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <form
                    onSubmit={handleSubmit}
                    className="lg:w-1/2 w-full space-y-4"
                >
                    {status.message && (
                        <div
                            className={`px-4 py-3 rounded-md text-sm font-medium border mb-2 ${
                                status.type === "success"
                                    ? "bg-green-100 text-green-800 border-green-300"
                                    : "bg-red-100 text-red-800 border-red-300"
                            }`}
                        >
                            {status.message}
                        </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            name="first_name"
                            type="text"
                            value={form.first_name}
                            onChange={handleChange}
                            placeholder="First Name *"
                            className="bg-[#7e66db] text-white placeholder-gray-300 w-full px-6 py-4 rounded-xl focus:ring-2 focus:ring-white text-base"
                        />
                        <input
                            name="last_name"
                            type="text"
                            value={form.last_name}
                            onChange={handleChange}
                            placeholder="Last Name *"
                            className="bg-[#7e66db] text-white placeholder-gray-300 w-full px-6 py-4 rounded-xl focus:ring-2 focus:ring-white text-base"
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Email *"
                            className="bg-[#7e66db] text-white placeholder-gray-300 w-full px-6 py-4 rounded-xl focus:ring-2 focus:ring-white text-base"
                        />
                        <input
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="Phone Number *"
                            className="bg-[#7e66db] text-white placeholder-gray-300 w-full px-6 py-4 rounded-xl focus:ring-2 focus:ring-white text-base"
                        />
                    </div>

                    <input
                        name="subject"
                        type="text"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Subject *"
                        className="bg-[#7e66db] text-white placeholder-gray-300 w-full px-6 py-4 rounded-xl focus:ring-2 focus:ring-white text-base"
                    />

                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Message *"
                        className="bg-[#7e66db] text-white placeholder-gray-300 w-full px-6 pt-4 h-48 sm:h-56 rounded-xl focus:ring-2 focus:ring-white text-base resize-none"
                    ></textarea>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`flex items-center mt-4 rounded-full ${
                            loading
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-[#a3db74]"
                        } text-black font-semibold shadow-md group w-fit focus:ring-2 focus:ring-white`}
                    >
                        <div className="w-10 h-10 bg-white text-black flex items-center justify-center ml-[-6px] z-10 border-4 border-white rounded-full">
                            →
                        </div>
                        <span className="px-5 py-2 text-base sm:text-lg">
                            {loading ? "Sending..." : "Send Message"}
                        </span>
                    </button>
                </form>
            </div>
        </section>
    );
}
