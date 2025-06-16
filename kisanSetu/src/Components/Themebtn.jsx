import React, { useState } from 'react'
import useTheme from './Darkmode.jsx'

const Themebtn = () => {
    const {themeMode, darktheme, lightTheme} = useTheme();
    
    const toggleTheme = () => {
       themeMode === 'dark' ? lightTheme() : darktheme();
    };
  return (
    <button
      onClick={toggleTheme}
      className={`w-16 h-6 rounded-full relative shadow-md border-gray-200 ${
        themeMode === 'dark' ? 'bg-blue-200' : 'bg-gray-300'
      }`}
    >
      <div
        className={`w-6 h-6 absolute rounded-full transition-all ${
          themeMode === 'dark' ? 'right-0 top-0 bg-blue-800' : 'left-0 top-0 bg-gray-400'
        }`}
      ></div>
    </button>
  );
};


export default Themebtn
