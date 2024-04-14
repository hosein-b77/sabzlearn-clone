import React from 'react'
import Header from '../Components/Header'
import Landing from '../Components/Landing'
import LatestCourses from '../Components/LatestCourses'
import AboutUs from '../Components/AboutUs'
import PopularCourses from '../Components/PopularCourses'
import PreSellCourses from '../Components/PreSellCourses'
export default function index() {
  return (
    <>
      <Header />
      <Landing />
      <LatestCourses/>
      <AboutUs/>
      <PopularCourses/>
      <PreSellCourses/>
    </>
  )
}
