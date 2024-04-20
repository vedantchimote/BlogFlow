import Sidebar from '@/components/custom/Sidebar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='w-full md:flex '>
      <Sidebar/>
      <section className='flex flex-1 h-full '>
        <Outlet/>
      </section>
    </div>
  )
}

export default MainLayout
