import React, { useState } from "react";
import { FaPhone } from "react-icons/fa";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import BlogDetails from "./Pages/BlogaDetails";
import Blog from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import ServiceDetails from "./Pages/ServiceDetails";
import Services from "./Pages/Services";
import AllServices from "./Pages/Services/Allservices";
import FloorCoating from './Pages/Services/FloorCoating';
import GraffitiRemoval from './Pages/Services/GraffitiRemoval';
import MildewRemoval from './Pages/Services/MildewRemoval';
import RegularPainting from './Pages/Services/RegularPainting';
import WallPainting from './Pages/Services/WallPainting';
import WindowWashing from './Pages/Services/WindowWashing';


const App = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <Router>
      <nav className="relative flex items-center justify-between p-4 text-white bg-gray-900">
        <div className="flex items-center gap-4">
        <img src="/images/logo1.png" alt="Kala Paintworks Logo" className="h-14" />

          <span className="text-xl font-bold text-purple-400">PAINTER</span>
        </div>
        <div className="flex gap-6 text-lg">
          <Link to="/" className="border-b-2 border-transparent hover:text-purple-400 hover:border-purple-400">Home</Link>
          <Link to="/about" className="border-b-2 border-transparent hover:text-purple-400 hover:border-purple-400">About</Link>
          <div className="relative">
            <button 
              className="border-b-2 border-transparent hover:text-purple-400 hover:border-purple-400"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}>
              Services ▾
            </button>
            {dropdownOpen && (
              <div 
                className="absolute left-0 z-50 w-48 py-2 text-white bg-gray-700 rounded shadow-lg top-full"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}>
                <Link to="/services" className="block px-4 py-2 hover:bg-gray-600">All Services</Link>
                <Link to="/regularpainting" className="block px-4 py-2 hover:bg-gray-600">Regular Painting</Link>
                <Link to="/wallpainting" className="block px-4 py-2 hover:bg-gray-600">Wall Painting</Link>
                <Link to="/floorcoating" className="block px-4 py-2 hover:bg-gray-600">Floor Coating</Link>
                <Link to="/graffitiremoval" className="block px-4 py-2 hover:bg-gray-600">Graffiti Removal</Link>
                <Link to="/mildewremoval" className="block px-4 py-2 hover:bg-gray-600">Mildew Removal</Link>
                <Link to="/windowwashing" className="block px-4 py-2 hover:bg-gray-600">Window Washing</Link>
              </div>
            )}
          </div>
          <Link to="/contact" className="border-b-2 border-transparent hover:text-purple-400 hover:border-purple-400">Contact</Link>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 text-purple-400 border-l border-purple-400">
          <FaPhone className="text-xl" />
          <div>
            <span className="text-sm font-bold">Call Now</span>
            <p className="text-lg">+918309071308</p>
          </div>
        </div>
        
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:title" element={<ServiceDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/regularpainting" element={<RegularPainting />} />
        <Route path="/wallpainting" element={<WallPainting />} />
        <Route path="/floorcoating" element={<FloorCoating />} />
        <Route path="/graffitiremoval" element={<GraffitiRemoval />} />
        <Route path="/mildewremoval" element={<MildewRemoval />} />
        <Route path="/windowwashing" element={<WindowWashing />} />
        <Route path="/allservices" element={<AllServices />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogsd" element={<BlogDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
