import React from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

const ContactPage = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-xl opacity-90 mb-8">
              Have questions about our services? Ready to start your digital journey? We're here to help!
            </p>
            <div className="flex flex-wrap justify-center gap-4"> 
        <a 
          href="#leads" 
          className="px-6 py-3 bg-white text-pink-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-colors" 
        > 
          Need Help? 
        </a>
      </div> 
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-colors" 
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-colors" 
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-colors" 
                      placeholder="+1 (123) 456-7890"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Interested In</label>
                    <select 
                      id="service" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="seo">Search Engine Optimization (SEO)</option>
                      <option value="ppc">Pay-Per-Click Advertising (PPC)</option>
                      <option value="social">Social Media Marketing</option>
                      <option value="content">Content Marketing</option>
                      <option value="email">Email Marketing</option>
                      <option value="web">Web Design & Development</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                    <textarea 
                      id="message" 
                      rows="4" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-colors" 
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full py-3 px-6 bg-gradient-to-r from-pink-500 to-red-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <div className="flex items-center justify-center">
                      <Send size={18} className="mr-2" />
                      Send Message
                    </div>
                  </button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h2>
                  <p className="text-gray-600 mb-8">
                    Feel free to reach out to us through any of the following channels. Our team is ready to assist you with any questions or inquiries.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                        <Phone size={20} />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                        <p className="mt-1 text-gray-600">+1 (555) 123-4567</p>
                        <p className="mt-1 text-gray-600">+1 (555) 987-6543</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                        <Mail size={20} />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Email</h3>
                        <p className="mt-1 text-gray-600">info@rasaapinfosolutions.com</p>
                        <p className="mt-1 text-gray-600">support@rasaapinfosolutions.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                        <MapPin size={20} />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Office Location</h3>
                        <p className="mt-1 text-gray-600">
                          123 Digital Avenue, Suite 456<br />
                          Tech City, CA 98765<br />
                          United States
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                        <Clock size={20} />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Business Hours</h3>
                        <p className="mt-1 text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="mt-1 text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                        <p className="mt-1 text-gray-600">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-pink-500 to-red-600 rounded-xl text-white shadow-lg">
                  <h3 className="text-xl font-bold mb-3">Need Urgent Help?</h3>
                  <p className="mb-4">Our customer support team is available for immediate assistance.</p>
                  <a 
                    href="tel:+15551234567" 
                    className="inline-flex items-center px-5 py-3 bg-white text-pink-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Phone size={18} className="mr-2" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-gray-800 text-center">Find Us On The Map</h2>
            <div className="h-96 bg-gray-200 rounded-xl overflow-hidden shadow-md">
              {/* Replace with actual map component or iframe */}
              <div className="w-full h-full flex items-center justify-center bg-gray-300">
                <p className="text-gray-600">Map goes here - Google Maps or other map service embed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">How quickly can you start working on my project?</h3>
                <p className="text-gray-600">We typically begin new projects within 3-5 business days after finalizing the contract and receiving the initial payment. For urgent requests, we offer expedited services at an additional fee.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">What information do you need to provide a quote?</h3>
                <p className="text-gray-600">To provide an accurate quote, we need to understand your business goals, target audience, current digital presence, competitors, and specific services you're interested in. The more details you provide, the more tailored our proposal will be.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Do you offer ongoing support after project completion?</h3>
                <p className="text-gray-600">Yes, we offer various maintenance and support packages to ensure your digital marketing efforts continue to perform optimally. Our team provides regular updates, performance reports, and strategic adjustments as needed.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">How do you measure the success of your digital marketing campaigns?</h3>
                <p className="text-gray-600">We track key performance indicators (KPIs) specific to your goals, such as website traffic, conversion rates, engagement metrics, lead generation, and ROI. We provide detailed monthly reports and regular strategy sessions to review performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;