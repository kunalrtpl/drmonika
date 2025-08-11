
import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.appName}`,
  description: `Learn about ${siteConfig.appName} — our story, mission, and dedication to your skin health and beauty.`,
  keywords: ["dermatology", "skin care", "dermatologist", siteConfig.appName, "about us", "skin treatments"],
};

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-rose-50">
      {/* Hero Section */}
      {/* Hero Section */}
    <div className="bg-gradient-to-r from-teal-600 via-cyan-500 to-blue-600 py-20 pt-28">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
          About <span className="text-yellow-300">US</span>
        </h1>
        {/* ... */}
      </div>
    </div>


      {/* Content Section */}
      <div className="container mx-auto px-6 py-16 max-w-5xl">
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-16">
          <h2 className="text-3xl font-extrabold mb-8 text-teal-900 border-b-4 border-yellow-400 inline-block pb-2">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At <strong>{siteConfig.appName}</strong>, our mission is to provide holistic, evidence-based dermatological care tailored to your unique skin needs. We believe that healthy skin is a foundation of confidence, and we’re here to guide you through every step of your skin journey.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Combining cutting-edge technologies with compassionate care, we offer treatments ranging from acne management and scar reduction to anti-aging therapies and sun protection counseling — all designed to restore, protect, and rejuvenate your skin.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-teal-800">Why Choose Dr. Monika?</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-4 mb-8 text-lg sm:text-base">
            <li>🩺 Board-certified Dermatologist with years of clinical experience</li>
            <li>🌿 Personalized treatment plans based on thorough skin analysis</li>
            <li>💎 Use of advanced, minimally invasive skin care technologies</li>
            <li>🤝 Warm, patient-focused approach ensuring your comfort and trust</li>
            <li>🕒 Flexible appointment scheduling and attentive follow-ups</li>
          </ul>

          <p className="text-lg text-gray-700 leading-relaxed">
            Thank you for considering <strong>{siteConfig.appName}</strong> as your partner in skin health. We look forward to helping you achieve a radiant complexion and lasting confidence through expert care and innovative treatments.
          </p>
        </div>
      </div>
    </section>
  );
}
