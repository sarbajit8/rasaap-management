import React, { useState } from 'react';
import img1 from '../../assets/testhero.png'
import { Check } from 'lucide-react';

const Hero = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const openVideoModal = () => {
    setVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setVideoModalOpen(false);
  };

  return (
    <section id="home" className="relative pt-20 pb-20 md: bg-gradient-to-r from-pink-500 to-red-600 overflow-hidden"> 
      {/* Background Elements */} 
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0"> 
        <div className="absolute top-0 right-0 bg-white opacity-10 rounded-full w-96 h-96 -mt-20 -mr-20"></div> 
        <div className="absolute bottom-0 left-0 bg-white opacity-10 rounded-full w-80 h-80 -mb-20 -ml-20"></div> 
        <div className="absolute top-1/2 left-1/3 bg-white opacity-10 rounded-full w-40 h-40"></div> 
      </div> 
      
      

      <div className="container mx-auto px-4 pb-8 relative z-10"> 
        <div className="flex flex-col  md:flex-row items-center"> 
          <div className="md:w-1/2 p-4 text-center md:text-left text-white mb-12 md:mb-0"> 
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"> 
              Boost Your Business with Digital Marketing Excellence 
            </h1> 
            <p className="text-xl md:text-2xl mb-8 opacity-90"> 
              Strategic solutions to elevate your brand, increase conversions, and drive sustainable growth. 
            </p> 
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"> 
              <a href="#services" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-colors text-center"> 
                Explore Services 
              </a> 
              <a href="#contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-pink-600 px-8 py-3 rounded-full font-medium transition-colors text-center"> 
              Get Started
              </a> 
            </div> 
          </div> 
          <div className="flex justify-center md:w-1/2"> 
            <img  
src={img1}        
       alt="Digital Marketing"  
              className="w-auto h-[700px] rounded-lg transform hover:scale-105 transition-transform duration-500" 
            /> 
          </div> 
        </div> 
        
        {/* Trusted By Section */} 
        {/* <div className="mt-16 text-center"> 
          <p className="text-white text-lg mb-6 opacity-80">Trusted by innovative companies</p> 
          <div className="flex flex-wrap justify-center gap-8 md:gap-12"> 
            <img src=" `https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png` " alt="Google" className="h-8 opacity-70 hover:opacity-100 transition-opacity" /> 
            <img src=" `https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png` " alt="Netflix" className="h-8 opacity-70 hover:opacity-100 transition-opacity" /> 
            <img src=" `https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png` " alt="Amazon" className="h-8 opacity-70 hover:opacity-100 transition-opacity" /> 
            <img src=" `https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png` " alt="Facebook" className="h-8 opacity-70 hover:opacity-100 transition-opacity" /> 
            <img src=" `https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Shopify_logo.svg/2560px-Shopify_logo.svg.png` " alt="Shopify" className="h-8 opacity-70 hover:opacity-100 transition-opacity" /> 
          </div> 
        </div> */} 
      </div> 
      {/* How To Use Card */}
      <div className="container mx-auto px-4 relative z-10 mb-12 sm:block">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl max-w-4xl mx-auto transform hover:scale-[1.02] transition-all duration-300">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 text-white mb-6 md:mb-0 md:pr-6">
              <h2 className="text-2xl font-bold mb-3">How Our Digital Marketing Services Work</h2>
              <p className="opacity-90 mb-4">Watch our quick overview video to learn how our proven strategies can help your business grow online and achieve measurable results.</p>
              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-pink-600 mr-3">
<Check/>
                </div>
                <span>Customized strategies for your business needs</span>
              </div>
            </div>
            <div className="md:w-1/3 w-full relative"> 
  <div className="bg-gradient-to-br from-pink-500 to-red-500 rounded-lg overflow-hidden aspect-video relative cursor-pointer group" onClick={openVideoModal}> 
    <div className="absolute inset-0 flex items-center justify-center"> 
      <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300"> 
        <div className="w-0 h-0 border-t-6 md:border-t-8 border-b-6 md:border-b-8 border-l-9 md:border-l-12 border-t-transparent border-b-transparent border-l-pink-600 ml-1"></div> 
      </div> 
    </div> 
    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center py-1 md:py-2 text-xs md:text-sm"> 
      Watch Video (2:15) 
    </div> 
  </div> 
</div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl overflow-hidden max-w-4xl w-full relative">
            <button 
              onClick={closeVideoModal}
              className="absolute top-4 right-4 bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors z-10"
            >
              <span className="sr-only">Close</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="aspect-video">
              {/* Replace with your actual video embed code */}
              <div className="w-full h-full bg-black flex items-center justify-center text-white">
                <p>Your video would play here</p>
                {/* Example of how to embed a video:
                <iframe 
                  className="w-full h-full" 
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
                  title="Digital Marketing Services" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe> 
                */}
              </div>
            </div>
          </div>
        </div>
      )}
    </section> 
  ); 
}; 
 
export default Hero;