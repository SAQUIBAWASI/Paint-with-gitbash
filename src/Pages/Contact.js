import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${form.name}! Your message has been sent.`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-10 bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/images/contact-bg.jpg')" }} // Change to your background image
    >
      <h2 className="text-4xl font-bold text-purple">Get in Touch</h2>
      <p className="mt-2 text-lg text-purple opacity-90">We’d love to hear from you!</p>

      <div className="grid w-full max-w-4xl grid-cols-1 gap-10 mt-8 md:grid-cols-2">
        {/* Contact Information Section with Map Background */}
        <div
          className="relative p-6 text-white rounded-lg shadow-lg bg-opacity-80 backdrop-blur-lg"
          style={{
            backgroundImage: "url('/images/h5.jpg')", // Add your map image
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black rounded-lg opacity-50"></div> {/* Overlay for readability */}
          <div className="relative z-10">
            <h3 className="mb-4 text-xl font-semibold text-purple-400">Contact Info</h3>

            <div className="flex items-center gap-3 mb-4">
              <FaMapMarkerAlt className="text-2xl text-purple-400" />
              <a
                href="https://maps.google.com/?q=Miyapur, Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all hover:text-purple-400"
              >
                Miyapur, Hyderabad
              </a>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <FaEnvelope className="text-2xl text-purple-400" />
              <a
                href="mailto:kalapaintworks@gmail.com"
                className="transition-all hover:text-purple-400"
              >
                kalapaintworks@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaPhone className="text-2xl text-purple-400" />
              <a
                href="tel:+918309071308"
                className="transition-all hover:text-purple-400"
              >
                +91 8309071308
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="mb-4 text-xl font-semibold text-gray-800">Send Us a Message</h3>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full p-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
