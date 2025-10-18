import { CheckBadgeIcon, HeartIcon, UsersIcon, SparklesIcon } from '@heroicons/react/24/outline';

const About = () => {
  const features = [
    {
      icon: CheckBadgeIcon,
      title: "Premium Quality",
      description: "Every product is crafted with the finest materials and traditional techniques"
    },
    {
      icon: HeartIcon,
      title: "Family Tradition",
      description: "Three generations of expertise in creating durable cookware"
    },
    {
      icon: UsersIcon,
      title: "Customer First",
      description: "We prioritize your satisfaction with lifetime support"
    },
    {
      icon: SparklesIcon,
      title: "Innovation",
      description: "Combining traditional designs with modern technology"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-amber-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Story</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            For over three decades, we've been crafting premium cookware that brings families together 
            around delicious meals. From traditional degs to modern kitchen essentials.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              To preserve and enhance the art of traditional cooking while making it accessible 
              to modern households. We believe that every meal cooked with love deserves the 
              perfect cookware.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our degs and cookware are more than just utensils - they're vessels that carry 
              forward generations of culinary heritage and family traditions.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Traditional cooking"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1985</div>
              <h3 className="text-xl font-semibold mb-2">Humble Beginnings</h3>
              <p className="text-gray-600">Started as a small workshop in Lahore</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2000</div>
              <h3 className="text-xl font-semibold mb-2">Expansion</h3>
              <p className="text-gray-600">Introduced modern manufacturing while keeping traditional techniques</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2024</div>
              <h3 className="text-xl font-semibold mb-2">Nationwide Reach</h3>
              <p className="text-gray-600">Serving thousands of customers across Pakistan</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Kitchen?</h2>
          <p className="text-amber-100 mb-8 text-lg">
            Join thousands of satisfied customers who trust our cookware for their daily cooking needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition duration-300">
              Shop All Products
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;