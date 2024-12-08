import React from 'react';
import Link from 'next/link';

import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#2C2C60] text-white py-8">
      {/* Main Container */}
      <div className="container mx-auto px-6">
        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Menu Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  New arrivals
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Best sellers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Recently viewed
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Popular this week
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  All products
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Crockery
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Furniture
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Homeware
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Plant pots
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Chairs
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Company Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  About us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Vacancies
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Returns policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Join our mailing list</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2 bg-[#3e3e80] border-gray-300 rounded-l-md"
              />
              <button
                type="submit"
                className="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-r-md"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-4 flex justify-between items-center">
          {/* Copyright Text */}
          <div className="text-sm text-gray-400">
            &copy; Copyright 2022 Avion LTD
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <Link href="#" className="text-white hover:text-blue-500">
              <FaLinkedinIn size={20} />
            </Link>
            <Link href="#" className="text-white hover:text-blue-700">
              <FaFacebookF size={20} />
            </Link>
            <Link href="#" className="text-white hover:text-pink-500">
              <FaInstagram size={20} />
            </Link>
            <Link href="#" className="text-white hover:text-blue-400">
              <FaTwitter size={20} />
            </Link>
            <Link href="#" className="text-white hover:text-red-500">
              <FaPinterestP size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
