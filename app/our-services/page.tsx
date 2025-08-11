import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";
import { FaUserMd, FaHeartbeat, FaStethoscope, FaClinicMedical, FaLeaf, FaThermometerHalf } from "react-icons/fa";

export const metadata: Metadata = {
  title: `Our Services | ${siteConfig.appName}`,
  description: `Discover expert dermatology services at ${siteConfig.appName}, including personalized skin consultations, acne and scar treatments, anti-aging therapies, eczema management, and more. Your skin health is our priority.`,
  keywords: [
    "dermatology",
    "skin care",
    "dermatologist",
    "acne treatment",
    "scar removal",
    "anti-aging",
    "eczema care",
    "skin allergy testing",
    siteConfig.appName,
    "skin treatments",
    "personalized skincare",
    "laser therapy",
  ],
};

export default function OurServices() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-cyan-100 flex flex-col items-center px-6 sm:px-16 lg:px-32 py-20 pt-28">
      <div className="max-w-3xl text-center mb-14">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-cyan-900 mb-4">
          Our Services
        </h1>
        <p className="text-cyan-700 text-lg sm:text-xl max-w-xl mx-auto tracking-wide">
          At <span className="font-semibold">{siteConfig.appName}</span>, we offer comprehensive dermatology care designed to improve your skin’s health and appearance. Our expert treatments are tailored to your unique needs, using the latest technology and gentle care.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl w-full">
        {[
          {
            icon: <FaUserMd className="text-cyan-600 text-4xl mb-3" />,
            title: "Comprehensive Skin Consultations",
            description:
              "In-depth evaluations to diagnose and treat a wide range of skin conditions.",
          },
          {
            icon: <FaHeartbeat className="text-cyan-600 text-4xl mb-3" />,
            title: "Acne & Scar Treatments",
            description:
              "Effective therapies including laser treatments and chemical peels to restore clear, smooth skin.",
          },
          {
            icon: <FaStethoscope className="text-cyan-600 text-4xl mb-3" />,
            title: "Personalized Skincare Plans",
            description:
              "Custom treatment regimens including medical-grade products tailored to your skin type and concerns.",
          },
          {
            icon: <FaClinicMedical className="text-cyan-600 text-4xl mb-3" />,
            title: "Anti-Aging & Sun Protection",
            description:
              "Non-invasive treatments and guidance to reduce wrinkles and protect skin from sun damage.",
          },
          {
            icon: <FaLeaf className="text-cyan-600 text-4xl mb-3" />,
            title: "Eczema & Psoriasis Care",
            description:
              "Gentle and effective management of chronic skin conditions for lasting relief.",
          },
          {
            icon: <FaThermometerHalf className="text-cyan-600 text-4xl mb-3" />,
            title: "Skin Allergy Testing & Treatment",
            description:
              "Identify triggers and receive expert care for allergic reactions affecting your skin.",
          },
        ].map(({ icon, title, description }, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center cursor-default
                       hover:shadow-2xl transition-shadow duration-300 ease-in-out active:scale-[0.97]"
          >
            {icon}
            <h3 className="text-cyan-900 font-bold text-xl mb-2">{title}</h3>
            <p className="text-cyan-700 text-base max-w-md">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
