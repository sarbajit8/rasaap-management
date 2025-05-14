import React, { useState } from 'react'; 
import { Home, Briefcase, ShoppingBag, Users, BarChart2 } from 'lucide-react'; 
import { Link, useLocation } from 'react-router-dom'; // Import for routing

const MobileNavBar = () => { 
  // Get current path to determine active item
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(() => {
    // Initialize based on current path
    const path = location.pathname;
    if (path.includes('services')) return 'Services';
    if (path.includes('orders')) return 'My Orders';
    if (path.includes('leads')) return 'Leads';
    if (path.includes('business')) return 'Business';
    return 'Home'; // Default
  });

  // Menu items data
  const menuItems = [
    { icon: <Home size={20} />, label: 'Home', path: './dashboard' },
    { icon: <Briefcase size={20} />, label: 'Services', path: './services' },
    { icon: <ShoppingBag size={20} />, label: 'My Orders', path: '/orders' },
    { icon: <Users size={20} />, label: 'Leads', path: './leads' },
    { icon: <BarChart2 size={20} />, label: 'Business', path: '/business' }
  ];

  return ( 
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-50"> 
      <div className="flex justify-between items-center px-2 py-3"> 
        {menuItems.map((item) => (
          <NavItem 
            key={item.label}
            icon={item.icon} 
            label={item.label} 
            path={item.path}
            active={activeItem === item.label} 
            onClick={() => setActiveItem(item.label)}
          /> 
        ))}
      </div> 
    </div> 
  ); 
}; 

const NavItem = ({ icon, label, path, active = false, onClick }) => { 
  return ( 
    <a
      href={path}
      className={`flex flex-col items-center justify-center px-2 ${active ? 'text-transparent' : 'text-gray-500'}`} 
      onClick={onClick}
    > 
      <div 
        className={`p-1.5 rounded-full ${active 
          ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white' 
          : 'text-gray-500 hover:text-pink-500'}`} 
      > 
        {icon} 
      </div> 
      <span 
        className={`text-xs mt-1 font-medium ${active 
          ? 'bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent' 
          : 'text-gray-500'}`} 
      > 
        {label} 
      </span> 
      {active && <div className="h-1 w-5 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mt-1"></div>} 
    </a> 
  ); 
}; 

export default MobileNavBar;