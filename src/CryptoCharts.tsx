import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const CryptoCharts = () => {
  const charts = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      price: '$42,890.12',
      change: '+2.34%',
      changeColor: 'text-green-500',
      logo: '/Bitcoin.png',
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      price: '$2,345.67',
      change: '+1.78%',
      changeColor: 'text-green-500',
      logo: '/Mining.png',
    },
  ];

  const chartRefs = useRef<(HTMLCanvasElement | null)[]>([]);

  useEffect(() => {
    charts.forEach((_, index) => {
      const canvas = chartRefs.current[index];
      if (!canvas) return;

      const existingChart = Chart.getChart(canvas);
      if (existingChart) existingChart.destroy();

      new Chart(canvas, {
        type: 'line',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [
            {
              label: charts[index].symbol,
              data: [42000, 42500, 43000, 42900, 44000, 44200, 42890],
              borderColor: '#6366f1',
              backgroundColor: 'rgba(99, 102, 241, 0.2)',
              fill: true,
              tension: 0.4,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              ticks: { color: '#9ca3af' },
              grid: { display: false },
            },
            y: {
              ticks: { color: '#9ca3af' },
              grid: { color: '#374151' },
            },
          },
        },
      });
    });
  }, []);

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
          {charts.map((chart, index) => (
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
              <div className="w-full h-64">
                <canvas
                  ref={((el: HTMLCanvasElement | null) => {
                    chartRefs.current[index] = el;
                  }) as React.Ref<HTMLCanvasElement>}
                />
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