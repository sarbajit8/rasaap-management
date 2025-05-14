import React from 'react'; 
 
function CTA() { 
  return ( 
    <section className="py-20 bg-gradient-to-r from-pink-600 to-red-700 text-white"> 
      <div className="container mx-auto px-4"> 
        <div className="max-w-4xl mx-auto text-center"> 
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2> 
          <p className="text-xl opacity-90 mb-10 leading-relaxed"> 
            Join hundreds of businesses that have increased their revenue through our data-driven digital marketing strategies. Get a free consultation and marketing audit today. 
          </p> 
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"> 
            <a 
              href="#contact" 
              className="px-8 py-4 bg-white text-pink-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-colors text-center hover:shadow-xl transform hover:-translate-y-1 duration-300" 
            > 
              Get Free Consultation 
            </a> 
            <a 
              href="#case-studies" 
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors text-center transform hover:-translate-y-1 duration-300" 
            > 
              View Case Studies 
            </a> 
          </div> 
          
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8"> 
            <div className="flex items-center"> 
              <svg className="w-5 h-5 mr-2 text-pink-300" fill="currentColor" viewBox="0 0 20 20"> 
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /> 
              </svg> 
              <span>No Long-Term Contracts</span> 
            </div> 
            <div className="flex items-center"> 
              <svg className="w-5 h-5 mr-2 text-pink-300" fill="currentColor" viewBox="0 0 20 20"> 
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /> 
              </svg> 
              <span>30-Day Money-Back Guarantee</span> 
            </div> 
            <div className="flex items-center"> 
              <svg className="w-5 h-5 mr-2 text-pink-300" fill="currentColor" viewBox="0 0 20 20"> 
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /> 
              </svg> 
              <span>Transparent Reporting</span> 
            </div> 
          </div> 
        </div> 
      </div> 
    </section> 
  ); 
} 

export default CTA;