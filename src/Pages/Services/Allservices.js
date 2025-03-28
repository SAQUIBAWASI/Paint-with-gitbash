import React from "react";
import { Link } from "react-router-dom";

const AllServices = () => {
  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <h1 className="text-5xl font-extrabold text-center text-gray-800">Our Services</h1>
      <p className="mt-4 text-lg text-center text-gray-700">
        Discover our range of expert painting and cleaning solutions tailored to enhance your space.
      </p>

      {/* Services List */}
      <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto mt-12 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "🎨 Interior Painting",
            desc: "High-quality paints to refresh and beautify your indoor spaces."
          },
          {
            title: "🏠 Exterior Painting",
            desc: "Durable and weather-resistant paint solutions for your property."
          },
          {
            title: "🖌️ Decorative Finishes",
            desc: "Custom textures and premium decorative designs to enhance aesthetics."
          },
          {
            title: "🛠 Waterproof Coating",
            desc: "Protect your surfaces from moisture damage with expert waterproofing."
          },
          {
            title: "🧹 Deep Cleaning",
            desc: "Professional cleaning services to maintain a hygienic environment."
          },
          {
            title: "🔧 Surface Preparation",
            desc: "Ensuring a smooth and long-lasting finish with expert surface prep."
          }
        ].map((service, index) => (
          <div
            key={index}
            className="p-6 transition-transform transform bg-white rounded-lg shadow-md hover:scale-105 hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-700">{service.title}</h3>
            <p className="mt-2 text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* Back Button */}
      <div className="mt-10 text-center">
        <Link to="/">
          <button className="px-8 py-3 text-lg font-semibold text-white transition duration-300 bg-gray-800 rounded-lg hover:bg-gray-900 hover:shadow-lg">
            ⬅ Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AllServices;
