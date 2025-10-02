import { useState, useEffect } from 'react';

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageErrors, setImageErrors] = useState({});

  // Validated image URLs from reliable sources
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.1&auto=format&fit=crop&w=2000&q=80",
      title: "Sustainable Energy Solutions",
      description: "Leading the clean-tech revolution with innovative renewable energy projects"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.1&auto=format&fit=crop&w=2000&q=80",
      title: "Strategic Raw Materials", 
      description: "Securing critical minerals essential for the clean energy transition"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1518837695005-2083093d35e0?ixlib=rb-4.0.1&auto=format&fit=crop&w=2000&q=80",
      title: "Arctic Innovation",
      description: "Leveraging Arctic resources with cutting-edge technology"
    }
  ];

  const handleImageError = (slideId) => {
    setImageErrors(prev => ({ ...prev, [slideId]: true }));
  };

  return (
    <section className="relative w-full h-[600px] overflow-hidden group">
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div key={slide.id} className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out transform ${
            index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
          }`}>
            {!imageErrors[slide.id] ? (
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                onError={() => handleImageError(slide.id)}
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Image failed to load</span>
              </div>
            )}
            {/* Rest of your overlay and content */}
          </div>
        ))}
      </div>
    </section>
  );
};