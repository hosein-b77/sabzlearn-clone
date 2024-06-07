import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Landing from '../Components/Landing'
import LatestCourses from '../Components/LatestCourses'
import AboutUs from '../Components/AboutUs'
import PopularCourses from '../Components/PopularCourses'
import PreSellCourses from '../Components/PreSellCourses'
import LatestArticles from '../Components/LatestArticles'
import Footer from '../Components/Footer'
export default function IndexPage() {
  const [indexInfo, setIndexInfo] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/v1/infos/index')
      .then(res => res.json())
      .then(data => setIndexInfo(data))
  }, [])
  return (
    <>
      <Header phone={indexInfo.phone} email={indexInfo.email} />
      <Landing coursesCount={indexInfo.coursesCount} usersCount={indexInfo.usersCount} totalTime={indexInfo.totalTime}/>
      <LatestCourses />
      <AboutUs />
      <PopularCourses />
      <PreSellCourses />
      <LatestArticles />
      <Footer />
    </>
  )
}
