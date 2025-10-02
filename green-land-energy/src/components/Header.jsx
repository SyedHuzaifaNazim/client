import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-xl font-bold text-gray-800">GreenlandEnergy</a>

        {/* Desktop Navigation - hidden on mobile, shown on medium screens and up */}
        <nav className="hidden md:flex space-x-8">
          <a href="/" className="text-gray-600 hover:text-blue-600 font-medium">Home</a>
          <a href="/about" className="text-gray-600 hover:text-blue-600 font-medium">About</a>
          <a href="/contact" className="text-gray-600 hover:text-blue-600 font-medium">Contact</a>
        </nav>

        {/* CTA Button - hidden on mobile, shown on medium screens and up */}
        <a href="/contact" className="hidden md:inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-200">
          BUY NOW
        </a>

        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center text-gray-500"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu - shown when menu is open */}
      {isMenuOpen && (
        <div className="md:hidden container mx-auto px-4 pb-4">
          <div className="flex flex-col space-y-3">
            <a href="/" className="text-gray-600 hover:text-blue-600 font-medium block py-2">Home</a>
            <a href="/about" className="text-gray-600 hover:text-blue-600 font-medium block py-2">About</a>
            <a href="/contact" className="text-gray-600 hover:text-blue-600 font-medium block py-2">Contact</a>
            <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded text-center transition duration-200">
              BUY NOW
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;