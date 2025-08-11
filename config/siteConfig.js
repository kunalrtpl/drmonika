// config/siteConfig.js
export const siteConfig = {
  appName: process.env.NEXT_PUBLIC_APP_NAME,
  description: "",
  contactNumber: process.env.NEXT_PUBLIC_CONTACT_NUMBER,
  email: process.env.NEXT_PUBLIC_EMAIL,
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_LINK,
  // Add navLinks here for header & footer navigation
  navLinks: [
    { name: "Home", href: "/" },
    { name: "Our Services", href: "/our-services" },
    { name: "About Us", href: "/about" },
  ],
};
