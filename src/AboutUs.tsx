import { motion } from "framer-motion";

const AboutSection = () => {
  const features = [
    {
      icon: "fas fa-shield-alt",
      title: "Secure Platform",
      text: "Bank-level security",
    },
    {
      icon: "fas fa-bolt",
      title: "Fast Execution",
      text: "High-speed trading",
    },
    { icon: "fas fa-headset", title: "24/7 Support", text: "Dedicated team" },
    { icon: "fas fa-coins", title: "150+ Assets", text: "Wide selection" },
  ];

  return (
    <section id="about" className="relative py-20 bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-[60rem] h-[60rem] bg-indigo-500 opacity-20 blur-3xl rounded-full top-[-20%] left-[-20%] animate-pulse"></div>
        <div className="absolute w-[50rem] h-[50rem] bg-teal-300 opacity-20 blur-3xl rounded-full bottom-[-20%] right-[-20%] animate-ping"></div>
        <img
          src="/crypto-bg.gif"
          alt="crypto-animation"
          className="absolute w-full h-full object-cover opacity-5"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              About CryptoVerse
            </motion.h2>
            <motion.p
              className="text-lg text-gray-400 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              CryptoVerse is a leading cryptocurrency trading platform founded
              in 2017 with a mission to make digital asset trading accessible to
              everyone. Our team of blockchain experts and financial
              professionals are dedicated to providing a secure, transparent,
              and user-friendly experience.
            </motion.p>
            <motion.p
              className="text-lg text-gray-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              With over 5 million users worldwide, we offer access to hundreds
              of cryptocurrencies, advanced trading tools, and educational
              resources to help both beginners and experienced traders navigate
              the crypto markets.
            </motion.p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {features.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.1, duration: 0.6 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-teal-300 rounded-full flex items-center justify-center mr-4">
                    <i className={`${item.icon} text-white`}></i>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="bg-gradient-to-r from-indigo-500 to-teal-300 text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Us
            </motion.button>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 shadow-lg">
              <div className="w-full h-96 bg-gray-800 rounded-lg flex items-center justify-center">
                <i className="fas fa-play-circle text-6xl text-indigo-500"></i>
                <div className="w-full aspect-video rounded-lg overflow-hidden shadow-inner">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/SSo_EIwHSd4" 
                    title="Company Introduction Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>{" "}
              </div>
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-indigo-500 to-teal-300 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-indigo-500 to-teal-300 rounded-full opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
