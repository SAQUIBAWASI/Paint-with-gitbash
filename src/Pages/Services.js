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
        "Regular Painting refers to the process of applying paint to a surface such as canvas, walls, or wood to create visual art or protective coatings.",
      image: Regul,
    },
    {
      title: "Wall Painting",
      description:
        "Wall painting is a form of artistic expression where designs, patterns, or murals are created directly on walls.",
      image: Wall,
    },
    {
      title: "Floor Coating",
      description:
        "Floor coating is a protective layer applied to surfaces like concrete, wood, or tiles to enhance durability, aesthetics, and resistance to wear.",
      image: Floor,
    },
    {
      title: "Graffiti Removal",
      description:
        "Graffiti removal is the process of cleaning unwanted markings, drawings, or writings from surfaces using various techniques.",
      image: Gail,
    },
    {
      title: "Mildew Removal",
      description: "Safe and effective mildew removal services.",
      image: Maild,
    },
  ];

  // ✅ "Why Choose Us" Data
  const whyChooseUs = [
    { icon: "💻", title: "Customised Design" },
    { icon: "⏳", title: "On Time Completion" },
    { icon: "📑", title: "Project Management" },
    { icon: "💰", title: "Easy EMI Options" },
  ];

  return (
    <div className="min-h-screen p-10 bg-gray-50">
      {/* ✅ Services Section */}
      <h2 className="text-4xl font-bold text-center text-gray-800">
        Our Services
      </h2>
      <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="overflow-hidden transition-all duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl"
          >
            <img
              src={service.image}
              alt={service.title}
              className="object-cover w-full h-52"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-700">{service.description}</p>
              <button className="mt-4 text-purple-600 hover:underline"
               onClick={() => navigate(`/services/${service.title}`)}
               >
                Know more
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Why Choose Us Section */}
      <div className="mt-16 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Why Choose Us</h2>
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-3 lg:grid-cols-4">
          {whyChooseUs.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-5xl">{item.icon}</span>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
