import React from 'react'
import SectionHeader from './SectionHeader'
import CourseBox from './CourseBox'
export default function LatestCourses() {
    return (
        <div class="courses">
            <div class="container">
                <SectionHeader title="جدیدترین دوره ها" desc="سکوی پرتاپ شما به سمت موفقیت" btnTitle="تمامی دوره ها" btnLink="/courses" />
                <div className='course-wrapper mt-20 grid grid-cols-4 gap-10'>
                    <CourseBox/>
                    <CourseBox/>
                    <CourseBox/>
                    <CourseBox/>
                    <CourseBox/>
                    <CourseBox/>
                </div>
            </div>
        </div>


    )
}
