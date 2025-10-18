import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 border border-gray-100">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
        <p className="text-amber-700 font-bold text-xl mb-2">Rs. {product.price}</p>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <Link 
            to={`/product/${product.id}`}
            className="text-amber-700 hover:text-amber-800 font-medium text-sm"
          >
            View Details
          </Link>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded text-sm font-medium transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;