import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ImageLoader from './ImageLoader'
import { renderStars } from '../utils'
export default function CourseBox({ name, shortName, creator, registers, price, courseAverageScore }) {
    const [showLoader, setShowLoader] = useState(true)
    return (

        <div className="course-box relative">
            {
                showLoader && <ImageLoader />
            }

            <Link to={`/course-info/${shortName}`}>
                <img onLoad={() => setShowLoader(false)} src="https://picsum.photos/260/150" alt="Course img" className="course-box__img" />

            </Link>



            <div className="course-box__main">
                <Link to={`/course-info/${shortName}`} className="course-box__title">{name}</Link>

                <div className="course-box__rating-teacher">
                    <div className="course-box__teacher">
                        <i className="fas fa-chalkboard-teacher course-box__teacher-icon"></i>
                        <a href="#" className="course-box__teacher-link">{creator}</a>
                    </div>
                    <div className="course-box__rating">
                        {
                            renderStars(courseAverageScore)
                        }
                        {/* <img src="/images/svgs/star.svg" alt="rating" className="course-box__star" />
                        <img src="/images/svgs/star_fill.svg" alt="rating" className="course-box__star" />
                        <img src="/images/svgs/star_fill.svg" alt="rating" className="course-box__star" />
                        <img src="/images/svgs/star_fill.svg" alt="rating" className="course-box__star" />
                        <img src="/images/svgs/star_fill.svg" alt="rating" className="course-box__star" /> */}
                    </div>
                </div>

                <div className="course-box__status">
                    <div className="course-box__users">
                        <i className="fas fa-users course-box__users-icon"></i>
                        <span className="course-box__users-text">{registers}</span>
                    </div>
                    <span className="course-box__price">{price === 0 ? 'رایگان' : price.toLocaleString()}</span>
                </div>
            </div>

            <div className="course-box__footer">
                <Link to={`/course-info/${shortName}`} className="course-box__footer-link">
                    مشاهده اطلاعات
                    <i className="fas fa-arrow-left course-box__footer-icon"></i>
                </Link>
            </div>

        </div>

    )
}
