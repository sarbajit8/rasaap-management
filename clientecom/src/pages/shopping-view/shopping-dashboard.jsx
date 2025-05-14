
import Contact from '@/components/shopping-view/contact';
import CTA from '@/components/shopping-view/cta';
import Footer from '@/components/shopping-view/footer';
import Hero from '@/components/shopping-view/hero';
import MobileNavBar from '@/components/shopping-view/mobileNavbar';
import Navbar from '@/components/shopping-view/navbar';
import Portfolio from '@/components/shopping-view/portfolio';
import Pricing from '@/components/shopping-view/pricing';
import Process from '@/components/shopping-view/process';
import Services from '@/components/shopping-view/services';
import Stats from '@/components/shopping-view/stats';
import Team from '@/components/shopping-view/team';
import Testimonials from '@/components/shopping-view/Testimonials';
import React from 'react';


function ShoppingDashboard() {
  return (
    <div className="">
    <Hero />
    <Stats />
    <Services />
    <Process />
    <Portfolio />
     <Pricing />
    <Testimonials/>
    <Team />
    <CTA/>
    <Contact />
    
  </div>
  );
}


export default ShoppingDashboard