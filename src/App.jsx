import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

function App() {
  return (
    <div>
      {/* Navigation */}
      <nav className="bg-blue-600 p-4 flex text-xl justify-between">
        <ul className="text-white px-2">
          <li className="">
            <a href="">
              Adnan{" "}
              <span className="text-blue-400 hover:text-white">Services</span>
            </a>
          </li>
        </ul>
        <ul className="flex justify-between text-center px-2 gap-2">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="text-white hover:text-gray-300">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Routes */}
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-lg font-bold">Connect with Us</h3>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://github.com/adnanansari8173"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl hover:text-gray-400" />
            </a>
            <a
              href="https://www.instagram.com/adnan_atik_ahmad/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl hover:text-gray-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/itsadnan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-2xl hover:text-gray-400" />
            </a>
          </div>
          <p className="mt-4">
            © {new Date().getFullYear()} Adnan Ansari. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
