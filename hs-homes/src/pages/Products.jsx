import { useState, useEffect } from 'react';
import ProductCard from '../features/products/ProductCard';
import { products } from '../data/products';

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 10000]);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'degs', name: 'Large Degs' },
    { id: 'essentials', name: 'Kitchen Essentials' },
    { id: 'specialty', name: 'Specialty Cookware' }
  ];

  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by price range
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    setFilteredProducts(filtered);
  }, [selectedCategory, priceRange]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Cookware Collection</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover premium quality cookware for every kitchen need
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4 bg-white p-6 rounded-lg shadow-md h-fit">
            <h3 className="text-lg font-semibold mb-4">Filters</h3>
            
            {/* Category Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-3">Category</h4>
              <div className="space-y-2">
                {categories.map(category => (
                  <label key={category.id} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      value={category.id}
                      checked={selectedCategory === category.id}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="text-amber-600 focus:ring-amber-500"
                    />
                    <span className="text-gray-700">{category.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-6">
              <h4 className="font-medium mb-3">Price Range</h4>
              <div className="space-y-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Rs. {priceRange[0]}</span>
                  <span>Rs. {priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10000"
                  step="500"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
            </div>

            {/* Features Filter */}
            <div>
              <h4 className="font-medium mb-3">Features</h4>
              <div className="space-y-2">
                {['Heavy Base', 'Non-Stick', 'Oven Safe', 'Induction Compatible'].map(feature => (
                  <label key={feature} className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="text-amber-600 focus:ring-amber-500" />
                    <span className="text-gray-700">{feature}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {/* Results Count */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing {filteredProducts.length} of {products.length} products
              </p>
              <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
              </select>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                <button 
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceRange([0, 10000]);
                  }}
                  className="mt-4 bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition duration-300"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;