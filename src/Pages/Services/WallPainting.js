import React, { useState } from "react";

const WallPainting = () => {
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
      className="relative flex flex-col items-center justify-center min-h-screen p-6 bg-center bg-no-repeat bg-cover sm:p-8 lg:p-10"
      style={{ backgroundImage: "url('/images/wall.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 p-6 bg-white rounded-lg shadow-2xl bg-opacity-95 sm:w-4/5 lg:w-3/5">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 sm:text-5xl">
          🎨 Premium Wall Painting Services
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-center text-gray-800 sm:text-xl">
          Transform your space with <strong>vibrant, long-lasting, and eco-friendly</strong> paints!  
          Whether it's for <strong>homes, offices, or commercial spaces</strong>, we deliver expert solutions tailored to your style.
        </p>

        {/* Why Choose Us */}
        <h2 className="mt-6 text-2xl font-semibold text-center text-gray-900 sm:text-left">
          Why Choose Us?
        </h2>
        <ul className="mt-4 space-y-2 text-base text-gray-700 sm:text-lg sm:pl-6">
          <li>✅ High-quality, long-lasting paints</li>
          <li>✅ Professional and experienced painters</li>
          <li>✅ Affordable pricing with top-notch service</li>
          <li>✅ Eco-friendly and safe materials</li>
        </ul>

        {/* Services Section */}
        <h2 className="mt-8 text-3xl font-semibold text-center text-gray-900 sm:text-left">
          Our Wall Painting Services:
        </h2>
        <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-2">
          {[
            {
              title: "🖌 Interior Painting",
              desc: "Give your walls a fresh, smooth, and vibrant look.",
            },
            {
              title: "🏠 Exterior Painting",
              desc: "Weather-resistant and long-lasting protection for your home.",
            },
            {
              title: "🎭 Texture Painting",
              desc: "Unique textured designs that add depth and beauty to your walls.",
            },
            {
              title: "🏢 Commercial Painting",
              desc: "Tailored solutions for offices, shops, and business spaces.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="p-5 transition-transform transform bg-gray-100 rounded-lg shadow-lg hover:scale-105"
            >
              <h3 className="text-lg font-bold text-purple-700">{service.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Get a Free Quote Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-3 text-lg font-bold text-white transition-transform transform rounded-lg shadow-lg bg-gradient-to-r from-purple-500 to-purple-700 hover:scale-110 hover:from-purple-600 hover:to-purple-800 hover:shadow-2xl"
          >
            🎨 Get a Free Quote
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

              <h2 className="mb-4 text-3xl font-bold text-center text-purple-700">
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
                  className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-purple-400"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-purple-400"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-purple-400"
                />

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-purple-400"
                >
                  <option value="">Select a Painting Service</option>
                  <option value="Interior Painting">Interior Painting</option>
                  <option value="Exterior Painting">Exterior Painting</option>
                  <option value="Texture Painting">Texture Painting</option>
                  <option value="Commercial Painting">Commercial Painting</option>
                </select>

                <textarea
                  name="message"
                  placeholder="Additional Details (Optional)"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-purple-400"
                ></textarea>

                <button
                  type="submit"
                  className="w-full py-3 font-bold text-white transition-transform transform rounded-md bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 hover:shadow-lg hover:scale-105"
                >
                  Submit Request 🎨
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WallPainting;
