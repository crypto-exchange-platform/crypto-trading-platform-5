import { motion } from 'framer-motion';

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
    <section id="how-it-works" className="relative py-20 bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute w-96 h-96 bg-indigo-500 opacity-20 rounded-full blur-3xl top-0 left-0 animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-teal-300 opacity-20 rounded-full blur-3xl bottom-20 right-10 animate-pulse"></div>
        <div className="absolute w-64 h-64 bg-purple-600 opacity-20 rounded-full blur-3xl top-32 right-40 animate-[float_12s_ease-in-out_infinite]"></div>
        <div className="absolute w-72 h-72 bg-cyan-400 opacity-10 rounded-full blur-2xl bottom-10 left-40 animate-[float_14s_ease-in-out_infinite]"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            How It Works
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-lg text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Get started in just a few simple steps
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg hover:scale-[1.02] hover:shadow-xl transition-transform duration-300"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 * index, duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-teal-300 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 