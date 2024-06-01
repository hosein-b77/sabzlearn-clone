import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../../Components/AdminPanel/SideBar'
import Topbar from '../../Components/AdminPanel/Topbar'


export default function AdminPanel() {
  return (
    <>
      <SideBar/>
      <Topbar/>
          
      <Outlet /> {/* for show sub route of p-admin route */}
    </>
  )
}
