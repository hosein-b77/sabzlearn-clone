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

        getInfoFromServer()
    }, [])
    function getInfoFromServer() {
        const localStorageData = JSON.parse(localStorage.getItem('user'))
        fetch(`http://localhost:4000/v1/courses/${courseName}`, {
            headers: {
                'Authorization': `Bearer ${localStorageData === null ? null : localStorageData.token}`
                //if user not login,site will not stop working
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
    }
    return (
        <>
            <Header />
            {
                console.log('courseDetails:::', courseDetails)
            }
            {Object.keys(courseDetails).length > 0 && (
                <BreadCrumb links={[
                    { id: 1, title: "خانه", to: "/" },
                    { id: 2, title: `${courseDetails.categoryID.title}`, to: "/category-info/frontend" },
                    { id: 3, title: `${courseDetails.name}`, to: "/course-info/js-expert" }
                ]}
                />
            )}

            {Object.keys(courseDetails).length > 0 && (
                <CourseInfoMain coursesDetail={courseDetails} />
            )}

            {Object.keys(courseDetails).length > 0 && (
                <MainInfoSection getInfoFromServer={getInfoFromServer} price={courseDetails.price} courseID={courseDetails._id} comments={comments} sessions={sessions} isUserRegisteredToThisCourse={courseDetails.isUserRegisteredToThisCourse} courseStudentCount={courseDetails.courseStudentsCount} support={courseDetails.support} updatedAt={courseDetails.updatedAt} isComplete={courseDetails.isComplete} />
            )}


            <Footer />
        </>
    )
}
