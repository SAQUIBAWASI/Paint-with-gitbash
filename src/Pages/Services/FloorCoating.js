import React, { useState } from "react";

const FloorCoating = () => {
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
    <div>
      {/* Hero Section */}
      <div
        className="relative flex flex-col items-center justify-center min-h-screen px-4 py-10 bg-center bg-no-repeat bg-cover sm:px-6 lg:px-8"
        style={{ backgroundImage: "url('/images/floor.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 w-full max-w-5xl p-6 bg-white rounded-lg shadow-2xl bg-opacity-95 sm:p-10">
          <h1 className="text-3xl font-extrabold text-center text-gray-900 sm:text-5xl">
            🏡 Premium Floor Coating Services
          </h1>
          <p className="mt-4 text-base leading-relaxed text-center text-gray-800 sm:text-lg">
            Protect and enhance your floors with our{" "}
            <span className="font-bold text-purple-700">
              durable, stylish, and long-lasting coatings.
            </span>{" "}
            Whether it's <strong>residential, commercial, or industrial</strong>, we have the right solution for you.
          </p>

          {/* Why Choose Us */}
          <h2 className="mt-6 text-2xl font-semibold text-center text-gray-900 sm:text-left">
            Why Choose Us?
          </h2>
          <ul className="mt-4 space-y-2 text-base text-gray-700 sm:text-lg sm:pl-5">
            <li>✅ Scratch-resistant & long-lasting protection</li>
            <li>✅ Eco-friendly, safe & low-VOC coatings</li>
            <li>✅ Customizable designs with stylish finishes</li>
            <li>✅ Affordable solutions without quality compromise</li>
          </ul>

          {/* Services Section */}
          <h2 className="mt-8 text-3xl font-semibold text-center text-gray-900 sm:text-left">
            Our Floor Coating Services:
          </h2>
          <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-2">
            {[
              {
                title: "✨ Epoxy Coating",
                desc: "Perfect for industrial, commercial & garage floors.",
              },
              {
                title: "🔥 Polyurethane Coating",
                desc: "Flexible, scratch-resistant & UV protected.",
              },
              {
                title: "🛠 Concrete Sealing",
                desc: "Prevents moisture damage & extends floor life.",
              },
              {
                title: "🎨 Decorative Finishes",
                desc: "Stylish, slip-resistant & customized designs.",
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
              className="px-8 py-3 text-base font-bold text-white transition-transform transform rounded-lg shadow-lg sm:text-lg bg-gradient-to-r from-purple-500 to-purple-700 hover:scale-110 hover:from-purple-600 hover:to-purple-800 hover:shadow-2xl"
            >
              🚀 Get a Free Quote
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials Section - Added Above Footer */}
      <div className="p-8 bg-purple-200 sm:p-16">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">
          💬 What Our Clients Say
        </h2>
        <p className="mt-4 text-lg text-center text-gray-800 sm:text-xl">
          Real feedback from our happy customers!
        </p>

        <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Testimonial 1 */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <p className="text-lg text-gray-800">
              "Absolutely fantastic service! My garage floor looks brand new
              with the epoxy coating."
            </p>
            <h4 className="mt-4 font-semibold text-gray-900">- James Carter</h4>
          </div>

          {/* Testimonial 2 */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <p className="text-lg text-gray-800">
              "Professional and timely. My commercial floor is now durable and
              stylish!"
            </p>
            <h4 className="mt-4 font-semibold text-gray-900">- Olivia Brown</h4>
          </div>

          {/* Testimonial 3 */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <p className="text-lg text-gray-800">
              "Superb quality! The polyurethane coating has kept my floors
              looking fresh and scratch-free."
            </p>
            <h4 className="mt-4 font-semibold text-gray-900">- Liam Smith</h4>
          </div>
        </div>
      </div>

      {/* Quote Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute text-2xl text-gray-700 top-3 right-4 hover:text-red-600"
            >
              ✖
            </button>

            <h2 className="mb-4 text-2xl font-bold text-center text-purple-700 sm:text-3xl">
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

              <button
                type="submit"
                className="w-full py-3 font-bold text-white transition-transform transform rounded-md bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 hover:shadow-lg hover:scale-105"
              >
                Submit Request 🚀
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloorCoating;
