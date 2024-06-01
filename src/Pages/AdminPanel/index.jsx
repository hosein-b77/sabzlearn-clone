import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../../Components/AdminPanel/SideBar'

export default function AdminPanel() {
  return (
    <>
      <div id="content">
        <SideBar />
      </div>
      <Outlet /> {/* for show sub route of p-admin route */}
    </>
  )
}
