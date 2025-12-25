import { useState } from "react";
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
      className="min-h-screen px-4 py-8 bg-center bg-no-repeat bg-cover sm:px-6 lg:px-8 md:py-16"
      style={{ backgroundImage: "url('/images/contact-bg.jpg')" }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-400 sm:text-4xl md:text-5xl">Get in Touch</h2>
        <p className="mt-2 text-lg text-purple-300 sm:text-xl opacity-90">
          We’d love to hear from you!
        </p>
      </div>

      <div className="grid max-w-6xl grid-cols-1 gap-10 mx-auto mt-12 md:grid-cols-2">
        {/* Contact Info */}
        <div className="relative overflow-hidden shadow-xl rounded-xl">
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: "url('/images/h5.jpg')" }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-60" />
          <div className="relative z-10 p-8 text-white">
            <h3 className="mb-6 text-2xl font-semibold text-purple-400">Contact Info</h3>

            <div className="space-y-5 text-base">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-xl text-purple-400" />
                <a
                  href="https://maps.google.com/?q=Miyapur, Hyderabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-purple-300"
                >
                  Miyapur, Hyderabad
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-xl text-purple-400" />
                <a
                  href="mailto:kalapaintworks@gmail.com"
                  className="transition hover:text-purple-300"
                >
                  kalapaintworks@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaPhone className="text-xl text-purple-400" />
                <a
                  href="tel:+918309071308"
                  className="transition hover:text-purple-300"
                >
                  +91 83090 71308
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="p-8 bg-white shadow-xl rounded-xl"
        >
          <h3 className="mb-6 text-2xl font-semibold text-gray-800">Send Us a Message</h3>

          <div className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="w-full py-3 font-medium text-white transition bg-purple-500 rounded-lg hover:bg-purple-600"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
