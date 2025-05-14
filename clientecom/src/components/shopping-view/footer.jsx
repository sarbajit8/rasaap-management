import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import img1 from '../../assets/rlogoe.png'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img src={img1} alt="Digital Marketing Pro" className="h-15" />
              <h1 className='text-pink-600 font-bold text-3xl'>Rasaap Info Solutions</h1>
              <p className='font-bold'>Your Success Our Satisfaction</p>
            </div>
            <p className="text-gray-400 mb-6">
              We help businesses grow their online presence through strategic digital marketing solutions tailored to their unique needs and goals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 relative inline-block">
              Our Services
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-pink-600"></span>
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-1 transition-all duration-300">Search Engine Optimization</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-1 transition-all duration-300">Pay-Per-Click Advertising</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-1 transition-all duration-300">Social Media Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-1 transition-all duration-300">Content Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-1 transition-all duration-300">Email Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-1 transition-all duration-300">Analytics & Reporting</a></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-pink-600"></span>
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-1 transition-all duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-1 transition-all duration-300">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-1 transition-all duration-300">Our Process</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-1 transition-all duration-300">Pricing Plans</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-1 transition-all duration-300">Blog & Resources</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white hover:pl-1 transition-all duration-300">Careers</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4 relative inline-block">
              Subscribe to Our Newsletter
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-pink-600"></span>
            </h3>
            <p className="text-gray-400 mb-4">Get the latest digital marketing tips, trends, and strategies delivered to your inbox weekly.</p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-pink-600"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-r-md transition duration-300"
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
            <p className="text-xs text-gray-500">
              By subscribing, you agree to our <a href="#" className="text-pink-400 hover:underline">Privacy Policy</a> and consent to receive marketing emails.
            </p>
          </div>
        </div>
        
        {/* Middle Footer - Awards & Certifications */}
        <div className="border-t border-b border-gray-800 py-8 my-8">
          <div className="text-center mb-6">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Trusted By Leading Brands & Certified By</h4>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <img src="https://via.placeholder.com/120x40" alt="Google Partner" className="h-8" />
            <img src="https://via.placeholder.com/120x40" alt="Facebook Marketing Partner" className="h-8" />
            <img src="https://via.placeholder.com/120x40" alt="HubSpot Certified" className="h-8" />
            <img src="https://via.placeholder.com/120x40" alt="Semrush Certified" className="h-8" />
            <img src="https://via.placeholder.com/120x40" alt="Shopify Partner" className="h-8" />
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="text-sm text-gray-500">
            &copy; {currentYear} Digital Marketing Pro. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-4 justify-start md:justify-end text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">Cookie Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;