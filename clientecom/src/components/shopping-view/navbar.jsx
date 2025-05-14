import React, { useState, useEffect } from 'react';
import img1 from '../../assets/rlogoe.png'
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user } = useUser();
  const { openSignIn } = useClerk();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
        <div className='flex items-center'> 
  <img className='w-14 h-14 p-1' src={img1} alt="Rasaap Info Solutions Logo" /> 
  
  {/* Text only visible on large screens */}
  <div className='flex-col hidden lg:flex'> 
    <a href="#" className={`text-2xl font-bold ${scrolled ? 'text-pink-600' : 'text-white'}`}> 
      Rasaap Info Solutions 
    </a> 
    <p className={`font-bold ${scrolled ? 'text-pink-400' : 'text-gray-200'}`}>
      Your Success Our Satisfaction
    </p> 
  </div>
</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="./dashboard" className={`font-bold ${scrolled ? 'text-pink-600' : 'text-white'} hover:text-pink-500 transition-colors`}>Home</Link>
            <Link to="./services" className={`font-bold ${scrolled ? 'text-pink-600' : 'text-white'} hover:text-pink-500 transition-colors`}>Services</Link>
            <Link to="./about" className={`font-bold ${scrolled ? 'text-pink-600' : 'text-white'} hover:text-pink-500 transition-colors`}>  About&nbsp;&nbsp;Us</Link>

            <Link to="./leads" className={`font-bold ${scrolled ? 'text-pink-600' : 'text-white'} hover:text-pink-500 transition-colors`}>Leads</Link>
            <Link to="./gallery" className={`font-bold ${scrolled ? 'text-pink-600' : 'text-white'} hover:text-pink-500 transition-colors`}>Gallery</Link>
            <Link to="./contact" className={`font-bold ${scrolled ? 'text-pink-600' : 'text-white'} hover:text-pink-500 transition-colors`}>Contact</Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">

          {user ? (
        <UserButton  appearance={{ elements: { userButtonPopoverFooter: "hidden",Orders:"shop/acount" }  }} />
      ) : (
        <Button onClick={openSignIn}  className="font-bold bg-pink-200 text-gray-600 px-6 py-2 rounded-full hover:bg-pink-600 hover:text-white transition-colors">
       
          Get Started
     
        </Button>      )}
           
           
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-gray-800' : 'text-white'} focus:outline-none`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            <div className="flex flex-col space-y-4">
              <Link  to="./dashboard" className="text-gray-800 hover:text-pink-500 transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
              <Link  to="./services" className="text-gray-800 hover:text-pink-500 transition-colors" onClick={() => setIsOpen(false)}>Services</Link>
              <Link  to="./about" className="text-gray-800 hover:text-pink-500 transition-colors" onClick={() => setIsOpen(false)}>About Us</Link>

              <Link href="./leads" className="text-gray-800 hover:text-pink-500 transition-colors" onClick={() => setIsOpen(false)}>Leads</Link>
              <Link href="./gallery" className="text-gray-800 hover:text-pink-500 transition-colors" onClick={() => setIsOpen(false)}>Gallery</Link>
              <Link href="./contact" className="text-gray-800 hover:text-pink-500 transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
              <Link href="#contact" className="bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700 transition-colors text-center">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;