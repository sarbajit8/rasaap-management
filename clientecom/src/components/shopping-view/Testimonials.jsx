import React, { useState } from 'react'; 
  
function Testimonials() { 
  const testimonials = [ 
    { 
      id: 1, 
      content: "Working with this digital marketing agency transformed our online presence completely. Within just 3 months, our organic traffic increased by 156% and our conversion rate doubled. Their team is responsive, creative, and truly understands our business goals.", 
      author: "Sarah Johnson", 
      position: "Marketing Director", 
      company: "TechNova Solutions", 
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80" 
    }, 
    { 
      id: 2, 
      content: "The ROI we've seen from their PPC campaigns has been incredible. They took the time to understand our industry and target audience, resulting in a 43% reduction in cost per acquisition while increasing our qualified leads by 78%.", 
      author: "Michael Chen", 
      position: "CEO", 
      company: "Horizon Fitness", 
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" 
    }, 
    { 
      id: 3, 
      content: "Their content marketing strategy helped establish us as thought leaders in our industry. The quality of blog posts, case studies, and social media content they produce is exceptional, and has directly contributed to a 90% increase in our email subscribers.", 
      author: "Emily Rodriguez", 
      position: "Founder", 
      company: "Bloom Boutique", 
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" 
    }, 
    { 
      id: 4, 
      content: "We've worked with several marketing agencies before, but none have delivered results like this team. Their data-driven approach and transparent reporting give us complete confidence in our marketing investment.", 
      author: "David Wilson", 
      position: "Operations Manager", 
      company: "Coastal Properties", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80" 
    } 
  ]; 
 
  const [activeIndex, setActiveIndex] = useState(0); 
 
  const nextTestimonial = () => { 
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length); 
  }; 
 
  const prevTestimonial = () => { 
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length); 
  }; 
 
  return ( 
    <section id="testimonials" className="py-20 bg-white"> 
      <div className="container mx-auto px-4"> 
        <div className="text-center max-w-3xl mx-auto mb-16"> 
          <span className="text-pink-600 font-semibold tracking-wider uppercase">Testimonials</span> 
          <h2 className="text-4xl font-bold mt-2 mb-4 bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">What Our Clients Say</h2> 
          <p className="text-gray-700 text-lg">Don't just take our word for it. Here's what our clients have to say about our digital marketing services.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-red-500 mx-auto mt-4"></div>
        </div> 
 
        <div className="max-w-4xl mx-auto relative"> 
          <div className="relative bg-white rounded-2xl p-8 md:p-12 shadow-lg border-t-4 border-pink-500"> 
            <svg className="absolute top-0 left-0 transform -translate-x-6 -translate-y-6 h-16 w-16 text-pink-600 opacity-20" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"> 
              <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.68996 8.45999C7.16054 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9166 8.45999C14.3872 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor"/> 
            </svg> 
             
            <div className="relative z-10"> 
              <p className="text-xl md:text-2xl leading-relaxed text-gray-800 mb-8">{testimonials[activeIndex].content}</p> 
               
              <div className="flex items-center"> 
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-pink-500 p-1">
                  <img  
                    src={testimonials[activeIndex].image}  
                    alt={testimonials[activeIndex].author}  
                    className="w-full h-full rounded-full object-cover" 
                  /> 
                </div>
                <div className="ml-4"> 
                  <h4 className="font-bold text-gray-900">{testimonials[activeIndex].author}</h4> 
                  <p className="text-pink-600">{testimonials[activeIndex].position}, <span className="text-gray-600">{testimonials[activeIndex].company}</span></p> 
                </div> 
              </div> 
            </div> 
          </div>
          
          {/* Navigation Buttons - Positioned outside the testimonial card */}
          <div className="flex justify-between mt-6"> 
            <button  
              onClick={prevTestimonial} 
              className="p-3 rounded-full bg-white shadow-md hover:bg-pink-100 transition-colors duration-300 border border-pink-200 group" 
              aria-label="Previous testimonial" 
            > 
              <svg className="w-5 h-5 text-pink-600 group-hover:text-red-600 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /> 
              </svg> 
            </button> 
            
            {/* Pagination Indicators */}
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-gradient-to-r from-pink-500 to-red-500 w-6' : 'bg-gray-300 hover:bg-pink-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button  
              onClick={nextTestimonial} 
              className="p-3 rounded-full bg-white shadow-md hover:bg-pink-100 transition-colors duration-300 border border-pink-200 group" 
              aria-label="Next testimonial" 
            > 
              <svg className="w-5 h-5 text-pink-600 group-hover:text-red-600 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /> 
              </svg> 
            </button> 
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <a href="#contact" className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold rounded-full hover:from-pink-600 hover:to-red-600 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
            Get Your Success Story
          </a>
        </div>
      </div> 
    </section> 
  ); 
}; 
 
export default Testimonials;