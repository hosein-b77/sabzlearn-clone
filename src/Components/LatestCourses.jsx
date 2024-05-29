import React, { useEffect, useState } from 'react'
import SectionHeader from './SectionHeader'
import CourseBox from './CourseBox'
export default function LatestCourses() {
    const [latestCourse,setLatestCourse]=useState([])
    useEffect(()=>{
        fetch('http://localhost:4000/v1/courses')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setLatestCourse(data.splice(0,8))
    })
        .catch(err=>console.log(err))
    },[])
    return (
        <div className="courses">
            <div className="container">
                <SectionHeader title="جدیدترین دوره ها" desc="سکوی پرتاپ شما به سمت موفقیت" btnTitle="تمامی دوره ها" btnLink="/courses" />
                <div className='course-wrapper mt-20 grid grid-cols-4 gap-10'>
                    {
                        latestCourse.length>0 && (
                            latestCourse.map(lCourse=>{
                                return(
                                
                                    <CourseBox key={lCourse._id} name={lCourse.name} shortName={lCourse.shortName} creator={lCourse.creator} registers={lCourse.registers} price={lCourse.price} courseAverageScore={lCourse.courseAverageScore}/>
                                )
                            })
                        )
                    }
                </div>
            </div>
        </div>


    )
}
