import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import Themebtn from './Themebtn';
import useTheme from './Darkmode'; 

const Navbar = () => {
  const { themeMode } = useTheme();

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  const baseClass = `
    relative transition-colors duration-200 ease-in-out
    hover:text-green-500
    before:absolute before:bottom-0 before:left-0
    before:h-[1px] before:w-0 before:bg-green-500
    before:transition-all before:duration-200 hover:before:w-full
  `;

  const activeClass = `font-semibold text-green-500`;
  const inactiveClass = themeMode === 'dark' ? 'text-white' : 'text-black';

  return (
    <nav
      className={`flex items-center justify-between px-6 py-4 shadow-md ${
        themeMode === 'dark'
          ? 'bg-gray-900 border-b border-gray-800 text-white'
          : 'bg-gradient-to-br from-green-50 via-white to-green-100 text-black'
      }`}
    >
      <div className="flex items-center space-x-3">
        <img src={logo} alt="KisanSetu Logo" className="h-10 w-10" />
        <h1 className="text-2xl font-bold">
          Kisan<span className="text-green-400">Setu</span>
        </h1>
      </div>

      <div className="flex items-center space-x-6 text-lg font-medium">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/Loans"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          Loans & Finance
        </NavLink>
        <NavLink
          to="/Market"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          Market
        </NavLink>
        <NavLink
          to="/Budget"
          className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : inactiveClass}`
          }
        >
          Budget Planner
        </NavLink>

        <Themebtn />
      </div>
    </nav>
  );
};

export default Navbar;
