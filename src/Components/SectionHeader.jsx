import React from 'react'
import { Link } from 'react-router-dom'
export default function SectionHeader({ title, desc, btnTitle, btnLink }) {
    return (
        <div className="courses-header">
            <div className="courses-header__right">
                <span className="courses-header__title title">{title}</span>
                <span className="courses-header__text">{desc}</span>
            </div>
            {btnTitle && <div className="courses-header__left">
                <Link to={btnLink} className="courses-header__link">
                    {btnTitle}
                    <i className="fas fa-arrow-left courses-header__icon"></i>
                </Link>
            </div>}
        </div>
    )
}
