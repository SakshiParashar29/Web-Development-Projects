import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left Section - Info */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold">🌿 Farmer's Budget Planner</h3>
          <p className="text-sm mt-1">
            Empowering farmers to plan smart, save more, and grow better.
          </p>
          <p className="text-xs mt-2 text-green-200">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Center Section - Contact */}
        <div className="text-center">
          <h4 className="font-semibold mb-1">Contact</h4>
          <div className="flex flex-col items-center gap-1 text-sm">
            <div className="flex items-center gap-2">
              <FaPhoneAlt /> <span>+91 22222222</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope /> <span>support@budgetplanner.in</span>
            </div>
          </div>
        </div>

        {/* Right Section - Social Links */}
        <div className="flex gap-4 text-xl text-white">
          <a href="#" aria-label="Facebook" className="hover:text-blue-400">
            <FaFacebook />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-blue-300">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-pink-400">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
