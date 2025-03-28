import { motion } from "framer-motion"; // For animations
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleBookNow = () => navigate("/services");
  const handleContactUs = () => navigate("/contact");

  const [isFormOpen, setIsFormOpen] = useState(false);
  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  const [visibleSections, setVisibleSections] = useState({
    welcome: false,
    whyChooseUs: false,
  });

  const welcomeImages = ["/images/w1.jpg", "/images/w3.jpg", "/images/w4.jpg", "/images/f4.jpg"];
  const whyChooseUsImages = ["/images/h3.jpg", "/images/b1.jpg", "/images/b2.jpg", "/images/f3.jpg"];

  const [currentWelcomeImage, setCurrentWelcomeImage] = useState(0);
  const [currentWhyChooseImage, setCurrentWhyChooseImage] = useState(0);

  // Auto-Slideshow for Welcome Section
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWelcomeImage((prev) => (prev + 1) % welcomeImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Auto-Slideshow for Why Choose Us Section
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWhyChooseImage((prev) => (prev + 1) % whyChooseUsImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const welcomeSection = document.getElementById("welcome");
      const whyChooseUsSection = document.getElementById("whyChooseUs");

      if (welcomeSection) {
        const rect = welcomeSection.getBoundingClientRect();
        setVisibleSections((prev) => ({
          ...prev,
          welcome: rect.top < window.innerHeight - 100,
        }));
      }

      if (whyChooseUsSection) {
        const rect = whyChooseUsSection.getBoundingClientRect();
        setVisibleSections((prev) => ({
          ...prev,
          whyChooseUs: rect.top < window.innerHeight - 100,
        }));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative flex items-center justify-center w-full min-h-[80vh] text-white bg-center bg-cover px-4 md:px-8"
        style={{ backgroundImage: "url('/images/home.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-3xl p-4 text-center md:p-8">
          <h1 className="text-3xl font-bold leading-tight md:text-5xl drop-shadow-lg">
            Expert painting with{" "}
            <span className="text-purple-400">on-time completion</span> guaranteed
          </h1>
          <p className="mt-4 text-lg md:text-xl drop-shadow-md">
            Transform your home with vibrant, welcoming colors.
          </p>
          <div className="mt-6">
            <button
              className="px-6 py-3 text-lg font-semibold text-white transition bg-purple-500 rounded-lg shadow-lg hover:bg-purple-600"
              onClick={handleBookNow}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Welcome Section with Slideshow */}
      <motion.div
        id="welcome"
        className="flex flex-col items-center justify-between p-16 bg-purple-200 md:flex-row"
        initial={{ opacity: 0, y: 50 }}
        animate={visibleSections.welcome ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="text-left md:w-1/2">
          <h2 className="text-5xl font-extrabold text-gray-900">Welcome</h2>
          <p className="mt-6 text-xl text-gray-800">
            We believe that every home and workspace deserves to shine with
            vibrant, lively colors. Our expert painting services are here to
            transform your vision into reality.
          </p>
          <div className="mt-8">
            <button
              onClick={handleContactUs}
              className="px-6 py-3 text-lg font-semibold text-white transition bg-purple-500 rounded-lg shadow-lg hover:bg-purple-600"
            >
              Contact Us
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-6 md:w-1/2 md:mt-0">
          <img
            src={welcomeImages[currentWelcomeImage]}
            alt="Painting Tools"
            className="w-full max-w-2xl transition-all duration-500 rounded-lg shadow-lg"
          />
        </div>
      </motion.div>

      {/* Why Choose Us Section with Slideshow */}
      <motion.div
        id="whyChooseUs"
        className="flex flex-col items-center justify-between p-16 bg-purple-300 md:flex-row-reverse"
        initial={{ opacity: 0, y: 50 }}
        animate={visibleSections.whyChooseUs ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="text-left md:w-1/2">
          <h2 className="text-5xl font-extrabold text-gray-900">
            Why Choose Us?
          </h2>
          <ul className="mt-6 space-y-3 text-xl text-gray-800">
            <li>✅ <strong>Expert Craftsmanship</strong> - Flawless finish.</li>
            <li>✅ <strong>Premium Quality Paints</strong> - Long-lasting.</li>
            <li>✅ <strong>Eco-Friendly Solutions</strong> - Non-toxic paints.</li>
            <li>✅ <strong>On-time & Hassle-Free Service</strong></li>
          </ul>
          <div className="mt-8">
            <button
              onClick={openForm}
              className="px-6 py-3 text-lg font-semibold text-white transition bg-purple-500 rounded-lg shadow-lg hover:bg-purple-600"
            >
              Get A Quote
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-6 md:w-1/2 md:mt-0">
          <img
            src={whyChooseUsImages[currentWhyChooseImage]}
            alt="Why Choose Us"
            className="w-full max-w-2xl transition-all duration-500 rounded-lg shadow-lg"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
