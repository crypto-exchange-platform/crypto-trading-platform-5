const NewsSection = () => {
  const newsList = [
    {
      category: 'Crypto News',
      time: '2 hours ago',
      icon: 'fas fa-newspaper',
      title: 'Bitcoin Surges Past $43,000 as Institutional Interest Grows',
      description: 'Major financial institutions are increasing their Bitcoin holdings, signaling growing mainstream adoption...',
      gradient: 'from-indigo-500 to-teal-300',
    },
    {
      category: 'Market Analysis',
      time: '5 hours ago',
      icon: 'fas fa-chart-line',
      title: 'Ethereum Upgrade Could Reduce Gas Fees by 50%',
      description: 'The upcoming network upgrade aims to significantly improve scalability and reduce transaction costs for users...',
      gradient: 'from-teal-300 to-indigo-500',
    },
    {
      category: 'Regulation',
      time: '1 day ago',
      icon: 'fas fa-globe',
      title: 'New Crypto Regulations Expected in Major Economies',
      description: 'Governments worldwide are working on comprehensive frameworks to regulate digital assets while fostering innovation...',
      gradient: 'from-indigo-500 to-teal-300',
    },
  ];

  return (
    <section id="news" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Latest Market News</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            Stay updated with the latest cryptocurrency and forex market trends
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsList.map((news, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 transition"
            >
              <div className={`h-48 bg-gradient-to-r ${news.gradient} flex items-center justify-center`}>
                <i className={`${news.icon} text-6xl text-white opacity-30`}></i>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <span>{news.category}</span>
                  <span className="mx-2">•</span>
                  <span>{news.time}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{news.title}</h3>
                <p className="text-gray-400 mb-4">{news.description}</p>
                <a
                  href="#"
                  className="text-indigo-400 hover:text-teal-300 font-medium flex items-center"
                >
                  Read More <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-indigo-500 to-teal-300 text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition duration-300">
            View All News Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
