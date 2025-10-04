// src/pages/Home.jsx
import { useState } from 'react';
import ImageCarousel from '../components/ImageCarousel';

const Home = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  const stats = [
    { number: '50+', label: 'Research Projects' },
    { number: '15+', label: 'International Patents' },
    { number: '200+', label: 'Scientific Publications' },
    { number: '5M+', label: 'Patients Benefited' }
  ];

  const applications = [
    {
      id: 1,
      title: 'Enhanced Bioavailability',
      description: 'Nano-sized herbal formulations significantly improve absorption and therapeutic efficacy while reducing dosage frequency.',
      icon: '📈',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      title: 'Targeted Drug Delivery',
      description: 'Precision targeting of active herbal constituents to specific cells or tissues for maximized therapeutic impact.',
      icon: '🎯',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      title: 'Green Synthesis',
      description: 'Eco-friendly nanoparticle production using herbal extracts as reducing and stabilizing agents.',
      icon: '🌱',
      image: 'https://images.unsplash.com/photo-1518837695005-2083093d35e0?ixlib=rb-4.0.1&auto=format&fit=crop&w=500&q=80'
    }
  ];

  const researchAreas = [
    {
      title: 'Metal-Herb Nanocomplexes',
      description: 'Development of gold, silver, and iron nanoparticles synthesized using medicinal plant extracts for enhanced therapeutic applications.',
      points: ['Gold Nanoparticles', 'Silver Antimicrobials', 'Iron Oxide Carriers']
    },
    {
      title: 'Ayurvedic Bhasmas',
      description: 'Modern scientific validation of ancient Ayurvedic nanomedicines (Bhasmas) with proven nano-scale structures and therapeutic efficacy.',
      points: ['Traditional Knowledge', 'Scientific Validation', 'Nano-Scale Characterization']
    },
    {
      title: 'Personalized Phytotherapy',
      description: 'Tailored nano-herbal formulations based on individual genetic profiles and specific health conditions for optimized treatment outcomes.',
      points: ['Genetic Profiling', 'Custom Formulations', 'Precision Medicine']
    }
  ];

  return (
    <div>
      {/* Hero Carousel Section */}
      <ImageCarousel />

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What are Herbonanoceuticals?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Herbonanoceuticals represent the revolutionary convergence of ancient herbal wisdom with cutting-edge nanotechnology. 
              These are engineered nanomaterials synthesized using medicinal plant resources, designed to enhance the therapeutic potential 
              of herbal medicines while overcoming limitations of conventional herbal formulations through improved bioavailability, 
                  targeted delivery, and reduced side effects:cite[1]:cite[4].
            </p>
          </div>
        </div>
      </section>

      {/* Key Applications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Key Applications & Benefits</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transforming herbal therapeutics through nanotechnology innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map(app => (
              <div 
                key={app.id} 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={app.image} 
                    alt={app.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-green-600/20 group-hover:bg-green-600/10 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="text-3xl mb-4 transition-transform duration-300 group-hover:scale-110 inline-block">
                    {app.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-300">
                    {app.title}
                  </h3>
                  <p className="text-gray-600">{app.description}</p>
                  <a href="/research" className="inline-block mt-4 text-green-600 font-medium hover:text-green-700 transition-all duration-300 transform group-hover:translate-x-2">
                    Learn more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Cutting-Edge Research Areas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <ul className="space-y-2">
                  {area.points.map((point, idx) => (
                    <li key={idx} className="flex items-center text-green-700">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Herbonanoceutical Revolution</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of the future where ancient herbal wisdom meets cutting-edge nanotechnology for better healthcare solutions.
          </p>
          <a href="/contact" className="inline-block bg-white text-green-700 font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-100 transition duration-300">
            COLLABORATE WITH US
          </a>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Stay Updated on Latest Research</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for the latest breakthroughs in green nanotechnology and nano phyto-therapeutics.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition duration-200"
              required
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 whitespace-nowrap"
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