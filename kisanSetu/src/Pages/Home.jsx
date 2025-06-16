import React from 'react';
import { Link } from 'react-router-dom';
import loansandFinance from '../assets/loansandFinance.png';
import FarmersMarket from '../assets/FarmersMarket.jpg';
import budget from '../assets/budget.jpg';
import useTheme from '../Components/Darkmode';

const Home = () => {
  const { themeMode } = useTheme();

  return (
    <div
      className={`flex flex-col items-center px-4 min-h-screen transition-colors duration-300 ${
        themeMode === 'dark'
          ? 'bg-gray-900 text-white'
          : 'bg-gradient-to-br from-green-50 via-white to-green-100 text-black'
      }`}
    >
      {/* Welcome Message Card */}
      <div
        className={`mt-10 shadow-lg rounded-2xl p-6 max-w-3xl text-center transform transition duration-300 hover:scale-105 ${
          themeMode === 'dark'
            ? 'bg-gray-800 text-white border border-gray-700'
            : 'bg-white text-black border border-gray-200'
        }`}
      >
        <h2 className="text-2xl playfair-font font-semibold text-green-700 mb-4">
          Welcome to <span className="text-green-500 font-bold">KisanSetu</span> — Empowering Farmers with Smart Financial Knowledge
        </h2>
        <p className="text-lg leading-relaxed varela-round-regular">
          "Agriculture is the backbone of our community, but many farmers face challenges in managing <span className="font-medium text-blue-600">loans</span>,
          understanding <span className="font-medium text-blue-600">market prices</span>, and planning their <span className="font-medium text-blue-600">budgets</span>.
          <br /> Kisan<span className="text-green-600">Setu</span> is here to bridge that gap."
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex m-16 oldenburg-regular gap-8 flex-wrap justify-center">
        {/* Loans & Finance Card */}
        <div
          className={`shadow-lg rounded-lg w-56 text-center transform transition duration-300 hover:scale-105 ${
            themeMode === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'
          }`}
        >
          <img src={loansandFinance} alt="Loans and Finance" className="h-34 w-56 rounded-tl-lg rounded-tr-lg" />
          <div className="p-2">
            <p>Loans and Finance provide essential financial support to help users invest in growth, manage expenses, and plan for a secure future.</p>
            <Link to="/Loans" className="text-green-500 hover:underline">Learn More.</Link>
          </div>
        </div>

        {/* Market Card */}
        <div
          className={`shadow-lg rounded-lg w-56 text-center transform transition duration-300 hover:scale-105 ${
            themeMode === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'
          }`}
        >
          <img src={FarmersMarket} alt="Market" className="h-34 w-56 rounded-tl-lg rounded-tr-lg" />
          <div className="p-2">
            <p>Farmers can sell their produce directly in the marketplace, helping them get fair prices and connect with buyers easily.</p>
            <Link to="/Market" className="text-green-500 hover:underline">Learn More.</Link>
          </div>
        </div>

        {/* Budget Card */}
        <div
          className={`shadow-lg rounded-lg w-56 text-center transform transition duration-300 hover:scale-105 ${
            themeMode === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'
          }`}
        >
          <img src={budget} alt="Budget" className="h-34 w-56 rounded-tl-lg rounded-tr-lg mb-2" />
          <div className="p-2 pb-3">
            <p>Helps farmers manage their expenses and plan their finances effectively for a stable and profitable farming season.</p>
            <Link to="/Budget" className="text-green-500 hover:underline">Learn More.</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
