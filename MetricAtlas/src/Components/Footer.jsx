import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-emerald-400">MetricAtlas</h2>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div className="flex space-x-6 text-gray-400 text-sm">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#metrics" className="hover:text-white transition">Metrics</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
