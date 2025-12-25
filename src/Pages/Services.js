import React from "react";
import { useNavigate } from "react-router-dom";
import Floor from "../assets/images/floor.jpg";
import Gail from "../assets/images/gail.jpg";
import Maild from "../assets/images/maild.jpg";
import Regul from "../assets/images/regul.jpg";
import Wall from "../assets/images/wall.jpg";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Regular Painting",
      description:
        "Paint applications for canvas, walls, or wood for visual appeal or protection.",
      image: Regul,
    },
    {
      title: "Wall Painting",
      description:
        "Creative and artistic painting directly on walls for decor and aesthetics.",
      image: Wall,
    },
    {
      title: "Floor Coating",
      description:
        "Durable surface protection for floors against wear and tear.",
      image: Floor,
    },
    {
      title: "Graffiti Removal",
      description:
        "Safe removal of unwanted graffiti from walls or surfaces.",
      image: Gail,
    },
    {
      title: "Mildew Removal",
      description:
        "Professional mildew removal services for a clean, healthy environment.",
      image: Maild,
    },
  ];

  const whyChooseUs = [
    { icon: "💻", title: "Customised Design" },
    { icon: "⏳", title: "On Time Completion" },
    { icon: "📑", title: "Project Management" },
    { icon: "💰", title: "Easy EMI Options" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div
        className="relative flex items-center justify-center w-full min-h-[40vh] text-white bg-center bg-cover"
        style={{ backgroundImage: "url('/images/home.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 p-6 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Our Premium Services
          </h1>
          <p className="mt-4 text-lg sm:text-xl">
            Trusted painting & coating solutions for your spaces.
          </p>
        </div>
      </div>

      {/* Services Menu Style Section */}
      <section className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-purple-600 sm:text-4xl">
          Explore Our Services
        </h2>
        <p className="mt-2 text-center text-gray-600">
          Select a service to know more about what we offer.
        </p>

        <div className="grid grid-cols-1 gap-10 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden transition bg-white shadow-lg rounded-xl hover:shadow-xl hover:scale-105"
            >
              <img
                src={service.image}
                alt={service.title}
                className="object-cover w-full h-48"
              />
              <div className="flex flex-col justify-between flex-1 p-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {service.description}
                  </p>
                </div>
                <button
                  onClick={() => navigate(`/services/${service.title}`)}
                  className="self-start mt-4 font-medium text-purple-600 transition hover:text-purple-800"
                >
                  Know More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-4 py-16 bg-white sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 sm:text-4xl">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 gap-10 mt-12 text-center md:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-4">
              <span className="text-5xl">{item.icon}</span>
              <h4 className="mt-4 text-xl font-semibold text-gray-800">{item.title}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
