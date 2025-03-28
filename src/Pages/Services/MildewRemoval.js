import React, { useState } from "react";

const MildewRemoval = () => {
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
      className="relative flex flex-col items-center justify-center p-10 bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url('/images/maild.jpg')",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 p-10 bg-white rounded-lg shadow-2xl bg-opacity-95 md:w-3/5">
        <h1 className="text-5xl font-extrabold text-gray-900">
          🌱 Professional Mildew Removal
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-gray-800">
          Say goodbye to **mildew & mold** with our{" "}
          <span className="font-bold text-green-700">
            safe and eco-friendly cleaning solutions
          </span>
          . We ensure **deep cleaning & long-lasting protection** for your space.
        </p>

        {/* Key Features */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900">Why Choose Us?</h2>
          <ul className="mt-4 space-y-2 text-lg text-gray-700">
            <li>✅ Safe & non-toxic cleaning solutions</li>
            <li>✅ Prevents regrowth & enhances air quality</li>
            <li>✅ Fast & professional service</li>
            <li>✅ Ideal for homes, offices & industries</li>
          </ul>
        </div>

        {/* Services Section */}
        <h2 className="mt-8 text-3xl font-semibold text-gray-900">
          Our Mildew Removal Services:
        </h2>
        <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
          {[
            {
              title: "🛁 Bathroom & Kitchen Cleaning",
              desc: "Deep-clean mildew from tiles, sinks, and showers.",
            },
            {
              title: "🏠 Wall & Ceiling Treatment",
              desc: "Protect your home from mold and mildew growth.",
            },
            {
              title: "🌬 HVAC & Ventilation Cleaning",
              desc: "Ensure fresh, mold-free air circulation.",
            },
            {
              title: "💧 Moisture Control Solutions",
              desc: "Prevent mildew by addressing moisture issues.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="p-5 transition-transform transform bg-gray-100 rounded-lg shadow-lg hover:scale-105"
            >
              <h3 className="text-lg font-bold text-green-700">{service.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Get a Free Quote Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-3 text-lg font-bold text-white transition-transform transform rounded-lg shadow-lg bg-gradient-to-r from-green-500 to-green-700 hover:scale-110 hover:from-green-600 hover:to-green-800 hover:shadow-2xl"
          >
            🚀 Get a Free Quote
          </button>
        </div>

        {/* Modal - Request a Free Quote */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="relative w-full max-w-lg p-8 bg-white rounded-lg shadow-lg animate-fadeIn">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute text-2xl text-gray-700 top-2 right-3 hover:text-red-600"
              >
                ✖
              </button>

              <h2 className="mb-6 text-3xl font-bold text-center text-green-700">
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
                  className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-green-400"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-green-400"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-green-400"
                />

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-green-400"
                >
                  <option value="">Select a Service</option>
                  <option value="Bathroom & Kitchen Cleaning">
                    Bathroom & Kitchen Cleaning
                  </option>
                  <option value="Wall & Ceiling Treatment">
                    Wall & Ceiling Treatment
                  </option>
                  <option value="HVAC & Ventilation Cleaning">
                    HVAC & Ventilation Cleaning
                  </option>
                  <option value="Moisture Control Solutions">
                    Moisture Control Solutions
                  </option>
                </select>

                <textarea
                  name="message"
                  placeholder="Additional Details (Optional)"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-green-400"
                ></textarea>

                <button
                  type="submit"
                  className="w-full py-3 font-bold text-white transition-transform transform rounded-md bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 hover:shadow-lg hover:scale-105"
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

export default MildewRemoval;