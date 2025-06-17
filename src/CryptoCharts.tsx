const CryptoCharts = () => {
  const charts = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      price: '$42,890.12',
      change: '+2.34%',
      changeColor: 'text-green-500',
      logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      price: '$2,345.67',
      change: '+1.78%',
      changeColor: 'text-green-500',
      logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    },
  ];

  const timeframes = ['1D', '1W', '1M', '3M', '1Y', 'ALL'];

  return (
    <section id="charts" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Real-Time Market Data</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            Track price movements with our advanced charting tools
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {charts.map((chart) => (
            <div
              key={chart.symbol}
              className="p-6 shadow-lg rounded-xl bg-gray-800/70 backdrop-blur-md"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <img src={chart.logo} alt={chart.name} className="w-8 h-8 mr-3" />
                  <h3 className="text-xl font-semibold text-white">
                    {chart.name} ({chart.symbol})
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-white">{chart.price}</div>
                  <div className={`${chart.changeColor} text-sm font-medium`}>{chart.change}</div>
                </div>
              </div>
              <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center">
                <i className="fas fa-chart-line text-4xl text-indigo-500"></i>
                <p className="ml-4 text-gray-400">Interactive chart would appear here</p>
              </div>
              <div className="flex justify-between mt-4">
                {timeframes.map((t) => (
                  <button
                    key={t}
                    className="text-gray-400 hover:text-white px-3 py-1 text-sm"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CryptoCharts;
 