const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-500 to-teal-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Start Your Crypto Journey?
        </h2>
        <p className="max-w-2xl mx-auto text-xl text-white opacity-90 mb-10">
          Join millions of users trading on CryptoVerse today
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300">
            Create Free Account
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:bg-opacity-10 transition duration-300">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
 