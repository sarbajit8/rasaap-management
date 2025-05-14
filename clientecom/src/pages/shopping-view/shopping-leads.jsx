import React, { useState } from 'react'; 
import { Phone, Coffee, ChevronRight } from 'lucide-react'; 

const ShoppingLeads = () => { 
  const [activeFilter, setActiveFilter] = useState('All'); 
  
  // Filter options 
  const filters = ['All', 'Pending', 'In-Progress', 'Followup on Int']; 
  
  // Sample leads data 
  const leads = [ 
    { 
      id: 1, 
      name: 'Demo Lead 1', 
      phone: '+919998857126', 
      status: 'New Lead', 
      date: '23-08-2022', 
      source: 'Added', 
      image: '/coffee-shop-logo.png', 
      statusColor: 'bg-blue-200 text-blue-800' 
    }, 
    { 
      id: 2, 
      name: 'Demo Lead 2', 
      phone: '+919033361261', 
      status: 'Interested', 
      date: '22-08-2022', 
      source: 'WhatsApp', 
      image: '/coffee-shop-logo.png', 
      statusColor: 'bg-green-200 text-green-800' 
    }, 
    { 
      id: 3, 
      name: 'Demo Lead 3', 
      phone: '+919998857432', 
      status: 'Visited', 
      date: '23-08-2022', 
      source: 'Sent Offer', 
      image: '/coffee-shop-logo.png', 
      statusColor: 'bg-blue-200 text-blue-800' 
    } 
  ]; 

  return (
    <div className="bg-gray-100 min-h-screen">
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
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Manage Your Leads</h1> 
      <p className="text-xl opacity-90 mb-8"> 
        Track and organize your customer inquiries to boost your sales and conversions. 
      </p> 
      <div className="flex flex-wrap justify-center gap-4"> 
        <a 
          href="#leads" 
          className="px-6 py-3 bg-white text-pink-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-colors" 
        > 
          Call Your Coordinator 
        </a>
      </div> 
    </div> 
  </div> 
</section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8" id="leads">
        {/* <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Leads</h2> */}
        
        {/* Filter Slider */}
        <div className="flex overflow-x-auto pb-2 mb-4 no-scrollbar"> 
          <div className="flex space-x-2"> 
            {filters.map((filter) => ( 
              <button 
                key={filter} 
                className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap ${ 
                  activeFilter === filter 
                    ? 'bg-pink-600 text-white' 
                    : 'bg-white text-gray-700 border border-gray-300' 
                }`} 
                onClick={() => setActiveFilter(filter)} 
              > 
                {filter} 
              </button> 
            ))} 
          </div> 
        </div> 

        {/* Leads List */} 
        <div className="space-y-3"> 
          {leads.map((lead) => ( 
            <div key={lead.id} className="bg-white rounded-lg shadow-sm overflow-hidden"> 
              <div className="p-4 flex items-center justify-between"> 
                <div className="flex items-center space-x-3"> 
                  <div className="h-12 w-12 rounded-lg overflow-hidden bg-amber-50 border border-amber-200 flex items-center justify-center"> 
                    <div className="text-center"> 
                      <div className="text-[8px] uppercase font-bold text-amber-900">Coffee</div> 
                      <div className="text-[8px] uppercase font-bold text-amber-900">Shop</div> 
                    </div> 
                  </div> 
                  <div> 
                    <h3 className="font-medium text-gray-900">{lead.name}</h3> 
                    <div className="flex items-center text-sm text-gray-500"> 
                      <span>{lead.phone}</span> 
                    </div> 
                    <div className="flex items-center text-xs text-gray-400 mt-1"> 
                      <span>{lead.source} • {lead.date}</span> 
                    </div> 
                  </div> 
                </div> 
                
                <div className="flex items-center space-x-2"> 
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${lead.statusColor}`}> 
                    {lead.status} 
                  </span> 
                  <a 
                    href={`tel:${lead.phone}`} 
                    className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-full text-white" 
                  > 
                    <Phone size={18} /> 
                  </a> 
                </div> 
              </div> 
              
              <div className="border-t border-gray-100 px-4 py-2"> 
                <button className="w-full text-left text-sm font-medium text-gray-700 flex items-center justify-between"> 
                  See Details 
                  <ChevronRight size={16} /> 
                </button> 
              </div> 
            </div> 
          ))} 
        </div>
      </div> 
    </div> 
  ); 
}; 

export default ShoppingLeads;

