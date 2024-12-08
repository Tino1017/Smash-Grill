import React, { useState } from 'react';
import { Menu as MenuIcon, X, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <Truck className="w-8 h-8 text-yellow-400" />
            <span className="font-bold text-xl">Smash & Grill</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/menu" className="text-gray-600 hover:text-yellow-500">Menu</Link>
            <a href="#location" className="text-gray-600 hover:text-yellow-500">Location</a>
            <a href="#contact" className="text-gray-600 hover:text-yellow-500">Contact</a>
            <button className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-semibold 
              hover:bg-yellow-500 transition-colors">
              Order Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/menu"
                className="text-gray-600 hover:text-yellow-500"
                onClick={() => setIsOpen(false)}
              >
                Menu
              </Link>
              <a
                href="#location"
                className="text-gray-600 hover:text-yellow-500"
                onClick={() => setIsOpen(false)}
              >
                Location
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-yellow-500"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <button className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-semibold 
                hover:bg-yellow-500 transition-colors">
                Order Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}