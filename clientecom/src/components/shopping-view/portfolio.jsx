import React, { useState } from 'react'; 
  
const Portfolio = () => { 
  const [activeFilter, setActiveFilter] = useState('all'); 
   
  const projects = [ 
    { 
      id: 1, 
      title: 'E-commerce SEO Campaign', 
      category: 'seo', 
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80', 
      result: '156% increase in organic traffic' 
    }, 
    { 
      id: 2, 
      title: 'Social Media Campaign', 
      category: 'social', 
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80', 
      result: '200K+ engagement in 30 days' 
    }, 
    { 
      id: 3, 
      title: 'PPC Campaign for SaaS', 
      category: 'ppc', 
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 
      result: '320% ROI on ad spend' 
    }, 
    { 
      id: 4, 
      title: 'Content Strategy for Fintech', 
      category: 'content', 
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 
      result: '87% increase in lead generation' 
    }, 
    { 
      id: 5, 
      title: 'Email Marketing Automation', 
      category: 'email', 
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 
      result: '45% improvement in conversion rate' 
    }, 
    { 
      id: 6, 
      title: 'B2B LinkedIn Campaign', 
      category: 'social', 
      image: 'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', 
      result: '250+ qualified leads generated' 
    } 
  ]; 
 
  const filteredProjects = activeFilter === 'all'  
    ? projects  
    : projects.filter(project => project.category === activeFilter); 
 
  return ( 
    <section id="portfolio" className="py-20 bg-gradient-to-b from-pink-50 to-red-50"> 
      <div className="container mx-auto px-4"> 
        <div className="text-center max-w-3xl mx-auto mb-12"> 
          <span className="text-pink-600 font-semibold tracking-wider uppercase">Our Work</span> 
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">Case Studies & Results</h2> 
          <p className="text-gray-700">Take a look at some of our successful campaigns and the results we've achieved for our clients.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-red-500 mx-auto mt-4"></div>
        </div> 
         
        {/* Filter Buttons */} 
        <div className="flex flex-wrap justify-center mb-12 space-x-2"> 
          <button  
            onClick={() => setActiveFilter('all')} 
            className={`px-6 py-2 rounded-full mb-2 transition-all duration-300 ${activeFilter === 'all' ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-md' : 'bg-white text-gray-800 hover:bg-pink-100 border border-pink-200'}`} 
          > 
            All 
          </button> 
          <button  
            onClick={() => setActiveFilter('seo')} 
            className={`px-6 py-2 rounded-full mb-2 transition-all duration-300 ${activeFilter === 'seo' ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-md' : 'bg-white text-gray-800 hover:bg-pink-100 border border-pink-200'}`} 
          > 
            SEO 
          </button> 
          <button  
            onClick={() => setActiveFilter('social')} 
            className={`px-6 py-2 rounded-full mb-2 transition-all duration-300 ${activeFilter === 'social' ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-md' : 'bg-white text-gray-800 hover:bg-pink-100 border border-pink-200'}`} 
          > 
            Social Media 
          </button> 
          <button  
            onClick={() => setActiveFilter('ppc')} 
            className={`px-6 py-2 rounded-full mb-2 transition-all duration-300 ${activeFilter === 'ppc' ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-md' : 'bg-white text-gray-800 hover:bg-pink-100 border border-pink-200'}`} 
          > 
            PPC 
          </button> 
          <button  
            onClick={() => setActiveFilter('content')} 
            className={`px-6 py-2 rounded-full mb-2 transition-all duration-300 ${activeFilter === 'content' ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-md' : 'bg-white text-gray-800 hover:bg-pink-100 border border-pink-200'}`} 
          > 
            Content 
          </button> 
          <button  
            onClick={() => setActiveFilter('email')} 
            className={`px-6 py-2 rounded-full mb-2 transition-all duration-300 ${activeFilter === 'email' ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-md' : 'bg-white text-gray-800 hover:bg-pink-100 border border-pink-200'}`} 
          > 
            Email 
          </button> 
        </div> 
         
        {/* Projects Grid */} 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
          {filteredProjects.map((project) => ( 
            <div key={project.id} className="group relative overflow-hidden rounded-xl shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"> 
              <img  
                src={project.image}  
                alt={project.title}  
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" 
              /> 
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/90 via-red-800/70 to-transparent flex flex-col justify-end p-6 text-white"> 
                <h3 className="text-xl font-bold">{project.title}</h3> 
                <p className="text-pink-200 font-medium">{project.result}</p>
                <div className="w-0 group-hover:w-full h-1 bg-gradient-to-r from-pink-400 to-red-400 transition-all duration-300 mt-2"></div>
              </div> 
            </div> 
          ))} 
        </div>
        
        <div className="text-center mt-12">
          <a href="#contact" className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold rounded-full hover:from-pink-600 hover:to-red-600 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
            Start Your Project Today
          </a>
        </div>
      </div> 
    </section> 
  ); 
}; 
 
export default Portfolio;