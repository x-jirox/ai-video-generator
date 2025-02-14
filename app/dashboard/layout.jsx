import React from 'react'
import Header from './component/Header'
import SideNav from './component/SideNav'

function DashboardLayout({ children }) {
  return (
    <div>
      <div className='hidden md:block h-screen bg-white fixed mt-[65px]'>
        <SideNav />
      </div>
      <div>
        <Header />
        <div className='md:ml-64'>
        {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout