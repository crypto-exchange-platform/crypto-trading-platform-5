const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Create Your Account',
      description:
        'Sign up in minutes with just your email and secure your account with 2FA for maximum protection.',
    },
    {
      number: 2,
      title: 'Deposit Funds',
      description:
        'Connect your bank account or credit card to deposit funds instantly with our secure payment gateway.',
    },
    {
      number: 3,
      title: 'Start Trading',
      description:
        'Buy, sell, and trade hundreds of cryptocurrencies with our intuitive platform and advanced tools.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            Get started in just a few simple steps
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-teal-300 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
 