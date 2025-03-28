import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import f2 from "../assets/images/f2.jpg";
import f3 from "../assets/images/f3.jpg";
import f4 from "../assets/images/f4.jpg";
import Floor from "../assets/images/floor.jpg";
import Gail from "../assets/images/gail.jpg";
import M1 from "../assets/images/M1.jpg";
import M2 from "../assets/images/M2.jpg";
import M3 from "../assets/images/M3.jpg";
import Maild from "../assets/images/maild.jpg";
import R1 from "../assets/images/R1.jpg";
import Regul from "../assets/images/regul.jpg";
import w1 from "../assets/images/w1.jpg";
import w2 from "../assets/images/w2.jpg";
import w3 from "../assets/images/w3.jpg";
import Wall from "../assets/images/wall.jpg";
const serviceData = {
  "Regular Painting": {
    images: [Regul, R1, w2, Floor],
    description:
      "Regular Painting refers to the process of applying paint to surfaces like canvas, walls, or wood for visual art or protection.",
  },
  "Wall Painting": {
    images: [Wall, w1, w2, w3],
    description:
      "Wall painting is an artistic expression where designs, patterns, or murals are created directly on walls.",
  },
  "Floor Coating": {
    images: [Floor, f2, f3, f4],
    description:
      "Floor coating is a protective layer applied to surfaces like concrete, wood, or tiles to enhance durability and aesthetics.",
  },
  "Graffiti Removal": {
    images: [Gail, Wall, Regul, Maild],
    description:
      "Graffiti removal is the process of cleaning unwanted markings, drawings, or writings from surfaces using various techniques.",
  },
  "Mildew Removal": {
    images: [Maild, M1, M2, M3],
    description: "Safe and effective mildew removal services.",
  },
};

const KnowMore = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const service = serviceData[title];

  // Image Slider State
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % service.images.length);
    }, 3000); // Image changes every 3 seconds

    return () => clearInterval(interval);
  }, [service.images.length]);

  if (!service) {
    return <h2 className="text-center text-red-500">Service Not Found</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative flex items-center justify-center w-full text-white h-80"
        style={{
          backgroundImage: `url(${service.images[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-4xl font-bold">{title}</h1>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl p-6 mx-auto mt-10 bg-white shadow-lg rounded-xl">
        <h2 className="text-3xl font-semibold text-gray-900">{title}</h2>
        <p className="mt-4 text-gray-700">{service.description}</p>

        {/* Auto-Sliding Image */}
        <div className="relative w-full mt-6 h-60">
          {service.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${title} ${index}`}
              className={`absolute inset-0 object-cover w-full h-full rounded-lg transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate("/services")}
          className="px-6 py-2 mt-6 text-white bg-purple-500 rounded-lg hover:bg-purple-600"
        >
          Back to Services
        </button>
      </div>
    </div>
  );
};

export default KnowMore;
