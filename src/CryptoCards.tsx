const CryptoCards = () => {
  const coins = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      price: '$42,890.12',
      change: '+2.34%',
      changeColor: 'text-green-500',
      volume: '$28.4B',
      logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      price: '$2,345.67',
      change: '+1.78%',
      changeColor: 'text-green-500',
      volume: '$14.2B',
      logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    },
    {
      name: 'Cardano',
      symbol: 'ADA',
      price: '$0.3456',
      change: '-0.45%',
      changeColor: 'text-red-500',
      volume: '$1.2B',
      logo: 'https://cryptologos.cc/logos/cardano-ada-logo.png',
    },
    {
      name: 'Solana',
      symbol: 'SOL',
      price: '$98.76',
      change: '+5.12%',
      changeColor: 'text-green-500',
      volume: '$3.5B',
      logo: 'https://cryptologos.cc/logos/solana-sol-logo.png',
    },
  ];

  return (
    <section id="crypto-cards" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Popular Cryptocurrencies
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            Trade the most popular digital assets with competitive fees
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coins.map((coin) => (
            <div
              key={coin.symbol}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg hover:translate-y-[-5px] transition duration-300"
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
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-transparent border-2 border-indigo-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-500 hover:bg-opacity-20 transition duration-300">
            View All Cryptocurrencies
          </button>
        </div>
      </div>
    </section>
  );
};

export default CryptoCards;
 