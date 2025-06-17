const AboutSection = () => {
  const features = [
    { icon: 'fas fa-shield-alt', title: 'Secure Platform', text: 'Bank-level security' },
    { icon: 'fas fa-bolt', title: 'Fast Execution', text: 'High-speed trading' },
    { icon: 'fas fa-headset', title: '24/7 Support', text: 'Dedicated team' },
    { icon: 'fas fa-coins', title: '150+ Assets', text: 'Wide selection' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About CryptoVerse</h2>
            <p className="text-lg text-gray-400 mb-6">
              CryptoVerse is a leading cryptocurrency trading platform founded in 2017 with a mission to make digital asset trading accessible to everyone.
              Our team of blockchain experts and financial professionals are dedicated to providing a secure, transparent, and user-friendly experience.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              With over 5 million users worldwide, we offer access to hundreds of cryptocurrencies, advanced trading tools, and educational resources to
              help both beginners and experienced traders navigate the crypto markets.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-teal-300 rounded-full flex items-center justify-center mr-4">
                    <i className={`${item.icon} text-white`}></i>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="bg-gradient-to-r from-indigo-500 to-teal-300 text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition duration-300">
              Learn More About Us
            </button>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 shadow-lg">
              <div className="w-full h-96 bg-gray-800 rounded-lg flex items-center justify-center">
                <i className="fas fa-play-circle text-6xl text-indigo-500"></i>
                <p className="ml-4 text-gray-400">Company introduction video</p>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-indigo-500 to-teal-300 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-indigo-500 to-teal-300 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
