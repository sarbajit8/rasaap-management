import React, { useState } from 'react';
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube, 
  Eye, 
  Users, 
  CheckCircle, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';

const ProductListingPage = () => {
  // State for selected plan
  const [selectedPlan, setSelectedPlan] = useState('basic');
  
  // State for FAQ accordion
  const [openFaq, setOpenFaq] = useState(null);
  
  // Toggle FAQ item
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  
  // Plans data
  const plans = [
    {
      id: 'basic',
      title: 'Basic Plan',
      price: '$299',
      popular: false,
      description: 'Perfect for small businesses just starting out'
    },
    {
      id: 'standard',
      title: 'Standard Plan',
      price: '$499',
      popular: true,
      description: 'Ideal for growing businesses looking to expand'
    },
    {
      id: 'premium',
      title: 'Premium Plan',
      price: '$899',
      popular: false,
      description: 'Advanced features for established businesses'
    }
  ];
  
  // Platform data
  const platforms = [
    { name: 'Instagram', icon: <Instagram size={24} />, color: 'bg-pink-100 text-pink-600' },
    { name: 'Facebook', icon: <Facebook size={24} />, color: 'bg-blue-100 text-blue-600' },
    { name: 'Twitter', icon: <Twitter size={24} />, color: 'bg-sky-100 text-sky-600' },
    { name: 'LinkedIn', icon: <Linkedin size={24} />, color: 'bg-indigo-100 text-indigo-600' },
    { name: 'YouTube', icon: <Youtube size={24} />, color: 'bg-red-100 text-red-600' }
  ];
  
  // Package features
  const packageFeatures = [
    {
      title: 'Content Creation',
      description: 'High-quality posts designed to engage your audience',
      icon: <CheckCircle size={20} />
    },
    {
      title: 'Audience Growth',
      description: 'Targeted strategies to increase your follower count',
      icon: <CheckCircle size={20} />
    },
    {
      title: 'Performance Analytics',
      description: 'Detailed reports on campaign performance',
      icon: <CheckCircle size={20} />
    },
    {
      title: 'Engagement Monitoring',
      description: 'Track and respond to comments and messages',
      icon: <CheckCircle size={20} />
    },
    {
      title: 'Competitor Analysis',
      description: 'Insights on competitor strategies and performance',
      icon: <CheckCircle size={20} />
    },
    {
      title: 'Strategy Consultation',
      description: 'Regular meetings with our social media experts',
      icon: <CheckCircle size={20} />
    }
  ];
  
  // FAQ data
  const faqs = [
    {
      question: 'How long does it take to see results?',
      answer: 'Most clients begin to see measurable results within 30-60 days. However, social media marketing is a long-term strategy, and the most significant results typically appear after 3-6 months of consistent effort.'
    },
    {
      question: 'Do you handle content creation or do we need to provide it?',
      answer: 'Our packages include professional content creation. Our team will develop engaging posts, graphics, and captions tailored to your brand. You can also provide your own content if preferred, or we can work with a mix of both.'
    },
    {
      question: 'How do you measure the success of social media campaigns?',
      answer: 'We track key performance indicators (KPIs) such as engagement rate, follower growth, reach, impressions, click-through rates, and conversions. We provide detailed monthly reports showing these metrics and their impact on your business goals.'
    },
    {
      question: 'Can we change platforms during the campaign?',
      answer: 'Yes, we understand that social media strategies may need to evolve. We can adjust your platform mix based on performance data and your business needs. Any changes will be discussed during our regular strategy meetings.'
    },
    {
      question: 'What information do you need from us to get started?',
      answer: 'To begin, we need your brand guidelines, access to your social media accounts, information about your target audience, business goals, and any specific campaigns or promotions you want to highlight. We\'ll provide a detailed onboarding questionnaire.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-400 to-red-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {/* Dark overlay */}
          <div className="absolute left-0 top-0 w-full h-full  opacity-20"></div>
          
          {/* Decorative shapes */}
          <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-pink-500 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-red-500 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-pink-300 rounded-full opacity-15 blur-2xl"></div>
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-red-400 rounded-full opacity-15 blur-xl"></div>
          <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-white rounded-full opacity-10 blur-xl"></div>
          
          {/* Small floating circles */}
          <div className="absolute top-20 right-20 w-8 h-8 bg-pink-200 rounded-full opacity-30"></div>
          <div className="absolute top-40 left-1/4 w-6 h-6 bg-red-300 rounded-full opacity-40"></div>
          <div className="absolute bottom-32 right-1/3 w-10 h-10 bg-pink-100 rounded-full opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Social Media Marketing</h1>
            <p className="text-xl opacity-90 mb-8">
              Boost your brand's online presence with our expert social media marketing services
            </p>
          </div>
        </div>
      </section>

      {/* Plan Selection Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Choose Your Plan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select the perfect social media marketing package to meet your business goals and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div 
                key={plan.id}
                className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
                  selectedPlan === plan.id 
                    ? 'ring-2 ring-pink-500 transform scale-105' 
                    : 'hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                <div className="relative">
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-pink-500 to-red-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                      Most Popular
                    </div>
                  )}
                  <div className={`p-6 ${selectedPlan === plan.id ? 'bg-gradient-to-r from-pink-50 to-red-50' : 'bg-white'}`}>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.title}</h3>
                    <div className="flex items-end mb-4">
                      <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-1">/month</span>
                    </div>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    <button
                      onClick={() => setSelectedPlan(plan.id)}
                      className={`w-full py-3 rounded-lg font-bold transition-colors ${
                        selectedPlan === plan.id
                          ? 'bg-gradient-to-r from-pink-500 to-red-600 text-white'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Platforms Covered Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Platforms Covered</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our social media marketing services cover all major platforms to maximize your online presence
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {platforms.map((platform, index) => (
              <div 
                key={index}
                className="flex flex-col items-center p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-full ${platform.color} flex items-center justify-center mb-4`}>
                  {platform.icon}
                </div>
                <h3 className="text-gray-800 font-medium">{platform.name}</h3>
              </div>
            ))}
          </div>
          
          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                  <Eye size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Monthly Views</h3>
                  <div className="flex items-center mb-2">
                    <span className="text-3xl font-bold text-gray-900">10K - 50K+</span>
                  </div>
                  <p className="text-gray-600">
                    Estimated monthly impressions across all platforms based on your selected plan and industry benchmarks.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-4">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Expected Leads</h3>
                  <div className="flex items-center mb-2">
                    <span className="text-3xl font-bold text-gray-900">50 - 200+</span>
                  </div>
                  <p className="text-gray-600">
                    Potential monthly leads generated through our targeted social media campaigns and engagement strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Package Includes Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Package Includes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive social media marketing packages include everything you need to succeed online
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packageFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 mr-3">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="/contact" 
              className="inline-block px-8 py-3 bg-gradient-to-r from-pink-500 to-red-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our social media marketing services
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="mb-4 border border-gray-200 rounded-lg overflow-hidden bg-white"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-gray-800">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp size={20} className="text-gray-500" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-500" />
                  )}
                </button>
                
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <a 
              href="/contact" 
              className="inline-block px-6 py-3 bg-white text-pink-600 font-bold rounded-lg border border-pink-600 hover:bg-pink-50 transition-colors"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductListingPage;