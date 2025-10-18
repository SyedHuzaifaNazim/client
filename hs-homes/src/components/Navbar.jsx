import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <span className="text-xl font-bold text-gray-800">Degs & Cookware</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-amber-600 font-medium transition duration-300">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-amber-600 font-medium transition duration-300">
              Products
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-amber-600 font-medium transition duration-300">
              About Us
            </Link>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-700 hover:text-amber-600 transition duration-300">
                <ShoppingCartIcon className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <Link to="/" className="block py-2 text-gray-700 hover:text-amber-600">Home</Link>
            <Link to="/products" className="block py-2 text-gray-700 hover:text-amber-600">Products</Link>
            <Link to="/about" className="block py-2 text-gray-700 hover:text-amber-600">About Us</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;