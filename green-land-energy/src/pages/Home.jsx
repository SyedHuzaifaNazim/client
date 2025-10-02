// src/pages/Home.jsx
import { useState } from 'react';

const Home = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
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
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20 lg:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Powering the Future of Global Energy</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Leading the clean-tech revolution with strategic raw materials and sustainable energy solutions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-100 transition duration-300">
              GET STARTED
            </a>
            <a href="#services" className="inline-block border-2 border-white text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-white hover:bg-opacity-10 transition duration-300">
              LEARN MORE
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive energy solutions driving the transition to a sustainable future
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
              <div key={service.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <a href="/contact" className="inline-block mt-4 text-blue-600 font-medium hover:text-blue-700 transition duration-200">
                    Learn more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features/Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Greenland Energy Matters Now</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Instant Authority</h3>
              <p className="text-gray-600">The exact-match domain defines the clean energy sector, establishing immediate credibility and market presence.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Investor Magnet</h3>
              <p className="text-gray-600">Capturing fresh EU, mining, and geopolitical interest with a platform built for strategic investment.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Brand-Ready</h3>
              <p className="text-gray-600">A short, memorable brand ideal for funds, battery-metals traders, and sustainable energy think tanks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Power Your Future?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the clean energy revolution and discover how Greenland Energy can transform your energy strategy.
          </p>
          <a href="/contact" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-100 transition duration-300">
            CONTACT US TODAY
          </a>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for the latest updates on clean energy innovations and projects.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;