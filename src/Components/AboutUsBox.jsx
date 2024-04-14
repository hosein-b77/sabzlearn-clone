import React from 'react'

export default function AboutUsBox({title,txt,icon}) {
  return (
      <div >
          <div className="about-us__box">
              <div className="about-us__box-right">
                  <i className={icon}></i>
              </div>
              <div className="about-us__box-left">
                  <span className="about-us__box-title">{title}</span>
                  <span className="about-us__box-text">{txt}</span>
              </div>
          </div>
      </div>
  )
}
