import React from 'react';
import { Users, Award, Clock, Target, CheckCircle, TrendingUp } from 'lucide-react';

const ShoppingAbout = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Our Story Section */}
      <StorySection />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Our Process Section */}
      <ProcessSection />
      
      {/* Team Section */}
      <TeamSection />
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* Recent Work */}
      <RecentWorkSection />
      
      {/* Values Section */}
      <ValuesSection />
      
      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

const HeroSection = () => { 
    return ( 
      <section className="relative bg-gradient-to-r from-pink-400 to-red-600 text-white py-20 overflow-hidden"> 
        <div className="absolute inset-0 overflow-hidden"> 
          {/* Dark overlay */} 
          <div className="absolute left-0 top-0 w-full h-full  opacity-20"></div> 
          
          {/* Original large blurred circles */}
          <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-pink-500 rounded-full opacity-20 blur-3xl"></div> 
          <div className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-red-500 rounded-full opacity-20 blur-3xl"></div> 
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-pink-300 rounded-full opacity-15 blur-2xl"></div> 
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-red-400 rounded-full opacity-15 blur-xl"></div> 
          <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-white rounded-full opacity-10 blur-xl"></div> 
          
          {/* Additional decorative shapes */}
          <div className="absolute top-20 right-20 w-8 h-8 bg-pink-200 rounded-full opacity-30"></div>
          <div className="absolute top-40 left-1/4 w-6 h-6 bg-red-300 rounded-full opacity-40"></div>
          <div className="absolute bottom-32 right-1/3 w-10 h-10 bg-pink-100 rounded-full opacity-30"></div>
          
          {/* Medium floating circles with animation */}
          <div className="absolute top-1/3 left-20 w-24 h-24 bg-pink-400 rounded-full opacity-15 blur-lg animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-20 h-20 bg-red-300 rounded-full opacity-20 blur-md"></div>
          
          {/* Rounded rectangles */}
          <div className="absolute bottom-1/3 left-20 w-40 h-24 bg-red-400 rounded-3xl opacity-15 rotate-12 blur-lg"></div>
          <div className="absolute top-1/3 right-10 w-32 h-16 bg-pink-300 rounded-2xl opacity-20 -rotate-6 blur-md"></div>
          
          {/* Additional small shapes */}
          <div className="absolute top-3/4 left-1/2 w-5 h-5 bg-white rounded-full opacity-25"></div>
          <div className="absolute top-1/4 left-10 w-12 h-12 bg-pink-200 rounded-full opacity-20 blur-sm"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-red-200 rounded-full opacity-15 blur-sm animate-bounce"></div>
        </div> 
        
        <div className="container mx-auto px-4 relative z-10"> 
          <div className="max-w-3xl mx-auto text-center"> 
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Rasaap Info Solutions</h1> 
            <p className="text-xl opacity-90 mb-8"> 
              We're a team of digital marketing experts passionate about helping businesses grow online. 
            </p> 
            <div className="flex flex-wrap justify-center gap-4"> 
              {/* <a 
                href="#services" 
                className="px-6 py-3 bg-white text-pink-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-colors" 
              > 
                Explore Services 
              </a>  */}
              <a 
                href="#contact" 
                className="px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors" 
              > 
                Get a Quote 
              </a> 
            </div> 
          </div> 
        </div> 
      </section> 
    ); 
  };
const StorySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
              alt="Our team working" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          
          <div className="md:w-1/2">
            <span className="text-pink-600 font-semibold tracking-wider uppercase px-4 py-1 bg-pink-100 rounded-full inline-block mb-3">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">From Humble Beginnings to Digital Excellence</h2>
            
            <p className="text-gray-700 mb-4">
              Founded in 2015, Rasaap Info Solutions began with a simple mission: to help small businesses succeed in the digital world. What started as a two-person operation has grown into a full-service digital marketing agency with a team of experts dedicated to delivering exceptional results.
            </p>
            
            <p className="text-gray-700 mb-4">
              Our journey has been marked by continuous learning, adaptation to rapidly changing digital landscapes, and an unwavering commitment to our clients' success. We've helped hundreds of businesses across various industries establish their online presence, increase their visibility, and achieve sustainable growth.
            </p>
            
            <p className="text-gray-700">
              Today, we combine data-driven strategies, creative thinking, and cutting-edge technologies to create customized digital marketing solutions that drive real business results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  const stats = [
    { number: "500+", label: "Clients Served" },
    { number: "1200+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "8+", label: "Years of Experience" }
  ];
  
  return (
    <section className="py-16 bg-gradient-to-r from-pink-600 to-red-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-lg opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Discovery",
      description: "We start by understanding your business, goals, target audience, and current digital presence."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Strategy",
      description: "Based on our findings, we develop a customized strategy tailored to your specific needs and objectives."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Implementation",
      description: "Our team executes the strategy with precision, using best practices and cutting-edge techniques."
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Optimization",
      description: "We continuously monitor, analyze, and refine our approach to maximize results and ROI."
    }
  ];
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-pink-600 font-semibold tracking-wider uppercase px-4 py-1 bg-pink-100 rounded-full inline-block mb-3">How We Work</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Our Proven Process</h2>
          <p className="text-gray-600">We follow a systematic approach to ensure consistent results and client satisfaction.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-red-500 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              <div className="text-pink-600 mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamSection = () => {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bio: "With over 15 years of experience in digital marketing, Sarah leads our team with vision and expertise."
    },
    {
      name: "Michael Chen",
      role: "SEO Specialist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bio: "Michael's data-driven approach to SEO has helped countless businesses improve their search rankings."
    },
    {
      name: "Priya Patel",
      role: "Social Media Manager",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bio: "Priya creates engaging social media strategies that build communities and drive conversions."
    },
    {
      name: "David Wilson",
      role: "PPC Specialist",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bio: "David's analytical mindset helps clients maximize their ROI on paid advertising campaigns."
    }
  ];
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-pink-600 font-semibold tracking-wider uppercase px-4 py-1 bg-pink-100 rounded-full inline-block mb-3">Our Team</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Meet the Experts</h2>
          <p className="text-gray-600">Our talented team of digital marketing professionals is dedicated to your success.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-red-500 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-pink-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Working with Rasaap Info Solutions transformed our online presence. Our organic traffic increased by 200% in just 6 months!",
      author: "Emily Rodriguez",
      company: "Sunrise Boutique",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      quote: "Their team's expertise in PPC advertising helped us reduce our cost per acquisition by 40% while increasing conversions.",
      author: "James Wilson",
      company: "TechNova Solutions",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      quote: "The social media strategy they developed for us has significantly increased our brand awareness and customer engagement.",
      author: "Sophia Chen",
      company: "GreenLeaf Organics",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-pink-600 font-semibold tracking-wider uppercase px-4 py-1 bg-pink-100 rounded-full inline-block mb-3">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600">Don't just take our word for it. Here's what our clients have to say about working with us.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-red-500 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 relative">
              <div className="absolute -top-5 left-8 text-pink-500 text-6xl">"</div>
              <p className="text-gray-700 mb-6 pt-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const RecentWorkSection = () => {
  const projects = [
    {
      title: "E-commerce SEO Overhaul",
      client: "Fashion Forward",
      image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Increased organic traffic by 150% and boosted conversion rates by 40%."
    },
    {
      title: "Social Media Campaign",
      client: "Healthy Eats",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Generated 10,000+ new followers and increased engagement by 200%."
    },
    {
      title: "PPC Advertising Strategy",
      client: "Urban Furniture",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Reduced cost per acquisition by 35% while increasing sales by 60%."
    }
  ];
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-pink-600 font-semibold tracking-wider uppercase px-4 py-1 bg-pink-100 rounded-full inline-block mb-3">Our Work</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Recent Success Stories</h2>
          <p className="text-gray-600">Take a look at some of our recent projects and the results we've achieved for our clients.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-red-500 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <p className="text-pink-300 font-medium">{project.client}</p>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{project.description}</p>
                <a href="#" className="inline-flex items-center mt-4 text-pink-600 font-medium hover:text-red-600 transition-colors">
                  View Case Study
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold rounded-full hover:from-pink-600 hover:to-red-600 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
            View All Case Studies
          </a>
        </div>
      </div>
    </section>
  );
};

const ValuesSection = () => {
  const values = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from strategy development to execution and reporting."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Client-Centric",
      description: "Our clients' success is our success. We prioritize your goals and work tirelessly to achieve them."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Innovation",
      description: "We stay ahead of industry trends and continuously evolve our strategies to deliver the best results."
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Integrity",
      description: "We operate with complete transparency and honesty, building trust with our clients at every step."
    }
  ];
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-pink-600 font-semibold tracking-wider uppercase px-4 py-1 bg-pink-100 rounded-full inline-block mb-3">Our Values</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">What Drives Us</h2>
          <p className="text-gray-600">Our core values shape everything we do and guide our approach to digital marketing.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-red-500 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-pink-600 to-red-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl opacity-90 mb-10 leading-relaxed">
            Let's work together to create a digital marketing strategy that drives real results for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-white text-pink-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-colors text-center"
            >
              Get Started Today
            </a>
            <a 
              href="#case-studies" 
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors text-center"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingAbout