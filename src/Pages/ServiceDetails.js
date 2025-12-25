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

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % service.images.length
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [service.images.length]);

  if (!service) {
    return (
      <h2 className="mt-10 text-xl text-center text-red-500">Service Not Found</h2>
    );
  }

  return (
    <div className="min-h-screen px-4 pt-4 pb-10 bg-gray-100 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div
        className="relative flex items-center justify-center text-white rounded-xl overflow-hidden h-60 sm:h-72 md:h-[28rem] lg:h-[32rem] mb-10"
        style={{
          backgroundImage: `url(${service.images[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <h1 className="relative z-10 px-4 text-3xl font-bold text-center sm:text-4xl md:text-5xl">
          {title}
        </h1>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl p-6 mx-auto bg-white shadow-md sm:p-8 md:p-10 rounded-xl">
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 sm:text-3xl">
          {title}
        </h2>
        <p className="mb-6 text-base text-gray-700 sm:text-lg">
          {service.description}
        </p>

        {/* Auto-Sliding Image Carousel */}
        <div className="relative w-full h-56 mb-8 overflow-hidden rounded-lg sm:h-72 md:h-96">
          {service.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${title} ${index}`}
              className={`absolute inset-0 w-full h-full object-cover rounded-lg transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Back Button */}
        <div className="flex justify-center">
          <button
            onClick={() => navigate("/services")}
            className="px-6 py-2 text-base text-white transition bg-purple-600 rounded-lg hover:bg-purple-700 sm:text-lg"
          >
            Back to Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default KnowMore;
