import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export const metadata: Metadata = {
  title: `Book an Appointment | ${siteConfig.appName}`,
  description: `Schedule your consultation with ${siteConfig.appName} to receive expert dermatology care tailored to your skin health needs. Easy booking options and personalized service.`,
  keywords: [
    "book appointment",
    "dermatology appointment",
    "skin doctor booking",
    "schedule skin consultation",
    "dermatologist appointment",
    siteConfig.appName,
    "skin care appointment",
    "book consultation",
  ],
};

export default function BookAppointment() {
  return (
    <section
      className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-rose-50 flex flex-col items-center px-6 sm:px-16 lg:px-32 py-20 pt-28"
    >
      <div className="max-w-3xl text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-4">
          Book an Appointment
        </h1>
        <p className="text-blue-700 text-lg sm:text-xl">
          We’re here to help you achieve your best skin health. Please get in touch using any of the options below to schedule your consultation with <span className="font-semibold">{siteConfig.appName}</span>.
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-3xl space-y-10 text-blue-900">
        {/* Call to Book */}
        <div className="flex items-center space-x-6">
          <FaPhoneAlt className="text-sky-600 text-3xl" />
          <div>
            <h3 className="text-xl font-bold mb-1">Call to Book</h3>
            <a
              href={`tel:${siteConfig.contactNumber}`}
              className="text-sky-600 hover:underline text-lg"
            >
              {siteConfig.contactNumber}
            </a>
            <p className="text-sm text-gray-600 mt-1">Mon–Fri: 9:00 AM – 6:00 PM</p>
          </div>
        </div>

        {/* Email Us */}
        <div className="flex items-center space-x-6">
          <FaEnvelope className="text-sky-600 text-3xl" />
          <div>
            <h3 className="text-xl font-bold mb-1">Email Us</h3>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sky-600 hover:underline text-lg break-all"
            >
              {siteConfig.email}
            </a>
            <p className="text-sm text-gray-600 mt-1">We reply within 24 hours</p>
          </div>
        </div>

        {/* Clinic Address */}
        <div className="flex items-center space-x-6">
          <FaMapMarkerAlt className="text-sky-600 text-3xl" />
          <div>
            <h3 className="text-xl font-bold mb-1">Clinic Address</h3>
            <address className="not-italic text-lg text-gray-800">
              Upple Hospital, Rahon Rd, near Ramchand, Krishna Colony, <br />Jodhewal, Ludhiana, Punjab 141007
            </address>
          </div>
        </div>

        {/* Office Hours */}
        <div className="flex items-start space-x-6">
  <FaClock className="text-sky-600 text-3xl mt-1" />
  <div className="w-full max-w-sm">
    <h3 className="text-xl font-bold mb-4 text-gray-900">Office Hours</h3>
    <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
      {[
        { day: "Monday", time: "2 – 8pm" },
        { day: "Tuesday", time: "2 – 8pm" },
        { day: "Wednesday", time: "2 – 8pm" },
        { day: "Thursday", time: "2 – 8:30pm" },
        { day: "Friday", time: "2 – 8pm" },
        { day: "Saturday", time: "2 – 8pm" },
        { day: "Sunday", time: "11pm – 5am" },
      ].map(({ day, time }) => (
        <li
          key={day}
          className="flex flex-col sm:flex-row justify-between px-4 py-3 text-gray-700 font-medium"
        >
          <span>{day}</span>
          <span className="mt-1 sm:mt-0">{time}</span>
        </li>
      ))}
    </ul>
    <p className="mt-3 text-sm text-yellow-700 italic font-medium">
      Hours might differ on holidays or special occasions.
    </p>
  </div>
</div>

      </div>

      <p className="mt-14 max-w-2xl text-center text-blue-700 text-sm sm:text-base">
        For urgent skin concerns, please call us directly. We look forward to helping you on your skincare journey!
      </p>
    </section>
  );
}
