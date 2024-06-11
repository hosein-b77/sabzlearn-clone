import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ImageLoader from './ImageLoader'
import { renderStars } from '../utils'
export default function CourseBox({ discount, cover, name, shortName, creator, registers, price, courseAverageScore }) {
    const [showLoader, setShowLoader] = useState(true)
    return (

        <div className="course-box relative group">
            {
                (discount && price !== 0) && (
                    <div className='absolute transition-transform -rotate-[30deg] group-hover:rotate-0 -top-3 left-0 bg-green-500 text-white size-14 rounded-lg flex-center'>
                        %{
                            discount
                        }
                    </div>
                )
            }
            {
                showLoader && <ImageLoader />
            }

            <Link to={`/course-info/${shortName}`}>
                <img onLoad={() => setShowLoader(false)} src={`http://localhost:4000/courses/covers/${cover}`} alt="Course img" className="course-box__img" />

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
                    <div className='space-x-3'>
                        <span className={`course-box__price ${(discount && price !== 0) && 'line-through !text-red-500 !text-2xl'}`}>{price === 0 ? 'رایگان' : price.toLocaleString()}</span>
                        {
                            (discount && price !== 0) && <span className={`course-box__price !text-green-sabzlearn`}>{ (price - price *discount /100).toLocaleString()}</span>
                            
                        }
                    </div>

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
