import React from 'react';  
import { Search, MousePointer, PenTool, Share2, Mail, BarChart2 } from 'lucide-react';
    
const ServiceCard = ({ Icon, title, description }) => {  
  return (  
    <div className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-t-4 border-pink-500">  
      <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center mb-6 text-white">  
        <Icon size={24} strokeWidth={2} />
      </div>  
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>  
      <p className="text-gray-600 mb-4">{description}</p>  
      <a href="./products" className="text-pink-600 font-medium inline-flex items-center hover:text-red-600 transition-colors duration-300">  
        Learn More  
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">  
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />  
        </svg>  
      </a>  
    </div>  
  );  
};  
  
const Services = () => {  
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
    <section id="services" className="py-20 bg-gradient-to-b from-pink-50 to-red-50">  
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
         
        <div className="mt-16 text-center"> 
          <a href="#contact" className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold rounded-full hover:from-pink-600 hover:to-red-600 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"> 
            Get Started Today 
          </a> 
        </div> 
      </div>  
      
    </section>  
  );  
};  
  
export default Services;