import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout2 = () => {
  return (
    <div>
         <main >
          <Outlet />
        </main>
    </div>
  )
}

export default AdminLayout2