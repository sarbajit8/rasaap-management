import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'

const Clerk_key = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!Clerk_key) {
  throw new Error("Missing Publishable Key")
}
createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={Clerk_key} afterSignOutUrl="/">

  <BrowserRouter>
      <App />

  </BrowserRouter>
  </ClerkProvider>
)
