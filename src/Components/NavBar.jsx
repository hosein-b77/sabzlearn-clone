import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/authContext";
export default function NavBar() {
    const authContext = useContext(AuthContext);
    const [allMenus, setAllMenus] = useState(null)
    useEffect(() => {
        fetch('http://localhost:4000/v1/menus')
            .then(res => res.json())
            .then(data => setAllMenus(data))
    }, [])
    return (
        <div className="main-header">
            <div className="container-fluid">
                <div className="main-header__content">
                    <div className="main-header__right">
                        <Link to="/">
                            <img src="/images/logo/Logo.png" className="main-header__logo" alt="لوگوی سبزلرن" />
                        </Link>
                        <ul className="main-header__menu">
                            <li className="main-header__item">
                                <Link to="/" className="main-header__link">صفحه اصلی</Link>
                            </li>


                            {
                                allMenus ? (
                                    allMenus.map(mainMenu => {
                                        return (
                                            <li key={mainMenu._id} className="main-header__item">
                                                <Link to={mainMenu.href} className="main-header__link">
                                                    {mainMenu.title}
                                                    {mainMenu.submenus.length !== 0 && (
                                                        <i className="fas fa-angle-down main-header__link-icon"></i>
                                                    )}
                                                </Link>
                                                {mainMenu.submenus.length !== 0 && (
                                                    <ul className="main-header__dropdown">
                                                        {mainMenu.submenus.map(sub => (
                                                            <li key={sub._id} className="main-header__dropdown-item">
                                                                <Link to={sub.href} className="main-header__dropdown-link">{sub.title}</Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        )
                                    })
                                ) : ""
                            }

                        </ul>
                    </div>

                    <div className="main-header__left">
                        <a href="#" className="main-header__search-btn">
                            <i className="fas fa-search main-header__search-icon"></i>
                        </a>
                        <a href="#" className="main-header__cart-btn">
                            <i className="fas fa-shopping-cart main-header__cart-icon"></i>
                        </a>
                        {authContext.isLoggedIn ? (
                            <Link to="#" className="main-header__profile">
                                <span className="main-header__profile-text">
                                    {authContext.userInfos.name}
                                </span>
                            </Link>
                        ) : (
                            <Link to="/login" className="main-header__profile">
                                <span className="main-header__profile-text">
                                    ورود / ثبت نام
                                </span>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
