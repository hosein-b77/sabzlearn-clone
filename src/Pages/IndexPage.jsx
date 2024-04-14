import React from 'react'
import Header from '../Components/Header'
import Landing from '../Components/Landing'
import LatestCourses from '../Components/LatestCourses'
import AboutUs from '../Components/AboutUs'
export default function index() {
  return (
    <>
      <Header />
      <Landing />
      <LatestCourses/>
      <AboutUs/>
    </>
  )
}
