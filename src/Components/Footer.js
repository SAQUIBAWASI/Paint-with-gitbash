import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full py-10 text-white bg-gray-900">
      {/* Testimonials Section - Responsive Full Width */}
      <div className="w-full py-12 bg-purple-200">
        <div className="max-w-6xl px-4 mx-auto text-center md:px-6">
          <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">💬 What Our Clients Say</h2>
          <p className="mt-4 text-base text-gray-700 md:text-lg">Real feedback from our happy customers!</p>

          {/* Testimonials Container */}
          <div className="grid gap-6 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="p-6 transition-transform transform bg-gray-700 rounded-lg shadow-lg hover:scale-105">
              <p className="text-gray-200">"Absolutely fantastic service! My garage floor looks brand new with the epoxy coating."</p>
              <h4 className="mt-4 font-semibold text-purple-400">- James Carter</h4>
            </div>

            {/* Testimonial 2 */}
            <div className="p-6 transition-transform transform bg-gray-700 rounded-lg shadow-lg hover:scale-105">
              <p className="text-gray-200">"Professional and timely. My commercial floor is now durable and stylish!"</p>
              <h4 className="mt-4 font-semibold text-purple-400">- Olivia Brown</h4>
            </div>

            {/* Testimonial 3 */}
            <div className="p-6 transition-transform transform bg-gray-700 rounded-lg shadow-lg hover:scale-105">
              <p className="text-gray-200">"Superb quality! The polyurethane coating has kept my floors looking fresh and scratch-free."</p>
              <h4 className="mt-4 font-semibold text-purple-400">- Liam Smith</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="grid grid-cols-1 gap-8 px-4 mx-auto max-w-7xl sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        
        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-bold text-purple-400">Get In Touch</h2>
          <p>📍 Miyapur, Hyderabad</p>
          <p>✉️ <a href="mailto:kalapaintworks@gmail.com" className="hover:text-purple-400">kalapaintworks@gmail.com</a></p>
          <p>📞 <a href="tel:+918309071308" className="hover:text-purple-400">+91 8309071308</a></p>
        </div>

        {/* Content */}
        <div>
          <h2 className="text-lg font-bold text-purple-400">Content</h2>
          <ul className="space-y-2">
            <li><Link to="/blogs" className="hover:text-purple-400">Blogs</Link></li>
            <li><Link to="/videos" className="hover:text-purple-400">Videos</Link></li>
            <li><Link to="/faqs" className="hover:text-purple-400">FAQs</Link></li>
            <li><Link to="/onlineshoppingfaqs" className="hover:text-purple-400">Online Shopping FAQs</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-bold text-purple-400">Our Services</h2>
          <ul className="space-y-2">
            <li><Link to="/regularpainting" className="hover:text-purple-400">Regular Painting</Link></li>
            <li><Link to="/wallpainting" className="hover:text-purple-400">Wall Painting</Link></li>
            <li><Link to="/floorcoating" className="hover:text-purple-400">Floor Coating</Link></li>
            <li><Link to="/graffitiremoval" className="hover:text-purple-400">Graffiti Removal</Link></li>
            <li><Link to="/mildewremoval" className="hover:text-purple-400">Mildew Removal</Link></li>
            <li><Link to="/windowwashing" className="hover:text-purple-400">Window Washing</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold text-purple-400">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-purple-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-purple-400">About Us</Link></li>
            <li><Link to="/services" className="hover:text-purple-400">Our Services</Link></li>
            <li><Link to="/team" className="hover:text-purple-400">Meet The Team</Link></li>
            <li><Link to="/blog" className="hover:text-purple-400">Latest Blog</Link></li>
            <li><Link to="/contact" className="hover:text-purple-400">Contact Us</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-bold text-purple-400">Follow Us</h2>
          <div className="flex gap-4 mt-3">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-xl cursor-pointer hover:text-purple-400" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-xl cursor-pointer hover:text-purple-400" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-xl cursor-pointer hover:text-purple-400" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-xl cursor-pointer hover:text-purple-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 text-center text-gray-500">
        <p>&copy; 2025 Kala Paint Works. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
