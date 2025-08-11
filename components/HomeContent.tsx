"use client";

import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { FaUserMd, FaHeartbeat, FaStethoscope, FaClinicMedical } from "react-icons/fa";

export default function HomeContent() {
  return (
    <section className="min-h-screen mt-20 bg-gradient-to-b from-white to-cyan-100 flex flex-col items-center px-6 sm:px-12 lg:px-24 py-16">
      {/* Heading */}
      <div className="max-w-3xl text-center mb-12 px-2">
        <h1 className="text-2xl sm:text-3xl font-semibold text-cyan-900 mb-2 leading-snug">
          Your Skin’s Best Friend
          <br />
          <span className="text-cyan-600 underline decoration-cyan-400 decoration-3">
            {siteConfig.appName}
          </span>
        </h1>
        <p className="text-cyan-700 text-xs sm:text-sm max-w-xl mx-auto tracking-wide">
          Dedicated to gentle, effective skincare treatments that bring out your natural glow.
        </p>
      </div>

      {/* Services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full">
        {[{
          icon: <FaUserMd className="text-cyan-600 text-3xl mb-2" />,
          title: "Consultations You Can Trust",
          description: "Expert advice with a personal touch.",
        }, {
          icon: <FaHeartbeat className="text-cyan-600 text-3xl mb-2" />,
          title: "Acne & Scar Care",
          description: "Gentle, modern treatments for clear skin.",
        }, {
          icon: <FaStethoscope className="text-cyan-600 text-3xl mb-2" />,
          title: "Tailored Skincare Plans",
          description: "Designed to fit your lifestyle and needs.",
        }, {
          icon: <FaClinicMedical className="text-cyan-600 text-3xl mb-2" />,
          title: "Sun Safety & Anti-Aging",
          description: "Protect your skin and keep it youthful.",
        }].map(({ icon, title, description }, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center text-center cursor-default
                       hover:shadow-lg transition-shadow duration-300 ease-in-out active:scale-[0.98]"
          >
            {icon}
            <h3 className="text-cyan-900 font-semibold text-base mb-1">{title}</h3>
            <p className="text-cyan-700 text-xs sm:text-sm max-w-xs">{description}</p>
          </div>
        ))}
      </div>

      {/* Call to Action Buttons */}
      <div className="mt-14 flex flex-col sm:flex-row gap-4">
        <Link
          href="/about"
          className="bg-cyan-600 text-white px-10 py-3 rounded-full font-semibold shadow-md
                     hover:bg-cyan-500 transition transform hover:scale-105 focus:outline-none focus:ring-3 focus:ring-cyan-400 text-center"
          aria-label="Learn More About Dr. Monika Mahajan"
        >
          👩‍⚕️ Meet Dr. Monika
        </Link>
        <Link
          href="/book-appointment"
          className="bg-yellow-500 text-cyan-900 px-10 py-3 rounded-full font-semibold shadow-md
                     hover:bg-yellow-400 transition transform hover:scale-105 focus:outline-none focus:ring-3 focus:ring-yellow-300 text-center"
          aria-label="Book an Appointment"
        >
          📅 Book Appointment
        </Link>
      </div>
    </section>
  );
}
