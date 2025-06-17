import { motion } from 'framer-motion';

const CryptoCards = () => {
  const coins = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      price: '$42,890.12',
      change: '+2.34%',
      changeColor: 'text-green-500',
      volume: '$28.4B',
      logo: '/Polygon.png',
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      price: '$2,345.67',
      change: '+1.78%',
      changeColor: 'text-green-500',
      volume: '$14.2B',
      logo: '/Comparison.png',
    },
    {
      name: 'Cardano',
      symbol: 'ADA',
      price: '$0.3456',
      change: '-0.45%',
      changeColor: 'text-red-500',
      volume: '$1.2B',
      logo: '/Mining.png',
    },
    {
      name: 'Solana',
      symbol: 'SOL',
      price: '$98.76',
      change: '+5.12%',
      changeColor: 'text-green-500',
      volume: '$3.5B',
      logo: '/Bitcoin.png',
    },
  ];

  return (
    <section id="crypto-cards" className="relative py-20 bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[600px] h-[600px] bg-gradient-to-br from-indigo-500 to-teal-400 rounded-full blur-[200px] opacity-30 animate-spin-slow top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-gradient-to-br from-teal-400 to-purple-600 rounded-full blur-[200px] opacity-30 animate-ping bottom-[-120px] right-[-100px]" />
        <div className="absolute w-full h-full bg-noise-pattern opacity-[0.03] mix-blend-soft-light pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Popular Cryptocurrencies
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-lg text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Trade the most popular digital assets with competitive fees
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coins.map((coin, index) => (
            <motion.div
              key={coin.symbol}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg hover:scale-[1.02] transition duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <img src={coin.logo} alt={coin.name} className="w-10 h-10 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold text-white">{coin.name}</h3>
                  <span className="text-gray-400 text-sm">{coin.symbol}</span>
                </div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-bold text-white">{coin.price}</span>
                <span className={`${coin.changeColor} text-sm font-medium`}>{coin.change}</span>
              </div>
              <div className="h-1 bg-gradient-to-r from-indigo-500 to-teal-300 rounded-full mb-4"></div>
              <div className="flex justify-between text-sm text-gray-400">
                <span>24h Volume</span>
                <span>{coin.volume}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.button
            className="bg-transparent border-2 border-indigo-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-500 hover:bg-opacity-20 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Cryptocurrencies
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default CryptoCards;
 