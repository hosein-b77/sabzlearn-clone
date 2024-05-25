import React, { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from "./routes"
import AuthContext from './context/authContext'
export default function App() {
  const router =useRoutes(routes)
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  const [token,setToken]=useState(false)
  const [userInfos,setUserInfos]=useState({})
  const login=(token)=>{
    setToken(token)
    localStorage.setItem('user',JSON.stringify(token))
  }
  const logout=(token)=>{
    setToken(null)
    setUserInfos({})
    localStorage.removeItem('user')
  }
  return (
    <AuthContext.Provider value={{
      isLoggedIn,
      token,
      userInfos,
      login,
      logout
    }}>
    {router}
    </AuthContext.Provider>
  )
}
