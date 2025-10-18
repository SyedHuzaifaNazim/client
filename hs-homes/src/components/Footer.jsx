import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">D</span>
              </div>
              <span className="text-xl font-bold">Degs & Cookware</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Your trusted partner for premium quality cookware. From traditional degs to modern kitchen essentials, we bring durability and tradition to your kitchen.
            </p>
            <div className="flex space-x-4">
              <span className="bg-amber-600 px-3 py-1 rounded text-sm">Free Delivery</span>
              <span className="bg-amber-600 px-3 py-1 rounded text-sm">Lifetime Warranty</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-amber-400 transition duration-300">Home</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-amber-400 transition duration-300">All Products</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-amber-400 transition duration-300">About Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📞 +92 300 1234567</li>
              <li>✉️ info@degscookware.com</li>
              <li>📍 Main Market, Lahore, Pakistan</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Degs & Cookware. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;