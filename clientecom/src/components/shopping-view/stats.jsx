import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StatItem = ({ number, label }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
      className="text-center p-6 rounded-lg bg-gradient-to-br from-pink-50 to-red-50 shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <motion.div 
        initial={{ scale: 0 }}
        animate={controls}
        variants={{
          hidden: { scale: 0 },
          visible: { scale: 1, transition: { delay: 0.2, duration: 0.5, type: 'spring', stiffness: 100 } }
        }}
        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-2"
      >
        {number}
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { delay: 0.4, duration: 0.5 } }
        }}
        className="text-gray-700"
      >
        {label}
      </motion.div>
    </motion.div>
  );
};

const Stats = () => {
  const stats = [
    { number: '500+', label: 'Clients Worldwide' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '15+', label: 'Years Experience' },
    { number: '250%', label: 'Average ROI' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent inline-block mb-2">Our Impact By The Numbers</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-red-500 mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem 
              key={index} 
              number={stat.number} 
              label={stat.label} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;