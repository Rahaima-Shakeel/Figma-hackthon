
import React from 'react';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';

const DesktopNav = () => {
  return (
    <header className="bg-white shadow-md w-full">
      {/* Top Section */}
      <div className="flex justify-between items-center h-[66px] px-6">
        {/* Left - Search Icon */}
        <div className="text-gray-700 text-lg cursor-pointer">
          <FaSearch />
        </div>

        {/* Center - Logo */}
        <h1 className="text-2xl font-bold text-gray-900">Avion</h1>

        {/* Right - Icons */}
        <div className="flex items-center space-x-4 text-gray-700 text-lg">
          <FaShoppingCart className="cursor-pointer" />
          <FaUser className="cursor-pointer" />
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-200" />

      {/* Bottom Section - Navigation Menu */}
      <nav className="flex justify-center items-center h-[66px] space-x-8 text-gray-500">
        {['Plant pots', 'Ceramics', 'Tables', 'Chairs', 'Crockery', 'Tableware', 'Cutlery'].map(
          (item, index) => (
            <span
              key={index}
              className="text-sm hover:text-gray-900 cursor-pointer transition-colors"
            >
              {item}
            </span>
          )
        )}
      </nav>
    </header>
  );
};

export default DesktopNav;
