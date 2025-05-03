import React from 'react'
import EmployeeHeader from './header';
import { Outlet } from 'react-router-dom';

const EmployeeLayout = () => {
    return (
        <div className="flex flex-col bg-white overflow-hidden">
          {/* common header */}
          <EmployeeHeader />
          <main className="flex flex-col w-full">
            <Outlet />
          </main>
        </div>
      );
}

export default EmployeeLayout