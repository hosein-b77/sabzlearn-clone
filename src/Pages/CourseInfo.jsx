import React from 'react'
import Header from '../Components/Header'
import BreadCrumb from '../Components/BreadCrumb'
import CourseInfoMain from '../Components/CourseInfoMain'
import MainInfoSection from '../Components/MainInfoSection'
import Footer from '../Components/Footer'
export default function CourseInfo() {
    return (
        <>
            <Header />
            <BreadCrumb links={[
                { id: 1, title: "خانه", to: "/" },
                { id: 2, title: "آموزش برنامه نویسی فرانت اند", to: "/category-info/frontend" },
                { id: 3, title: "دوره متخصص جاوا اسکریپت", to: "/course-info/js-expert" }
            ]}
            />
            <CourseInfoMain />
            <MainInfoSection/>
            <Footer/>
        </>
    )
}
