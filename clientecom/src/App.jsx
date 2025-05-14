import React from 'react'
import ShoppingDashboard from './pages/shopping-view/shopping-dashboard'
import ShoppingLayout from './components/shopping-view/layout'
import { Route, Routes } from 'react-router-dom'
import ShoppingServices from './pages/shopping-view/shopping-services'
import ShoppingAbout from './pages/shopping-view/shopping-about'
import ShoppingLeads from './pages/shopping-view/shopping-leads'
import ContactPage from './pages/shopping-view/shopping-contact'
import GalleryPage from './pages/shopping-view/shopping-gallery'
import ProductListingPage from './components/shopping-view/shopping-products'
import { SignIn } from '@clerk/clerk-react'

const App = () => {
  return (
    <div className='flex flex-col overflow-hidden bg-white'>
    {/* common component */}
    <Routes>
    <Route path="/login" element={<SignIn/>}/> 

       <Route path="/shop" element={
        //  <CheckAuth isAuthenticated={isAuthenticated} user={user}>
         <ShoppingLayout/>
      //  </CheckAuth>
        }>
      <Route path="dashboard" element={<ShoppingDashboard/>}/> 
      <Route path="services" element={<ShoppingServices/>}/> 
      <Route path="about" element={<ShoppingAbout/>}/> 
      <Route path="leads" element={<ShoppingLeads/>}/> 
      <Route path="contact" element={<ContactPage/>}/> 
      <Route path="gallery" element={<GalleryPage/>}/> 
      <Route path="products" element={<ProductListingPage/>}/> 

      
       

      
      </Route>
      </Routes>
    </div>
  )
}

export default App