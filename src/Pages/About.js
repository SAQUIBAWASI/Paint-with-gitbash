import React, { useState } from "react";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-10 bg-gray-100">
      {/* Decorative Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-100 opacity-30"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl text-center">
        <h2 className="text-5xl font-extrabold text-gray-800">About Us</h2>
        <p className="mt-4 text-lg text-gray-700">
          We are a team of highly skilled professionals specializing in painting and cleaning solutions, dedicated to transforming spaces with precision and excellence.
          We are a team of highly skilled professionals specializing in painting and cleaning solutions, dedicated to transforming spaces with precision and excellence. Our expertise ensures that every project is handled with the utmost care, bringing life and vibrancy to homes and businesses alike. With years of experience in the industry, we take pride in delivering high-quality results that not only enhance the aesthetics of your space but also provide long-lasting protection. Whether it’s a residential property needing a fresh coat of paint or a commercial space requiring deep cleaning, our commitment to quality and customer satisfaction remains our top priority. Our approach combines attention to detail, the use of premium materials, and modern techniques to achieve flawless finishes. We believe that every space has the potential to be beautiful, and with our expert services, we help turn your vision into reality. Let us bring color, care, and perfection to your surroundings, making them more inviting, elegant, and refreshing.
        </p>
      </div>

      {/* Info Cards */}
      <div className="grid max-w-6xl grid-cols-1 gap-8 mt-12 md:grid-cols-3">
        {[
          { 
            title: "🎯 Our Mission", 
            desc: "To enhance your spaces with expert painting and cleaning solutions that exceed expectations." 
          },
          { 
            title: "💡 Why Choose Us?", 
            desc: "Years of experience, top-notch craftsmanship, and customer satisfaction guarantee outstanding results." 
          },
          { 
            title: "🔨 Our Expertise", 
            desc: "From residential to commercial projects, we use high-quality materials and modern techniques for the best finish." 
          }
        ].map((item, index) => (
          <div 
            key={index} 
            className="p-6 transition-transform transform bg-white rounded-lg shadow-md hover:scale-105 hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-700">{item.title}</h3>
            <p className="mt-2 text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-10">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="relative z-50 px-8 py-3 text-lg font-semibold text-white transition duration-300 bg-gray-800 rounded-lg hover:bg-gray-900 hover:shadow-lg"
        >
          Learn More
        </button>
      </div>

      {/* MODAL - Learn More */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
          {/* Transparent Modal Box */}
          <div className="w-full max-w-lg p-6 border border-gray-300 rounded-lg shadow-lg bg-white/20 backdrop-blur-lg">
            <h2 className="text-2xl font-bold text-white">More About Us</h2>
            <p className="mt-4 text-white">
              With years of experience in the industry, we take pride in delivering high-quality results that not only enhance the aesthetics of your space but also provide long-lasting protection.
            </p>
            <p className="mt-2 text-white">
              Whether it’s a residential property needing a fresh coat of paint or a commercial space requiring deep cleaning, our commitment to quality and customer satisfaction remains our top priority.
            </p>

            {/* Close Button */}
            <div className="flex justify-end mt-6">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
