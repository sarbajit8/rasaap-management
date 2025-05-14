import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './navbar'
import Footer from './footer'
import MobileNavBar from './mobileNavbar'

const ShoppingLayout = () => {
  return (
    <div>
          <Navbar />

       <main >
    <Outlet />
  </main>
  <Footer/>
    <MobileNavBar/>
  </div>
  )
}

export default ShoppingLayout