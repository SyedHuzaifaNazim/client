import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-amber-50 py-20 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Crafting Tradition in Every Kitchen</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Discover professional-quality cookware for your home and large gatherings.</p>
        <Link to="/products" className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-300">
          Shop All Cookware
        </Link>
      </section>

      {/* Featured Categories */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Shop By Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Category 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <img 
              src="https://images.unsplash.com/photo-1594948225820-7a6a6c6b5e5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
              alt="Large Capacity Degs" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Large Capacity Degs</h3>
              <p className="text-gray-600 mb-4">For Feasts & Gatherings</p>
              <Link to="/products?category=degs" className="text-amber-700 hover:text-amber-800 font-medium">Explore →</Link>
            </div>
          </div>
          
          {/* Category 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <img 
              src="https://images.unsplash.com/photo-1584377332573-21cce7709d5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
              alt="Everyday Kitchen Essentials" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Everyday Essentials</h3>
              <p className="text-gray-600 mb-4">For Your Family Kitchen</p>
              <Link to="/products?category=essentials" className="text-amber-700 hover:text-amber-800 font-medium">Explore →</Link>
            </div>
          </div>

          {/* Category 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <img 
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
              alt="Specialty Cookware" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Specialty Cookware</h3>
              <p className="text-gray-600 mb-4">Unique Tools for Authentic Taste</p>
              <Link to="/products?category=specialty" className="text-amber-700 hover:text-amber-800 font-medium">Explore →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;