import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Components/Header'
import CourseBox from '../Components/CourseBox'
import Pagination from '../Components/Pagination'
import Footer from '../Components/Footer'
export default function Category() {
  const {categoryName} = useParams()
  const [catCourses, setCatCourses] = useState([])
  useEffect(()=>{
    fetch(`http://localhost:4000/v1/courses/category/${categoryName}`)
    .then(res=>res.json())
      .then(data => setCatCourses(data))
  }, [categoryName])
  return (
    <>
      <Header />
      <section class="courses">
        <div class="container">
          {
            catCourses.length > 0 && (<div class="courses-top-bar">
              <div class="courses-top-bar__right">
                <div class="courses-top-bar__row-btn courses-top-bar__icon--active">
                  <i class="fas fa-border-all courses-top-bar__icon"></i>
                </div>
                <div class="courses-top-bar__column-btn">
                  <i class="fas fa-align-left courses-top-bar__icon"></i>
                </div>

                <div class="courses-top-bar__selection">
                  <span class="courses-top-bar__selection-title">
                    مرتب سازی پیش فرض
                    <i class="fas fa-angle-down courses-top-bar__selection-icon"></i>
                  </span>
                  <ul class="courses-top-bar__selection-list">
                    <li class="courses-top-bar__selection-item courses-top-bar__selection-item--active">مرتب سازی پیش فرض</li>
                    <li class="courses-top-bar__selection-item">مرتب سازی بر اساس محبوبیت</li>
                    <li class="courses-top-bar__selection-item">مرتب سازی بر اساس امتیاز</li>
                    <li class="courses-top-bar__selection-item">مرتب سازی بر اساس آخرین</li>
                    <li class="courses-top-bar__selection-item">مرتب سازی بر اساس ارزان ترین</li>
                    <li class="courses-top-bar__selection-item">مرتب سازی بر اساس گران ترین</li>
                  </ul>
                </div>
              </div>

              <div class="courses-top-bar__left">
                <form action="#" class="courses-top-bar__form">
                  <input type="text" class="courses-top-bar__input" placeholder="جستجوی دوره ..." />
                  <i class="fas fa-search courses-top-bar__search-icon"></i>
                </form>
              </div>

            </div>)
          }

          <div class="courses-content">
            <div class="container">
              <div class="grid grid-cols-4 gap-10">
                {
                  catCourses.length > 0 ? (
                    catCourses.map(catCourse => {
                      return (

                        <CourseBox key={catCourse._id} name={catCourse.name} shortName={catCourse.shortName} creator={catCourse.creator} registers={catCourse.registers} price={catCourse.price} courseAverageScore={catCourse.courseAverageScore} />
                      )
                    })
                  ):(
                    <div className='col-span-full p-5 text-slate-500 bg-yellow-300'>
                      متاسفانه دوره ای برای این کتگوری ثبت نشده است :(
                    </div>
                  )
                }
              </div>
            </div>
          </div>
          {catCourses.length > 0 && <Pagination/>}

        </div>
      </section>
      <Footer/>
    </>
  )
}
