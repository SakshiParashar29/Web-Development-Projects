import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

// const Navbar = () => {
//   return (
//     <nav className="bg-green-600 text-white shadow-md">
//       <div className="flex justify-between items-center px-6 py-4">
//         {/* Logo */}
//         <img
//           className="rounded-full border-2 border-white shadow-md"
//           src="./src/assets/logo.jpg"
//           alt="CivicMetrics Logo"
//           height={136}
//           width={136}
//         />

//         {/* Title */}
//         <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
//           CivicMetrics
//         </h1>

//         {/* User Icon */}
//         <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-yellow-200 transition">
//           <FontAwesomeIcon icon={faUser} className="text-3xl" />
//           <span className="text-sm font-medium">My Account</span>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-800 via-blue-700 to-indigo-800 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <img
            src="./src/assets/logo.jpg"
            alt="CivicMetrics Logo"
            className="w-12 h-12 rounded-full border-2 border-white shadow-md"
          />
          <h1 className="text-2xl md:text-3xl font-bold tracking-wide drop-shadow-sm">
            MetricAtlas
          </h1>
        </div>

        {/* Nav Items or Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6 text-lg font-medium text-white/90">
            <a href="#" className="hover:text-blue-200 transition">Compare</a>
            <a href="#" className="hover:text-blue-200 transition">About</a>
            <a href="#" className="hover:text-blue-200 transition">Contact</a>
          </div>
          <div className="flex flex-col items-center cursor-pointer hover:text-blue-200 transition-all duration-300">
            <FontAwesomeIcon icon={faUser} className="text-2xl" />
            <span className="text-sm font-medium">My Account</span>
          </div>
        </div>
      </div>
    </nav>

  );
};

export default Navbar

