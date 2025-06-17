const Hero = () => {
  return (
    <header className="relative pt-54 pb-52 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-teal-300 opacity-30"></div>
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80')] bg-cover bg-center opacity-20"
        ></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            <span className="bg-gradient-to-r from-indigo-500 to-teal-300 bg-clip-text text-transparent">
              Trade Crypto
            </span>{' '}
            Like a Pro
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-300 mb-10">
            Join the future of finance with our secure, fast, and easy-to-use cryptocurrency trading platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-gradient-to-r from-indigo-500 to-teal-300 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition duration-300 flex items-center justify-center">
              Start Trading <i className="fas fa-arrow-right ml-2"></i>
            </button>
            <button className="bg-transparent border-2 border-indigo-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-500 hover:bg-opacity-20 transition duration-300 flex items-center justify-center">
              <i className="fas fa-play-circle mr-2"></i> Watch Demo
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
 