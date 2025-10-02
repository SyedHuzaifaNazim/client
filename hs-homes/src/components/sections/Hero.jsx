const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 lg:py-28">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Professional Home Services in Pakistan
          </h1>
          <p className="text-xl mb-8 text-blue-100 leading-relaxed">
            From plumbing and electrical work to cleaning and maintenance, we provide reliable home services you can trust. Quality service at your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 shadow-lg">
              Our Services
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300">
              Contact Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero