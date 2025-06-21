import React from 'react';

// const Header = () => {
//   return (
//     <header className="bg-green-500 text-white shadow-md">
//       <div className="max-w-7xl mx-auto px-6 py-10 text-center">
//         <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
//           CivicMetrics
//         </h1>
//         <h2 className="text-2xl md:text-3xl  font-semibold mb-3">
//           Track progress. Discover insights. Drive change.
//         </h2>
//         <p className="text-lg md:text-xl  max-w-4xl mx-auto">
//           Decoding India’s Urban Growth. Explore, compare, and understand your city's development journey through 30+ national metrics.
//         </p>
//       </div>
//     </header>
//   );
// };

// export default Header;


const Header = () => {
  return (
    <header className="bg-gradient-to-br from-blue-600 to-indigo-800 text-white shadow-xl">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
          Empowering Nations Through Data
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white/90">
          Compare. Discover. Act.
        </h2>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
          Visualize and compare the development journeys of countries across 30+ global indicators —
          economic, social, environmental, and more.
        </p>
        {/* <button className="mt-10 bg-white text-blue-700 font-semibold px-6 py-3 rounded-full text-lg shadow-md hover:bg-blue-50 transition">
          Start Comparing →
        </button> */}
      </div>
    </header>


  );
};

export default Header