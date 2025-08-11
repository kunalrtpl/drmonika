"use client";

import Link from "next/link";
import { FC, useState, useEffect } from "react";
import { siteConfig } from "@/config/siteConfig";

const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-teal-300"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center py-4 px-6 md:px-12">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-extrabold text-teal-700 hover:text-teal-900 transition"
          aria-label="Homepage"
          tabIndex={0}
        >
          {siteConfig.appName}
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-12 text-gray-700 font-semibold">
          {siteConfig.navLinks.map(({ name, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="relative group px-2 py-1 hover:text-teal-700 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded"
              >
                {name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Call to Action */}
        <div className="hidden md:block">
          <Link
            href="/book-appointment"
            className="bg-teal-600 text-white font-semibold px-5 py-2 rounded-md shadow-md hover:bg-teal-700 transition focus:outline-none focus:ring-2 focus:ring-teal-400"
            aria-label="Contact Dr. Monika Mahajan"
          >
            Book Appointment
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="md:hidden p-3 rounded-md text-teal-700 hover:bg-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg border-t border-teal-200 overflow-hidden transition-max-height duration-300 ${
          menuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 p-6 font-medium text-gray-700">
          {siteConfig.navLinks.map(({ name, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="block py-3 px-4 rounded-lg hover:bg-teal-50 hover:text-teal-700 transition focus:outline-none focus:ring-2 focus:ring-teal-400"
                onClick={() => setMenuOpen(false)}
              >
                {name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/book-appointment"
              className="block text-center bg-teal-600 text-white font-semibold py-3 rounded-md shadow-md hover:bg-teal-700 transition"
              onClick={() => setMenuOpen(false)}
              aria-label="Book Appointment"
            >
              Book Appointment
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
