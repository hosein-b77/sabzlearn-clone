import React from 'react'
import Header from '../Components/Header'
import BreadCrumb from '../Components/BreadCrumb'
import SectionHeader from '../Components/SectionHeader'
import CourseBox from '../Components/CourseBox'
import Pagination from '../Components/Pagination'
import Footer from '../Components/Footer'
export default function Courses() {
    return (
        <>
            <Header />
            <BreadCrumb links={[
                { id: 1, title: "خانه", to: "/" },
                { id: 2, title: "تمامی دوره ها", to: "/courses" },

            ]}
            />
            <main class="courses">
                <div class="container">
                    <SectionHeader title="تمامی دوره ها" />
                    <div className='course-wrapper mt-20 grid grid-cols-4 gap-10'>
                        <CourseBox />
                        <CourseBox />
                        <CourseBox />
                        <CourseBox />
                        <CourseBox />
                        <CourseBox />
                    </div>
                    < Pagination />
                </div>
            </main>
            <Footer />

        </>
    )
}
