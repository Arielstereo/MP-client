import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import { useAuthStore } from '../../store/auth'
import MobileBar from './MobileBar'

const Layout = () => {
  const token = useAuthStore((state) => state.token)

  return (
    <div className='bg-slate-200 w-screen h-screen'>
      {token
        ? (
          <div>
            <Navbar />

            <Outlet />

            <MobileBar />
          </div>
          )
        : (
          <div>
            <Outlet />
          </div>
          )}
    </div>
  )
}

export default Layout
