import React from 'react'
import { Outlet } from 'react-router-dom'
import authimg from '../../assets/auth.png'
const AuthLayout = () => {
  return (
    <div className='flex min-h-screen w-full'>

        <div className="hidden lg:flex items-center justify-center bg-cover bg-center w-1/2 px-12" style={{ backgroundImage: `url(${authimg})` }}>
        {/* Replace '/path/to/your-image.jpg' with the actual path to your image */}
        <div className='max-w-md space-y-6 text-center text-primary-foreground'>
        <h1 className='text-4xl font-extrabold tracking-tight text-white bg-red-500 bg-opacity-50 p-6 rounded-xl'>Welcome to Rasaap Management</h1>
        </div>
        </div>

        <div className='flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8'>
            <Outlet/>
        </div>
    </div>
  )
}

export default AuthLayout
