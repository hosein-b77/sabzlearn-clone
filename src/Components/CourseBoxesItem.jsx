import React from 'react'

export default function CourseBoxesItem({title,txt,icon}) {
  return (
      <div className="col-4">
          <div className="course-boxes__box">
              <div className="course-boxes__box-right">
                  <i className={icon}></i>
              </div>
              <div className="course-boxes__box-left">
                  <span className="course-boxes__box-left-title">
                      {title}
                  </span>
                  <span className="course-boxes__box-left--subtitle">
                      {txt}
                  </span>
              </div>
          </div>
      </div>
  )
}
