import React, { useState } from 'react';
import { Search, MousePointer, PenTool, Share2, Mail, BarChart2, Phone, ChevronDown, ChevronUp } from 'lucide-react';

const ShoppingServices = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Contact CTA Section */}
      <ContactCTA />
      
      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
};

const HeroSection = () => { 
    return ( 
      <section className="relative bg-gradient-to-r from-pink-400 to-red-600 text-white py-20 overflow-hidden"> 
        <div className="absolute inset-0 overflow-hidden"> 
          {/* Dark overlay */}
          <div className="absolute left-0 top-0 w-full h-full opacity-20"></div> 
          
          {/* Original large blurred circles */}
          <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-pink-500 rounded-full opacity-20 blur-3xl"></div> 
          <div className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-red-500 rounded-full opacity-20 blur-3xl"></div> 
          
          {/* Additional decorative shapes */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-pink-300 rounded-full opacity-15 blur-2xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-red-400 rounded-full opacity-15 blur-xl"></div>
          <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-white rounded-full opacity-10 blur-xl"></div>
          
          {/* Small floating circles */}
          <div className="absolute top-20 right-20 w-8 h-8 bg-pink-200 rounded-full opacity-30"></div>
          <div className="absolute top-40 left-1/4 w-6 h-6 bg-red-300 rounded-full opacity-40"></div>
          <div className="absolute bottom-32 right-1/3 w-10 h-10 bg-pink-100 rounded-full opacity-30"></div>
          
          {/* Rounded rectangles */}
          <div className="absolute bottom-1/3 left-20 w-40 h-24 bg-red-400 rounded-3xl opacity-15 rotate-12 blur-lg"></div>
          <div className="absolute top-1/3 right-10 w-32 h-16 bg-pink-300 rounded-2xl opacity-20 -rotate-6 blur-md"></div>
        </div> 
        
        <div className="container mx-auto px-4 relative z-10"> 
          <div className="max-w-3xl mx-auto text-center"> 
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Digital Marketing Services</h1> 
            <p className="text-xl opacity-90 mb-8"> 
              Comprehensive solutions to help your business grow online and reach your target audience effectively. 
            </p> 
            <div className="flex flex-wrap justify-center gap-4"> 
              <a 
                href="#services" 
                className="px-6 py-3 bg-white text-pink-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-colors" 
              > 
                Explore Services 
              </a> 
              <a 
                href="#contact" 
                className="px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors" 
              > 
                Get a Quote 
              </a> 
            </div> 
          </div> 
        </div> 
      </section> 
    ); 
  };
const ServiceCard = ({ Icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-pink-500">
      <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center mb-6 text-white">
        <Icon size={24} strokeWidth={2} />
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href="#contact" className="text-pink-600 font-medium inline-flex items-center hover:text-red-600 transition-colors duration-300">
        Learn More
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      Icon: Search,
      title: 'SEO Optimization',
      description: 'Boost your search rankings and drive organic traffic with our data-driven SEO strategies tailored to your business goals.'
    },
    {
      Icon: MousePointer,
      title: 'PPC Advertising',
      description: 'Maximize your ROI with targeted pay-per-click campaigns across Google, Facebook, Instagram, and other platforms.'
    },
    {
      Icon: PenTool,
      title: 'Content Marketing',
      description: 'Engage your audience with compelling content that builds authority, drives traffic, and converts visitors into customers.'
    },
    {
      Icon: Share2,
      title: 'Social Media Marketing',
      description: 'Build a strong social presence, engage with your audience, and drive brand awareness through strategic social campaigns.'
    },
    {
      Icon: Mail,
      title: 'Email Marketing',
      description: 'Nurture leads and boost conversions with personalized email campaigns that deliver the right message at the right time.'
    },
    {
      Icon: BarChart2,
      title: 'Analytics & Reporting',
      description: 'Gain valuable insights into your marketing performance with comprehensive analytics and easy-to-understand reports.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-pink-600 font-semibold tracking-wider uppercase px-4 py-1 bg-pink-100 rounded-full inline-block mb-3">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">Comprehensive Digital Marketing Solutions</h2>
          <p className="text-gray-600">We offer a full range of digital marketing services to help your business grow and succeed online.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-red-500 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              Icon={service.Icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-pink-600 to-red-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Need Help With Your Digital Marketing?</h2>
            <p className="text-xl opacity-90">
              Contact our experts now for a free consultation and personalized strategy.
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <a 
              href="tel:+1234567890" 
              className="flex items-center px-8 py-4 bg-white text-pink-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="mr-2" size={20} />
              Contact Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="flex justify-between items-center w-full text-left font-semibold text-gray-800 hover:text-pink-600 transition-colors focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp className="flex-shrink-0 text-pink-500" /> : <ChevronDown className="flex-shrink-0 text-gray-400" />}
      </button>
      
      {isOpen && (
        <div className="mt-3 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "What digital marketing services do you offer?",
      answer: "We offer a comprehensive range of digital marketing services including SEO, PPC advertising, content marketing, social media marketing, email marketing, and analytics & reporting. Each service is tailored to meet your specific business goals and target audience."
    },
    {
      question: "How much do your services cost?",
      answer: "Our pricing varies based on the scope of work, your business needs, and the specific services required. We offer customized packages to fit different budgets. Contact us for a free consultation and quote tailored to your business."
    },
    {
      question: "How long does it take to see results from digital marketing?",
      answer: "The timeline for results varies depending on the service. PPC campaigns can show immediate results, while SEO typically takes 3-6 months to see significant improvements. Social media and content marketing results generally become apparent within 1-3 months of consistent effort."
    },
    {
      question: "Do you work with small businesses or only large companies?",
      answer: "We work with businesses of all sizes! Our services are scalable and can be tailored to meet the needs and budgets of small businesses, startups, and large enterprises alike. We believe every business deserves quality digital marketing."
    },
    {
      question: "How do you measure the success of your marketing campaigns?",
      answer: "We use various metrics depending on your goals, including website traffic, conversion rates, keyword rankings, engagement rates, lead generation, and ROI. We provide regular reports with clear insights into campaign performance and areas for improvement."
    },
    {
      question: "Can I cancel my service if I'm not satisfied?",
      answer: "Yes, we don't believe in long-term contracts that lock you in. Our services are typically month-to-month after an initial period, and we're confident in our ability to deliver results. Your satisfaction is our priority."
    }
  ];
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-pink-600 font-semibold tracking-wider uppercase px-4 py-1 bg-pink-100 rounded-full inline-block mb-3">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">Frequently Asked Questions</h2>
          <p className="text-gray-600">Find answers to common questions about our digital marketing services.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-red-500 mx-auto mt-6"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              question={faq.question} 
              answer={faq.answer} 
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Don't see your question here? <a href="#contact" className="text-pink-600 font-medium hover:text-red-600 transition-colors">Contact us</a> for more information.</p>
          <a href="#contact" className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold rounded-full hover:from-pink-600 hover:to-red-600 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};


export default ShoppingServices