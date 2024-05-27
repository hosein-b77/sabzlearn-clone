import React from 'react'

export default function CourseInfo({ coursesDetail }) {
    console.log('courseDetails::', coursesDetail)
  return (
      <section className="course-info mt-10">
          <div className="container">
              <div className="grid grid-cols-2">
                  <div >
                      <a href="#" className="course-info__link">
                          {coursesDetail.categoryID.title}
                      </a>
                      <h1 className="course-info__title">
                          {coursesDetail.name}
                      </h1>
                      <p className="course-info__text">
                          {coursesDetail.description}
                      </p>
                      <div className="course-info__social-media">
                          <a href="#" className="course-info__social-media-item">
                              <i className="fab fa-telegram-plane course-info__icon"></i>
                          </a>
                          <a href="#" className="course-info__social-media-item">
                              <i className="fab fa-twitter course-info__icon"></i>
                          </a>
                          <a href="#" className="course-info__social-media-item">
                              <i className="fab fa-facebook-f course-info__icon"></i>
                          </a>
                      </div>
                  </div>

                  <div >
                      <video src="" poster={coursesDetail.cover} className="course-info__video" controls></video>
                  </div>
              </div>
          </div>
      </section>
  )
}
