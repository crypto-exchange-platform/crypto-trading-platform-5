import { motion } from 'framer-motion';

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
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-indigo-500 to-teal-300 bg-clip-text text-transparent">
              Trade Crypto
            </span>{' '}
            Like a Pro
          </motion.h1>
          <motion.p
            className="max-w-2xl mx-auto text-xl text-gray-300 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Join the future of finance with our secure, fast, and easy-to-use cryptocurrency trading platform.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-indigo-500 to-teal-300 text-white px-8 py-4 rounded-full text-lg font-semibold transition duration-300 flex items-center justify-center"
            >
              Start Trading <i className="fas fa-arrow-right ml-2"></i>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-indigo-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-500 hover:bg-opacity-20 transition duration-300 flex items-center justify-center"
            >
              <i className="fas fa-play-circle mr-2"></i> Watch Demo
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
 