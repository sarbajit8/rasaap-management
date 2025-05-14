import React from 'react';
import { ArrowRight } from 'lucide-react';

const GalleryPage = () => {
  // Sample gallery items
  const galleryItems = [
    {
      id: 1,
      title: 'Social Media Campaign',
      category: 'Social Media',
      image: '/images/gallery/social-media-campaign.jpg',
      description: 'Boosted engagement by 200% for a fashion brand'
    },
    {
      id: 2,
      title: 'SEO Optimization',
      category: 'SEO',
      image: '/images/gallery/seo-project.jpg',
      description: 'Increased organic traffic by 150% in 3 months'
    },
    {
      id: 3,
      title: 'Email Marketing',
      category: 'Email',
      image: '/images/gallery/email-campaign.jpg',
      description: 'Generated $50k in revenue from a single campaign'
    },
    {
      id: 4,
      title: 'Content Marketing',
      category: 'Content',
      image: '/images/gallery/content-marketing.jpg',
      description: 'Created viral content with 1M+ views'
    },
    {
      id: 5,
      title: 'PPC Advertising',
      category: 'PPC',
      image: '/images/gallery/ppc-campaign.jpg',
      description: 'Reduced cost per acquisition by 40%'
    },
    {
      id: 6,
      title: 'Website Redesign',
      category: 'Web Design',
      image: '/images/gallery/website-redesign.jpg',
      description: 'Improved conversion rate by 75%'
    },
    {
      id: 7,
      title: 'Brand Identity',
      category: 'Branding',
      image: '/images/gallery/brand-identity.jpg',
      description: 'Complete rebrand for an established business'
    },
    {
      id: 8,
      title: 'Video Marketing',
      category: 'Video',
      image: '/images/gallery/video-marketing.jpg',
      description: 'Created a series of promotional videos'
    },
    {
      id: 9,
      title: 'Analytics Dashboard',
      category: 'Analytics',
      image: '/images/gallery/analytics-dashboard.jpg',
      description: 'Custom reporting solution for e-commerce'
    }
  ];

  // Filter categories
  const categories = ['All', 'Social Media', 'SEO', 'Email', 'Content', 'PPC', 'Web Design', 'Branding', 'Video', 'Analytics'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-400 to-red-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {/* Dark overlay */}
          <div className="absolute left-0 top-0 w-full h-full opacity-20"></div>
          
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Work Gallery</h1>
            <p className="text-xl opacity-90 mb-8">
              Explore our portfolio of successful digital marketing projects and campaigns
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  index === 0
                    ? 'bg-gradient-to-r from-pink-500 to-red-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Pixelated Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div 
                key={item.id} 
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image Container with Pixelated Effect */}
                <div className="relative overflow-hidden h-64">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-red-600/20 group-hover:opacity-0 transition-opacity z-10"></div>
                  
                  {/* Pixelated Image Effect */}
                  <div className="absolute inset-0 bg-gray-200 z-0">
                    <div className="w-full h-full relative overflow-hidden" style={{ imageRendering: 'pixelated' }}>
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Pixelated Overlay Grid */}
                      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-10 group-hover:opacity-0 transition-opacity">
                        {Array.from({ length: 144 }).map((_, i) => (
                          <div 
                            key={i} 
                            className="border border-white/10"
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-white/90 text-pink-600 text-xs font-semibold rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  
                  <a 
                    href={`/gallery/${item.id}`} 
                    className="inline-flex items-center text-pink-600 font-medium hover:text-red-600 transition-colors"
                  >
                    View Case Study
                    <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-red-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
              Load More Projects
            </button>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 bg-gradient-to-br from-pink-500 to-red-600 p-12 text-white">
                <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
                <p className="mb-6 opacity-90">
                  Let's create something amazing together. Our team of experts is ready to help you achieve your digital marketing goals.
                </p>
                <a 
                  href="/contact" 
                  className="inline-block px-6 py-3 bg-white text-pink-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get in Touch
                </a>
              </div>
              <div className="md:w-1/2 p-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 mr-3">✓</div>
                    <span className="text-gray-700">Proven results across various industries</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 mr-3">✓</div>
                    <span className="text-gray-700">Customized strategies tailored to your goals</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 mr-3">✓</div>
                    <span className="text-gray-700">Transparent reporting and communication</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 mr-3">✓</div>
                    <span className="text-gray-700">Dedicated team of digital marketing experts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;