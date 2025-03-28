import React, { useState } from "react";

const WindowWashing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for requesting a quote! Our team will contact you soon.");
    setIsModalOpen(false);
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen p-10 bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/images/window1.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 p-10 bg-white rounded-lg shadow-2xl bg-opacity-95 md:w-3/5">
        <h1 className="text-5xl font-extrabold text-gray-900">
          ✨ Crystal Clear Windows, Every Time!
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-gray-800">
          Enjoy streak-free, spotless windows with **professional window washing services**.  
          We use **eco-friendly solutions** and **advanced cleaning techniques** to make your windows shine,  
          enhancing the appearance of your home or business.
        </p>

        {/* Why Choose Us Section */}
        <h2 className="mt-6 text-2xl font-semibold text-gray-900">Why Choose Us?</h2>
        <ul className="mt-4 space-y-2 text-lg text-gray-700">
          <li>✅ Streak-free, crystal-clear windows</li>
          <li>✅ Safe & eco-friendly cleaning solutions</li>
          <li>✅ Professional service for homes & businesses</li>
          <li>✅ Quick, efficient, and affordable</li>
        </ul>

        {/* Services Section */}
        <h2 className="mt-8 text-3xl font-semibold text-gray-900">
          Our Window Washing Services:
        </h2>
        <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
          {[
            { title: "🏠 Residential Window Cleaning", desc: "Sparkling clean windows for your home." },
            { title: "🏢 Commercial Glass Cleaning", desc: "Maintain a spotless professional appearance." },
            { title: "🛠 Hard Water Stain Removal", desc: "Remove stubborn stains & mineral deposits." },
            { title: "🌧 Weather-Proof Coatings", desc: "Protect your glass from water spots & dust." },
          ].map((service, index) => (
            <div
              key={index}
              className="p-5 transition-transform transform bg-gray-100 rounded-lg shadow-lg hover:scale-105"
            >
              <h3 className="text-lg font-bold text-blue-700">{service.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Get a Free Quote Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-3 text-lg font-bold text-white transition-transform transform rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-blue-700 hover:scale-110 hover:from-blue-600 hover:to-blue-800 hover:shadow-2xl"
          >
            🚀 Get a Free Quote
          </button>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-xl">
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute text-2xl text-gray-700 top-3 right-4 hover:text-red-600"
              >
                ✖
              </button>

              <h2 className="mb-4 text-3xl font-bold text-center text-blue-700">
                Request a Free Quote
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-400"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-400"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-400"
                />

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">Select a Service</option>
                  <option value="Residential Window Cleaning">Residential Window Cleaning</option>
                  <option value="Commercial Glass Cleaning">Commercial Glass Cleaning</option>
                  <option value="Hard Water Stain Removal">Hard Water Stain Removal</option>
                  <option value="Weather-Proof Coatings">Weather-Proof Coatings</option>
                </select>

                <textarea
                  name="message"
                  placeholder="Additional Details (Optional)"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-400"
                ></textarea>

                <button
                  type="submit"
                  className="w-full py-3 font-bold text-white transition-transform transform rounded-md bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 hover:shadow-lg hover:scale-105"
                >
                  Submit Request 🚀
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WindowWashing;
