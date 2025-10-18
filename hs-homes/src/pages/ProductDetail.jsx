import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { StarIcon, HeartIcon, ShieldCheckIcon, TruckIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <Link to="/products" className="text-amber-600 hover:text-amber-700 font-medium">
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const imageThumbnails = [
    product.image,
    "https://images.unsplash.com/photo-1594049515670-6b5f1dc6e70d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1570222094114-d054a817e56b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  ];

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex mb-8 text-sm text-gray-600">
          <Link to="/" className="hover:text-amber-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-amber-600">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <img 
                src={imageThumbnails[selectedImage]} 
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="flex space-x-4">
              {imageThumbnails.map((thumb, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 border-2 rounded-lg overflow-hidden ${
                    selectedImage === index ? 'border-amber-600' : 'border-gray-300'
                  }`}
                >
                  <img 
                    src={thumb} 
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600">(42 reviews)</span>
              </div>
              <p className="text-3xl font-bold text-amber-600 mb-4">Rs. {product.price}</p>
            </div>

            <p className="text-gray-700 leading-relaxed">{product.description}</p>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="flex items-center space-x-2">
                <ShieldCheckIcon className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-700">2 Years Warranty</span>
              </div>
              <div className="flex items-center space-x-2">
                <TruckIcon className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-gray-700">Free Delivery</span>
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="font-semibold mb-3">Specifications</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-gray-600 capitalize">{key}:</span>
                    <span className="font-medium">{value.toString()}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Add to Cart Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-gray-600 hover:text-amber-600"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-l border-r border-gray-300">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-gray-600 hover:text-amber-600"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="flex-1 bg-amber-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-amber-700 transition duration-300">
                  Add to Cart
                </button>
                <button 
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="p-3 border border-gray-300 rounded-lg hover:border-amber-600 transition duration-300"
                >
                  {isWishlisted ? (
                    <HeartSolid className="w-6 h-6 text-red-500" />
                  ) : (
                    <HeartIcon className="w-6 h-6 text-gray-600" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map(relatedProduct => (
              <div key={relatedProduct.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={relatedProduct.image} 
                  alt={relatedProduct.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{relatedProduct.name}</h3>
                  <p className="text-amber-600 font-bold mb-2">Rs. {relatedProduct.price}</p>
                  <Link 
                    to={`/product/${relatedProduct.id}`}
                    className="text-amber-600 hover:text-amber-700 font-medium text-sm"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;