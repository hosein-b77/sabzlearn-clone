import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../../Components/AdminPanel/SideBar'
import Topbar from '../../Components/AdminPanel/Topbar'


export default function AdminPanel() {
  return (
    <>
      <SideBar />
      <Topbar />
      <div className='Content h-20 mt-32 mr-72'>
        <Outlet /> {/* for show sub route of p-admin route */}
      </div>


    </>
  )
}
