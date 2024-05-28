import React, { useState, useCallback,useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from "./routes"
import AuthContext from './context/authContext'
export default function App() {
  const router =useRoutes(routes)
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  const [token,setToken]=useState(false)
  const [userInfos,setUserInfos]=useState({})
  const login = useCallback((userInfos, token) => {
    setToken(token);
    setIsLoggedIn(true);
    setUserInfos(userInfos);
    localStorage.setItem("user", JSON.stringify({ token }));
  }, []); //prevent loop with useCallback

  const logout = useCallback(() => {
    setToken(null);
    setUserInfos({});
    localStorage.removeItem("user");
  });

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    if (localStorageData) {
      fetch(`http://localhost:4000/v1/auth/me`, {
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      })
        .then((res) => res.json())
        .then((userData) => {
          setIsLoggedIn(true);
          setUserInfos(userData);
        });
    }
  }, [login]);

  return (
    <AuthContext.Provider value={{
      isLoggedIn,
      token,
      userInfos,
      login,
      logout
      //value of app.js states are replaced with authContext.js values
      //isLoggedIn:isLoggedIn, because of magic of js,we can just write isLoggedIn
    }}>
    {router}
    </AuthContext.Provider>
  )
}
