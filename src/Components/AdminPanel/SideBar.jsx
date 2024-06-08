import React, { useContext } from "react";
import { NavLink,Link, useParams, useNavigate } from 'react-router-dom'
import AuthContext from "../../context/authContext";
import swal from "sweetalert";
export default function Sidebar() {
    const route = useParams()
    const activeStyle = "bg-slate-700 block pr-4 py-3 border-l-[6px] border-[#1e83f0] !text-white rounded-r-md"
    const navigate = useNavigate()
    const authContext = useContext(AuthContext)
    const exit = () => {
        swal({
            title: 'با موفقیت خارج شدید',
            icon: 'success',
            buttons: 'ok',
        }).then(() => {
            authContext.logout()
            navigate('/')
        }
        )
    }
    return (
        <div className="fixed top-0 bottom-0 right-0 w-72 bg-gray-800 pt-8 overflow-x-auto">
            {/* logo */}
            <div className="border-b border-slate-500 pb-5">
                <Link to='/'>
                    <img src="/images/logo/Logo.png" alt="sabzlearn-logo" width={80} />
                </Link>
            </div>
            <ul className="child:child:text-slate-400 space-y-7 mt-10 pr-3  child:py-2  ">
                <li><NavLink to={"/p-admin"} className={`${route['*'] === "" ? activeStyle : ""}`}>صفحه اصلی</NavLink></li>
                <li><NavLink to={"courses"} className={({ isActive }) => isActive && activeStyle}>دوره ها</NavLink></li>
                <li><NavLink to={"sessions"} className={({ isActive }) => isActive && activeStyle}>جلسه ها</NavLink></li>
                <li><NavLink to={"comments"} className={({ isActive }) => isActive && activeStyle}>کامنت ها</NavLink></li>
                <li><NavLink to={"menus"} className={({ isActive }) => isActive && activeStyle}>منو ها</NavLink></li>
                <li><NavLink to={"articles"} className={({ isActive }) => isActive && activeStyle}>مقاله ها</NavLink></li>
                <li><NavLink to={"users"} className={({ isActive }) => isActive && activeStyle}>کاربران</NavLink></li>
                <li><NavLink to={"category"}>دسته بندی ها</NavLink></li>
                <li><NavLink to={"offs"}>کد های تخفیف</NavLink></li>
                <li><NavLink to={"contacts"}>پیغام ها</NavLink></li>
                <li className="text-red-700 cursor-pointer" onClick={exit}>خروج</li>

            </ul>
        </div>
    );
}
