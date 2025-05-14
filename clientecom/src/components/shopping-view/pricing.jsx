import React from 'react'; 

function Pricing() { 
  const pricingPlans = [ 
    { 
      id: 1, 
      name: 'Basic', 
      price: '$499', 
      period: 'per month', 
      description: 'Perfect for small businesses just getting started with digital marketing', 
      features: [ 
        'Social Media Management (2 platforms)', 
        'Basic SEO Optimization', 
        'Monthly Performance Report', 
        'Email Support', 
        '1 Blog Post per Month' 
      ], 
      isPopular: false, 
      buttonText: 'Get Started' 
    }, 
    { 
      id: 2, 
      name: 'Professional', 
      price: '$999', 
      period: 'per month', 
      description: 'Ideal for growing businesses looking to expand their online presence', 
      features: [ 
        'Social Media Management (4 platforms)', 
        'Advanced SEO Optimization', 
        'Weekly Performance Reports', 
        'Priority Email & Phone Support', 
        '4 Blog Posts per Month', 
        'Google Ads Management ($1000 budget)', 
        'Conversion Rate Optimization' 
      ], 
      isPopular: true, 
      buttonText: 'Get Started' 
    }, 
    { 
      id: 3, 
      name: 'Enterprise', 
      price: '$1,999', 
      period: 'per month', 
      description: 'Comprehensive solution for established businesses seeking maximum growth', 
      features: [ 
        'Social Media Management (All platforms)', 
        'Premium SEO Optimization', 
        'Real-time Analytics Dashboard', 
        '24/7 Dedicated Support', 
        '8 Blog Posts per Month', 
        'Google & Facebook Ads Management', 
        'Advanced Conversion Optimization', 
        'Custom Marketing Strategy', 
        'Quarterly Strategy Review' 
      ], 
      isPopular: false, 
      buttonText: 'Contact Us' 
    } 
  ]; 

  return ( 
    <section id="pricing" className="py-24 bg-gradient-to-b from-pink-50 to-red-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-pink-600 font-semibold tracking-wider uppercase px-4 py-1 bg-pink-100 rounded-full inline-block mb-3">Pricing Plans</span>
          <h2 className="text-4xl font-bold mt-2 mb-5 bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">Find the Perfect Plan for Your Business</h2>
          <p className="text-gray-700 text-lg">Choose from our competitive pricing plans designed to fit businesses of all sizes. All plans include a 14-day free trial.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-red-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl ${
                plan.isPopular ? 'ring-4 ring-pink-500 relative transform scale-105 z-10' : ''
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs font-bold px-4 py-2 rounded-bl-xl">
                  Most Popular
                </div>
              )}
              <div className="p-2">
                <div className={`rounded-xl p-8 ${plan.isPopular ? 'bg-gradient-to-br from-pink-50 to-red-50' : ''}`}>
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className={`text-5xl font-extrabold ${plan.isPopular ? 'bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent' : 'text-gray-900'}`}>{plan.price}</span>
                    <span className="ml-1 text-xl font-medium text-gray-500">{plan.period}</span>
                  </div>
                  <p className="mt-5 text-gray-600">{plan.description}</p>
                  
                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className={`h-5 w-5 ${plan.isPopular ? 'text-pink-500' : 'text-pink-400'} shrink-0 mr-3`}>
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-10">
                    <button
                      className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                        plan.isPopular 
                          ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-pink-600 hover:to-red-600 shadow-lg hover:shadow-xl' 
                          : 'bg-white text-gray-900 hover:bg-pink-50 border-2 border-pink-200 hover:border-pink-400'
                      }`}
                    >
                      {plan.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-700 mb-6">Need a custom plan? <a href="#contact" className="text-pink-600 font-medium hover:text-red-600 transition-colors duration-300">Contact us</a> for a tailored solution.</p>
          <div className="inline-block bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
            <a href="#contact" className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold rounded-full hover:from-pink-600 hover:to-red-600 transform hover:-translate-y-1 transition-all duration-300">
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  ); 
} 

export default Pricing;