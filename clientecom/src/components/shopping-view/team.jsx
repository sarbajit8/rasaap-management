import React from 'react'; 
  
function Team() { 
  const teamMembers = [ 
    { 
      id: 1, 
      name: 'Alex Morgan', 
      position: 'CEO & Founder', 
      bio: 'With over 15 years of experience in digital marketing, Alex has helped hundreds of businesses achieve their growth goals.', 
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80', 
      social: { 
        linkedin: '#', 
        twitter: '#', 
        email: '#' 
      } 
    }, 
    { 
      id: 2, 
      name: 'Jessica Chen', 
      position: 'SEO Specialist', 
      bio: 'Jessica is a certified SEO expert with a proven track record of improving search rankings and driving organic traffic.', 
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80', 
      social: { 
        linkedin: '#', 
        twitter: '#', 
        email: '#' 
      } 
    }, 
    { 
      id: 3, 
      name: 'Marcus Johnson', 
      position: 'PPC Campaign Manager', 
      bio: 'Marcus specializes in creating high-converting paid advertising campaigns across Google, Facebook, and LinkedIn.', 
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80', 
      social: { 
        linkedin: '#', 
        twitter: '#', 
        email: '#' 
      } 
    }, 
    { 
      id: 4, 
      name: 'Sophia Rodriguez', 
      position: 'Content Strategist', 
      bio: 'Sophia crafts compelling content strategies that engage audiences and establish brands as industry authorities.', 
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80', 
      social: { 
        linkedin: '#', 
        twitter: '#', 
        email: '#' 
      } 
    } 
  ]; 
 
  return ( 
    <section id="team" className="py-20 bg-gradient-to-b from-pink-50 to-red-50"> 
      <div className="container mx-auto px-4"> 
        <div className="text-center max-w-3xl mx-auto mb-16"> 
          <span className="text-pink-600 font-semibold tracking-wider uppercase px-4 py-1 bg-pink-100 rounded-full inline-block mb-3">Our Team</span> 
          <h2 className="text-4xl font-bold mt-2 mb-4 bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">Meet the Experts Behind Your Success</h2> 
          <p className="text-gray-700 text-lg">Our team of digital marketing specialists brings years of experience and passion to every project.</p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-red-500 mx-auto mt-6"></div>
        </div> 
 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> 
          {teamMembers.map((member) => ( 
            <div key={member.id} className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 border-pink-500"> 
              <div className="relative group"> 
                <img  
                  src={member.image}  
                  alt={member.name}  
                  className="w-full h-80 object-cover object-center" 
                /> 
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 via-red-800/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6"> 
                  <div className="flex space-x-4"> 
                    <a href={member.social.linkedin} className="text-white hover:text-pink-300 transition-colors"> 
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> 
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/> 
                      </svg> 
                    </a> 
                    <a href={member.social.twitter} className="text-white hover:text-pink-300 transition-colors"> 
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> 
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/> 
                      </svg> 
                    </a> 
                    <a href={member.social.email} className="text-white hover:text-pink-300 transition-colors"> 
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> 
                      </svg> 
                    </a> 
                  </div> 
                </div> 
              </div> 
              <div className="p-6"> 
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3> 
                <p className="text-pink-600 mb-3">{member.position}</p> 
                <p className="text-gray-600">{member.bio}</p> 
                <div className="w-0 group-hover:w-full h-1 bg-gradient-to-r from-pink-400 to-red-400 transition-all duration-300 mt-4"></div>
              </div> 
            </div> 
          ))} 
        </div> 
         
        <div className="text-center mt-12"> 
          <p className="text-gray-700 mb-6">Want to join our team? <a href="#careers" className="text-pink-600 font-medium hover:text-red-600 transition-colors">View open positions</a></p> 
          <a href="#contact" className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold rounded-full hover:from-pink-600 hover:to-red-600 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
            Join Our Team
          </a>
        </div> 
      </div> 
    </section> 
  ); 
} 
 
export default Team;