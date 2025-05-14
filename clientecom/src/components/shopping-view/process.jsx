import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We start by understanding your business, goals, target audience, and current digital presence.',
      icon: 'fas fa-search'
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Based on our findings, we develop a customized digital marketing strategy aligned with your objectives.',
      icon: 'fas fa-chess'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'Our team executes the strategy across all relevant channels, optimizing for maximum performance.',
      icon: 'fas fa-rocket'
    },
    {
      number: '04',
      title: 'Analysis',
      description: 'We continuously monitor results, analyze data, and make data-driven adjustments to improve outcomes.',
      icon: 'fas fa-chart-line'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-pink-600 font-semibold tracking-wider uppercase">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">How We Work</h2>
          <p className="text-gray-700">Our proven methodology ensures consistent results and a smooth experience for our clients.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-red-500 mx-auto mt-6"></div>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="relative group"
            >
              <div className="bg-white rounded-xl p-8 h-full shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-pink-500 hover:border-red-500">
                <div className="flex justify-between items-start mb-6">
                  {/* <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-red-500 text-white">
                  </div> */}
                  <div className="text-5xl font-bold bg-gradient-to-r from-pink-200 to-red-200 bg-clip-text text-transparent">{step.number}</div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-pink-600 transition-colors duration-300">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <svg className="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a href="#contact" className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold rounded-full hover:from-pink-600 hover:to-red-600 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
            Start Your Project Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;