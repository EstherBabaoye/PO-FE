import {
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 px-4 sm:px-10 md:px-20 pt-20 pb-10 border-t">
      {/* Top Section - Heading, Logo, About */}
      <div className="flex flex-col items-center text-center mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold border-b border-gray-200 pb-6 mb-8">
          Let’s <span className="text-[#6B55D9]">MAKE MAGIC</span> together
        </h2>

        {/* Logo */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 bg-[#6B55D9] rotate-45"></div>
          <div className="w-6 h-6 bg-[#A3DB74] rotate-45 -ml-3"></div>
          <span className="text-2xl font-bold">PO</span>
        </div>

        {/* About */}
        <p className="text-sm leading-relaxed max-w-md text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 mt-6 text-white">
          {/* Email */}
          <a
            href="mailto:stephenpraise4u@gmail.com"
            className="bg-[#6B55D9] p-3 rounded-full hover:opacity-90"
          >
            <FaEnvelope />
          </a>

          {/* WhatsApp */}
          <a
            href="http://wa.me/2348151118860"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#6B55D9] p-3 rounded-full hover:opacity-90"
          >
            <FaWhatsapp />
          </a>

          {/* Upwork */}
          <a
            href="https://www.upwork.com/freelancers/~011ee4ee90eb20a406"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#6B55D9] p-3 rounded-full hover:opacity-90"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-5 h-5"
            >
              <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
            </svg>
          </a>

          {/* Twitter */}
          <a
            href="https://x.com/i_am_polaris_?s=21"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#6B55D9] p-3 rounded-full hover:opacity-90"
          >
            <FaTwitter />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/praise-olaseni-80417a18b"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#6B55D9] p-3 rounded-full hover:opacity-90"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-200 pt-6 text-sm text-center">
        <p>
          © 2025{" "}
          <span className="text-[#6B55D9] font-medium">Praise Olaseni</span>. All
          Rights Reserved.
        </p>
      </div>

      {/* Signature */}
      <div className="text-center text-xs text-gray-400 mt-4">
        Website crafted by{" "}
        <a
          href="https://github.com/EstherBabaoye"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#6B55D9] hover:underline font-medium"
        >
          Labims
        </a>
      </div>
    </footer>
  );
};

export default Footer;
