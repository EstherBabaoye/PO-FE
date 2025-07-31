import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Services", to: "/services" },
    { label: "Projects", to: "/projects" },
    { label: "Testimonials", to: "/testimonials" },
    { label: "FAQs", to: "/faqs" },
  ];

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="bg-white fixed top-0 w-full z-50 shadow-md">
      <div className="w-full px-6 py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[#6B55D9] rotate-45"></div>
          <div className="w-6 h-6 bg-[#A3DB74] rotate-45 -ml-3"></div>
          <span className="text-2xl font-bold">PO</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex text-[#605e69] flex-1 justify-center space-x-12 text-base font-semibold">
          {navLinks.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive
                  ? "text-[#5840ba] font-semibold"
                  : "hover:text-[#5840ba] hover:underline hover:[text-decoration-color:#5840ba] transition"
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Contact Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="border-[#c0b4de] bg-[#5840ba] rounded-full px-6 py-2 text-sm font-semibold text-[#f5f0fd] hover:text-[#8172b9] transition"
          >
            Contact me
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#5840ba] text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-6">
          <nav className="flex flex-col space-y-4 text-[#605e69] text-base font-medium">
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setIsMobileMenuOpen(false)} // close menu on nav
                className={({ isActive }) =>
                  isActive
                    ? "text-[#5840ba] font-semibold"
                    : "hover:text-[#5840ba] transition"
                }
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 w-full text-center bg-[#5840ba] text-white py-2 rounded-full font-semibold hover:bg-[#6b55d9] transition"
            >
              Contact me
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
