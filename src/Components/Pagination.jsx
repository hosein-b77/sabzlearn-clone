import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function Pagination({ items, itemsCount, pathname, setShownCourses }) {
    const { page = 1 } = useParams(); // Default to page 1 if no page param
    const [pageCount, setPageCount] = useState(1);

    useEffect(() => {
        const endIndx = itemsCount * page;
        const startIndx = endIndx - itemsCount;
        const paginatedItems = items.slice(startIndx, endIndx);
        setShownCourses(paginatedItems);

        const totalPages = Math.ceil(items.length / itemsCount);
        setPageCount(totalPages);
    }, [page, items, itemsCount, setShownCourses]);

    const renderPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(
                <li key={i} className="courses__pagination-item">
                    <Link
                        to={`${pathname}/${i}`}
                        className={`courses__pagination-link ${parseInt(page) === i ? 'courses__pagination-link--active' : ''}`}
                    >
                        {i}
                    </Link>
                </li>
            );
        }
        return pages;
    };

    return (
        <div className="courses-pagination">
            <ul className="courses__pagination-list">
                {page > 1 && (
                    <li className="courses__pagination-item">
                        <Link to={`${pathname}/${parseInt(page) - 1}`} className="courses__pagination-link">
                            <i className="fas fa-long-arrow-alt-right courses__pagination-icon"></i>
                        </Link>
                    </li>
                )}
                {renderPageNumbers()}
                {page < pageCount && (
                    <li className="courses__pagination-item">
                        <Link to={`${pathname}/${parseInt(page) + 1}`} className="courses__pagination-link">
                            <i className="fas fa-long-arrow-alt-left courses__pagination-icon"></i>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    );
}
