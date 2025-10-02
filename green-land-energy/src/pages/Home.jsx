// src/pages/Home.jsx
import { useState } from 'react';
import ImageCarousel from '../components/ImageCarousel';

const Home = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  const services = [
    {
      id: 1,
      title: 'Strategic Raw Materials',
      description: 'Securing critical minerals and resources essential for the clean energy transition.',
      icon: '⚡',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      title: 'Sustainable Energy Solutions',
      description: 'Developing innovative renewable energy projects for a sustainable future.',
      icon: '🌱',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      title: 'Arctic Innovation',
      description: 'Leveraging Arctic resources with cutting-edge technology and environmental stewardship.',
      icon: '❄️',
      image: 'https://images.unsplash.com/photo-1518837695005-2083093d35e0?ixlib=rb-4.0.1&auto=format&fit=crop&w=500&q=80'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '15+', label: 'Countries' },
    { number: '200+', label: 'Expert Team' },
    { number: '5M+', label: 'Tons CO2 Reduced' }
  ];

  return (
    <div>
      {/* Hero Carousel Section - Replaces original hero */}
      <ImageCarousel />

      {/* Rest of your existing sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with hover animations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive energy solutions driving the transition to a sustainable future
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
              <div 
                key={service.id} 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="text-3xl mb-4 transition-transform duration-300 group-hover:scale-110 inline-block">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                  <a href="/contact" className="inline-block mt-4 text-blue-600 font-medium hover:text-blue-700 transition-all duration-300 transform group-hover:translate-x-2">
                    Learn more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Image Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our Energy Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.1&auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.1&auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.1&auto=format&fit=crop&w=500&q=80"
            ].map((image, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
              >
                <img 
                  src={image} 
                  alt={`Energy project ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                  <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-semibold mb-2">Project {index + 1}</h3>
                    <p className="text-sm opacity-90">Sustainable energy solution</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of your existing CTA and Newsletter sections */}
    </div>
  );
};

export default Home;