import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import BreadCrumb from '../Components/BreadCrumb';
import SectionHeader from '../Components/SectionHeader';
import CourseBox from '../Components/CourseBox';
import Pagination from '../Components/Pagination';
import Footer from '../Components/Footer';
import { useParams, useLocation } from 'react-router-dom';

export default function Courses() {
    const [allCourses, setAllCourses] = useState([]);
    const [shownCourses, setShownCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/v1/courses')
            .then(res => res.json())
            .then(data => setAllCourses(data));
    }, []);

    return (
        <>
            <Header />
            <BreadCrumb links={[
                { id: 1, title: "خانه", to: "/" },
                { id: 2, title: "تمامی دوره ها", to: "/courses/1" },
            ]} />
            <main className="courses">
                <div className="container">
                    <SectionHeader title="تمامی دوره ها" />
                    <div className='course-wrapper mt-20 grid grid-cols-4 gap-10'>
                        {shownCourses.length > 0 ? (
                            shownCourses.map(course => (
                                <CourseBox
                                    key={course._id}
                                    name={course.name}
                                    shortName={course.shortName}
                                    creator={course.creator}
                                    registers={course.registers}
                                    price={course.price}
                                    courseAverageScore={course.courseAverageScore}
                                />
                            ))
                        ) : (
                            <div className='col-span-full p-5 text-slate-500 bg-yellow-300'>
                                دوره ای یافت نشد:(
                            </div>
                        )}
                    </div>
                    {allCourses.length > 0 && (
                        <Pagination
                            items={allCourses}
                            itemsCount={4} // Example: 4 items per page
                            pathname={"/courses"}
                            setShownCourses={setShownCourses}
                        />
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}
