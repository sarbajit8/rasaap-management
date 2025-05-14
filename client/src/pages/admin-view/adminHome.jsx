import { ArrowBigLeft } from 'lucide-react';
import React from 'react';
import { FaRobot, FaMobileAlt, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AdminHome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      {/* Top Banner */}
      {/* <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white text-center py-2 px-4 text-sm">
        <p>🎉 Rasaap info solution admin panel</p>
      </div> */}

      {/* Main Content */}
      <div className="relative">
        {/* Background Wave Effect */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute w-full h-full opacity-30">
            <div className="absolute top-1/4 w-[200%] h-[500px] -left-1/4 bg-pink-100 rounded-[100%] transform rotate-6"></div>
            <div className="absolute top-1/3 w-[200%] h-[500px] -right-1/4 bg-pink-200 rounded-[100%] transform -rotate-6"></div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 pt-16 pb-24 relative z-10">
          {/* Logo and Tagline */}
          <div className="text-center mb-16">
            <h1 className="text-pink-500 text-6xl font-bold mb-6">Rassap Admin</h1>
            <h2 className="text-gray-700 text-2xl font-medium">Welcome to Admin panel</h2>
          </div>

          {/* Action Cards */}
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Employee Management</h3>
              <p className="text-gray-600 mb-6">
                Start With Rasaap Info Solution's 
                <br />
                Employee Management
              </p>
              <Link to="../dashboard">
              <button className="flex items-center text-pink-600 font-medium hover:text-red-600 transition-colors">
              Start Now<FaArrowRight className="ml-2" />
              </button>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-4">E-Com Management</h3>
              <p className="text-gray-600 mb-6">
              Start With Rasaap Info Solution's 
              <br />
              E-Com Management
              </p>
              <Link to="../e-dashboard">
              <button className="flex items-center text-pink-600 font-medium hover:text-red-600 transition-colors">
                Start Now<FaArrowRight className="ml-2" />
              </button>
              </Link>
             
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* <footer className="bg-white py-6 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          <p>© 2023 rasaap AI. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  );
};

export default AdminHome