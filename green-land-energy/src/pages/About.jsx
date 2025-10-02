const About = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">About Greenland Energy</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <p className="text-lg text-gray-600 mb-6">
            Greenland has moved from a remote ice-sheet to the front page of the clean-tech playbook. As a key player in strategic raw materials and renewable energy, we are at the nexus of critical minerals, renewables, and Arctic innovation.
          </p>
          
          <img 
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.1&auto=format&fit=crop&w=1000&q=80" 
            alt="Clean Energy Technology" 
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <p className="text-lg text-gray-600">
            Our mission is to power the future of global energy through sustainable practices, strategic investments, and cutting-edge technology. We are committed to driving the clean energy transition forward.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;