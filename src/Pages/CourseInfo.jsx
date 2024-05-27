import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import BreadCrumb from '../Components/BreadCrumb'
import CourseInfoMain from '../Components/CourseInfoMain'
import MainInfoSection from '../Components/MainInfoSection'
import Footer from '../Components/Footer'
import { useParams } from 'react-router-dom'
export default function CourseInfo() {
    const { courseName } = useParams()
    const [comments, setComments] = useState([])
    const [sessions, setSessions] = useState([])
    const [courseDetails, setCourseDetails] = useState({})
    useEffect(() => {
        fetch(`http://localhost:4000/v1/courses/${courseName}`, {
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
            }
        })
            .then(res => res.json())
            .then(courseInfos => {
                setComments(courseInfos.comments)
                setSessions(courseInfos.sessions)
                setCourseDetails(courseInfos)
            }
            )
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <Header />
            <BreadCrumb links={[
                { id: 1, title: "خانه", to: "/" },
                { id: 2, title: "آموزش برنامه نویسی فرانت اند", to: "/category-info/frontend" },
                { id: 3, title: "دوره متخصص جاوا اسکریپت", to: "/course-info/js-expert" }
            ]}
            />
            {Object.keys(courseDetails).length > 0 && (
                <CourseInfoMain coursesDetail={courseDetails} />
            )}
            <MainInfoSection />
            <Footer />
        </>
    )
}
