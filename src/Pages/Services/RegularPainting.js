import React, { useState } from "react";

const RegularPainting = () => {
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
      className="relative flex flex-col items-center justify-center px-4 py-10 bg-center bg-no-repeat bg-cover sm:px-6 md:px-10"
      style={{
        backgroundImage: "url('/images/regular-painting.jpg')",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-4xl p-6 bg-white rounded-lg shadow-2xl bg-opacity-95 sm:p-10">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
          🎨 Regular Painting Services
        </h1>
        <p className="mt-4 text-base leading-relaxed text-gray-800 sm:text-lg">
          Give your home or office a{" "}
          <span className="font-bold text-blue-400">stunning makeover</span> with our{" "}
          <strong>high-quality painting solutions</strong>. We use{" "}
          <strong>eco-friendly, durable paints</strong> to protect and beautify your space.
        </p>

        {/* Why Choose Us */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">Why Choose Us?</h2>
          <ul className="mt-4 space-y-2 text-base text-gray-700 sm:text-lg">
            <li>✅ Long-lasting & premium paint finishes</li>
            <li>✅ Professional & skilled painters</li>
            <li>✅ Affordable pricing without compromising quality</li>
            <li>✅ Eco-friendly & safe materials</li>
          </ul>
        </div>

        {/* Our Services */}
        <h2 className="mt-8 text-2xl font-semibold text-gray-900 sm:text-3xl">
          Our Painting Services:
        </h2>
        <div className="grid gap-6 mt-6 sm:grid-cols-2">
          {[
            {
              title: "🎨 Interior Painting",
              desc: "Give your walls a fresh and elegant look.",
            },
            {
              title: "🏠 Exterior Painting",
              desc: "Durable & weather-resistant protection.",
            },
            {
              title: "🖌️ Decorative Finishes",
              desc: "Custom textures and unique designs.",
            },
            {
              title: "🛠 Waterproof Coating",
              desc: "Prevents moisture damage for long-term protection.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="p-4 transition-transform transform bg-gray-100 rounded-lg shadow hover:scale-105"
            >
              <h3 className="text-base font-bold text-blue-600 sm:text-lg">{service.title}</h3>
              <p className="mt-2 text-sm text-gray-600 sm:text-base">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 text-base font-bold text-white transition-transform transform rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-blue-700 hover:scale-110 hover:from-blue-600 hover:to-blue-800"
          >
            🚀 Get a Free Quote
          </button>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="relative w-full max-w-lg p-6 mx-auto bg-white border rounded-lg shadow-xl bg-opacity-30 backdrop-blur-md border-white/40 sm:p-8">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute text-xl text-gray-700 top-2 right-3 hover:text-red-600"
              >
                ✖
              </button>

              <h2 className="mb-6 text-2xl font-bold text-center text-blue-300 sm:text-3xl">
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
                  className="w-full px-4 py-3 text-white bg-gray-900 border rounded-md bg-opacity-30 focus:ring-2 focus:ring-blue-400"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-white bg-gray-900 border rounded-md bg-opacity-30 focus:ring-2 focus:ring-blue-400"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-white bg-gray-900 border rounded-md bg-opacity-30 focus:ring-2 focus:ring-blue-400"
                />

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-white bg-gray-900 border rounded-md bg-opacity-30 focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">Select a Service</option>
                  <option value="Regular Painting">Regular Painting</option>
                  <option value="Exterior Painting">Exterior Painting</option>
                  <option value="Waterproof Coating">Waterproof Coating</option>
                  <option value="Decorative Finishes">Decorative Finishes</option>
                </select>

                <textarea
                  name="message"
                  placeholder="Additional Details (Optional)"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-white bg-gray-900 border rounded-md bg-opacity-30 focus:ring-2 focus:ring-blue-400"
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

export default RegularPainting;
