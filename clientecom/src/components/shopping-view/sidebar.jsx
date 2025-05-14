import React from 'react';

function Sidebar() {
  return (
    <div className="sidebar space-y-6">
      {/* Search Widget */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4">
          <h5 className="font-bold mb-3">Search</h5>
          <div className="flex">
            <input 
              type="text" 
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l focus:outline-none" 
              placeholder="Search for..."
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700">
              Go!
            </button>
          </div>
        </div>
      </div>

      {/* Recent Posts Widget */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4">
          <h5 className="font-bold mb-3">Recent Posts</h5>
          
          {/* Recent Post 1 */}
          <div className="mb-4 transform transition-transform duration-300 hover:-translate-y-1">
            <div className="bg-white rounded-lg overflow-hidden shadow">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" 
                className="w-full h-40 object-cover" 
                alt="Blog Post"
              />
              <div className="p-3">
                <h6 className="font-bold mb-1">How to Stage Your Home for Quick Sale</h6>
                <p className="text-gray-500 text-sm">Posted 3 days ago</p>
              </div>
            </div>
          </div>
          
          {/* Recent Post 2 */}
          <div className="mb-4 transform transition-transform duration-300 hover:-translate-y-1">
            <div className="bg-white rounded-lg overflow-hidden shadow">
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80" 
                className="w-full h-40 object-cover" 
                alt="Blog Post"
              />
              <div className="p-3">
                <h6 className="font-bold mb-1">5 Tips for First-Time Home Buyers</h6>
                <p className="text-gray-500 text-sm">Posted 5 days ago</p>
              </div>
            </div>
          </div>
          
          {/* Recent Post 3 */}
          <div className="transform transition-transform duration-300 hover:-translate-y-1">
            <div className="bg-white rounded-lg overflow-hidden shadow">
              <img 
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80" 
                className="w-full h-40 object-cover" 
                alt="Blog Post"
              />
              <div className="p-3">
                <h6 className="font-bold mb-1">Real Estate Market Trends 2024</h6>
                <p className="text-gray-500 text-sm">Posted 1 week ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Widget */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4">
          <h5 className="font-bold mb-3">Categories</h5>
          <ul className="space-y-2">
            <li><a href="#" className="text-blue-600 hover:underline">Interior Design</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Real Estate Tips</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Market Analysis</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Home Improvement</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Investment Advice</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;