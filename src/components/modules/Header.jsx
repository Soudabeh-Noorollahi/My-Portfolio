// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-screen border-b-2 xl:max-w-[1380px] border-b-neutral-100 mx-auto bg-white z-20">
      <div className="flex xl:px-20 px-5 xl:py-6 py-3 justify-between items-center">
        <span
          className="text-lg md:text-xl xl:text-2xl font-bold tracking-wide text-emerald-700"
          style={{ fontFamily: "Raleway, sans-serif" }}
        >
          SOUDABEH NOUROLLHAI
        </span>

        {/* Navigation menu (desktop only) */}
        <span className="hidden  md:block">
          <ul className="flex gap-8">
            <li className="text-lg font-bold hover:text-emerald-700">
              <a href="#home">Home</a>
            </li>
            <li className="text-lg font-bold hover:text-emerald-700">
              <a href="#about">About</a>
            </li>
            <li className="text-lg font-bold hover:text-emerald-700">
              <a href="#projects">Projects</a>
            </li>
            <li className="text-lg font-bold hover:text-emerald-700">
              <a href="#experience">Experience</a>
            </li>
            <li className="text-lg font-bold hover:text-emerald-700">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </span>

        {/* Mobile menu button */}
        <span className="block md:hidden">
          <button
            className="text-emerald-700 text-3xl font-bold"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </span>

        {/* Download CV button (always visible) */}
        <span>
          <Link to="/request-cv">
            <button className="bg-emerald-700  px-2 md:px-4 xl:px-6 py-1 md:py-2  text-sm xl:text-lg rounded text-white font-semibold hover:bg-white hover:border hover:border-emerald-600 hover:text-emerald-600 hover:font-bold transition-colors">
              Download CV
            </button>
          </Link>
        </span>
      </div>

      {isMobileMenuOpen && (
        <>
          {/* Background Blur Overlay */}
          <div
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-white/30 backdrop-blur-sm z-40 md:hidden"
          />

          {/* Mobile Dropdown Menu */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="fixed top-16 left-0 right-0 md:hidden px-5 pb-4 bg-white shadow-md z-50"
          >
            <ul className="flex flex-col gap-3">
              <li className="text-base hover:text-emerald-700">
                <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>
                  Home
                </a>
              </li>
              <li className="text-base hover:text-emerald-700">
                <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>
                  About
                </a>
              </li>
              <li className="text-base hover:text-emerald-700">
                <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>
                  Projects
                </a>
              </li>
              <li className="text-base hover:text-emerald-700">
                <a
                  href="#experience"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Experience
                </a>
              </li>
              <li className="text-base hover:text-emerald-700">
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
        </>
      )}
    </header>
  );
}

export default Header;
